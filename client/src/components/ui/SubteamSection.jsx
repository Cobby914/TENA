import { VStack, Text, Image } from "@chakra-ui/react";
import Button from "./Button";

export default function SubteamSection({ src, whoText, buttonText }) {
    return (
        <VStack spacing="4" alignItems="center">
            <Image src={src} alt="placeholder" boxSize="250px"></Image>
            <Text fontSize="2xl" textAlign="center">{whoText}</Text>
            <Button fontWeight="bold" height="80px" width="240px" bgColor="rgb(217, 217,217)">{buttonText}</Button>
        </VStack>
    );
}