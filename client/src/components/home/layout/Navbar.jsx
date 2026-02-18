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
                <Menu isLazy placement="bottom-start">
                    <MenuButton as = {ChakraButton} rightIcon={<ChevronDownIcon />} 
                    width = "11vw" height = "6vh" fontSize = "1.5vw" justifyContent="space-between" 
                    textAlign="left" px="1vw" fontWeight = {600} rounded="5" >About Us</MenuButton>
                    <MenuList>
                        <MenuItem as ={NavLink} to = "/about">About Us</MenuItem>
                        <MenuItem as ={NavLink} to = "/team">Our Team</MenuItem>
                        <MenuItem as ={NavLink} to = "/board">Our Board</MenuItem>
                        <MenuItem as ={NavLink} to = "/partners">Our Partners</MenuItem>
                    </MenuList>      
                </Menu>



                {/* Currently these pages are still under construction, and will need to be rerouted as needed */}
                 <Menu isLazy>
                    <MenuButton as = {ChakraButton} rightIcon={<ChevronDownIcon />} 
                    width = "11vw" height = "6vh" fontSize = "1.5vw" justifyContent="space-between" 
                    textAlign="left" px="1vw" fontWeight = {600} rounded="5" >Programs</MenuButton>
                    <MenuList>
                        <MenuItem as ={NavLink} to = "/programs" >Programs</MenuItem>
                        <MenuItem as ={NavLink} to = "/">Care Navigation</MenuItem>
                        <MenuItem as ={NavLink} to = "/">Community Health Fairs</MenuItem>
                        <MenuItem as ={NavLink} to = "/">Pre-Health Workforce</MenuItem>
                        <MenuItem as ={NavLink} to = "/">FitClub</MenuItem>
                    </MenuList>
                </Menu>

                <NavLink to = "/getInvolved" style={{ display: 'flex', alignItems: 'center' }}>
                    <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw"  rounded="5" fontWeight = {600}>Get Involved</Button>
                </NavLink>
               
               {/* No Functionality for this component yet, but  */}
                <NavLink to = "/" style={{ display: 'flex', alignItems: 'center' }}>
                    <Button width = "8vw" ratio = {8/5} height = "6vh" fontSize = "1.5vw" rounded="5" fontWeight = {600}>Donate</Button>
                </NavLink>
            </Flex>            
        </Box>
    );
}