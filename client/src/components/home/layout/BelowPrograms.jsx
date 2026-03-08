import { Box, Flex, Text, HStack, VStack, SimpleGrid, Button } from "@chakra-ui/react";
import IconBlock from "../../ui/IconBlock";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function BelowPrograms() {
  return (
    <Box
      as="section"
      bg="white"
      w="100%"
      mt={20}
      py={{ base: 12, md: 20 }}
    >
      <Box
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 12, lg: 20 }}
      >
        <Flex direction="column" align="center">

          {/* Title Section */}
          <VStack
            spacing={{ base: 6, md: 8 }}
            textAlign="center"
            maxW="1140px"
          >
            <Text
              fontSize={{ base: '32px', md: '48px', lg: '60px' }}
              fontWeight={700}
              lineHeight="1.1"
              maxW="1070px"
            >
              A community driven non-profit
              focused on lasting health equity.
            </Text>

            <Text
              fontSize={{ base: '18px', md: '22px', lg: '30px' }}
              lineHeight="1.6"
            >
              To eradicate health disparities by empowering underrepresented individuals, building a diverse healthcare workforce, and connecting communities to resources, care, and opportunities that promote lifelong wellness.
            </Text>
          </VStack>

          {/* Icon Grid */}
          <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing={{ base: 10, md: 12 }}
            mb={{base: 10, md: 25, lg: "80px"}}
            mt={{base: 20, md: 40, lg: 60}}
          >
            <IconBlock text="Our Board" route="/board"/>
            <IconBlock text="Our Team" route="/team"/>
            <IconBlock text="Our Partners" route="/partners" />
          </SimpleGrid>

          {/* Button */}
          <NavLink to="/about" >
            <Button height={16}  width={64} borderRadius={6} px={6} bgColor="rgb(237, 242, 247)">
              <HStack gap={2}>
                <Text fontWeight={600} fontSize={18} lineHeight={28} textColor="rgb(26, 32, 44)">About Us</Text>
                <ChevronRight size={18} style={{marginTop: "3px"}}/>
              </HStack>
            </Button>
          </NavLink>

        </Flex>
      </Box>
    </Box>
  );
}
