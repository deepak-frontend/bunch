import { NextResponse } from "next/server";
import { demoFormSchema, validationMessage } from "@/lib/forms";
import { forwardSubmission } from "@/lib/integration";
import {
  checkRateLimit,
  isRateLimitConfigured,
  requestAddress,
} from "@/lib/rate-limit";

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
  if (parsed.data.website) {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  const endpoint = process.env.DEMO_API_ENDPOINT;
  if (!endpoint || !isRateLimitConfigured()) {
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
    const forwarded = await forwardSubmission(endpoint, parsed.data);
    if (!forwarded)
      return NextResponse.json(
        { message: "We could not send your request right now." },
        { status: 502 },
      );
    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { message: "We could not send your request right now." },
      { status: 502 },
    );
  }
}
