import {
  Box,
  Flex,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  Button,
  Image,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
const diversifyImg = "/AboutUs/Values/Diversity.png";
const compassionImg = "/AboutUs/Values/Compassion.png";
const equityImg = "/AboutUs/Values/Equity.png";

const valueCards = [
  { imageSrc: diversifyImg, alt: "Diversify icon" },
  { imageSrc: compassionImg, alt: "Compassion icon" },
  { imageSrc: equityImg, alt: "Equity icon" },
];

export default function BelowPrograms() {
  return (
    <Box as="section" bg="rgba(241, 244, 248, 1)" w="100%" mt={{ base: 20, md: 40 }} py={{ base: 10, md: 28 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 12, lg: 20 }}>
        <Flex direction="column" align="center">
          <VStack spacing={{ base: 6, md: 8 }} textAlign="center" maxW="1140px">
            <Text
              fontSize={{ base: "24px", sm: "28px", md: "48px", lg: "60px" }}
              fontWeight={700}
              lineHeight={{ base: "1.25", md: "1.1" }}
              maxW="1070px"
              color="black"
            >
              A community driven non-profit focused on lasting{" "}
              <Text as="span" color="rgba(21, 115, 207, 1)">
                health equity.
              </Text>
            </Text>

            <Text
              fontSize={{ base: "16px", sm: "18px", md: "22px", lg: "30px" }}
              lineHeight="150%"
              letterSpacing={0}
              fontWeight={400}
              mt={{ base: 4, md: 10 }}
              color="black"
              maxW="1180px"
            >
              To eradicate health disparities by empowering underrepresented
              individuals, building a diverse healthcare workforce, and
              connecting communities to resources, care, and opportunities that
              promote lifelong wellness.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 3, lg: 3 }}
            spacing={{ base: 3, sm: 6, md: 20, lg: 28 }}
            mb={{ base: 10, md: 16, lg: 20 }}
            mt={{ base: 10, md: 24, lg: 28 }}
            justifyItems="center"
            w="100%"
            maxW="960px"
          >
            {valueCards.map((card) => (
              <VStack
                key={card.alt}
                spacing={{ base: 5, md: 6 }}
                align="center"
                textAlign="center"
              >
                <Image
                  src={card.imageSrc}
                  alt={card.alt}
                  h={{ base: "84px", sm: "100px", md: "160px", lg: "180px" }}
                  objectFit="contain"
                />
              </VStack>
            ))}
          </SimpleGrid>

          <NavLink to="/about">
            <Button
              h={{ base: 12, md: 14 }}
              borderRadius={6}
              mt={{ base: 6, md: 10 }}
              px={{ base: 8, sm: 10, md: 20 }}
              bgColor="rgba(21, 115, 207, 1)"
              color="white"
            >
              <HStack gap={2}>
                <Text
                  fontWeight={600}
                  fontSize={{ base: 16, md: 18 }}
                  lineHeight={28}
                  textColor="white"
                >
                  About Us
                </Text>
                <ChevronRight size={18} style={{ marginTop: "3px" }} />
              </HStack>
            </Button>
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );
}
