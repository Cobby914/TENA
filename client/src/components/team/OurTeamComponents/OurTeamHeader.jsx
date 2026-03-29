import { Box, Text } from "@chakra-ui/react";

export default function OurTeamHeader() {
  return (
    <Box
      as="section"
      width="100%"
      bg="#092751"
      minH={{ base: "280px", md: "360px", lg: "415px" }}
    >
      <Box
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
