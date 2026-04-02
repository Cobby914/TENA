import { VStack, Text, Image, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

export default function SubteamSection({ link, src, whoText, buttonText }) {
    return (
        <VStack spacing={{ base: 2, md: 4 }} alignItems="center">
            <Box
                width={{ base: "88px", sm: "104px", md: "210px" }}
                height={{ base: "72px", sm: "84px", md: "120px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Image src={src} alt="placeholder" maxH="100%" maxW="100%" objectFit="contain" />
            </Box>

            <Text fontSize={{ base: "sm", sm: "md", md: "2xl" }} textAlign="center" fontFamily="body" color="brand.primary" fontWeight="700">
                {whoText}
            </Text>
            <Button
                fontWeight="bold"
                mt={{ base: 1, md: 4 }}
                height={{ base: "36px", sm: "42px", md: "65px" }}
                width={{ base: "96px", sm: "110px", md: "240px" }}
                fontSize={{ base: "10px", sm: "11px", md: "16px" }}
                bgColor="brand.heading"
                color="surface.default"
                rounded="3"
                transition="transform 0.22s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.22s ease, background-color 0.22s ease"
                boxShadow="sm"
                _hover={{
                    transform: "translateY(-3px)",
                    boxShadow: "lg",
                    bg: "brand.primary",
                }}
                _active={{
                    transform: "translateY(-1px) scale(0.98)",
                    boxShadow: "md",
                    bg: "brand.primaryHover",
                }}
            >
                <NavLink to={link}>
                    {buttonText}
                </NavLink>
            </Button>
        </VStack>
    );
}