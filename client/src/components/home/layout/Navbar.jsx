import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { NavLink } from "react-router-dom";

import Button from "../../ui/Button";
import main_logo from "../../../assets/transparent_tena_logo.png";
import text_logo from "../../../assets/tena_text_logo.png";

export default function Navbar() {
  return (
    <Box
      as="nav"
      position="sticky"
      top="0"
      zIndex="1000"
      bg="rgb(255, 255, 255)"
      w="100%"
      px={{ base: 4, md: 8, lg: 16 }}
      py={{ base: 3, md: 4 }}
      boxShadow="sm"
    >
      <Flex justify="space-between" align="center">
        {/* Logo Section */}
        <NavLink to="/">
          <Flex align="center" gap={3}>
            <Image
              src={main_logo}
              alt="TENA Logo"
              h={{ base: "40px", md: "50px" }}
              objectFit="contain"
            />
            <Image
              src={text_logo}
              alt="TENA Text Logo"
              h={{ base: "40px", md: "50px" }}
              objectFit="contain"
            />
          </Flex>
        </NavLink>

        {/* Navigation Links */}
        <Flex
          align="center"
          gap={{ base: 2, md: 4 }}
          display={{ base: "none", md: "flex" }} // hide on mobile for now
        >
          <NavLink to="/about">
            <Button rightIcon={<ChevronDown size={18} />}>About Us</Button>
          </NavLink>

          <NavLink to="/programs">
            <Button rightIcon={<ChevronDown size={18} />}>Programs</Button>
          </NavLink>

          <NavLink to="/getInvolved">
            <Button rightIcon={<ChevronDown size={18} />}>Get Involved</Button>
          </NavLink>

          <NavLink to="/donate">
            <Button>Donate</Button>
          </NavLink>

          <NavLink to="/login">
            <Button>
              <LockKeyhole size={28} />
            </Button>
          </NavLink>
        </Flex>
      </Flex>
    </Box>
  );
}
