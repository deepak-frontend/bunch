import { NextResponse } from "next/server";
import { contactRequestEmail } from "@/lib/demo-email";
import { isEmailConfigured, sendSubmissionEmail } from "@/lib/email";
import { contactFormSchema, validationMessage } from "@/lib/forms";
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

  if (!isEmailConfigured()) {
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

    const sent = await sendSubmissionEmail(
      contactRequestEmail(parsed.data, {
        page: request.headers.get("referer") ?? "Bunch website",
        submittedAt: new Date(),
      }),
    );
    if (!sent)
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
