import { Box, Text, VStack } from "@chakra-ui/react";

export default function IconBlock() {
    return(
        <VStack spacing="6" alignItems="center">
            <Box
                width="170px"
                height="170px"
                bg="rgb(217, 217, 217)"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Text fontSize="2xl"> ICON </Text>
            </Box>
            {/* Text Below */}
            <Text fontSize="2xl" lineHeight="1.15" textAlign="center">
                Expand Healthcare 
                <br />
                Access
            </Text>
        </VStack>
    )
}