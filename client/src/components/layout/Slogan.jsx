import { Box, Flex, VStack, Text } from "@chakra-ui/react";
import Button from "../ui/Button";

export default function Slogan() {
    return (
        <Box
            as="div"
            display="flex"
            justifyContent="space-between"
            bg="rgb(184, 184, 184)"
            px="20"
            height="600px"
        >
            <Flex
                width="800px"
                alignItems="left"
                justifyContent="center"
                flexDirection="column"
                gap="4"
            >
                <VStack spacing="1" alignItems="left">
                    <Text fontSize="8xl" mb="-7">TENA SLOGAN</Text>
                    <Text fontSize="7xl" mb="5">Create.Connect.Empower</Text>
                    <Text fontSize="4xl">Why you should help?</Text>
                    <Text fontSize="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat.</Text>
                </VStack>
            <Button>Donate</Button>
            </Flex>
        </Box>
    );
}