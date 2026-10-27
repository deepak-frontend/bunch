import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const configured = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

const limiters = new Map<string, Ratelimit>();

export function isRateLimitConfigured() {
  return configured;
}

export async function checkRateLimit(
  kind: string,
  address: string,
  limit: number,
) {
  if (!configured) return false;
  let limiter = limiters.get(kind);

  if (!limiter) {
    limiter = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(limit, "1 h"),
      prefix: `bunch:${kind}`,
      analytics: false,
    });
    limiters.set(kind, limiter);
  }

  const result = await limiter.limit(address);
  return result.success;
}

export function requestAddress(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
  );
}
