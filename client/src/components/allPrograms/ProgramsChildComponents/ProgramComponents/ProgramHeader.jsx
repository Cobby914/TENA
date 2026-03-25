import { Box, Flex, Text } from "@chakra-ui/react";

export default function ProgramHeader({ title }) {
  return (
    <Box
      as="section"
      bg="rgb(184, 184, 184)"
      width="100%"
      py={{ base: 8, md: 12, lg: 16 }}
    >
      <Box maxW="2500px" mx="auto" px={{ base: 4, md: 10, lg: 20 }}>
        <Flex
          maxW="1200px"
          mx="auto"
          align="center"
          justify="space-between"
          gap={{ base: 8, md: 12, lg: 20 }}
          direction={{ base: "column", lg: "row" }}
        >
          <Flex
            direction="column"
            alignItems="flex-start"
            maxW={{ base: "100%", lg: "520px" }}
          >
            <Text
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="normal"
              mb={{ base: 4, md: 6 }}
            >
              {title}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}