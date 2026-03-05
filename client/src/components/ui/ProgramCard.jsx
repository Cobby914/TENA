import { Card, Flex, HStack, Text, Image, Box, Button, Spacer} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function ProgramCard({
    title,
    description,
    imageSrc,
    buttonText,
    ...props
}) {
    return (
        <Card
            w="100%"
            maxW={{ base: "100%", md: "588px" }}
            h={{ base: "auto", md: "305px" }}
            minH={{ base: "350px", md: "305px" }}
            p={{ base: 8, md: 10 }}
            bgColor="white"
            border="0.92px solid rgba(226, 232, 240, 1)"
            borderRadius="md"
            boxShadow="sm"            
            {...props}
        >

            <Text fontWeight={700} fontSize={22}>
                {title}
            </Text>
            <HStack align="flex-start" mt={5} spacing={8} h="180px">
                {/* Image */}
                <Image src={imageSrc} h="full" aspectRatio={1} fallback={<Box bgColor="rgb(217,217,217)" h="full" aspectRatio={1}/>}/>
                <Flex direction="column" flex={1} justify="space-between" h="full" align="stretch">
                    {/* Description */}
                    <Text fontSize={14.7} lineHeight={"150%"}>{description}</Text>
                    {/* Button */}
                    <NavLink to="/getInvolved" >
                        <Button alignSelf={"flex-end"} height={8} borderRadius={6} px={3} bgColor="rgb(237, 242, 247)">
                            <HStack gap={2}>
                                <Text fontWeight={600} fontSize={13} lineHeight={18} textColor="rgb(26, 32, 44)">Learn More</Text>
                                <ChevronRight size={18} style={{marginTop: "3px"}}/>
                            </HStack>
                        </Button>
                    </NavLink>
                </Flex>
            </HStack>
        </Card>
    );
}