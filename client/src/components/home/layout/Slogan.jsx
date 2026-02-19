import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";

export default function Slogan() {
  return (
    <Box
      as="section"
      w="100%"
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
            TENA SLOGAN
          </Text>

          <Text
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            lineHeight="1.1"
          >
            Create. Connect. Empower.
          </Text>

          <Text
            fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
            fontWeight="semibold"
          >
            Why should you help?
          </Text>

          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            maxW="700px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </VStack>

        <NavLink to="/getInvolved">
          <Button>Donate</Button>
        </NavLink>
      </Flex>
    </Box>
  );
}
