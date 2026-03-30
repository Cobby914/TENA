import { Box, Text } from "@chakra-ui/react";
import MultiRingCircle from "../../ui/MultiRingCircle";

const RING_COLOR = "#092751";
const RING_SIZE_PX = 487;

export default function OurTeamHeader() {
  return (
    <Box
      as="section"
      position="relative"
      width="100%"
      bg="#3F5F85"
      minH={{ base: "280px", md: "360px", lg: "415px" }}
      overflow="hidden"
    >
      <Box
        position="absolute"
        right={{ base: "32px", md: "72px", lg: "120px" }}
        bottom={0}
        w={`${RING_SIZE_PX}px`}
        h={`${RING_SIZE_PX}px`}
        opacity={0.54}
        transform="translate(50%, 50%)"
        pointerEvents="none"
        aria-hidden
      >
        <MultiRingCircle
          width={RING_SIZE_PX}
          height={RING_SIZE_PX}
          variant="solid"
          solidColor={RING_COLOR}
        />
      </Box>

      <Box
        position="relative"
        zIndex={1}
        maxW="1536px"
        mx="auto"
        px={{ base: 6, md: 12, lg: 20 }}
        pt={{ base: 10, md: 16, lg: 20 }}
      >
        <Text
          fontFamily="body"
          fontWeight="700"
          fontSize={{ base: "xl", md: "2xl" }}
          color="#F8F9FB"
          mb={{ base: 3, md: 4 }}
        >
          About Us{" "}
          <Box as="span" color="#F8F9FB">
            &gt;
          </Box>{" "}
          Our Team
        </Text>

        <Text
          as="h1"
          fontFamily="body"
          fontWeight="700"
          fontSize={{ base: "5xl", md: "6xl", lg: "7xl" }}
          lineHeight="1"
          color="#F8F9FB"
        >
          Our Team
        </Text>
      </Box>
    </Box>
  );
}
