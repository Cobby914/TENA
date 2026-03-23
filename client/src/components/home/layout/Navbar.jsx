import {
  Box,
  Flex,
  Image,
  MenuList,
  MenuItem,
  Icon,
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
  const menuAnimation={
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
      height="10vh"


    >
      <Flex align="center" gap={0} height="100%">
        {/* Logo Section */}
        <NavLink to="/">
            <Image
              src={main_logo} 
              alt="TENA Logo"
              width={{base: 35, lg: 51}}
              height={{base: 30, lg: 45}}
            />
        </NavLink>
        <NavLink to="/">
            <Image
              src={text_logo}
              alt="TENA Text Logo"
              width={{base: 120, lg: 140}}
              height={{base: 38, lg: 37}}
              display={{ base: "none", md: "flex" }}
            />
        </NavLink>
        </Flex>

        {/* Navigation Links */}
        <Flex
        align="center" gap={{base: 5, lg: 8}} height="100%"
        //display={{ base: "none", md: "flex" }} // hide on mobile for now
        >
          <NavLink to="/about">
            <DropdownButton text="About Us" rightIcon={<Icon as={ChevronDown} boxSize={{ base: "12px", lg: "18px"}} />}>
              <MenuList motionProps={menuAnimation} mt={2} minW="100%" width="125%" rounded={8}>
                <MenuItem as={ChakraButton} fontWeight={400} width="100%" height="auto"  borderRadius={0} fontSize={{base: 12, lg:16}} textAlign={"left"} justifyContent={"flex-start"}>
                    <NavLink to="/team">Our Team</NavLink>
                </MenuItem>
                <MenuItem as={ChakraButton} fontWeight={400} width="100%" height="auto"   borderRadius={0}  fontSize={{base: 12, lg:16}} textAlign={"left"} justifyContent={"flex-start"}>
                    <NavLink to="/board">Our Board</NavLink>
                 </MenuItem>
                <MenuItem as={ChakraButton} fontWeight={400} width="100%" height="auto"  borderRadius={0} fontSize={{base: 12, lg:16}} textAlign={"left"} justifyContent={"flex-start"}>
                    <NavLink to="/partners">Our Partners</NavLink>
                 </MenuItem>
              </MenuList>
            </DropdownButton>
          </NavLink>

          <NavLink to="/programs">
            <DropdownButton text="Programs" rightIcon={<Icon as={ChevronDown} boxSize={{ base: "12px", lg: "18px"}} />} >
              <MenuList motionProps={menuAnimation} mt={2} minW="100%" width="125%" fontSize="1.2vw"  align="center" rounded={8} textAlign="left">
                <MenuItem as={ChakraButton} fontWeight={400} width="100%" height="5vh"  borderRadius={0} fontSize={{base: 12, lg:16}} textAlign={"left"} justifyContent={"flex-start"}>
                    <NavLink to="/programs" fontSize="10vw">Care Navigation</NavLink>
                </MenuItem>
                <MenuItem as={ChakraButton} fontWeight={400} width="100%" height="5vh"  borderRadius={0} fontSize={{base: 12, lg:16}} textAlign={"left"} justifyContent={"flex-start"}>
                    <NavLink to="/programs">Community Health Fairs</NavLink>
                </MenuItem>
                <MenuItem as={ChakraButton} fontWeight={400} width="100%" height="5vh"  borderRadius={0} fontSize={{base: 12, lg:16}} textAlign={"left"} justifyContent={"flex-start"}>
                    <NavLink to="/programs">Pre-Health Workforce</NavLink>
                </MenuItem>
                <MenuItem as={ChakraButton} fontWeight={400} width="100%" height="5vh"  borderRadius={0} fontSize={{base: 12, lg:16}} textAlign={"left"} justifyContent={"flex-start"}>
                    <NavLink to="/programs">FitClub</NavLink>
                </MenuItem>
              </MenuList>
            </DropdownButton>          
            </NavLink>

          <NavLink to="/getInvolved" style={{ display: 'flex', alignItems: 'center' }}>
            <DropdownButton text="Get Involved" rightIcon={<Icon as={ChevronDown} boxSize={{ base: "12px", lg: "18px"}} />}>
              <MenuList motionProps={menuAnimation} mt={2} minW="100%" width="125%" fontSize="1.2vw" align="center" rounded={8}>
                <MenuItem as={ChakraButton} fontWeight={400} width="100%" height="5vh" borderRadius={0} fontSize={{base: 12, lg:16}} textAlign={"left"} justifyContent={"flex-start"}>
                    <NavLink to="/getInvolved">Donations</NavLink>
                </MenuItem>
                <MenuItem as={ChakraButton} fontWeight={400} width="100%" height="5vh"  borderRadius={0} fontSize={{base: 12, lg:16}} textAlign={"left"} justifyContent={"flex-start"}>
                    <NavLink to="/getInvolved">Partnership</NavLink>
                </MenuItem>
                <MenuItem as={ChakraButton} fontWeight={400} width="100%" height="5vh"  borderRadius={0} fontSize={{base: 12, lg:16}} textAlign={"left"} justifyContent={"flex-start"}>
                    <NavLink to="/getInvolved">Volunteering</NavLink>
                </MenuItem>                
              </MenuList>
            </DropdownButton>          
            </NavLink>

          <NavLink to="/donate" style={{ display: 'flex', alignItems: 'center' }}>
            <Button width="7vw"
                    height="6vh"
                    fontWeight="600"
                    fontSize={{base: 16, lg: 20}}           
            >Donate</Button>
          </NavLink>

          <NavLink to="/login" style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={Lock} ml={10} width={{base: 5, lg: 6}} height={{base: 5, lg: 6}}></Image>
          </NavLink>
        </Flex>
    </Box>
  );
}
