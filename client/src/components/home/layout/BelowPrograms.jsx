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
import { useNavigate } from "react-router-dom";
import FadeInWhenVisible from "../ui/FadeInWhenVisible";
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
  const navigate = useNavigate();

  return (
    <Box as="section" bg="surface.section" w="100%" mt={{ base: 20, md: 40 }} py={{ base: 10, md: 28 }}>
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 12, lg: 20 }}>
        <Flex direction="column" align="center">
          <FadeInWhenVisible amount={0.45}>
          <VStack spacing={{ base: 6, md: 8 }} textAlign="center" maxW="1140px">
            <Text
              fontSize={{ base: "24px", sm: "28px", md: "48px", lg: "60px" }}
              fontWeight={700}
              lineHeight={{ base: "1.25", md: "1.1" }}
              maxW="1070px"
              color="neutral.strong"
            >
              A community driven non-profit focused on lasting{" "}
              <Text as="span" color="brand.primary">
                health equity.
              </Text>
            </Text>

            <Text
              fontSize={{ base: "16px", sm: "18px", md: "22px", lg: "30px" }}
              lineHeight="150%"
              letterSpacing={0}
              fontWeight={400}
              mt={{ base: 4, md: 10 }}
              color="neutral.strong"
              maxW="1180px"
            >
              To eradicate health disparities by empowering underrepresented
              individuals, building a diverse healthcare workforce, and
              connecting communities to resources, care, and opportunities that
              promote lifelong wellness.
            </Text>
          </VStack>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.1} amount={0.4}>
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
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.14} amount={0.5}>
          <Button
            type="button"
            onClick={() => navigate("/about")}
            variant="unstyled"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            minW="unset"
            minH="unset"
            h={{ base: "48px", md: "56px" }}
            p={0}
            py={0}
            borderRadius={6}
            mt={{ base: 6, md: 10 }}
            px={{ base: 8, sm: 10, md: 20 }}
            border="none"
            bg="brand.primary"
            color="surface.default"
            cursor="pointer"
            transition="opacity 0.2s ease"
            _hover={{ opacity: 0.68, bg: "brand.primary" }}
            _active={{ opacity: 0.55 }}
            _focus={{ outline: "none", boxShadow: "none" }}
            _focusVisible={{ outline: "none", boxShadow: "none" }}
          >
              <Text as="span" fontWeight={600} fontSize={{ base: 16, md: 18 }} lineHeight="1" color="surface.default">
                About Us
              </Text>
          </Button>
          </FadeInWhenVisible>
        </Flex>
      </Box>
    </Box>
  );
}
