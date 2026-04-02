import { Box, Flex, Image, Button as ChakraButton } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import AUMenu from "./AboutUsMenu";
import PMenu from "./ProgramsMenu";
import GIMenu from "./GetInvolvedMenu";
import { donateButtonInteractionProps } from "../../lib/giveButter";

const main_logo = "/transparent_tena_logo.png";
const text_logo = "/tena_text_logo.png";

export default function Navbar() {
  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      bg="surface.default"
      w="100%"
      px={{ base: 4, md: 8, lg: 12 }}
      py={{ base: 3, md: 4 }}
      minH={{ base: "64px", md: "72px" }}
      borderBottomWidth="1px"
      borderBottomColor="border.default"
    >
      <Flex align="center" gap={{ base: 2, md: 3 }} flexShrink={0}>
        <NavLink to="/">
          <Image
            src={main_logo}
            alt="TENA Logo"
            width={{ base: 35, lg: 51 }}
            height={{ base: 30, lg: 45 }}
          />
        </NavLink>
        <NavLink to="/">
          <Image
            src={text_logo}
            alt="TENA"
            width={{ base: 120, lg: 140 }}
            height={{ base: 38, lg: 37 }}
            display={{ base: "none", md: "flex" }}
          />
        </NavLink>
      </Flex>

      <Box
        display={{ base: "grid", md: "flex" }}
        gridTemplateColumns={{ base: "repeat(2, max-content)", md: "none" }}
        justifyContent={{ base: "center", md: "flex-end" }}
        justifyItems={{ base: "start", md: "initial" }}
        columnGap={{ base: 4, md: 0 }}
        rowGap={{ base: 2, md: 0 }}
        alignItems="center"
        gap={{ md: 6, lg: 8 }}
      >
        <AUMenu />
        <PMenu />
        <GIMenu />

        <ChakraButton
          {...donateButtonInteractionProps}
          bg="brand.accent"
          color="neutral.text"
          fontWeight="600"
          fontSize={{ base: "14px", md: "16px" }}
          px={{ base: 5, md: 6 }}
          py={2}
          h="44px"
          minH="44px"
          lineHeight="1"
          whiteSpace="nowrap"
          borderRadius="md"
          flexShrink={0}
          borderWidth="1px"
          borderColor="neutral.text"
          _hover={{ bg: "brand.accentHover", color: "neutral.text" }}
          _active={{ bg: "brand.accent", color: "neutral.text" }}
        >
          Donate
        </ChakraButton>
      </Box>
    </Box>
  );
}
