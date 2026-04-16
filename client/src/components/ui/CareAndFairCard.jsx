import { Text, Box, Flex, Button, VStack } from "@chakra-ui/react"
import { NavLink } from "react-router-dom";

export default function CareAndFairCard ({
    title,
    description,
    imageSrc,
    link="/",
    reversed
}) {
    return(
        <Flex
            direction={{ base: "column", lg: reversed ? "row-reverse" : "row" }}
            alignItems="center"
            gap={{ base: 6, md: 8, lg: 12 }}
            width="100%"
            maxW="1400px"
            mx="auto"
        >
            <Box
                flex="1"
                width="100%"
                height={{ base: "260px", md: "320px", lg: "420px" }}
                overflow="hidden"
                borderRadius="md"
            >
                <Box
                    width="100%"
                    height="100%"
                    backgroundImage={imageSrc ? `url(${imageSrc})` : undefined}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    bg={!imageSrc ? "neutral.muted" : undefined}
                    transition="transform 0.4s ease"
                    _hover={{ transform: "scale(1.05)" }}
                />
            </Box>

            <Box flex="1" width="100%">
                <VStack h="full" align={{ base: "center", lg: reversed ? "end" : "start" }} justifyContent="space-between" spacing={{ base: 4, md: 6 }}>
                    <Box textAlign={{ base: "center", lg: reversed ? "right" : "left" }} width="100%">
                        <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} fontWeight={700} color="brand.primary">
                            {title}
                        </Text>
                        <Text mt={{ base: 2, md: 3 }} fontSize={{ base: "md", md: "lg", lg: "xl" }} lineHeight={1.5}>
                            {description}
                        </Text>
                    </Box>

                    <Button 
                        as={NavLink}
                        to={link}
                        borderRadius="6px"
                        border="1px solid"
                        borderColor="border.light"
                        h="40px"
                        px="20px"
                        py={0}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        gap="8px"
                        leftIcon={reversed ? <Text>←</Text> : undefined}
                        rightIcon={!reversed ? <Text>→</Text> : undefined}
                        background="surface.soft"
                        fontSize={{ base: "sm", md: "md" }}
                        _hover={{ background: "gray.100" }}
                    >
                        Explore Program
                    </Button>
                </VStack>
            </Box>
        </Flex>
    );
}