/**
 * Givebutter campaign URL (slug from https://givebutter.com/tenahealth-thegiver).
 *
 * Opens in a new tab on Donate. The click handler itself is synchronous; any long
 * wait after that is mostly Givebutter’s page (network + their app). We preconnect in
 * index.html and prefetch on hover/focus to shave off cold DNS/TLS and sometimes the
 * HTML fetch.
 */
export const GIVEBUTTER_CAMPAIGN = "tenahealth-thegiver";

export const GIVEBUTTER_CAMPAIGN_URL =
  "https://givebutter.com/tenahealth-thegiver";

let prefetchRequested = false;

/** Warm the campaign document (runs once). Use on Donate hover/focus before click. */
export function prefetchGivebutterCampaign() {
  if (typeof document === "undefined" || prefetchRequested) return;
  prefetchRequested = true;
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "document";
  link.href = GIVEBUTTER_CAMPAIGN_URL;
  document.head.appendChild(link);
}

export function openDonateWidget() {
  if (typeof window === "undefined") return;

  // noopener/noreferrer in the features string make window.open return null in modern
  // browsers even when a tab actually opened, which wrongly triggered location.assign.
  const opened = window.open(GIVEBUTTER_CAMPAIGN_URL, "_blank");
  if (opened) {
    opened.opener = null;
    return;
  }
  window.location.assign(GIVEBUTTER_CAMPAIGN_URL);
}

/** Spread onto Donate controls so prefetch runs when users aim at the button. */
export const donateButtonInteractionProps = {
  onClick: openDonateWidget,
  onMouseEnter: prefetchGivebutterCampaign,
  onFocus: prefetchGivebutterCampaign,
};
