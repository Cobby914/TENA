import { VStack, Text, Image, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function SubteamSection({ link, src, whoText, buttonText }) {
    return (
        <VStack spacing={{ base: 3, md: 4 }} alignItems="center">
            <Box
                width={{ base: "180px", md: "210px" }}
                height="120px"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Image src={src} alt="placeholder" maxH="100%" maxW="100%" objectFit="contain" />
            </Box>

            <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center" fontFamily="INTER" color="#1573CF" fontWeight="700">
                {whoText}
            </Text>
            <Button
                fontWeight="bold"
                mt={{ base: 3, md: 4 }}
                height={{ base: "55px", md: "65px" }}
                width={{ base: "200px", md: "240px" }}
                bgColor="#3F5F85"
                color="#FFFFFF"
                rounded="3"
            >
                <NavLink to={link}>
                    {buttonText}
                </NavLink>
            </Button>
        </VStack>
    );
}