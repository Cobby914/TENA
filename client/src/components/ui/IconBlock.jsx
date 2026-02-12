import { Box, Text, VStack } from "@chakra-ui/react";

export default function IconBlock({ children, ...props }) {
    return(
        <VStack spacing={{ base: 4, md: 6 }} alignItems="center">
            <Box
                width={{ base: "140px", md: "155px", lg: "170px" }}
                height={{ base: "140px", md: "155px", lg: "170px" }}
                bg="rgb(217, 217, 217)"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Text fontSize={{ base: "xl", md: "2xl" }}> ICON </Text>
            </Box>
            {/* Text Below */}
            <Text 
                fontSize={{ base: "xl", md: "2xl" }} 
                lineHeight="1.15" 
                textAlign="center"
            >
                Expand Healthcare 
                <br />
                Access
            </Text>
        </VStack>
    )
}