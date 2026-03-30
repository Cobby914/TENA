const programImageByFilename = {
  "intheworksimg.png": "/programs/InTheWorksIMG.png",
  "joinusbackgroundimg.png": "/programs/JoinUsBackgroundIMG.png",
  "programsheaderimg.jpg": "/programs/ProgramsHeaderIMG.jpg",
  "carenavigationbackgroundimg.jpg": "/programs/CareNavigation/CareNavigationBackgroundIMG.jpg",
  "carenavigationproblemimg.jpg": "/programs/CareNavigation/CareNavigationProblemIMG.jpg",
  "carenavigationsolutionimg.jpg": "/programs/CareNavigation/CareNavigationSolutionIMG.jpg",
  "communityhealthfairbackgroundimg.jpg": "/programs/CommunityHealthFair/CommunityHealthFairBackgroundIMG.jpg",
  "communityhealthfairproblemimg.jpg": "/programs/CommunityHealthFair/CommunityHealthFairProblemIMG.jpg",
  "communityhealthfairsolutionimg.jpg": "/programs/CommunityHealthFair/CommunityHealthFairSolutionIMG.jpg",
  "fitclubbackgroundimg.jpg": "/programs/FitClub/FitClubBackgroundIMG.jpg",
  "fitclubproblemimg.jpg": "/programs/FitClub/FitClubProblemIMG.jpg",
  "fitclubsolutionimg.jpg": "/programs/FitClub/FitClubSolutionIMG.jpg",
  "prehealthworkforcebackgroundimg.jpg": "/programs/PreHealthWorkForce/PreHealthWorkForceBackgroundIMG.jpg",
  "prehealthworkforceproblemimg.jpg": "/programs/PreHealthWorkForce/PreHealthWorkForceProblemIMG.jpg",
  "prehealthworkforcesolutionimg.jpg": "/programs/PreHealthWorkForce/PreHealthWorkForceSolutionIMG.jpg",
};

function normalizeImageKey(value) {
  return String(value ?? "")
    .trim()
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/^client\/public\/programs\//i, "")
    .replace(/^public\/programs\//i, "")
    .replace(/^client\/src\/assets\/programs\//i, "")
    .replace(/^src\/assets\/programs\//i, "")
    .replace(/^assets\/programs\//i, "")
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

  if (cleanKey.startsWith("/")) return cleanKey;
  if (/^(programs|images|team)\//i.test(cleanKey)) return `/${cleanKey}`;

  return fallback;
}
