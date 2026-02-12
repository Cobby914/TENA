import { VStack, Text, Image } from "@chakra-ui/react";
import Button from "./Button";

export default function SubteamSection({ src, whoText, buttonText }) {
    return (
        <VStack spacing={{ base: 3, md: 4 }} alignItems="center">
            <Image src={src} alt="placeholder" boxSize={{ base: "200px", md: "225px", lg: "250px" }}></Image>
            <Text fontSize={{ base: "xl", md: "2xl" }} textAlign="center">{whoText}</Text>
            <Button fontWeight="bold" height={{ base: "70px", md: "80px" }} width={{ base: "200px", md: "240px" }} bgColor="rgb(217, 217,217)">{buttonText}</Button>
        </VStack>
    );
}