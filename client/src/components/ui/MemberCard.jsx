import { useEffect, useMemo, useState } from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { memberImagePlaceholder } from "../../lib/memberImageResolver";

const linkedinIconSrc = "/Footer/linkedin-svgrepo-com.svg";

/** Single footprint for board, team, and intern cards */
const STANDARD = {
  w: 276,
  h: 364,
  /** Fixed headshot area so every card matches regardless of caption length */
  photoHeightPx: 238,
  radius: 3.53,
  border: 0.88
};

function pickNameFontSize(variant, nameLen, fallback) {
  if (variant === "board") {
    if (nameLen > 38) return { base: "md", md: "18px" };
    if (nameLen > 24) return { base: "lg", md: "20px" };
    return fallback;
  }
  if (variant === "team") {
    if (nameLen > 34) return { base: "sm", md: "md" };
    if (nameLen > 20) return { base: "sm", md: "sm" };
    return fallback;
  }
  if (variant === "cohort") {
    if (nameLen > 16) return { base: "xs", md: "xs" };
    return fallback;
  }
  return fallback;
}

function pickRoleFontSize(variant, roleLen, fallback) {
  if (variant === "board") {
    if (roleLen > 50) return { base: "10px", md: "10px" };
    if (roleLen > 32) return { base: "10px", md: "xs" };
    return fallback;
  }
  if (variant === "team") {
    if (roleLen > 28) return { base: "10px", md: "10px" };
    return fallback;
  }
  if (variant === "cohort") {
    if (roleLen > 26) return { base: "10px", md: "10px" };
    return fallback;
  }
  return fallback;
}

const CARD_VARIANTS = {
  board: {
    fixedSize: STANDARD,
    nameSize: { base: "lg", md: "22px" },
    roleSize: { base: "xs", md: "sm" },
    padding: { base: 3, md: 4 },
    cardBg: "surface.section",
    nameUnderline: true,
    nameFontWeight: undefined,
    roleFontWeight: undefined,
    roleSubtle: false,
    borderRadius: `${STANDARD.radius}px`,
    borderWidth: `${STANDARD.border}px`
  },
  team: {
    fixedSize: STANDARD,
    nameSize: { base: "md", md: "lg" },
    roleSize: { base: "10px", md: "xs" },
    padding: { base: 3, md: 3 },
    cardBg: "surface.section",
    nameUnderline: true,
    nameFontWeight: undefined,
    roleFontWeight: undefined,
    roleSubtle: false,
    borderRadius: `${STANDARD.radius}px`,
    borderWidth: `${STANDARD.border}px`
  },
  cohort: {
    fixedSize: STANDARD,
    nameSize: { base: "sm", md: "sm" },
    roleSize: { base: "10px", md: "10px" },
    padding: "8px",
    cardBg: "surface.section",
    nameUnderline: false,
    nameFontWeight: "700",
    roleFontWeight: "400",
    roleSubtle: true,
    borderRadius: `${STANDARD.radius}px`,
    borderWidth: `${STANDARD.border}px`
  },
  compact: {
    width: { base: "160px", md: "190px" },
    imageHeight: { base: "120px", md: "140px" },
    nameSize: { base: "md", md: "lg" },
    roleSize: { base: "xs", md: "xs" },
    padding: { base: 3, md: 3 },
    cardBg: "surface.section",
    nameUnderline: true,
    nameFontWeight: undefined,
    roleFontWeight: undefined,
    roleSubtle: false,
    fillGrid: false,
    borderRadius: "4px",
    borderWidth: "1px"
  }
};

