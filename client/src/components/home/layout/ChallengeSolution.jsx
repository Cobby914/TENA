import { SimpleGrid, VStack, Text, List, ListItem, Box, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ProblemStatement from "./ProblemStatement";
import SimpleCircle from "../../ui/SimpleCircle";
import FadeInWhenVisible from "../ui/FadeInWhenVisible";

const solutionDecorCircle = {
  size: { base: "380px", md: "440px", lg: "490px" },
  strokeWidth: { base: "32px", md: "36px", lg: "40px" },
  opacity: 0.15,
  color: "var(--color-brand-accent)",
};

export default function ChallengeSolution() {
  const navigate = useNavigate();

  return (
    <Box
      as="section"
      bg="surface.default"
      p={{ base: 10, md: 16, lg: 28 }}
      maxW="100%"
      overflow="hidden"
    >
      <FadeInWhenVisible amount={0.45}>
      <Text
        fontWeight={700}
        fontSize={{ base: "32px", sm: "35px", md: "38px", lg: "40px" }}
        maxW="1100px"
        py={{ base: 8, md: 12, lg: 16 }}
        lineHeight="110%"
        color="neutral.text"
      >
        Solving Health Inequality One Step at a Time
      </Text>
      </FadeInWhenVisible>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 14, md: 20, lg: 28 }}
        overflow="visible"
      >
        <FadeInWhenVisible delay={0.05} amount={0.35}>
        <ProblemStatement />
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1} amount={0.35}>
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
              color="brand.subheading"
            >
              TENA&apos;s Solution
            </Text>
            <Text
              fontWeight={400}
              fontSize={{ base: "18px", md: "20px", lg: "22px" }}
              lineHeight="150%"
              color="neutral.text"
            >
              At the heart of TENA&apos;s mission is the belief that health equity
              isn&apos;t just access to services — it&apos;s access with dignity,
              trust, and relationship.
            </Text>
            <List fontSize={{ base: "18px", md: "20px", lg: "22px" }} mt={2} spacing={6}>
              <ListItem>
                <Text as="span" color="neutral.text" lineHeight="150%">
                  <Text as="span" fontWeight={700}>
                    Personalized Care Navigation
                  </Text>
                  {" — Connecting residents to insurance, medical homes, preventive care, and social resources that truly work for them."}
                </Text>
              </ListItem>
              <ListItem>
                <Text as="span" color="neutral.text" lineHeight="150%">
                  <Text as="span" fontWeight={700}>
                    Community Health Access Points
                  </Text>
                  {" — Free health fairs offering screenings, education, referrals, and support in trusted neighborhood spaces."}
                </Text>
              </ListItem>
              <ListItem>
                <Text as="span" color="neutral.text" lineHeight="150%">
                  <Text as="span" fontWeight={700}>
                    Workforce Readiness & Youth Empowerment
                  </Text>
                  {" — Training the next generation of diverse healthcare leaders rooted in lived experience."}
                </Text>
              </ListItem>
            </List>
          </VStack>
        </Box>
        </FadeInWhenVisible>
      </SimpleGrid>

      <FadeInWhenVisible delay={0.12} amount={0.5}>
      <Box
        w="100%"
        display="flex"
        justifyContent="center"
        pt={{ base: 10, md: 14, lg: 16 }}
        position="relative"
        zIndex={2}
      >
        <Button
          type="button"
          onClick={() => navigate("/getInvolved")}
          variant="unstyled"
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
          bg="brand.primary"
          color="surface.default"
          cursor="pointer"
          whiteSpace="nowrap"
          transition="opacity 0.2s ease"
          _hover={{ opacity: 0.68, bg: "brand.primary" }}
          _active={{ opacity: 0.55 }}
          _focus={{ outline: "none", boxShadow: "none" }}
          _focusVisible={{ outline: "none", boxShadow: "none" }}
        >
          <Text as="span" fontWeight={600} fontSize={18} lineHeight="1" color="surface.default">
            Get Involved
          </Text>
        </Button>
      </Box>
      </FadeInWhenVisible>
    </Box>
  );
}
