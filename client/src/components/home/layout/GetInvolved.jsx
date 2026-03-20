import { Box, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import InvolvementCard from "../ui/InvolvementCard";

export default function GetInvolved() {
  return (
    <Box
      as="section"
      bg="white"
      w="100%"
      minH={{ base: "1000px", md: "1100px" }}
      py={{ base: 12, md: 20 }}
    >
      <Box
        maxW="1024px"
        height="500px"
        mx="auto"
        px={{ base: 6, md: 12, lg: 20 }}
        bg="white"
        border="1px solid rgba(226, 232, 240, 1)"
        p={{ base: 8, md: 12 }}
        borderRadius="md"
        boxShadow={"sm"}
      >
        <Text
          textAlign="center"
          fontWeight={700}
          fontSize={{ base: "30px", md: "40px", lg: "48px" }}
          mb={{ base: 8, md: 12 }}
          textColor="#1573CF"
        >
          Join Our Mission.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={{ base: 18, md: 20 }}
          w="full"
        >
          <InvolvementCard
            title="Volunteer"
            description="Lend your time at our events."
            linkname="Volunteer With Us"
            link="/getInvolved"
          />

          <InvolvementCard
            title="Partner"
            description="Collaborate with us to expand our reach."
            linkname="Become a Partner"
            link="/partners"
          />

          <InvolvementCard
            title="Donate"
            description="Your financial support fuels our mission."
            linkname="Support our Cause"
            link="/donate"
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
}
