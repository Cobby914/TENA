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
      width={{ base: "100%", md: "230px" }}
      height={{ base: "200px", md: "220px" }}
      minH={{ base: "200px", md: "200px" }}
      shadow={false}
    >
      <VStack align="stretch" justify="space-between" h="100%" w="100%">
        {/* Title */}
        <Text
          w="100%"
          textAlign={"center"}
          fontWeight={700}
          fontSize={{ base: 24, md: 26, lg: 30 }}
          lineHeight={"133%"}
          textColor="#3F5F85"
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
          mt={1}
          textColor="#1D232E"
        >
          {description}
        </Text>

        {/* Button for Links */}
        <NavLink to={link}>
          <Button
            bgColor="#1573CF"
            w="full"
            height={{ base: "35px", md: "40px" }}
            borderRadius={6}
            px={4}
          >
            <Text
              fontSize={{ base: 14, lg: 16 }}
              fontWeight={600}
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
