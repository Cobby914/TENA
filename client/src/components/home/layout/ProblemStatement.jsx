import { Text, Box, VStack } from "@chakra-ui/react";
import SimpleCircle from "../../ui/SimpleCircle";

const problemDecorCircle = {
  size: { base: "220px", sm: "252px", md: "272px" },
  strokeWidth: { base: "24px", sm: "27px", md: "30px" },
  opacity: 0.15,
  color: "var(--color-brand-accent)",
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
          color="brand.subheading"
        >
          The Challenge
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ base: "18px", md: "20px", lg: "22px" }}
          lineHeight="150%"
          color="neutral.text"
        >
         Your health was shaped long before your first doctor&apos;s 
         visit; decades of disinvestment, racial segregation, and 
         economic inequality shaped conditions around health. 
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ base: "18px", md: "20px", lg: "22px" }}
          lineHeight="150%"
          color="neutral.text"
        >
          Nearly one in four LA County households experience 
          food insecurity. Housing instability, utilities crises, and 
          lack of insurance leave families in a constant state of 
          survival. 
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ base: "18px", md: "20px", lg: "22px" }}
          lineHeight="150%"
          color="neutral.text"
        >
          Health services and social support exist but are 
          difficult to access: clinics are hard to reach, waiting 
          rooms feel unwelcoming, and there is an overall lack of 
          trust in formal healthcare. 
        </Text>
        <Text
          fontWeight={400}
          fontSize={{ base: "18px", md: "20px", lg: "22px" }}
          lineHeight="150%"
          color="neutral.text"
        >
          For those able and willing, whether accessing local 
          resources or providing care for others, navigating the 
          system alone is overwhelming.
        </Text>
      </VStack>
    </Box>
  );
}
