import {Box, Text, Image} from "@chakra-ui/react"

export default function MemberCard ({name, position, imageSrc}) {
    return (
        <Box bgColor="rgb(217, 217, 217)" width="300px" height="340px" p={7}>
            {/* Image Placeholder */}
            <Image src={imageSrc} width="242px" height="242px" bgColor="rgb(252, 248, 248)" />
            <Text mt={2} fontSize={22} fontWeight="normal">
                {name}
            </Text>
            <Text fontSize={13} fontWeight="normal">
                {position}
            </Text>
        </Box>
    )
}