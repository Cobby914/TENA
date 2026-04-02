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
        >
            <Box
                flex="1"
                width="100%"
                height={{ base: "250px", md: "320px", lg: "430px" }}
                backgroundImage={imageSrc ? `url(${imageSrc})` : undefined}
                backgroundSize="cover"
                backgroundPosition="center"
                backgroundRepeat="no-repeat"
                bg={!imageSrc ? "neutral.muted" : undefined}
            />

            <Box
                flex="1"
                width="100%"
            >
                <VStack h="full" align={{ base: "center", lg: reversed ? "end" : "start" }} justifyContent="space-between" spacing={{ base: 6, md: 8 }}>
                    <Box textAlign={{ base: "center", lg: reversed ? "right" : "left" }} width="100%">
                        <Text fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }} fontWeight={700} color="brand.primary">
                            {title}
                        </Text>
                        <Text mt={{ base: 3, md: 5 }} fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} lineHeight={1.25}>
                            {description}
                        </Text>
                    </Box>

                    <Button 
                        as={NavLink}
                        to={link}
                        borderRadius="6px"
                        border="1px solid"
                        borderColor="border.light"
                        h="48px"
                        px="24px"
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