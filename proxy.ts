import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  // React's dev-mode debugging (stack reconstruction) calls eval() — harmless, and
  // "React will never use eval() in production mode." Scope the allowance to dev only.
  const scriptSrc =
    process.env.NODE_ENV === "production"
      ? `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`
      : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`;

  const csp = [
    `default-src 'self'`,
    scriptSrc,
    // CSP nonces only ever cover <style> ELEMENTS, never inline style="" ATTRIBUTES —
    // there's no such thing as a nonce'd attribute. Next/Image (fill sizing) and
    // Motion (animated transforms/opacity) both rely on inline style attributes, so
    // style-src-attr needs 'unsafe-inline' regardless; style-src-elem keeps the nonce
    // so Base UI's CSPProvider-managed <style> tags stay strict.
    `style-src 'self' 'nonce-${nonce}'`,
    `style-src-elem 'self' 'nonce-${nonce}'`,
    `style-src-attr 'unsafe-inline'`,
    `img-src 'self' data:`,
    `font-src 'self'`,
    `connect-src 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self'`,
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("x-nonce", nonce);

  return response;
}

export const config = {
  matcher: [
    // Skip static assets and image optimizer output — they carry no inline
    // scripts/styles, so nonce'd CSP + forced dynamic rendering buys nothing there.
    "/((?!_next/static|_next/image|favicon.ico|images/).*)",
  ],
};
