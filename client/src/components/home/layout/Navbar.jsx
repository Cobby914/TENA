import { Box, Flex, Image } from "@chakra-ui/react";
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
                <Image
                    src={logo}
                    alt="placeholder"
                    width = "30%"

                    maxHeight = "100%"
                ></Image>
                <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw" marginLeft = "1vw">TENA Text Logo (HOME)</Button>
            </Flex>

            {/* Nav Buttons */}
            <Flex
                alignItems="center"
                gap="0.8vw"
                marginTop = "2%"
                marginBottom = "2%"
            >
                <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw">About Us</Button>
                <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw">Programs</Button>
                <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw">Join Movement</Button>
                <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw">Contact Us</Button>
                <Button width = "11vw" ratio = {12/5} height = "6vh" fontSize = "1.5vw">Donate</Button>
            </Flex>            
        </Box>
    );
}