import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const joinUsBg = "/programs/JoinUsBackgroundIMG.png";

export default function ProgramJoinUs() {
  return (
    <Box
      as="section"
      width="100%"
      position="relative"
      overflow="hidden"
      minH={{ base: "500px", md: "600px", lg: "750px" }}
      py={{ base: 36, md: 44, lg: 56 }}
    >
      {/* Background image with opacity */}
      <Box
        position="absolute"
        inset={0}
        backgroundImage={`url(${joinUsBg})`}
        backgroundSize="40%"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        opacity={0.25}
        zIndex={0}
      />

      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={6}
        position="relative"
        zIndex={1}
      >
        <Text
          fontFamily="Inter"
          fontSize="72px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="100%"
          textAlign="center"
          color="neutral.text"
        >
          Join Us
        </Text>

        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          lineHeight="150%"
          textAlign="center"
          color="neutral.text"
        >
          Work with us to create limitless change
        </Text>

        <Button
          as={NavLink}
          to="/getInvolved"
          borderRadius="md"
          px={8}
          py={5}
          background="surface.default"
          border="1px solid"
          borderColor="border.light"
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="600"
          lineHeight="28px"
          color="neutral.text"
          _hover={{ background: "gray.100" }}
        >
          Get Involved
        </Button>
      </Flex>
    </Box>
  );
}