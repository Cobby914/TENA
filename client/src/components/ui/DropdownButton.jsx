import { useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button as ChakraButton,
  Icon,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const CLOSE_DELAY_MS = 120;

/**
 * No blue browser/Chakra focus ring — keyboard users still get a muted fill via _focusVisible.
 * Chakra Menu also sets box-shadow rings; strip those everywhere.
 */
const menuItemProps = {
  transition: "background-color 0.2s ease, color 0.2s ease",
  _hover: {
    bg: "brand.primary",
    color: "white",
  },
  _focus: {
    bg: "transparent",
    boxShadow: "none !important",
    outline: "none !important",
  },
  _focusVisible: {
    bg: "brand.primary",
    color: "white",
    boxShadow: "none !important",
    outline: "none !important",
  },
  sx: {
    outline: "none !important",
    "&:focus, &:focus-visible": {
      outline: "none !important",
      boxShadow: "none !important",
    },
    "&:focus:not(:focus-visible)": {
      bg: "transparent",
    },
    // Chakra roving-focus attribute (often keeps a shadow ring)
    "&[data-focus], &[data-focus-visible]": {
      boxShadow: "none !important",
      outline: "none !important",
    },
  },
};

/**
 * Navbar-style hover dropdown: hover opens the panel; clicking the label navigates to `mainPath`.
 * Items are `{ label, to }` for in-app routes or `{ label, href }` for external links.
 */
export default function DropdownButton({ label, mainPath, items }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const closeTimerRef = useRef(null);

  const cancelScheduledClose = () => {
    if (closeTimerRef.current != null) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelScheduledClose();
    closeTimerRef.current = window.setTimeout(() => {
      onClose();
      closeTimerRef.current = null;
    }, CLOSE_DELAY_MS);
  };

  const handleEnter = () => {
    cancelScheduledClose();
    onOpen();
  };

  return (
    <Menu
      isOpen={isOpen}
      onClose={onClose}
      placement="bottom-start"
      gutter={6}
      closeOnBlur={false}
    >
      <MenuButton
        as={ChakraButton}
        variant="ghost"
        rightIcon={
          <Icon as={ChevronDown} boxSize={{ base: 4, md: 4 }} strokeWidth={2} />
        }
        bg="transparent"
        color="neutral.text"
        fontWeight="500"
        fontSize={{ base: "14px", md: "16px" }}
        h="auto"
        minH="44px"
        px={{ base: 2, md: 3 }}
        py={2}
        borderRadius="md"
        transition="color 0.2s ease, text-decoration-color 0.2s ease"
        _hover={{
          bg: "transparent",
          color: "brand.primary",
          textDecoration: "underline",
        }}
        _active={{ bg: "transparent", color: "brand.primary" }}
        _expanded={{ bg: "transparent", color: "brand.primary" }}
        _focus={{ boxShadow: "none", outline: "none" }}
        _focusVisible={{ boxShadow: "none", outline: "none" }}
        onMouseEnter={handleEnter}
        onMouseLeave={scheduleClose}
        onClick={() => navigate(mainPath)}
        sx={{
          "&:focus, &:focus-visible": {
            outline: "none !important",
            boxShadow: "none !important",
          },
        }}
      >
        {label}
      </MenuButton>

      <MenuList
        onMouseEnter={handleEnter}
        onMouseLeave={scheduleClose}
        bg="surface.default"
        rounded="lg"
        overflow="hidden"
        boxShadow="md"
        borderWidth="1px"
        borderColor="border.default"
        minW="220px"
        py={0}
        px={0}
        sx={{
          borderRadius: "var(--radius-lg)",
        }}
      >
        {items.map((item) =>
          item.href ? (
            <MenuItem
              key={item.label}
              as="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              color="neutral.text"
              fontSize={{ base: "14px", md: "15px" }}
              fontWeight="400"
              py={2.5}
              px={4}
              borderRadius="none"
              {...menuItemProps}
            >
              {item.label}
            </MenuItem>
          ) : (
            <MenuItem
              key={item.to}
              as={NavLink}
              to={item.to}
              color="neutral.text"
              fontSize={{ base: "14px", md: "15px" }}
              fontWeight="400"
              py={2.5}
              px={4}
              borderRadius="none"
              {...menuItemProps}
              onClick={onClose}
            >
              {item.label}
            </MenuItem>
          )
        )}
      </MenuList>
    </Menu>
  );
}
