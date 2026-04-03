import { useEffect, useState } from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { memberImagePlaceholder } from "../../lib/memberImageResolver";

const linkedinIconSrc = "/Footer/linkedin-svgrepo-com.svg";

/** Design specs (px): cohort / intern cards */
const COHORT = {
  w: 221,
  h: 284,
  radius: 2.83,
  border: 0.71
};

/** Design specs (px): main team strip */
const TEAM = {
  w: 276,
  h: 352,
  radius: 3.53,
  border: 0.88
};

const CARD_VARIANTS = {
  board: {
    width: { base: "260px", md: "288px" },
    imageHeight: { base: "200px", md: "242px" },
    nameSize: { base: "2xl", md: "30px" },
    roleSize: { base: "sm", md: "md" },
    padding: { base: 4, md: 5 },
    cardBg: "surface.section",
    nameUnderline: true,
    fillGrid: false,
    borderRadius: "4px",
    borderWidth: "1px"
  },
  team: {
    nameSize: { base: "lg", md: "xl" },
    roleSize: { base: "xs", md: "sm" },
    padding: { base: 3, md: 4 },
    cardBg: "surface.section",
    nameUnderline: true,
    fixedSize: TEAM,
    borderRadius: `${TEAM.radius}px`,
    borderWidth: `${TEAM.border}px`
  },
  /** Cohort interns: fixed 221×284 — square photo, bold name, light panel */
  cohort: {
    nameSize: { base: "md", md: "md" },
    roleSize: { base: "xs", md: "xs" },
    padding: "10px",
    cardBg: "surface.section",
    nameUnderline: false,
    fixedSize: COHORT,
    borderRadius: `${COHORT.radius}px`,
    borderWidth: `${COHORT.border}px`
  },
  compact: {
    width: { base: "160px", md: "190px" },
    imageHeight: { base: "120px", md: "140px" },
    nameSize: { base: "md", md: "lg" },
    roleSize: { base: "xs", md: "xs" },
    padding: { base: 3, md: 3 },
    cardBg: "surface.section",
    nameUnderline: true,
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
  const cardBg = style.cardBg ?? "surface.section";
  const nameUnderline = style.nameUnderline !== false;
  const fillGrid = style.fillGrid === true;
  const fixedSize = style.fixedSize;
  const roleColor = variant === "cohort" ? "neutral.subtle" : "neutral.text";
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
      {variant === "cohort" && fixedSize != null ? (
        <Box
          w="100%"
          position="relative"
          overflow="hidden"
          borderRadius="2px"
          bg="neutral.muted"
          flexShrink={0}
          sx={{ aspectRatio: "1 / 1" }}
        >
          <Image
            src={photoSrc}
            alt={name}
            position="absolute"
            inset={0}
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
          height={
            fixedSize != null
              ? "100%"
              : style.imageHeight != null
                ? style.imageHeight
                : "auto"
          }
          flex={fixedSize != null ? "1" : undefined}
          minH={fixedSize != null ? 0 : undefined}
          flexShrink={fixedSize != null ? 1 : 0}
          objectFit="cover"
          bg={variant === "cohort" ? "surface.muted" : "neutral.muted"}
          onError={() => setPhotoFailed(true)}
        />
      )}

      <Box
        flex={fixedSize != null ? "0 0 auto" : "1"}
        display="flex"
        flexDirection="column"
        minH={0}
        mt={fixedSize != null ? (variant === "cohort" ? 3 : 2) : { base: 3, md: 3 }}
      >
        <Text
          fontSize={style.nameSize}
          fontWeight={variant === "cohort" ? "700" : undefined}
          color="neutral.strong"
          lineHeight="1.25"
          textAlign="left"
          textDecoration={nameUnderline ? "underline" : "none"}
          noOfLines={2}
        >
          {name}
        </Text>

        <Text
          mt={1}
          fontSize={style.roleSize}
          fontWeight={variant === "cohort" ? "400" : undefined}
          color={roleColor}
          lineHeight="1.35"
          textAlign="left"
          noOfLines={2}
        >
          {position}
        </Text>

        {linkedinUrl ? (
          <Link
            href={linkedinUrl}
            isExternal
            mt={variant === "cohort" ? 2 : 3}
            display="inline-flex"
            alignItems="center"
            gap={1.5}
            fontSize="xs"
            fontWeight="600"
            color="brand.primary"
            _hover={{ textDecoration: "underline" }}
            alignSelf="flex-start"
            aria-label={`${name} on LinkedIn`}
          >
            <Image src={linkedinIconSrc} alt="" boxSize={variant === "cohort" ? "14px" : "16px"} flexShrink={0} />
            LinkedIn
          </Link>
        ) : null}
      </Box>
    </Box>
  );
}
