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
                <Image
                    src={logo}
                    alt="placeholder"
                    boxSize="130px"
                ></Image>
                <Button>TENA Text Logo</Button>
            </Flex>

            {/* Nav Buttons */}
            <Flex
                alignItems="center"
                gap="40px"
            >
                <Button>About Us</Button>
                <Button>Programs</Button>
                <Button>Join Movement</Button>
                <Button>Contact Us</Button>
                <Button>Donate</Button>
            </Flex>            
        </Box>
    );
}