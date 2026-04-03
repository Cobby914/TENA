import { Box, Flex, Image, Button as ChakraButton, IconButton, Collapse, useDisclosure } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import AUMenu from "./AboutUsMenu";
import PMenu from "./ProgramsMenu";
import GIMenu from "./GetInvolvedMenu";
import { donateButtonInteractionProps } from "../../lib/giveButter";

const main_logo = "/transparent_tena_logo.png";
const text_logo = "/tena_text_logo.png";

export default function Navbar() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      as="nav"
      bg="surface.default"
      w="100%"
      borderBottomWidth="1px"
      borderBottomColor="border.default"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8, lg: 12 }}
        py={{ base: 3, md: 4 }}
        minH={{ base: "64px", md: "72px" }}
      >
        <Flex align="center" gap={{ base: 2, md: 3 }} flexShrink={0}>
          <NavLink to="/" onClick={onClose}>
            <Image
              src={main_logo}
              alt="TENA Logo"
              objectFit="contain"
              sx={{ width: "clamp(40px, 7vw, 120px)", height: "auto" }}
            />
          </NavLink>
          <NavLink to="/" onClick={onClose}>
            <Image
              src={text_logo}
              alt="TENA"
              objectFit="contain"
              sx={{ width: "clamp(100px, 14vw, 230px)", height: "auto" }}
            />
          </NavLink>
        </Flex>

        <Flex align="center" gap={{ md: 6, lg: 8 }} display={{ base: "none", md: "flex" }}>
          <AUMenu />
          <PMenu />
          <GIMenu />
          <ChakraButton
            {...donateButtonInteractionProps}
            bg="brand.accent"
            color="neutral.text"
            fontWeight="600"
            lineHeight="1"
            whiteSpace="nowrap"
            borderRadius="md"
            flexShrink={0}
            borderWidth="1px"
            borderColor="neutral.text"
            _hover={{ bg: "brand.accentHover", color: "neutral.text" }}
            _active={{ bg: "brand.accent", color: "neutral.text" }}
            sx={{
              fontSize: "clamp(13px, 1.6vw, 24px)",
              px: "clamp(16px, 2vw, 40px)",
              py: "clamp(10px, 1.2vw, 16px)",
              height: "clamp(40px, 4.5vw, 64px)",
              minHeight: "clamp(40px, 4.5vw, 64px)",
            }}
          >
            Donate
          </ChakraButton>
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Toggle menu"
          icon={isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          variant="ghost"
          color="neutral.text"
          bg="transparent"
          onClick={onToggle}
          _hover={{ bg: "transparent", color: "brand.primary" }}
          _active={{ bg: "transparent" }}
          _focus={{ boxShadow: "none" }}
          _focusVisible={{ boxShadow: "none", outline: "none" }}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ base: "flex", md: "none" }}
          flexDirection="column"
          alignItems="flex-start"
          px={4}
          pb={4}
          gap={2}
          borderTopWidth="1px"
          borderTopColor="border.default"
        >
          <AUMenu onClose={onClose} />
          <PMenu onClose={onClose} />
          <GIMenu onClose={onClose} />
          <ChakraButton
            {...donateButtonInteractionProps}
            bg="brand.accent"
            color="neutral.text"
            fontWeight="600"
            fontSize="18px"
            px={6}
            py={3}
            h="52px"
            minH="52px"
            lineHeight="1"
            whiteSpace="nowrap"
            borderRadius="md"
            borderWidth="1px"
            borderColor="neutral.text"
            alignSelf="flex-start"
            _hover={{ bg: "brand.accentHover", color: "neutral.text" }}
            _active={{ bg: "brand.accent", color: "neutral.text" }}
          >
            Donate
          </ChakraButton>
        </Box>
      </Collapse>
    </Box>
  );
}