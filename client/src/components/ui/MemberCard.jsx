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
  variant = "board"
}) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const photoSrc = photoFailed ? memberImagePlaceholder : imageSrc;

  useEffect(() => {
    setPhotoFailed(false);
  }, [imageSrc]);

  const style = CARD_VARIANTS[variant] ?? CARD_VARIANTS.board;
  const nameFontSize = useMemo(
    () => pickNameFontSize(variant, String(name ?? "").length, style.nameSize),
    [variant, name, style.nameSize]
  );
  const roleFontSize = useMemo(
    () => pickRoleFontSize(variant, String(position ?? "").length, style.roleSize),
    [variant, position, style.roleSize]
  );
  const cardBg = style.cardBg ?? "surface.section";
  const nameUnderline = style.nameUnderline !== false;
  const fillGrid = style.fillGrid === true;
  const fixedSize = style.fixedSize;
  const roleColor = style.roleSubtle ? "neutral.subtle" : "neutral.text";
  const borderRadius = style.borderRadius ?? "4px";
  const borderWidth = style.borderWidth ?? "1px";

  const boxProps =
    fixedSize != null
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
      overflow="hidden"
    >
      {fixedSize != null ? (
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
      ) : (
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
      )}

      <Box
        flex={fixedSize != null ? "1 1 auto" : "1"}
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        minH={0}
        w="100%"
        overflow="hidden"
        mt={fixedSize != null ? 2 : { base: 3, md: 3 }}
      >
        <Text
          fontSize={nameFontSize}
          fontWeight={style.nameFontWeight}
          color="neutral.strong"
          lineHeight="1.2"
          textAlign="left"
          w="100%"
          textDecoration={nameUnderline ? "underline" : "none"}
          noOfLines={2}
        >
          {name}
        </Text>

        <Text
          mt={1}
          fontSize={roleFontSize}
          fontWeight={style.roleFontWeight}
          color={roleColor}
          lineHeight="1.3"
          textAlign="left"
          w="100%"
          noOfLines={2}
        >
          {position}
        </Text>

        {linkedinUrl ? (
          <Box
            w="100%"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            mt="auto"
            pt={3}
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
