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
        _hover={{ bg: "surface.soft" }}
        _active={{ bg: "surface.muted" }}
        _expanded={{ bg: "surface.soft" }}
        onMouseEnter={handleEnter}
        onMouseLeave={scheduleClose}
        onClick={() => navigate(mainPath)}
      >
        {label}
      </MenuButton>

      <MenuList
        onMouseEnter={handleEnter}
        onMouseLeave={scheduleClose}
        bg="surface.default"
        borderRadius="lg"
        boxShadow="md"
        borderWidth="1px"
        borderColor="border.default"
        py={2}
        minW="220px"
        p={0}
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
              _hover={{ bg: "surface.soft" }}
              _focus={{ bg: "surface.soft" }}
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
              _hover={{ bg: "surface.soft" }}
              _focus={{ bg: "surface.soft" }}
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
