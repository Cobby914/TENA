import { Box, Button, Card, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

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
      minW="600px"
      minH={{ base: "auto", md: "285px" }}
      px={{ base: 6, md: 8 }}
      py={{ base: 6, md: 8 }}
      bg="white"
      border="1px solid #E2E8F0"
      borderRadius="12px"
      boxShadow="sm"
      {...props}
    >
      <VStack align="stretch" spacing={6}>
        <Text
          fontWeight={700}
          fontSize={{ base: "2xl", md: "36px" }}
          lineHeight="1.2"
          color="#1573CF"
        >
          {title}
        </Text>

        <Flex
          direction={{ base: "column", md: "row" }}
          align="stretch"
          gap={{ base: 5, md: 7 }}
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

          <Flex direction="column" flex="1" minH={{ md: "170px" }}>
            <Text fontSize={{ base: "md", md: "18px" }} lineHeight="1.55" color="#1A202C">
              {description}
            </Text>

            <Flex justify={{ base: "flex-start", md: "flex-end" }} mt={{ base: 6, md: "auto" }}>
              <NavLink to={link}>
                <Button
                  height="40px"
                  borderRadius="8px"
                  px={4}
                  bg="#1573CF"
                  color="white"
                  _hover={{ bg: "#0F64B5" }}
                >
                  <HStack gap={2}>
                    <Text fontWeight={600} fontSize="14px" lineHeight="20px" color="white">
                      Learn More
                    </Text>
                    <ChevronRight size={16} />
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
