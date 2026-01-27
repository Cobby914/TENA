import { Box, Flex, Text, VStack, SimpleGrid, Button } from "@chakra-ui/react";
import IconBlock from "../../ui/IconBlock";

export default function BelowPrograms() {
    return (
        <Box
            as="section"
            bg="rgb(255, 255, 255)"
            width="100%"
            px="20"
            py="16"
            height="1100px"
        >
            <Flex direction="column" alignItems="center" justifyContent="center">
                {/* Title */}
                <VStack spacing="10" textAlign="center" maxW="1200px" mt="10">
                    <Text fontSize="7xl" fontWeight="normal" lineHeight="1.05">
                        A community driven non-profit 
                        <br />
                        focused on a lasting health equity.
                    </Text>
                    {/*Paragraph*/}
                    <Text fontSize="xl" lineHeight="1.6" maxW="900px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et 
                        dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                        ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu 
                        fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  
                        mollit anim id est laborum.
                    </Text>
                </VStack>
                {/* Icon Rows */}
                <SimpleGrid columns={3} spacing="220px" mt="24" mb="24">
                    <IconBlock />
                    <IconBlock />
                    <IconBlock />
                </SimpleGrid>
                {/* About Us Button */}
                <Button
                    bg="rgb(217, 217, 217)"
                    color="black"
                    fontWeight="bold"
                    borderRadius="none"
                    height="70px"
                    width="260px"
                >
                    About Us
                </Button>
            </Flex>
        </Box>
    );
}