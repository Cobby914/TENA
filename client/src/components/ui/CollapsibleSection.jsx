import {Text, Box, Stack, HStack, Icon, Collapse, useDisclosure} from "@chakra-ui/react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function CollapsibleSection ({title, children}) {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <Stack gap={4} align="stretch" bgColor="rgb(244, 244, 244)" width="100%">
            <HStack spacing={4} py={{ base: 4, md: 6, lg: 10 }} px={{ base: 4, md: 5 }} minHeight={{ base: "80px", lg: "133px" }} cursor="pointer" onClick={onToggle}>
                <Icon  boxSize={{ base: "30px", md: "50px", lg: "70px" }}>
                    {isOpen ? <ChevronDown strokeWidth={1} /> : <ChevronRight strokeWidth={1} />}
                </Icon>
                <Text fontSize={{ base: "xl", md: "2xl", lg: "40px" }} fontWeight={400}>
                    {title}
                </Text>
            </HStack>
            <Collapse in={isOpen} animateOpacity>
                <Box width="100%" minHeight={{ base: "auto", lg: "394px" }} pl={{ base: 4, md: 10, lg: 20 }} pb={10}>
                    {children}
                </Box>
                
            </Collapse>
        </Stack>
    );
}