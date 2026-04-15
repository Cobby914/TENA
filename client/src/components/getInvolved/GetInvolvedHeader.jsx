import { Box, Text, VStack } from "@chakra-ui/react";
import FadeInWhenVisible from "../home/ui/FadeInWhenVisible";
import SimpleCircle from "../ui/SimpleCircle";

export default function GetInvolvedHeader() {
  return (
    <Box width="100%" overflow="hidden" position="relative" display="block">
      <Box position="relative" width="100%" maxW="2500px" mx="auto">
        <Box
          as="section"
          bg="brand.navy"
          width="100%"
          position="relative"
          minH={{ base: "260px", md: "450px" }}
          height = {{base: "auto", lg: "500px"}}
          pt={{ base: 10, md: 16, lg: 20 }}
          pb={{ base: 10, md: 12, lg: 14 }}
          overflow="hidden"
        >
          {/* Decorative rings — low-contrast on navy */}
          <SimpleCircle
            position="absolute"
            left="50%"
            top={{ base: "-8%", md: "-5%" }}
            transform="translateX(-35%)"
            size={{ base: "78px", md: "132px" }}
            strokeWidth={{ base: "11px", md: "17px" }}
            strokeColor="brand.primary"
            opacity={0.2}
            zIndex={0}
          />
          <SimpleCircle
            position="absolute"
            left={{ base: "-36px", md: "-66px" }}
            top="50%"
            transform="translateY(-50%)"
            size={{ base: "88px", md: "148px" }}
            strokeWidth={{ base: "11px", md: "19px" }}
            strokeColor="brand.primary"
            opacity={0.16}
            zIndex={0}
          />
          <SimpleCircle
            position="absolute"
            right={{ base: "2%", md: "6%" }}
            bottom={{ base: "5%", md: "8%" }}
            size={{ base: "68px", md: "112px" }}
            strokeWidth={{ base: "10px", md: "14px" }}
            strokeColor="brand.primary"
            opacity={0.18}
            zIndex={0}
          />
          <SimpleCircle
            position="absolute"
            right={{ base: "-34px", md: "-78px" }}
            top={{ base: "6%", md: "10%" }}
            size={{ base: "112px", md: "200px" }}
            strokeWidth={{ base: "13px", md: "22px" }}
            strokeColor="brand.primary"
            opacity={0.22}
            zIndex={0}
          />

          <Box
            position="relative"
            maxW="2500px"
            mx="auto"
            px={{ base: 4, md: 10, lg: 20 }}
            zIndex={1}
          >
            <FadeInWhenVisible trigger="mount" y={16} duration={0.7}>
              <VStack spacing={{ base: 4, md: 6 }} textAlign="center" maxW="982px" mx="auto">
                <Text
                  fontSize={{ base: "36px", md: "72px" }}
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="1.05"
                  color="white"
                >
                  There's a Spot for {" "}
                  <Text as="span" color="brand.primary">
                    You
                  </Text>{" "}
                  in This {" "}
                  <Text as="span" color="brand.primary">
                    Work.
                  </Text>
                </Text>
                <Text
                  color="white"
                  maxW={{ base: "100%", md: "640px", lg: "982px" }}
                  fontSize={{ base: "14px", md: "22px", lg: "25px" }}
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="1.5"
                >
                  TENA’s work is powered by community, partnership, and shared purpose.
                  Whether you want to give your time, support our mission, collaborate with
                  us, or simply find help, here’s how you can be part of lasting change.
                </Text>
              </VStack>
            </FadeInWhenVisible>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
