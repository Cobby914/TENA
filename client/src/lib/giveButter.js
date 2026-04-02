/**
 * Give Butter integration config.
 *
 * Replace the two placeholder values below once you have them from
 * your Give Butter dashboard (givebutter.com/dashboard):
 *
 *   GIVEBUTTER_CAMPAIGN — the slug at the end of your campaign URL
 *     e.g. for https://givebutter.com/tena-health  →  "tena-health"
 *
 *   The publishable key is set in index.html (search for YOUR_PUBLISHABLE_KEY).
 */
export const GIVEBUTTER_CAMPAIGN = "YOUR_CAMPAIGN_SLUG";

/**
 * Opens the Give Butter donation popup for the configured campaign.
 * Safe to call before the script fully loads — Give Butter queues the call.
 */
export function openDonateWidget() {
  if (typeof window !== "undefined" && window.Givebutter) {
    window.Givebutter("fundraiser:open", GIVEBUTTER_CAMPAIGN);
  }
}
