import { Box, Flex, VStack, Text, HStack, Image, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
const sloganImage = "/Home/SouthLACafeGroup.jpg";

export default function Slogan() {
  return (
    <Box
      as="section"
      maxW="100%"
      bg="rgba(9, 39, 81, 1)"
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 12, lg: 32 }}
      borderBottomRadius={50}
    >
      <Flex
        direction="row"
        align="flex-start"
        gap={{ base: 6, md: 8 }}
        maxW="1200px"
      >
        <VStack align="flex-start" spacing={{ base: 2, md: 3 }}>
          <Text
            fontSize={{ base: 16, md: 20}}
            size="20px"
            fontWeight="400"
            lineHeight="1.4"
            color="white"
          >
            Eradicating Health Disparity
          </Text>

          <Text
            as="h1"
            maxW="750px"
            fontSize={{ base: 36, md: 48}}
            fontWeight="700"
            lineHeight={{ base: "1.00", lg: "1.05" }}
            color="white"
          >
            We strengthen communitites through{" "}
            <Text as="span" color="#5CDAC5">
              compassionate care
            </Text>
            , meaningful connection, and opportunities that transform lives.
          </Text>

          <Text
            fontSize={{ base: 16, md: 20}}
            py={10}
            maxW="780px"
            lineHeight="1.55"
            textColor="white"
          >
            At TENA, we partner with neighbors, students, volunteers,and
            organizations to expand equitable access to health services, build
            career pathways in healthcare, and empower every voice in Los
            Angeles County to thrive.
          </Text>
          <NavLink to="/donate">
            <Button
              mb={10}
              height={12}
              borderRadius={6}
              px={6}
              bgColor="rgba(92, 218, 197, 1)"
            >
              <HStack gap={2}>
                <Text
                  fontWeight={600}
                  fontSize={18}
                  lineHeight={28}
                  textColor="black"
                >
                  Donate
                </Text>
                <ChevronRight
                  size={16}
                  color="black"
                  style={{ marginTop: "4px" }}
                />
              </HStack>
            </Button>
          </NavLink>
        </VStack>

        <Box position="relative" borderRadius="12px" overflow="hidden" zIndex={2} display={{base:"none", md:"block"}}>
          <Image
            src={sloganImage}
            alt="Community members at a TENA event"
            objectFit="contain"
            w={{ base: "200px", md: "400px" }}
            h={{ base: "200px", md: "400px" }}
            fetchPriority="high"
            decoding="async"
          />
        </Box>
      </Flex>
    </Box>
  );
}
