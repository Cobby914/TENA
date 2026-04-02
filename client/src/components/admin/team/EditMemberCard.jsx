import { Box, Text, HStack, VStack, Button } from "@chakra-ui/react";

export default function EditMemberCard ({name, position, onClick}) {
    return (
        <HStack width="100%" height="62px" border="1px solid" borderColor="neutral.muted" bgColor="surface.soft" p={3} justifyContent="space-between">
            <VStack width="667px" gap={-1} textAlign="left" >
                <Text fontWeight={600} fontSize={16} width="100%">
                    {name}
                </Text>
                <Text fontWeight={400} fontSize={11} textColor="neutral.muted" width="100%">
                    {position}
                </Text>
            </VStack>

            <Button onClick={onClick} width="43px" height="25px" border="1px solid" borderColor="neutral.muted" borderRadius={0} px="10px" py="5px" bgColor="surface.soft">
                <Text fontWeight={500} fontSize={11}>
                    Edit
                </Text>
            </Button> 
        </HStack>
    );
}
