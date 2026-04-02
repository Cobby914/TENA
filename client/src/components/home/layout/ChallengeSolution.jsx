import { SimpleGrid, VStack, HStack, Text, List, ListItem, Box, chakra } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProblemStatement from "./ProblemStatement";
import SimpleCircle from "../../ui/SimpleCircle";

const subheadingColor = "#4A7A96";
const bodyColor = "#1A1A1A";
const buttonBlue = "#0070BA";

const solutionDecorCircle = {
  size: { base: "380px", md: "440px", lg: "490px" },
  strokeWidth: { base: "32px", md: "36px", lg: "40px" },
  opacity: 0.15,
  color: "#5CDAC5",
};

export default function ChallengeSolution() {
  const navigate = useNavigate();

  return (
    <Box
      as="section"
      bg="white"
      p={{ base: 10, md: 16, lg: 28 }}
      maxW="100%"
      overflow="visible"
    >
      <Text
        fontWeight={700}
        fontSize={{ base: "32px", sm: "40px", md: "48px", lg: "56px" }}
        maxW="1100px"
        py={{ base: 8, md: 12, lg: 16 }}
        lineHeight="110%"
        color={bodyColor}
      >
        Solving Health Inequality One Step at a Time
      </Text>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 14, md: 20, lg: 28 }}
        overflow="visible"
      >
        <ProblemStatement />

        <Box position="relative" overflow="visible" w="100%">
          <SimpleCircle
            {...solutionDecorCircle}
            position="absolute"
            zIndex={0}
            right={{ base: "-168px", md: "-208px", lg: "-260px" }}
            left="auto"
            top={{ base: "auto", lg: "218px" }}
            bottom={{ base: "-48px", md: "-52px", lg: "auto" }}
          />
          <VStack align="start" spacing={5} position="relative" zIndex={1}>
            <Text
              fontWeight={700}
              fontSize={{ base: "28px", md: "34px", lg: "36px" }}
              lineHeight="120%"
              color={subheadingColor}
            >
              TENA&apos;s Solution
            </Text>
            <Text
              fontWeight={400}
              fontSize={{ base: "18px", md: "20px", lg: "22px" }}
              lineHeight="150%"
              color={bodyColor}
            >
              At the heart of TENA&apos;s mission is the belief that health equity
              isn&apos;t just access to services — it&apos;s access with dignity,
              trust, and relationship.
            </Text>
            <List fontSize={{ base: "18px", md: "20px", lg: "22px" }} mt={2} spacing={6}>
              <ListItem>
                <Text as="span" color={bodyColor} lineHeight="150%">
                  <Text as="span" fontWeight={700}>
                    Personalized Care Navigation
                  </Text>
                  {" — Connecting residents to insurance, medical homes, preventive care, and social resources that truly work for them."}
                </Text>
              </ListItem>
              <ListItem>
                <Text as="span" color={bodyColor} lineHeight="150%">
                  <Text as="span" fontWeight={700}>
                    Community Health Access Points
                  </Text>
                  {" — Free health fairs offering screenings, education, referrals, and support in trusted neighborhood spaces."}
                </Text>
              </ListItem>
              <ListItem>
                <Text as="span" color={bodyColor} lineHeight="150%">
                  <Text as="span" fontWeight={700}>
                    Workforce Readiness & Youth Empowerment
                  </Text>
                  {" — Training the next generation of diverse healthcare leaders rooted in lived experience."}
                </Text>
              </ListItem>
            </List>
          </VStack>
        </Box>
      </SimpleGrid>

      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        pt={{ base: 10, md: 14, lg: 16 }}
        position="relative"
        zIndex={2}
      >
        <chakra.button
          type="button"
          onClick={() => navigate("/getInvolved")}
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          h="48px"
          minH="48px"
          maxH="48px"
          w="fit-content"
          p={0}
          py={0}
          px={6}
          border="none"
          borderRadius="6px"
          bg={buttonBlue}
          color="white"
          cursor="pointer"
          whiteSpace="nowrap"
          transition="opacity 0.2s ease"
          _hover={{ opacity: 0.68, bg: buttonBlue }}
          _active={{ opacity: 0.55 }}
        >
          <Text as="span" fontWeight={600} fontSize={18} lineHeight="1" color="white">
            Get Involved
          </Text>
        </chakra.button>
      </Box>
    </Box>
  );
}
