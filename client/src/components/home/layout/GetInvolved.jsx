import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import InvolvementCard from "../ui/InvolvementCard";

export default function GetInvolved() {
  return (
    <Box
      as="section"
      bg="white"
      w="100%"
      py={{ base: 12, md: 20 }}
    >
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 12, lg: 20 }}
      >
        <Box
          bg="#D9D9D9"
          border="1.5px solid"
          p={{ base: 8, md: 12 }}
          borderRadius="md"
        >
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            mb={{ base: 8, md: 12 }}
          >
            Join Our Mission.
          </Text>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 8, md: 10 }}
          >
            <InvolvementCard
              title="Volunteer"
              description="Lend your time at our events."
              linkname="Volunteer With Us"
            />

            <InvolvementCard
              title="Partner"
              description="Collaborate with us to expand our reach."
              linkname="Become a Partner"
            />

            <InvolvementCard
              title="Donate"
              description="Your financial support fuels our mission."
              linkname="Support our Cause"
            />
          </SimpleGrid>
        </Box>
      </Box>
    </Box>
  );
}
