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
import diversifyImg from "./DCEimgs/Diversity.png";
import compassionImg from "./DCEimgs/Compassion.png";
import equityImg from "./DCEimgs/Equity.png";

const valueCards = [
  { imageSrc: diversifyImg, alt: "Diversify icon" },
  { imageSrc: compassionImg, alt: "Compassion icon" },
  { imageSrc: equityImg, alt: "Equity icon" },
];

export default function BelowPrograms() {
  return (
    <Box as="section" bg="white" w="100%" mt={20} py={{ base: 12, md: 20 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 6, md: 12, lg: 20 }}>
        <Flex direction="column" align="center">
          <VStack spacing={{ base: 6, md: 8 }} textAlign="center" maxW="1140px">
            <Text
              fontSize={{ base: "32px", md: "48px", lg: "60px" }}
              fontWeight={700}
              lineHeight="1.1"
              maxW="1070px"
              color="#1573CF"
            >
              A community driven non-profit focused on lasting{" "}
              <Text as="span" color="#5CDAC5">
                health equity
              </Text>
              .
            </Text>

            <Text
              fontSize={{ base: "18px", md: "22px", lg: "30px" }}
              lineHeight="1.6"
              color="#3F5F85"
              maxW="1180px"
            >
              To eradicate health disparities by empowering underrepresented
              individuals, building a diverse healthcare workforce, and
              connecting communities to resources, care, and opportunities that
              promote lifelong wellness.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: 12, md: 20, lg: 28 }}
            mb={{ base: 10, md: 16, lg: 20 }}
            mt={{ base: 16, md: 24, lg: 28 }}
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
                  h={{ base: "132px", md: "160px", lg: "180px" }}
                  objectFit="contain"
                />
              </VStack>
            ))}
          </SimpleGrid>

          <NavLink to="/about">
            <Button
              height={16}
              width={64}
              borderRadius={6}
              px={6}
              bgColor="#5CDAC5"
            >
              <HStack gap={2}>
                <Text
                  fontWeight={600}
                  fontSize={18}
                  lineHeight={28}
                  textColor="rgb(26, 32, 44)"
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
