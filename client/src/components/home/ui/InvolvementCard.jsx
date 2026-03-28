import { Box, Text, Button, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function InvolvementCard({
  title,
  description,
  linkname,
  link,
}) {
  return (
    <Box
      bgColor="white"
      width={{ base: "100%", md: "235px" }}
      height={{ base: "200px", md: "220px" }}
      minW={{ base: "100%", md: "235px" }}
      minH={{ base: "200px", md: "220px" }}
      shadow={false}
    >
      <VStack align="stretch" h="100%" w="100%">
        {/* Title */}
        <Text
          w="100%"
          textAlign={"center"}
          fontWeight={700}
          fontSize={{ base: 24, md: 26, lg: 30 }}
          lineHeight={"133%"}
          textColor="#3F5F85"
          mb={2}
        >
          {title}
        </Text>

        {/* Description */}
        <Text
          fontSize={{ base: 18, md: 20, lg: 24 }}
          fontWeight={400}
          w="full"
          textAlign={"center"}
          lineHeight={"150%"}
          letterSpacing={0}
          textColor="rgba(29, 35, 46, 1)"
        >
          {description}
        </Text>

        {/* Button for Links */}
        <NavLink to={link}>
          <Button
            bgColor="#1573CF"
            w="full"
            borderRadius={8}
            p={6}
            mt={8}
          >
            <Text
              fontSize={{ base: 14, lg: 16 }}
              fontWeight={500}
              textColor="#FFFFFF"
            >
              {linkname}
            </Text>
          </Button>
        </NavLink>
      </VStack>
    </Box>
  );
}
