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

import Lock from "../../../assets/Locked.png"

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
      justifyContent="space-between" 
      display="flex"

      position="sticky"
      top="0"
      zIndex="1000"

      bg="rgb(255, 255, 255)"
      w="100%"

      px= "2%"
      boxShadow="sm"
      height = "10vh"


    >
      <Flex align="center" gap="8%" height = "100%">
        {/* Logo Section */}
        <NavLink to="/">
            <Image
              src={main_logo} 
              alt="TENA Logo"
              width = "4vw"
              height = "6vh"
            />
        </NavLink>
        <NavLink to = "/">
            <Image
              src={text_logo}
              alt="TENA Text Logo"
              width = "8vw" height = "4vh"
            />
        </NavLink>
        </Flex>

        {/* Navigation Links */}
        <Flex
        align="center" gap="3vw" height = "100%"
          //display={{ base: "none", md: "flex" }} // hide on mobile for now
        >
          <NavLink to="/about">
            <DropdownButton text="About Us" rightIcon={<ChevronDown size= "1.2vw" />}>
              <MenuList motionProps={menuAnimation} minW="100%" width = "10vw" fontSize = "1.2vw" p = "0" align = "center" rounded = "0">
                <MenuItem as = {ChakraButton} width = "11vw" height = "4vh"  borderRadius="none" fontSize = "1.2vw">
                    <NavLink to = "/team">Our Team</NavLink>
                </MenuItem>
                <MenuItem as = {ChakraButton} width = "11vw" height = "4vh"   borderRadius="none" fontSize = "1.2vw">
                    <NavLink to = "/board">Our Board</NavLink>
                 </MenuItem>
                <MenuItem as = {ChakraButton} width = "11vw" height = "4vh"  borderRadius="none" fontSize = "1.2vw">
                    <NavLink to = "/partners">Our Partners</NavLink>
                 </MenuItem>
              </MenuList>
            </DropdownButton>
          </NavLink>

          <NavLink to="/programs">
            <DropdownButton text="Programs" rightIcon={<ChevronDown size="1.2vw" />}>
              <MenuList motionProps={menuAnimation} minW="100%" width = "10vw" fontSize = "1.2vw" p = "0" align = "center" rounded = "0">
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/programs" fontSize = "10vw">Care Navigation</NavLink>
                        </MenuItem>
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/programs">Community Health Fairs</NavLink>
                        </MenuItem>
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/programs">Pre-Health Workforce</NavLink>
                        </MenuItem>
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/programs">FitClub</NavLink>
                        </MenuItem>
              </MenuList>
            </DropdownButton>          
            </NavLink>

          <NavLink to="/getInvolved" style={{ display: 'flex', alignItems: 'center' }}>
            <DropdownButton text="Get Involved" width = "12.5vw" rightIcon={<ChevronDown size="1.2vw" />}>
              <MenuList motionProps={menuAnimation} minW="100%" width = "12.5vw" fontSize = "1.2vw" p = "0" align = "center" rounded = "0">
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/getInvolved">Donations</NavLink>
                        </MenuItem>
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/getInvolved">Partnership</NavLink>
                        </MenuItem>
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/getInvolved">Volunteering</NavLink>
                        </MenuItem>                

              </MenuList>
            </DropdownButton>          
            </NavLink>

          <NavLink to="/donate" style={{ display: 'flex', alignItems: 'center' }}>
            <Button width = "7vw"
                    height="6vh"
                    fontWeight = "600"
                    fontSize = "1.5vw"            
            >Donate</Button>
          </NavLink>

          <NavLink to = "/login" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src = {Lock} width = "1.65vw" height = "1.875vw"></Image>
          </NavLink>
        </Flex>
    </Box>
  );
}
