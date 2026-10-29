// In-memory sliding-window rate limiter.
//
// Scoped to a single server instance/process — on serverless platforms with
// multiple concurrent instances (or cold starts) each instance keeps its own
// counters, so this is a best-effort guard rather than a hard global limit.
// Fine for a low-traffic contact form; if traffic grows, swap this for
// Upstash Redis (HTTP-based, works from the edge, free tier covers this use
// case) without changing the call site below.

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    hits.set(key, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(key, timestamps);

  // Opportunistic cleanup so the map doesn't grow unbounded over the process lifetime.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }

  return false;
}