export default function MemberCard({
  name,
  position,
  imageSrc,
  linkedinUrl,
  variant = "board",
  /** When `variant` is `cohort`, mirrors `cohorts.profile_picture` from the API. */
  showProfilePhoto = true
}) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const photoSrc = photoFailed ? memberImagePlaceholder : imageSrc;

  useEffect(() => {
    setPhotoFailed(false);
  }, [imageSrc]);

  const cohortTextOnly = variant === "cohort" && !showProfilePhoto;

  const style = CARD_VARIANTS[variant] ?? CARD_VARIANTS.board;
  const nameFontSize = useMemo(() => {
    const len = String(name ?? "").length;
    if (cohortTextOnly) {
      if (len > 36) return { base: "sm", md: "md" };
      if (len > 22) return { base: "md", md: "md" };
      return { base: "md", md: "lg" };
    }
    return pickNameFontSize(variant, len, style.nameSize);
  }, [cohortTextOnly, variant, name, style.nameSize]);
  const roleFontSize = useMemo(() => {
    const len = String(position ?? "").length;
    if (cohortTextOnly) {
      if (len > 48) return { base: "10px", md: "xs" };
      return { base: "xs", md: "sm" };
    }
    return pickRoleFontSize(variant, len, style.roleSize);
  }, [cohortTextOnly, variant, position, style.roleSize]);
  const cardBg = style.cardBg ?? "surface.section";
  const nameUnderline = style.nameUnderline !== false;
  const fillGrid = style.fillGrid === true;
  const fixedSize = style.fixedSize;
  const roleColor = style.roleSubtle ? "neutral.subtle" : "neutral.text";
  const borderRadius = style.borderRadius ?? "4px";
  const borderWidth = style.borderWidth ?? "1px";

  const showHeadshot = fixedSize != null && !cohortTextOnly;

  const boxProps = cohortTextOnly
    ? {
        w: `min(${STANDARD.w}px, 100%)`,
        maxW: `${STANDARD.w}px`,
        minW: 0,
        h: "auto",
        minH: "unset",
        flex: "none",
        alignSelf: "start"
      }
    : fixedSize != null
      ? {
          w: `min(${fixedSize.w}px, 100%)`,
          h: `${fixedSize.h}px`,
          maxW: `${fixedSize.w}px`,
          flex: "none",
          minW: 0
        }
      : {
          width: style.width,
          maxW: fillGrid ? "none" : undefined,
          flex: fillGrid ? "1" : undefined,
          minW: fillGrid ? 0 : undefined,
          h: fillGrid ? "100%" : undefined,
          minH: fillGrid ? 0 : undefined
        };

  return (
    <Box
      {...boxProps}
      display="flex"
      flexDirection="column"
      bg={cardBg}
      borderStyle="solid"
      borderColor="border.light"
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      p={style.padding}
      boxSizing="border-box"
      overflow={cohortTextOnly ? "visible" : "hidden"}
    >
      {showHeadshot ? (
        <Box
          flexShrink={0}
          w="100%"
          h={`${fixedSize.photoHeightPx}px`}
          borderRadius="2px"
          overflow="hidden"
          bg="neutral.muted"
        >
          <Image
            src={photoSrc}
            alt={name}
            w="100%"
            h="100%"
            objectFit="cover"
            onError={() => setPhotoFailed(true)}
          />
        </Box>
      ) : !cohortTextOnly ? (
        <Image
          src={photoSrc}
          alt={name}
          width="100%"
          height={style.imageHeight != null ? style.imageHeight : "auto"}
          flexShrink={0}
          objectFit="cover"
          bg="neutral.muted"
          onError={() => setPhotoFailed(true)}
        />
      ) : null}

      <Box
        flex={showHeadshot ? "1 1 auto" : cohortTextOnly ? "none" : "1"}
        flexShrink={cohortTextOnly ? 0 : undefined}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        minH={cohortTextOnly ? undefined : 0}
        w="100%"
        overflow={cohortTextOnly ? "visible" : "hidden"}
        mt={showHeadshot ? 2 : cohortTextOnly ? 0 : { base: 3, md: 3 }}
      >
        <Text
          fontSize={nameFontSize}
          fontWeight={cohortTextOnly ? "700" : style.nameFontWeight}
          color="neutral.strong"
          lineHeight="1.2"
          textAlign="left"
          w="100%"
          textDecoration={nameUnderline ? "underline" : "none"}
          noOfLines={3}
          wordBreak="break-word"
        >
          {name?.trim() ? name : "Member"}
        </Text>

        <Text
          mt={1}
          fontSize={roleFontSize}
          fontWeight={cohortTextOnly ? "400" : style.roleFontWeight}
          color={roleColor}
          lineHeight="1.3"
          textAlign="left"
          w="100%"
          noOfLines={3}
          wordBreak="break-word"
        >
          {position?.trim() ? position : "Position in Organization"}
        </Text>

        {linkedinUrl ? (
          <Box
            w="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mt={cohortTextOnly ? 3 : "auto"}
            pt={cohortTextOnly ? 0 : 3}
            flexShrink={0}
          >
            <Link
              href={linkedinUrl}
              isExternal
              display="inline-flex"
              alignItems="center"
              gap={2}
              fontSize="sm"
              fontWeight="600"
              lineHeight="1"
              color="brand.primary"
              _hover={{ textDecoration: "underline" }}
              aria-label={`${name} on LinkedIn`}
            >
              <Image
                src={linkedinIconSrc}
                alt=""
                boxSize="22px"
                flexShrink={0}
                display="block"
              />
              LinkedIn
            </Link>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
