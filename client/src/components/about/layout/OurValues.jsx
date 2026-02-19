import { Box , Text, SimpleGrid } from "@chakra-ui/react";
import ValueIcon from "../../ui/ValueIcon";
import placeholder from "../../../assets/logoplaceholder.png";

export default function OurValues() {
    return (
        <Box py={{ base: 12, md: 16, lg: 20 }}>
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <Box maxW="1300px" mx="auto" mt={{ base: "100px", md: "175px", lg: "250px" }}>
                    <Text pl={{ base: 0, md: 10 }} fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}>Our Values</Text>
                    <SimpleGrid 
                        columns={{ base: 1, md: 2, lg: 3 }} 
                        mx="auto" 
                        justifyItems="center" 
                        alignItems="center"
                        spacing={{ base: 6, md: 8, lg: 10 }}
                        mt={{ base: 8, md: 10 }}
                    >
                        <ValueIcon src={placeholder} labelText="Compassion"/>
                        <ValueIcon src={placeholder} labelText="Innovation"/>
                        <ValueIcon src={placeholder} labelText="Equity"/>
                        <ValueIcon src={placeholder} labelText="Integrity"/>
                        <ValueIcon src={placeholder} labelText="Leadership"/>
                        <ValueIcon src={placeholder} labelText="Education"/>
                        <ValueIcon src={placeholder} labelText="Diversity"/>
                        <ValueIcon src={placeholder} labelText="Excellence"/>
                        <ValueIcon src={placeholder} labelText="Empowerment"/>
                    </SimpleGrid>
                </Box>
            </Box>
        </Box>
    );
}