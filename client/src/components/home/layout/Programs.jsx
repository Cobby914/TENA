import { Box, SimpleGrid} from "@chakra-ui/react";
import ProgramCard from "../../ui/ProgramCard";
import logo from "../../../assets/logoplaceholder.png";

export default function Programs() {
    return (
        <Box
            as="section"
            bg="rgb(255, 255, 255)"
            width="100%"
            py={{ base: 8, md: 12, lg: 16 }}
            minHeight={{ base: "auto", lg: "1200px" }}
        >
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >      
                <SimpleGrid 
                    columns={{ base: 1, md: 2 }} 
                    spacing="0"
                    width="100%"
                >
                    <Box display="flex" justifyContent="flex-end">
                        <ProgramCard
                            title="Program Name"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna"
                            imageSrc={logo}
                            buttonText="Learn More"
                            backgroundColor="rgb(184, 184, 184)"
                        />
                    </Box>
                    <Box display="flex" justifyContent="flex-start">
                        <ProgramCard
                            title="Program Name"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna"
                            imageSrc={logo}
                            buttonText="Learn More"
                            backgroundColor="rgb(217, 217, 217)"
                        />
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                        <ProgramCard
                            title="Program Name"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna"
                            imageSrc={logo}
                            buttonText="Learn More"
                            backgroundColor="rgb(217, 217, 217)"
                        />
                    </Box>
                    <Box display="flex" justifyContent="flex-start">
                        <ProgramCard
                            title="Program Name"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna"
                            imageSrc={logo}
                            buttonText="Learn More"
                            backgroundColor="rgb(184, 184, 184)"
                        />
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    )
}