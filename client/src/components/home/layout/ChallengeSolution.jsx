import {
  SimpleGrid,
  VStack,
  HStack,
  Text,
  List,
  ListItem,
  Box,
  Button,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Dot, ChevronRight } from "lucide-react";

export default function ChallengeSolution() {
  return (
    <Box p={{ base: 10, md: 28 }} maxW="100%">
      <Text fontWeight={700} fontSize={60} maxW="900px" py={16} lineHeight={"100%"}>
        Solving Health Inequality One Step at a Time
      </Text>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 14, md: 28 }}>
        {/* Problem */}
        <VStack align="start" spacing={5}>
          <Text
            fontWeight={700}
            fontSize={36}
            lineHeight="120%"
            textColor="rgba(63, 95, 133, 1)"
          >
            The Challenge
          </Text>
          <Text
            mt={3}
            fontWeight={400}
            fontSize={{ base: 20, md: 22 }}
            lineHeight="150%"
            letterSpacing={0}
          >
            Across Los Angeles County, structural inequities rooted in economic
            disparity, housing instability, racial segregation, and uneven
            access to care continue to shape who gets healthy and who gets left
            behind. <br />
            <br />
            Over 1 million LA County residents remain uninsured or underinsured.
            Black and Latinx adults face disproportionate inequities in health
            outcomes, insurance coverage, housing security, and economic
            stability — outcomes shaped by decades of systemic injustice. <br />
            <br />
            Despite being one of the wealthiest counties in the nation, an
            estimated 25% of households still struggle with food insecurity, a
            powerful social determinant of chronic illness.
          </Text>
        </VStack>

        {/* Solution */}
        <VStack align="start" spacing={5}>
          <Text
            fontWeight={700}
            fontSize={36}
            lineHeight="120%"
            textColor="rgba(63, 95, 133, 1)"
          >
            TENA's Solution
          </Text>
          <Text
            mt={3}
            fontWeight={400}
            fontSize={{ base: 20, md: 22 }}
            lineHeight="150%"
            letterSpacing={0}
          >
            At the heart of TENA's mission is the belief that health equity
            isn't just access to services — it's access with dignity, trust, and
            relationship.
          </Text>
          <List
            fontSize={{ base: 20, md: 22 }}
            mt={3}
            spacing={8}
          >
            <ListItem display="flex" alignItems="flex-start">
              <Box>
                <Dot size={40} />
              </Box>
              <Box>
                Personalized Care Navigation — Connecting residents to
                insurance, medical homes, preventive care, and social resources
                that truly work for them
              </Box>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <Box>
                <Dot size={40} />
              </Box>
              <Box>
                Community Health Access Points — Free health fairs offering
                screenings, education, referrals, and support in trusted
                neighborhood spaces
              </Box>
            </ListItem>
            <ListItem display="flex" alignItems="flex-start">
              <Box>
                <Dot size={40} />
              </Box>
              <Box>
                Workforce Readiness & Youth Empowerment — Training the next
                generation of diverse healthcare leaders rooted in lived
                experience{" "}
              </Box>
            </ListItem>
          </List>
        </VStack>
      </SimpleGrid>

      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        pt={{ base: 6, md: 10 }}
      >
        <NavLink to="/getInvolved">
          <Button height={12} borderRadius={6} px={6} bgColor="rgba(21, 115, 207, 1)" color="white">
            <HStack gap={2}>
              <Text
                fontWeight={600}
                fontSize={18}
                lineHeight={28}
                textColor="white"
              >
                Get Involved
              </Text>
              <ChevronRight size={18} style={{ marginTop: "4px" }} />
            </HStack>
          </Button>
        </NavLink>
      </Box>

      <Box position="absolute" left={"-3%"} top={"22%"} border="30px solid rgba(92, 218, 197, 0.1)" w={{ base: "200px", md: "250px" }} h={{ base: "200px", md: "250px" }} borderRadius="full" zIndex={-1} />
      <Box position="absolute" right={"-10%"} top={"27%"} border="30px solid rgba(92, 218, 197, 0.1)" w={{ base: "250px", md: "350px" }} h={{ base: "250px", md: "350px" }} borderRadius="full" zIndex={-1} />
    </Box>
  );
}
