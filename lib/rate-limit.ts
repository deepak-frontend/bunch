import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const configured = Boolean(
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
);

const limiters = new Map<string, Ratelimit>();

export function isRateLimitConfigured() {
  return configured;
}

// Best-effort fallback when Upstash isn't configured: counts requests per
// address in this server instance's memory over a sliding hour.
const memoryHits = new Map<string, number[]>();

function checkMemoryLimit(key: string, limit: number) {
  const now = Date.now();
  const recent = (memoryHits.get(key) ?? []).filter((time) => now - time < 3_600_000);
  if (recent.length >= limit) {
    memoryHits.set(key, recent);
    return false;
  }
  recent.push(now);
  memoryHits.set(key, recent);
  if (memoryHits.size > 5_000) memoryHits.delete(memoryHits.keys().next().value!);
  return true;
}

export async function checkRateLimit(
  kind: string,
  address: string,
  limit: number,
) {
  if (!configured) return checkMemoryLimit(`${kind}:${address}`, limit);
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
