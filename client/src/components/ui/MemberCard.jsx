import { Box, Image, Text } from "@chakra-ui/react";

const CARD_VARIANTS = {
  board: {
    width: { base: "260px", md: "288px" },
    imageHeight: { base: "200px", md: "242px" },
    nameSize: { base: "2xl", md: "30px" },
    roleSize: { base: "sm", md: "md" },
    padding: { base: 4, md: 5 }
  },
  team: {
    width: { base: "200px", md: "240px" },
    imageHeight: { base: "150px", md: "180px" },
    nameSize: { base: "lg", md: "xl" },
    roleSize: { base: "xs", md: "sm" },
    padding: { base: 3, md: 4 }
  },
  compact: {
    width: { base: "160px", md: "190px" },
    imageHeight: { base: "120px", md: "140px" },
    nameSize: { base: "md", md: "lg" },
    roleSize: { base: "xs", md: "xs" },
    padding: { base: 3, md: 3 }
  }
};

export default function MemberCard({
  name,
  position,
  imageSrc,
  variant = "board"
}) {
  const style = CARD_VARIANTS[variant] ?? CARD_VARIANTS.board;

  return (
    <Box
      width={style.width}
      bg="#F0F2F5"
      border="1px solid"
      borderColor="#D8DCE2"
      borderRadius="4px"
      p={style.padding}
    >
      <Image
        src={imageSrc}
        alt={name}
        width="100%"
        height={style.imageHeight}
        objectFit="cover"
        bg="#D9D9D9"
      />

      <Text
        mt={{ base: 3, md: 4 }}
        fontSize={style.nameSize}
        color="#1D232E"
        lineHeight="1.15"
        textDecoration="underline"
      >
        {name}
      </Text>

      <Text mt={1} fontSize={style.roleSize} color="#1D232E" lineHeight="1.2">
        {position}
      </Text>
    </Box>
  );
}

