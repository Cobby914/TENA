import { Box, Flex, Image, Menu, MenuButton, MenuList,MenuItem, Button as ChakraButton,} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

import Button from "../../ui/Button";
import main_logo from "../../../assets/transparent_tena_logo.png";
import text_logo from "../../../assets/tena_text_logo.png";

export default function Navbar() {
    return (
        <Box
            as="nav"
            display="flex"
            justifyContent="space-between"
            bg="rgb(217, 217, 217)"
            px="2%"
            height="9vh"
            
            position="sticky"
            top="0"
            zIndex="1000"

            width = "100%"

        >
            {/* Logo/Label */}
            <Flex
                alignItems="center"
                gap="8%"
                height = "100%" 
            >
                <NavLink to="/">
                <Image
                    src={main_logo}
                    alt="placeholder"
                    width = "4vw"
                    height = "6vh"
                    ratio = "64/51"
                ></Image>
                </NavLink>
                <NavLink to="/">
                    <Image src = {text_logo} width = "8vw" height = "4vh"></Image>
                </NavLink>
            </Flex>

            {/* Nav Buttons */}
            <Flex
                alignItems="center"
                gap="0.8vw"
                height = "100%"
            >
                <Menu isLazy>
                    <MenuButton as = {ChakraButton} rightIcon={<ChevronDownIcon />} 
                    width = "11vw" height = "6vh" fontSize = "1.5vw" justifyContent="space-between" 
                    textAlign="left" px="1vw" fontWeight = {600} rounded="4" >About Us</MenuButton>
                    <MenuList minW="100%" w="100%" p = "0" align = "center" rounded = "0"> 
                        <MenuItem as = {ChakraButton} width = "11vw" height = "4vh"  borderRadius="none" fontSize = "1.2vw">
                            <NavLink to = "/about">About Us</NavLink>
                        </MenuItem>
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
                </Menu>



                {/* Currently these pages are still under construction, and will need to be rerouted as needed */}
                 <Menu isLazy>
                    <MenuButton as = {ChakraButton} rightIcon={<ChevronDownIcon />} 
                    width = "12vw" height = "6vh" fontSize = "1.5vw" justifyContent="space-between" 
                    textAlign="left" px="1vw" fontWeight = {600} rounded="4" >Programs</MenuButton>
                    <MenuList minW="100%" w="100%" p = "0" align = "center" borderRadius = "none" rounded = "0">
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/">Programs</NavLink>
                        </MenuItem>
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/" fontSize = "10vw">Care Navigation</NavLink>
                        </MenuItem>
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/">Community Health Fairs</NavLink>
                        </MenuItem>
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/">Pre-Health Workforce</NavLink>
                        </MenuItem>
                        <MenuItem as = {ChakraButton} width = "12vw" height = "5vh"  borderRadius="none" fontSize = "1vw">
                            <NavLink to = "/">FitClub</NavLink>
                        </MenuItem>
                       
                    </MenuList>
                </Menu>

                <NavLink to = "/getInvolved" style={{ display: 'flex', alignItems: 'center' }}>
                    <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw"  rounded="4" fontWeight = {600}>Get Involved</Button>
                </NavLink>
               
               {/* No Functionality for this component yet, but  */}
                <NavLink to = "/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Button width = "8vw" ratio = {8/5} height = "6vh" fontSize = "1.5vw" rounded="4" fontWeight = {600}>Donate</Button>
                </NavLink>
            </Flex>            
        </Box>
    );
}