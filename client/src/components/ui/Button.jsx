import { Button as ChakraButton } from "@chakra-ui/react";

export default function Button({ children, ...props }) {
  return (
    <ChakraButton
      bg="white"
      color="black"
      fontWeight="600"
      fontSize={{ base: 10, md: 20}}
      height={{ base: "60px", md: "60px"}}
      width={{ base: "150px", md: "160px" }}
      borderRadius="none"
      transition="background-color 0.2s ease, transform 0.1s ease"
      _hover={{}}
      _active={{
        transform: "scale(0.98)",
        filter: "brightness(0.95)",
      }}
      _focusVisible={{
        outline: "2px solid",
        outlineColor: "var(--color-brand-accent)",
        outlineOffset: "2px",
      }}
      {...props}
    >
      {children}
    </ChakraButton>
  );
}
