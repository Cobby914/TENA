import { Box , Text, SimpleGrid, Flex, Image } from "@chakra-ui/react";
import ValueIcon from "../../ui/ValueIcon";

const placeholder = "/logoplaceholder.png";
const Diversity = "/AboutUs/Values/Diversity.png";
const Integrity = "/AboutUs/Values/Integrity.png";
const Compassion = "/AboutUs/Values/Compassion.png";
const Excellence = "/AboutUs/Values/Excellence.png";
const Equity = "/AboutUs/Values/Equity.png";


export default function OurValues() {
    return (
        <Box py={{ base: 12, md: 16, lg: 20 }} position="relative" zIndex = "1"> 
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
                position="relative" zIndex = "3"

            >
                <Box maxW="1300px" mx="auto" mt={{ base: "100px", md: "175px", lg: "250px" }} align = "center">
                    <Text pl={{ base: 0, md: 10 }} fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}  fontWeight = "700" color = "#1573CF">Our Values</Text>
                    <Flex wrap="wrap" justify="center" align="center"
                        gap={{ base: 12, md: 40, lg: 100 }} mx="auto" mt={{ base: 8, md: 10 }} maxWidth = "1100px">

                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={{base: 8, md: 10 }} 
                width="250px"  height="250px"  background="#E2E8F0"  rounded="5">
                    <Image src = {Diversity}></Image>
                    <Text  fontWeight = "700" color = "#3F5F85" fontSize = "30px">Diversity</Text>
                    </Box>

                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={{base: 8, md: 10 }} 
                width="250px"  height="250px"  background="#E2E8F0"  rounded="5">
                    <Image src = {Integrity}></Image>
                    <Text fontWeight = "700" color = "#3F5F85" fontSize = "30px">Integrity</Text>
                    </Box>


                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={{ base: 8, md: 10 }} 
                width="250px"  height="250px"  background="#E2E8F0"  rounded="5">
                    <Image src = {Compassion}></Image>
                    <Text fontWeight = "700" color = "#3F5F85" fontSize = "30px">Compassion</Text>
                    </Box>

                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={{base: 8, md: 10 }} 
                width="250px"  height="250px"  background="#E2E8F0"  rounded="5">
                    <Image src = {Excellence}></Image>
                    <Text fontWeight = "700" color = "#3F5F85" fontSize = "30px">Excellence</Text>
                    </Box>


                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={{ base: 8, md: 10 }} 
                width="250px"  height="250px"  background="#E2E8F0"  rounded="5">
                    <Image src = {Equity}></Image>
                    <Text  fontWeight = "700" color = "#3F5F85" fontSize = "30px">Equity</Text>
                    </Box>

                    </Flex>
                </Box>
            </Box>
        </Box>
    );
}