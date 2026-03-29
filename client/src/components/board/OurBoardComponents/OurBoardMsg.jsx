import { Box, Text, Flex } from "@chakra-ui/react";

export default function OurBoardMsg() {
  return (
    <Flex as="section" width="100%" pt={{ base: 8, md: 12, lg: 14 }}>
      <Box maxW="1536px" mx="auto" px={{ base: 6, md: 12, lg: 20 }}>
        <Text
          fontFamily="body"
          fontWeight="700"
          color="#1D232E"
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          lineHeight={{ base: "1.12", md: "1.08" }}
          maxW="1320px"
        >
          Meet our Board of Directors:{" "}
          <Box as="span" color="#1573CF">
            visionary leaders
          </Box>{" "}
          guiding our mission to dismantle structural inequities and champion
          health justice.
        </Text>
      </Box>
    </Flex>
  );
}
