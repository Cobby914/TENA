const programImageByFilename = {
  "intheworksimg.png": "/program-assets/InTheWorksIMG.png",
  "joinusbackgroundimg.png": "/program-assets/JoinUsBackgroundIMG.png",
  "programsheaderimg.jpg": "/program-assets/ProgramsHeaderIMG.jpg",
  "carenavigationbackgroundimg.jpg":
    "/program-assets/CareNavigation/CareNavigationBackgroundIMG.jpg",
  "carenavigationproblemimg.jpg":
    "/program-assets/CareNavigation/CareNavigationProblemIMG.jpg",
  "carenavigationsolutionimg.jpg":
    "/program-assets/CareNavigation/CareNavigationSolutionIMG.jpg",
  "communityhealthfairbackgroundimg.jpg":
    "/program-assets/CommunityHealthFair/CommunityHealthFairBackgroundIMG.jpg",
  "communityhealthfairproblemimg.jpg":
    "/program-assets/CommunityHealthFair/CommunityHealthFairProblemIMG.jpg",
  "communityhealthfairsolutionimg.jpg":
    "/program-assets/CommunityHealthFair/CommunityHealthFairSolutionIMG.jpg",
  "fitclubbackgroundimg.jpg": "/program-assets/FitClub/FitClubBackgroundIMG.jpg",
  "fitclubproblemimg.jpg": "/program-assets/FitClub/FitClubProblemIMG.jpg",
  "fitclubsolutionimg.jpg": "/program-assets/FitClub/FitClubSolutionIMG.jpg",
  "prehealthworkforcebackgroundimg.jpg":
    "/program-assets/PreHealthWorkForce/PreHealthWorkForceBackgroundIMG.jpg",
  "prehealthworkforceproblemimg.jpg":
    "/program-assets/PreHealthWorkForce/PreHealthWorkForceProblemIMG.jpg",
  "prehealthworkforcesolutionimg.jpg":
    "/program-assets/PreHealthWorkForce/PreHealthWorkForceSolutionIMG.jpg",
};

function normalizeImageKey(value) {
  return String(value ?? "")
    .trim()
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/^client\/public\/program-assets\//i, "")
    .replace(/^public\/program-assets\//i, "")
    .replace(/^client\/public\/programs\//i, "")
    .replace(/^public\/programs\//i, "")
    .replace(/^client\/src\/assets\/programs\//i, "")
    .replace(/^src\/assets\/programs\//i, "")
    .replace(/^assets\/programs\//i, "")
    .replace(/^program-assets\//i, "")
    .replace(/^programs\//i, "")
    .split("/")
    .pop();
}

export function resolveProgramImage(imageKey, fallback = "") {
  const raw = String(imageKey ?? "").trim();
  if (!raw) return fallback;
  if (/^https?:\/\//i.test(raw)) return raw;

  const cleanKey = raw.split("?")[0].split("#")[0];
  const normalized = normalizeImageKey(cleanKey).toLowerCase();

  if (normalized && programImageByFilename[normalized]) {
    return programImageByFilename[normalized];
  }

  if (cleanKey.startsWith("/programs/") && /\.[a-z0-9]{2,8}$/i.test(cleanKey)) {
    return cleanKey.replace(/^\/programs\//, "/program-assets/");
  }
  if (cleanKey.startsWith("/")) return cleanKey;
  if (/^(program-assets|programs|images|team)\//i.test(cleanKey)) {
    const prefixed = cleanKey.replace(/^programs\//i, "program-assets/");
    return `/${prefixed}`;
  }

  return fallback;
}
