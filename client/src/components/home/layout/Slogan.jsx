import { Box, Flex, VStack, Text, Image, Button } from "@chakra-ui/react";
import MultiRingCircle from "../../ui/MultiRingCircle";
import { SegmentedTypewriterText } from "../../ui/SegmentedTypewriter";
import { openDonateWidget } from "../../../lib/giveButter";
const sloganImage = "/Home/SouthLACafeGroup.jpg";

const donateHover = {
  bg: "transparent",
  color: "brand.accent",
  borderColor: "brand.accent",
};

const HOME_HERO_HEADLINE_SEGMENTS = [
  { text: "We strengthen communities through ", accent: false },
  { text: "compassionate care", accent: true },
  {
    text: ", meaningful connection, and opportunities that transform lives.",
    accent: false,
  },
];

const BODY =
  "At TENA, we partner with neighbors, students, volunteers, and organizations to expand equitable access to health services, build career pathways in healthcare, and empower every voice in Los Angeles County to thrive.";

export default function Slogan() {
  return (
    <Box
      as="section"
      maxW="100%"
      bg="brand.navy"
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 12, lg: 32 }}
      borderBottomRadius={50}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align={{ base: "stretch", md: "center" }}
        justify="space-between"
        gap={{ base: 10, md: 12 }}
        maxW="1200px"
        mx="auto"
        w="100%"
      >
        <VStack
          align="flex-start"
          spacing={{ base: 2, md: 3 }}
          textAlign="left"
          flex="1"
          minW={0}
        >
          <Text
            fontSize={{ base: 16, md: 20 }}
            fontWeight="400"
            lineHeight="1.4"
            color="surface.default"
          >
            Eradicating Health Disparity
          </Text>

          <SegmentedTypewriterText
            as="h1"
            segments={HOME_HERO_HEADLINE_SEGMENTS}
            charDelayMs={26}
            maxW="750px"
            fontSize={{ base: 36, md: 48 }}
            fontWeight="700"
            lineHeight={{ base: "1.00", lg: "1.05" }}
            color="surface.default"
          />

          <Text
            fontSize={{ base: 16, md: 20 }}
            py={10}
            maxW="780px"
            lineHeight="1.55"
            textColor="surface.default"
          >
            {BODY}
          </Text>
          <Button
            onClick={openDonateWidget}
            variant="unstyled"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            alignSelf="flex-start"
            minW="unset"
            minH="unset"
            w="max-content"
            maxW="100%"
            mb={10}
            h={12}
            p={0}
            px={6}
            borderRadius={6}
            bg="brand.accent"
            color="black"
            border="2px solid"
            borderColor="brand.accent"
            fontWeight={600}
            fontSize={18}
            lineHeight="28px"
            whiteSpace="nowrap"
            textDecoration="none"
            transition="background 0.2s ease, color 0.2s ease, border-color 0.2s ease"
            _hover={donateHover}
            _active={donateHover}
          >
            Donate
          </Button>
        </VStack>

        <Box
          position="relative"
          alignSelf={{ base: "center", md: "auto" }}
          flexShrink={0}
          w={{ base: "260px", md: "400px" }}
          h={{ base: "260px", md: "400px" }}
          overflow="visible"
        >
          <Box
            position="absolute"
            left={{ base: "80%", md: "80%" }}
            top={{ base: "22%", md: "24%" }}
            transform="translate(-50%, -50%)"
            zIndex={0}
            pointerEvents="none"
            w={{ base: "80%", md: "80%" }}
            h={{ base: "80%", md: "80%" }}
          >
            <MultiRingCircle variant="solid" width="100%" height="100%" />
          </Box>
          <Box
            position="relative"
            zIndex={1}
            borderRadius="full"
            overflow="hidden"
            w="100%"
            h="100%"
            bg="brand.navy"
          >
            <Image
              src={sloganImage}
              alt="Community members at a TENA event"
              objectFit="cover"
              w="100%"
              h="100%"
              fetchPriority="high"
              decoding="async"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
