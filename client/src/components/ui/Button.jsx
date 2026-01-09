import { Button as ChakraButton} from "@chakra-ui/react";

export default function Button({ children, ...props }) {
    return (
        // Edit this styling to get consistent buttons
        <ChakraButton
            bg="white"
            color="black"
            fontWeight="normal"
            fontSize="2xl"
            height="90px"
            width="220px"
            borderRadius="none"
        >
            {children}
        </ChakraButton>
    );
}