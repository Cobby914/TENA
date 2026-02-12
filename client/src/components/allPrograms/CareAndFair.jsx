import { Box, VStack } from "@chakra-ui/react";
import CareAndFairCard from "../ui/CareAndFairCard";

export default function CareAndFair() {
    return(
        <Box w="full" py={{ base: 12, md: 16, lg: 40 }}>
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <VStack
                    spacing={{ base: 16, md: 24, lg: 48 }}
                    align="center"
                    width="100%"
                    maxW="1400px"
                    mx="auto"
                >
                    <CareAndFairCard
                        title="Care Navigation"
                        description="To eradicate health disparities by empowering underrepresented individuals, building a diverse healthcare workforce, and connecting communities to resources, care, and opportunities that promote lifelong wellness"
                    >
                    </CareAndFairCard>

                    <CareAndFairCard
                        title="Fair Pre-Health Workforce"
                        description="To eradicate health disparities by empowering underrepresented individuals, building a diverse healthcare workforce, and connecting communities to resources, care, and opportunities that promote lifelong wellness"
                        reversed={true}
                    >
                    </CareAndFairCard>

                    <CareAndFairCard
                        title="Care Navigation"
                        description="To eradicate health disparities by empowering underrepresented individuals, building a diverse healthcare workforce, and connecting communities to resources, care, and opportunities that promote lifelong wellness"
                    >
                    </CareAndFairCard>

                    <CareAndFairCard
                        title="Fit Club"
                        description="To eradicate health disparities by empowering underrepresented individuals, building a diverse healthcare workforce, and connecting communities to resources, care, and opportunities that promote lifelong wellness"
                        reversed={true}
                    >
                    </CareAndFairCard>
                </VStack>
            </Box>
        </Box>
    );    
}