import { useRef, useEffect, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button as ChakraButton,
  IconButton,
  Flex,
  Icon,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const CLOSE_DELAY_MS = 120;

const menuItemProps = {
  transition:
    "background-color 0.18s ease, color 0.18s ease, padding-left 0.18s ease",
  _hover: {
    bg: "surface.muted",
    color: "neutral.strong",
    pl: 5,
  },
  _active: {
    bg: "surface.muted",
    color: "neutral.strong",
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
    "&[data-focus], &[data-focus-visible]": {
      boxShadow: "none !important",
      outline: "none !important",
    },
    "&.active": {
      background: "transparent !important",
    },
  },
};

export default function DropdownButton({ label, mainPath, items, onClose: onNavClose }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const closeTimerRef = useRef(null);
  const isNarrowViewport = useBreakpointValue({ base: true, md: false });
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setHasHover(mq.matches);
    const handler = (e) => setHasHover(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const isMobileNav = isNarrowViewport && !hasHover;

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

  const toggleMobileMenu = () => {
    if (isOpen) {
      onClose();
      return;
    }
    onOpen();
  };

  if (isMobileNav) {
    return (
      <Flex direction="column" w="100%">
        <Flex align="center" justify="space-between" w="100%">
          <ChakraButton
            as={NavLink}
            to={mainPath}
            variant="ghost"
            bg="transparent"
            color="neutral.text"
            fontWeight="500"
            fontSize="18px"
            h="auto"
            minH="44px"
            px={2}
            py={2}
            borderRadius="md"
            textDecoration="underline"
            whiteSpace="nowrap"
            transition="color 0.2s ease"
            _hover={{ bg: "transparent", color: "brand.primary" }}
            _active={{ bg: "transparent", color: "brand.primary" }}
            _focusVisible={{ outline: "2px solid", boxShadow: "none" }}
            onClick={onNavClose}
          >
            {label}
          </ChakraButton>

          <Menu isOpen={isOpen} onClose={onClose} placement="bottom-start" gutter={4} closeOnBlur>
            <MenuButton
              as={IconButton}
              aria-label={`Open ${label} menu`}
              icon={<Icon as={ChevronDown} boxSize={4} strokeWidth={2} />}
              variant="ghost"
              minW="36px"
              h="36px"
              p={1}
              borderRadius="md"
              bg="transparent"
              color={isOpen ? "brand.primary" : "neutral.text"}
              _active={{ bg: "transparent", color: "brand.primary" }}
              _focusVisible={{ outline: "none", boxShadow: "none" }}
              onClick={toggleMobileMenu}
              sx={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s ease, color 0.2s ease",
              }}
            />
            <MenuList
              bg="surface.default"
              rounded="lg"
              overflow="hidden"
              boxShadow="md"
              borderWidth="1px"
              borderColor="border.default"
              minW="200px"
              py={0}
              px={0}
              sx={{ borderRadius: "var(--radius-lg)" }}
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
                    fontWeight="400"
                    fontSize="16px"
                    py={3}
                    px={4}
                    borderRadius="none"
                    {...menuItemProps}
                  >
                    {item.label}
                  </MenuItem>
                ) : (
                  <MenuItem
                    key={item.to}
                    as="a"
                    href={item.to}
                    color="neutral.text"
                    fontWeight="400"
                    fontSize="16px"
                    py={3}
                    px={4}
                    borderRadius="none"
                    {...menuItemProps}
                    onClick={(e) => {
                      e.preventDefault();
                      onClose();
                      onNavClose?.();
                      navigate(item.to);
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ),
              )}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    );
  }

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
        rightIcon={<Icon as={ChevronDown} boxSize={4} strokeWidth={2} />}
        bg="transparent"
        color="neutral.text"
        fontWeight="500"
        h="auto"
        minH="clamp(40px, 4.5vw, 64px)"
        px={{ base: 1, md: 2 }}
        py={2}
        borderRadius="md"
        whiteSpace="nowrap"
        transition="color 0.2s ease, text-decoration-color 0.2s ease"
        _hover={{ bg: "transparent", color: "brand.primary", textDecoration: "underline" }}
        _active={{ bg: "transparent", color: "brand.primary" }}
        _expanded={{ bg: "transparent", color: "brand.primary" }}
        _focus={{ boxShadow: "none !important", outline: "none !important", bg: "transparent" }}
        _focusVisible={{ boxShadow: "none !important", outline: "none !important", bg: "transparent" }}
        textDecoration="none"
        onMouseEnter={handleEnter}
        onMouseLeave={scheduleClose}
        onClick={() => navigate(mainPath)}
        sx={{
          fontSize: "clamp(9px, 2.2vw, 24px)",
          "&:focus, &:focus-visible": {
            outline: "none !important",
            boxShadow: "none !important",
            background: "transparent !important",
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
        minW="200px"
        py={0}
        px={0}
        sx={{ borderRadius: "var(--radius-lg)" }}
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
              fontWeight="400"
              py={3}
              px={4}
              borderRadius="none"
              {...menuItemProps}
              sx={{ ...menuItemProps.sx, fontSize: "clamp(9px, 1.8vw, 20px)" }}
            >
              {item.label}
            </MenuItem>
          ) : (
            <MenuItem
              key={item.to}
              as="a"
              href={item.to}
              color="neutral.text"
              fontWeight="400"
              py={3}
              px={4}
              borderRadius="none"
              {...menuItemProps}
              sx={{ ...menuItemProps.sx, fontSize: "clamp(9px, 1.8vw, 20px)" }}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                navigate(item.to);
              }}
            >
              {item.label}
            </MenuItem>
          ),
        )}
      </MenuList>
    </Menu>
  );
}