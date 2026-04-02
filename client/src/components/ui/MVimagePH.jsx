import { Box, Text } from "@chakra-ui/react";

export default function ImagePlaceholder({
    width = "100%",
    height = "450px",
    label = "IMG",
}) {
    return(
        <Box
            width={width}
            maxW={{ base: "100%", lg: "800px" }}
            height={{ base: "300px", md: "375px", lg: height }}
            bg="neutral.muted"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Text fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} fontWeight="normal">
                {label}
            </Text>
        </Box>
    )
}