import { env } from "../config/env.js";

/**
 * When `ALLOWED_AUTH_EMAIL_DOMAINS` is set (comma-separated), only those
 * domains may sign in (TENA Care Workspace / org accounts).
 * If unset or empty, any verified email from the IdP is allowed (local dev).
 */
export function isAllowedSignInEmail(email) {
  const e = String(email ?? "").trim().toLowerCase();
  const at = e.lastIndexOf("@");
  if (at < 1 || at === e.length - 1) return false;
  if (env.allowedAuthEmailDomains.length === 0) return true;
  const domain = e.slice(at + 1);
  return env.allowedAuthEmailDomains.includes(domain);
}

export const DISALLOWED_EMAIL_ERROR =
  "Sign-in is limited to approved organization email addresses.";
