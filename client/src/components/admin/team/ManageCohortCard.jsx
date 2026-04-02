import { Box, Text, HStack, VStack, Button } from "@chakra-ui/react";

export default function ManageCohortCard ({title, enrollment, status, onClick}) {
    return (
        <VStack width="100%" height="78px" border="1px solid" borderColor="neutral.muted" bgColor="surface.soft" p={3.5} justifyContent="space-between">
            <HStack width="100%" textAlign="left" >
                <Text fontWeight={600} fontSize={16} width="100%">
                    {title}
                </Text>
                <Button onClick={onClick} width="65px" height="25px" border="1px solid" borderColor="neutral.muted" borderRadius={0} px="10px" py="5px" bgColor="surface.soft">
                    <Text fontWeight={500} fontSize={11}>
                        Manage
                    </Text>
                </Button> 
            </HStack>
                <Text fontWeight={400} fontSize={11} textColor="neutral.muted" width="100%;">
                    {enrollment} participants • {status}
                </Text>
        </VStack>
    );
}
