import { Box, Button, Card, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";


const buttonHover = {
  bg: "transparent",
  color: "brand.primary",
  borderColor: "brand.primary",
};

function parseRichText(text) {
  const parts = String(text ?? "").split(/\*\*(.*?)\*\*/g);
  return parts.flatMap((part, i) => {
    if (i % 2 === 1) {
      return (
        <Text as="span" key={`bold-${i}`} fontWeight="700">
          {part}
        </Text>
      );
    }

    const subParts = part.split(/(\S+?)\^/g);
    return subParts.map((sub, j) =>
      j % 2 === 1 ? (
        <Text as="span" key={`blue-${i}-${j}`} color="brand.primary">
          {sub}
        </Text>
      ) : (
        sub
      )
    );
  });
}

export default function ProgramCard({
  title,
  description,
  imageSrc,
  link,
  ...props
}) {
  return (
    <Card
      w="100%"
      minW={{ base: "0", md: "600px" }}
      h="100%"
      display="flex"
      flexDirection="column"
      px={{ base: 6, md: 8 }}
      py={{ base: 6, md: 8 }}
      bg="surface.default"
      border="1px solid"
      borderColor="border.light"
      borderRadius="12px"
      boxShadow="sm"
      {...props}
    >
      <VStack align="stretch" spacing={6} flex="1" minH="0">
        <Text
          fontWeight={700}
          fontSize={{ base: "2xl", md: "36px" }}
          lineHeight="1.2"
          color="brand.primary"
        >
          {title}
        </Text>

        <Flex
          direction={{ base: "column", md: "row" }}
          align="stretch"
          gap={{ base: 5, md: 7 }}
          flex="1"
          minH="0"
        >
          <Image
            src={imageSrc}
            alt={title}
            w={{ base: "100%", md: "164px" }}
            h={{ base: "210px", md: "170px" }}
            objectFit="cover"
            borderRadius="4px"
            fallback={
              <Box
                w={{ base: "100%", md: "164px" }}
                h={{ base: "210px", md: "170px" }}
                bg="gray.200"
                borderRadius="4px"
              />
            }
          />

          <Flex direction="column" flex="1" minH={{ base: "auto", md: "170px" }}>
            <Text fontSize={{ base: "md", md: "18px" }} lineHeight="1.55" color="neutral.text">
              {parseRichText(description)}
            </Text>

            <Flex justify={{ base: "flex-start", md: "flex-end" }} mt={{ base: 6, md: "auto" }}>
              <NavLink to={link}>
                <Button
                  height="40px"
                  borderRadius="8px"
                  px={4}
                  bg="brand.primary"
                  color="surface.default"
                  border="2px solid"
                  borderColor="brand.primary"
                  transition="background 0.2s ease, color 0.2s ease, border-color 0.2s ease"
                  _hover={buttonHover}
                  _active={buttonHover}
                >
                  <HStack gap={2}>
                    <Text fontWeight={600} fontSize="14px" lineHeight="20px">
                      Learn More
                    </Text>
                    <ChevronRight size={16} aria-hidden />
                  </HStack>
                </Button>
              </NavLink>
            </Flex>
          </Flex>
        </Flex>
      </VStack>
    </Card>
  );
}
