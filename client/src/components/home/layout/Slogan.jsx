import { Box, Flex, VStack, Text, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import { ChevronRight } from "lucide-react";

export default function Slogan() {
  return (
    <Box
      as="section"
      maxW="100%"
      bg="rgb(184, 184, 184)"
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 12, lg: 24 }}
    >
      <Flex
        direction="column"
        align="flex-start"
        gap={{ base: 6, md: 8 }}
        maxW="900px"
      >
        <VStack align="flex-start" spacing={{ base: 3, md: 4 }}>
          <Text
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" }}
            fontWeight="bold"
            lineHeight="1.1"
          >
            Eradicating<br/>Health Disparity
          </Text>

          <Text
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            lineHeight="1.1"
          >
            {/* N/A */}
          </Text>

          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="semibold"
          >
            {/* <N />
            <A></A> */}
          </Text>

          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            maxW="700px"
            lineHeight="150%"
          >
            We strengthen communities through compassionate care, meaningful connection, and
            opportunities that transform lives. 
            <br/><br/>
            At TENA, we partner with neighbors, students, volunteers,and organizations to expand
            equitable access to health services, build career pathways in healthcare, and empower 
            every voice in Los Angeles County to thrive.
          </Text>
        </VStack>

        <NavLink to="/getInvolved" >
          <Button mt={6} mb={10} height={12} borderRadius={6} px={6} bgColor="rgb(237, 242, 247)">
            <HStack gap={2}>
              <Text fontWeight={600} fontSize={18} lineHeight={28} textColor="rgb(26, 32, 44)">Donate</Text>
              <ChevronRight size={20} style={{marginTop: "4px"}}/>
            </HStack>
          </Button>
        </NavLink>
      </Flex>
    </Box>
  );
}
