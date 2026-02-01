import { VStack, Center } from "@chakra-ui/react";
import CareAndFairCard from "../ui/CareAndFairCard";

export default function CareAndFair() {
    return(
        <Center w="full" mt={40} mb={40}>
            <VStack
                spacing={48}
                align="center"
                width="80%"
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
        </Center>
    );    
}