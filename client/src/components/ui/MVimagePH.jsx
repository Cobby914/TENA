import { Box, Text } from "@chakra-ui/react";

export default function ImagePlaceholder({
    width = "650px",
    height = "360px",
    label ="IMG",
}) {
    return(
        <Box
            width={width}
            height={height}
            bg="rgb(217, 217, 217)"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Text fontSize="5xl" fontWeight="normal">
                {label}
            </Text>
        </Box>
    )
}