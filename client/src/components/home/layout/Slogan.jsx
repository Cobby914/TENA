import { Box, Flex, VStack, Text, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import { ChevronRight } from "lucide-react";

export default function Slogan() {
  return (
    <Box
      as="section"
      maxW="100%"
      bg="rgb(222, 227, 235)"
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 12, lg: 24 }}
    >
      <Flex
        direction="column"
        align="flex-start"
        gap={{ base: 6, md: 8 }}
        maxW="1200px"
      >
        <VStack align="flex-start" spacing={{ base: 2, md: 3 }}>
          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            size="20px"
            fontWeight="400"
            lineHeight="1.4"
            color="#1573CF"
          >
            Eradicating Health Disparity
          </Text>

          <Text
            as="h1"
            maxW="1120px"
            fontSize={{ base: "4xl", sm: "5xl", md: "6xl", lg: "72px" }}
            fontWeight="700"
            lineHeight={{ base: "1.00", lg: "1.05" }}
            color="#1573CF"
          >
            We strengthen communitites through{" "}
            <Text as="span" color="#5CDAC5">
              compassionate care
            </Text>
            , meaningful connection, and opportunities that transform lives.
          </Text>

          <Text
            fontSize={{ base: "lg", md: "2xl" }}
            maxW="780px"
            lineHeight="1.55"
            textColor="#3F5F85"
          >
            At TENA, we partner with neighbors, students, volunteers,and
            organizations to expand equitable access to health services, build
            career pathways in healthcare, and empower every voice in Los
            Angeles County to thrive.
          </Text>
        </VStack>

        <NavLink to="/donate">
          <Button
            mt={6}
            mb={10}
            height={12}
            borderRadius={6}
            px={6}
            bgColor="#1573CF"
          >
            <HStack gap={2}>
              <Text
                fontWeight={600}
                fontSize={18}
                lineHeight={28}
                textColor="#FFFFFF"
              >
                Donate
              </Text>
              <ChevronRight
                size={20}
                color="#FFFFFF"
                style={{ marginTop: "4px" }}
              />
            </HStack>
          </Button>
        </NavLink>
      </Flex>
    </Box>
  );
}
