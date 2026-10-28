import { NextResponse } from "next/server";
import { isEmailConfigured, sendSubmissionEmail } from "@/lib/email";
import { demoFormSchema, validationMessage } from "@/lib/forms";
import { forwardSubmission } from "@/lib/integration";
import { checkRateLimit, requestAddress } from "@/lib/rate-limit";

export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const parsed = demoFormSchema.safeParse(input);
  if (!parsed.success) {
    return NextResponse.json(
      { message: validationMessage(parsed.error) },
      { status: 400 },
    );
  }
  // Honeypot filled in: answer like a success so bots learn nothing.
  if (parsed.data.website) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const endpoint = process.env.DEMO_API_ENDPOINT;
  if (!endpoint && !isEmailConfigured()) {
    return NextResponse.json(
      { message: "Demo requests are not configured yet." },
      { status: 503 },
    );
  }

  try {
    const allowed = await checkRateLimit("demo", requestAddress(request), 5);
    if (!allowed)
      return NextResponse.json(
        { message: "Please try again later." },
        { status: 429 },
      );

    const { name, email, phone } = parsed.data;
    const deliveries = await Promise.allSettled([
      isEmailConfigured()
        ? sendSubmissionEmail({
            subject: `New discovery call request from ${name}`,
            replyTo: email,
            fields: [
              ["Name", name],
              ["Work email", email],
              ["Phone / WhatsApp", phone],
              ["Submitted from", request.headers.get("referer") ?? "Bunch website"],
              ["Submitted at", new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }) + " IST"],
            ],
          })
        : Promise.resolve(false),
      endpoint ? forwardSubmission(endpoint, parsed.data) : Promise.resolve(false),
    ]);
    const delivered = deliveries.some(
      (result) => result.status === "fulfilled" && result.value,
    );

    if (!delivered)
      return NextResponse.json(
        { message: "We could not send your request right now." },
        { status: 502 },
      );
    return NextResponse.json(
      { success: true, message: "Thanks! We'll be in touch within one business day." },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "We could not send your request right now." },
      { status: 502 },
    );
  }
}
