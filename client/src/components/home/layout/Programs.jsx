import { Box, Flex, SimpleGrid} from "@chakra-ui/react";
import ProgramCard from "../../ui/ProgramCard";
import logo from "../../../assets/logoplaceholder.png";

export default function Programs() {
    return (
        <Box
            as="section"
            bg="rgb(255, 255, 255)" //Light Gray Section
            width="100%"
            px="20"
            py="16"
            height="1200px"
        >
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <SimpleGrid columns={2} spacing="0">
                    <ProgramCard
                        title="Program Name"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna"
                        imageSrc={logo}
                        buttonText="Learn More"
                        backgroundColor="rgb(184, 184, 184)"
                    />
                    <ProgramCard
                        title="Program Name"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna"
                        imageSrc={logo}
                        buttonText="Learn More"
                        backgroundColor="rgb(217, 217, 217)"
                    />
                    <ProgramCard
                        title="Program Name"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna"
                        imageSrc={logo}
                        buttonText="Learn More"
                        backgroundColor="rgb(217, 217, 217)"
                    />
                    <ProgramCard
                        title="Program Name"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna"
                        imageSrc={logo}
                        buttonText="Learn More"
                        backgroundColor="rgb(184, 184, 184)"
                    />
                </SimpleGrid>
            </Flex>
        </Box>
    )
}