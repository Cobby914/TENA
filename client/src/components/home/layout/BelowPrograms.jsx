import { Box, Flex, Text, VStack, SimpleGrid, Button } from "@chakra-ui/react";
import IconBlock from "../../ui/IconBlock";
import { NavLink } from "react-router-dom";

export default function BelowPrograms() {
  return (
    <Box
      as="section"
      bg="white"
      w="100%"
      py={{ base: 12, md: 20 }}
    >
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 12, lg: 20 }}
      >
        <Flex direction="column" align="center">

          {/* Title Section */}
          <VStack
            spacing={{ base: 6, md: 8 }}
            textAlign="center"
            maxW="900px"
            mb={{ base: 12, md: 16 }}
          >
            <Text
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
              lineHeight="1.1"
            >
              A community driven non-profit
              <br />
              focused on lasting health equity.
            </Text>

            <Text
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
              lineHeight="1.6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </VStack>

          {/* Icon Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={{ base: 10, md: 12 }}
            mb={{ base: 12, md: 16 }}
          >
            <IconBlock />
            <IconBlock />
            <IconBlock />
          </SimpleGrid>

          {/* Button */}
          <NavLink to="/about">
            <Button
              bg="rgb(217, 217, 217)"
              color="black"
              fontWeight="bold"
              borderRadius="none"
              h={{ base: "55px", md: "60px" }}
              w={{ base: "200px", md: "240px" }}
            >
              About Us
            </Button>
          </NavLink>

        </Flex>
      </Box>
    </Box>
  );
}
