import { Text, Box, Flex, VStack, Button } from "@chakra-ui/react";

export default function WhoWeAre() {
    return (
        <Box
            as="section"
            bg="rgb(184, 184, 184)"
            width="100%"
            px="20"
            py="16"
        >
            <Flex direction="column" alignItems="flex=start" maxW="950px">
                <Text fontSize="6xl" fontWeight="normal" mb="6">
                    Who We Are
                </Text>
                {/* Paragraph */}
                <VStack spacing="6" alignItems="flex-start" mb="10">
                    <Text fontSize="lg" lineHeigh="1.35">
                        TENA is a community-centric nonprofit building ecosystems that empower underserved communities to overcome systemic barriers 
                        through optimizing access to resources, knowledge, and entry to healthcare professions.
                    </Text>
                    <Text fontSize="lg" lineHeight="1.35">
                        TENA recognizes that access to quality healthcare, resources, and health education can be difficult to obtain in many
                        communities, and works hard to bridge this gap. Composed primarily of Los Angeles County natives, the team draws upon the 
                        social determinants of health to provide services that support the health and wellness of their neighborhoods and beyond. 
                        TENA believes in empowering others to have the tools, knowledge, and resources they need to live a healthy and enriched life.
                    </Text>
                </VStack>
                {/* Find Out More */}
                <Button
                    bg="white"
                    color="black"
                    fontWeight="normal"
                    borderRadius="none"
                    height="70px"
                    width="220px"
                >
                    Find Out More
                </Button>
            </Flex>
        </Box>
    );
}