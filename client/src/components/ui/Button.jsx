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
      _hover={"none"}
      _active={"none"}
      {...props}
    >
      {children}
    </ChakraButton>
  );
}
