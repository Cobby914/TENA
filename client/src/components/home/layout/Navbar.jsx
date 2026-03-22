import {
  Box,
  Flex,
  Image,
  MenuList,
  MenuItem,
  Button as ChakraButton,
} from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";
import { LockKeyhole } from "lucide-react";
import { NavLink } from "react-router-dom";
import DropdownButton from "../ui/DropdownButton";
import Button from "../../ui/Button";
import main_logo from "../../../assets/transparent_tena_logo.png";
import text_logo from "../../../assets/tena_text_logo.png";

export default function Navbar() {
  const menuAnimation = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
  };

  return (
    <Box
      as="nav"
      position="sticky"
      top="0"
      zIndex="1000"
      bg="rgb(255, 255, 255)"
      w="100%"
      px={{ base: 6, md: 8}}
      py={4}
      boxShadow="sm"
    >
      <Flex justify="space-between" align="center">
        {/* Logo Section */}
        <NavLink to="/">
          <Flex align="center" gap={0}>
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
            <DropdownButton text="About Us" rightIcon={<ChevronDown size={18} />}>
              <MenuList motionProps={menuAnimation} mt={3} borderRadius={18} boxShadow={"sm"}>
                <MenuItem as={NavLink} to="/team">Our Team</MenuItem>
                <MenuItem as={NavLink} to="/board">Our Board</MenuItem>
                <MenuItem as={NavLink} to="/partners">Our Partners</MenuItem>
              </MenuList>
            </DropdownButton>
          </NavLink>

          <NavLink to="/programs">
            <DropdownButton text="Programs" rightIcon={<ChevronDown size={18} />}>
              <MenuList motionProps={menuAnimation} mt={3} borderRadius={18} boxShadow={"sm"}>
                <MenuItem as={NavLink} to="/programs">Care Navigation</MenuItem>
                <MenuItem as={NavLink} to="/programs">Community Health Fairs</MenuItem>
                <MenuItem as={NavLink} to="/programs">Pre-Health Workforce</MenuItem>
                <MenuItem as={NavLink} to="/programs">Fitclub</MenuItem>
              </MenuList>
            </DropdownButton>          </NavLink>

          <NavLink to="/getInvolved">
            <DropdownButton text="Get Involved" rightIcon={<ChevronDown size={18} />}>
              <MenuList motionProps={menuAnimation} mt={3} borderRadius={18} boxShadow={"sm"}>
                <MenuItem as={NavLink} to="/getInvolved">Donations</MenuItem>
                <MenuItem as={NavLink} to="/getInvolved">Partnership</MenuItem>
                <MenuItem as={NavLink} to="/getInvolved">Volunteering</MenuItem>
              </MenuList>
            </DropdownButton>          </NavLink>

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
