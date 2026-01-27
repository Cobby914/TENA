import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import ValueIcon from "../../ui/ValueIcon";
import placeholder from "../../../assets/logoplaceholder.png";

export default function OurValues() {
    return (
        <Flex flexDirection="column" width="1300px" mx="auto" mt="250px">
            <Text pl="10" fontSize="6xl">Our Values</Text>
            <SimpleGrid columns={3} width="1300px" height="1300px" mx="auto" justifyItems="center" alignItems="center">
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
        </Flex>
    );
}