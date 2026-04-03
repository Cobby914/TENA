import { useEffect, useState } from "react";
import { Box, Image, Link, Text } from "@chakra-ui/react";
import { memberImagePlaceholder } from "../../lib/memberImageResolver";

const linkedinIconSrc = "/Footer/linkedin-svgrepo-com.svg";

/** Single footprint for board, team, and intern cards */
const STANDARD = {
  w: 276,
  h: 352,
  radius: 3.53,
  border: 0.88
};

const CARD_VARIANTS = {
  board: {
    fixedSize: STANDARD,
    nameSize: { base: "2xl", md: "30px" },
    roleSize: { base: "sm", md: "md" },
    padding: { base: 4, md: 5 },
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
    nameSize: { base: "lg", md: "xl" },
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
  cohort: {
    fixedSize: STANDARD,
    nameSize: { base: "md", md: "md" },
    roleSize: { base: "xs", md: "xs" },
    padding: "10px",
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
        <Image
          src={photoSrc}
          alt={name}
          width="100%"
          height="100%"
          flex="1"
          minH={0}
          flexShrink={1}
          objectFit="cover"
          bg="neutral.muted"
          onError={() => setPhotoFailed(true)}
        />
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
        flex={fixedSize != null ? "0 0 auto" : "1"}
        display="flex"
        flexDirection="column"
        minH={0}
        mt={fixedSize != null ? 2 : { base: 3, md: 3 }}
      >
        <Text
          fontSize={style.nameSize}
          fontWeight={style.nameFontWeight}
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
          fontWeight={style.roleFontWeight}
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
            mt={2}
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
            <Image src={linkedinIconSrc} alt="" boxSize="16px" flexShrink={0} />
            LinkedIn
          </Link>
        ) : null}
      </Box>
    </Box>
  );
}
