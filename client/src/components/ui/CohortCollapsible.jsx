import {Text, Box, Stack, HStack, Icon, Collapse, useDisclosure} from "@chakra-ui/react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function CohortCollapsible ({title, children}) {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack gap={4} align="flex-start" bgColor="rgb(244, 244, 244)">
            <HStack  spacing={2} py={10} px={5} width="1342px" height="133px">
                <Icon cursor="pointer" onClick={onToggle} width="70px" height="70px">
                    {isOpen ? <ChevronDown strokeWidth={1} /> : <ChevronRight strokeWidth={1} />}
                </Icon>
                <Text fontSize={40} fontWeight={400}>
                    {title}
                </Text>
            </HStack>
            <Collapse in={isOpen} animateOpacity>
                <Box width="1342px" height="394px" pl={20}>
                    {children}
                </Box>
                
            </Collapse>
        </Stack>
    );
}