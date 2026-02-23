import { Box, Text, HStack, VStack, Button } from "@chakra-ui/react";

export default function ManageCohortCard ({title, enrollment, status}) {
    return (
        <VStack width="100%" height="78px" border="1px solid rgb(153,153,153)" bgColor="rgb(249,249,249)" p={3.5} justifyContent="space-between">
            <HStack width="100%" textAlign="left" >
                <Text fontWeight={600} fontSize={16} width="100%">
                    {title}
                </Text>
                <Button width="65px" height="25px" border="1px solid rgb(102,102,102)" borderRadius={0} px="10px" py="5px" bgColor="rgb(245,245,245)">
                    <Text fontWeight={500} fontSize={11}>
                        Manage
                    </Text>
                </Button> 
            </HStack>
                <Text fontWeight={400} fontSize={11} textColor="rgb(102,102,102)" width="100%;">
                    {enrollment} participants • {status}
                </Text>
        </VStack>
    );
}
