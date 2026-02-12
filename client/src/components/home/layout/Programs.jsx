import { Box, SimpleGrid } from "@chakra-ui/react";
import ProgramCard from "../../ui/ProgramCard";
import logo from "../../../assets/logoplaceholder.png";

export default function Programs() {
    return (
        <Box
            as="section"
            bg="white"
            width="100%"
            py={{ base: 8, md: 12, lg: 16 }}
        >
            <Box
                maxW="1400px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <SimpleGrid 
                    columns={{ base: 1, md: 2 }} 
                    spacing={8}
                >
                    <ProgramCard
                        title="Program Name"
                        description="Lorem ipsum dolor sit amet..."
                        imageSrc={logo}
                        buttonText="Learn More"
                        backgroundColor="rgb(184, 184, 184)"
                    />

                    <ProgramCard
                        title="Program Name"
                        description="Lorem ipsum dolor sit amet..."
                        imageSrc={logo}
                        buttonText="Learn More"
                        backgroundColor="rgb(217, 217, 217)"
                    />

                    <ProgramCard
                        title="Program Name"
                        description="Lorem ipsum dolor sit amet..."
                        imageSrc={logo}
                        buttonText="Learn More"
                        backgroundColor="rgb(217, 217, 217)"
                    />

                    <ProgramCard
                        title="Program Name"
                        description="Lorem ipsum dolor sit amet..."
                        imageSrc={logo}
                        buttonText="Learn More"
                        backgroundColor="rgb(184, 184, 184)"
                    />
                </SimpleGrid>
            </Box>
        </Box>
    );
}
