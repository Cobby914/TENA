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
            px="2%"
            height="8vw"
            
            position="sticky"
            top="0"
            zIndex="1000"

            width = "99vw"

        >
            {/* Logo/Label */}
            <Flex
                alignItems="center"
                gap="8%" 
                marginTop = "2%"
                marginBottom = "2%"
            >
                <NavLink to="/">
                <Image
                    src={logo}
                    alt="placeholder"
                    width = "8vw"
                    maxHeight = "100%"
                ></Image>
                </NavLink>
                <NavLink to="/">
                    <Button  width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw" marginLeft = "1vw">TENA Text Logo</Button>
                </NavLink>
            </Flex>

            {/* Nav Buttons */}
            <Flex
                alignItems="center"
                gap="0.8vw"
                marginTop = "2%"
                marginBottom = "2%"
            >

                <NavLink to="/about">
                    <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw">About Us</Button>
                </NavLink>
                
                <NavLink to="/programs">
                    <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw">Programs</Button>
                </NavLink>
                
                <NavLink to="/getInvolved">
                    <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw">Get Involved</Button>
                </NavLink>
                
                <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw">Donate</Button>
            </Flex>            
        </Box>
    );
}