import { Button as ChakraButton} from "@chakra-ui/react";

export default function Button({ children, ...props }) {
    return (
        // Edit this styling to get consistent buttons
        <ChakraButton
            bg="white"
            color="black"
            fontWeight="normal"
            fontSize="2xl"
            height="75px"
            width="180px"
            borderRadius="none"
        >
            {children}
        </ChakraButton>
    );
}