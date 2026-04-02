import { Box, Heading, Text } from "@chakra-ui/react";

export default function ProgramProgress() {
  return (
    <Box
      as="section"
      bg="surface.section"
      width="100%"
      pb={{ base: 12, md: 16, lg: 20 }}
    >
      <Box maxW="2500px" mx="auto" px={{ base: 4, md: 10, lg: 20 }}>
        <Box maxW="1200px" mx="auto">
          <Heading
            as="h2"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            lineHeight={1.05}
          >
            Measurable Progress
          </Heading>

          <Text
            mt={{ base: 4, md: 5 }}
            maxW="760px"
            fontSize={{ base: "lg", md: "2xl" }}
            lineHeight={1.4}
          >
            To eradicate health disparities by empowering underrepresented individuals, disparities by
            empowering underrepresented
          </Text>
        </Box>
      </Box>
    </Box>
  );
}