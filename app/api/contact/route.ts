import { NextResponse } from "next/server";
import { contactRequestEmail } from "@/lib/demo-email";
import { isEmailConfigured, sendSubmissionEmail } from "@/lib/email";
import { contactFormSchema, validationMessage } from "@/lib/forms";
import { isLeadStoreConfigured, saveLead } from "@/lib/leads";
import { checkRateLimit, requestAddress } from "@/lib/rate-limit";

export async function POST(request: Request) {
  let input: unknown;
  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(input);
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

  if (!isEmailConfigured() && !isLeadStoreConfigured()) {
    return NextResponse.json(
      { message: "The contact form is not configured yet." },
      { status: 503 },
    );
  }

  try {
    const allowed = await checkRateLimit("contact", requestAddress(request), 5);
    if (!allowed)
      return NextResponse.json(
        { message: "Please try again later." },
        { status: 429 },
      );

    const context = {
      page: request.headers.get("referer") ?? "Bunch website",
      submittedAt: new Date(),
    };
    const deliveries = await Promise.allSettled([
      isEmailConfigured()
        ? sendSubmissionEmail(contactRequestEmail(parsed.data, context))
        : Promise.resolve(false),
      saveLead({ formType: "contact", ...parsed.data, ...context }),
    ]);
    const delivered = deliveries.some(
      (result) => result.status === "fulfilled" && result.value,
    );

    if (!delivered)
      return NextResponse.json(
        { message: "We could not send your message right now." },
        { status: 502 },
      );
    return NextResponse.json(
      { success: true, message: "Thanks! Your message is on its way. We'll be in touch within one business day." },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { message: "We could not send your message right now." },
      { status: 502 },
    );
  }
}
