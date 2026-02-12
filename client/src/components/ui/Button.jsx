import { Button as ChakraButton} from "@chakra-ui/react";

export default function Button({ children, ...props }) {
    return (
        <ChakraButton
            bg="white"
            color="black"
            fontWeight="normal"
            fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
            height={{ base: "60px", md: "70px", lg: "75px" }}
            width={{ base: "150px", md: "165px", lg: "180px" }}
            borderRadius="none"
            {...props}
        >
            {children}
        </ChakraButton>
    );
}