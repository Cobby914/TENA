import { Text, Box, VStack } from "@chakra-ui/react";
import SimpleCircle from "../../ui/SimpleCircle";

const subheadingColor = "#4A7A96";
const bodyColor = "#1A1A1A";

const problemDecorCircle = {
  size: { base: "220px", sm: "252px", md: "272px" },
  strokeWidth: { base: "24px", sm: "27px", md: "30px" },
  opacity: 0.15,
  color: "#5CDAC5",
};

export default function ProblemStatement() {
  return (
    <Box position="relative" overflow="visible" w="100%">
      <SimpleCircle
        {...problemDecorCircle}
        position="absolute"
        left={{ base: "-130px", md: "-150px", lg: "-180px" }}
        top={{ base: "-36px", md: "-44px" }}
        zIndex={0}
      />
      <VStack align="start" spacing={5} position="relative" zIndex={1}>
        <Text
          fontWeight={700}
          fontSize={{ base: "28px", md: "34px", lg: "36px" }}
          lineHeight="120%"
          color={subheadingColor}
        >
          The Challenge
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ base: "18px", md: "20px", lg: "22px" }}
          lineHeight="150%"
          color={bodyColor}
        >
          Across Los Angeles County, structural inequities rooted in economic
          disparity, housing instability, racial segregation, and uneven access
          to care continue to shape who gets healthy and who gets left behind.
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ base: "18px", md: "20px", lg: "22px" }}
          lineHeight="150%"
          color={bodyColor}
        >
          Over 1 million LA County residents remain uninsured or underinsured.
          Black and Latinx adults face disproportionate inequities in health
          outcomes, insurance coverage, housing security, and economic stability
          — outcomes shaped by decades of systemic injustice.
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ base: "18px", md: "20px", lg: "22px" }}
          lineHeight="150%"
          color={bodyColor}
        >
          Despite being one of the wealthiest counties in the nation, an
          estimated 25% of households still struggle with food insecurity, a
          powerful social determinant of chronic illness.
        </Text>
      </VStack>
    </Box>
  );
}
