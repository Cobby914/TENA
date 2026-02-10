import { Box, Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import logo from "../../../assets/logoplaceholder.png";

export default function Navbar() {
    return (
        <Box
            as="nav"
            display="flex"
            justifyContent="space-between"
            bg="rgb(217, 217, 217)"
            px="10"
            height="150px"
            position="sticky"
            top="0"
            zIndex="1000"
        >
            {/* Logo/Label */}
            <Flex
                alignItems="center"
                gap="50px" 
            >
                <NavLink to="/">
                <Image
                    src={logo}
                    alt="placeholder"
                    boxSize="130px"
                ></Image>
                </NavLink>
                <NavLink to="/">
                    <Button>TENA Text Logo</Button>
                </NavLink>
            </Flex>

            {/* Nav Buttons */}
            <Flex
                alignItems="center"
                gap="40px"
            >
                <NavLink to="/about">
                    <Button>About Us</Button>
                </NavLink>
                
                <NavLink to="/programs">
                    <Button>Programs</Button>
                </NavLink>
                
                <NavLink to="/getInvolved">
                    <Button>Join Movement</Button>
                </NavLink>
                
                <Button>Contact Us</Button>
                <Button>Donate</Button>
            </Flex>            
        </Box>
    );
}