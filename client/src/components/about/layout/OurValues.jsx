import { Box, Flex, VStack, Text, SimpleGrid, Image } from "@chakra-ui/react";
import FadeInWhenVisible from "../../home/ui/FadeInWhenVisible";

const Diversity = "/AboutUs/Values/Diversity.png";
const Integrity = "/AboutUs/Values/Integrity.png";
const Compassion = "/AboutUs/Values/Compassion.png";
const Excellence = "/AboutUs/Values/Excellence.png";
const Equity = "/AboutUs/Values/Equity.png";

const VALUES = [
    { label: "Diversity", src: Diversity },
    { label: "Integrity", src: Integrity },
    { label: "Compassion", src: Compassion },
    { label: "Excellence", src: Excellence },
    { label: "Equity", src: Equity },
];

const VALUES_TOP = VALUES.slice(0, 3);
const VALUES_BOTTOM = VALUES.slice(3, 5);

const topGapX = { base: 2, sm: 4, md: 12, lg: 16 };
const bottomGapX = { base: 3, sm: 6, md: 18, lg: 20 };
const gapY = { base: 10, md: 24, lg: 32 };

function ValueCard({ label, src }) {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={{ base: 2, md: 6 }}
            w="100%"
            maxW={{ base: "100px", sm: "130px", md: "250px" }}
            minH={{ base: "130px", sm: "160px", md: "250px" }}
            bg="surface.soft"
            borderRadius="md"
            py={{ base: 3, md: 6 }}
            px={{ base: 2, md: 4 }}
        >
            <Image src={src} alt="" maxH={{ base: "54px", sm: "70px", md: "120px" }} w="auto" objectFit="contain" />
            <Text fontWeight="700" color="brand.heading" fontSize={{ base: "xs", sm: "sm", md: "2xl" }} textAlign="center">
                {label}
            </Text>
        </Box>
    );
}

export default function OurValues() {
    return (
        <Box
            pt={{ base: 10, md: 16, lg: 20 }}
            pb={{ base: 32, md: 40, lg: 48 }}
            bg="white"
            zIndex="-0.5"
        >
            <Box maxW="2500px" mx="auto" px={{ base: 4, md: 10, lg: 20 }} position="relative" zIndex="1">
                <VStack spacing={{ base: 16, md: 20, lg: 24 }} alignItems="stretch">
                    <FadeInWhenVisible amount={0.45}>
                    <Flex
                        maxW="750px"
                        alignItems="center"
                        justifyContent="center"
                        flexDirection="column"
                        gap={{ base: 3, md: 4 }}
                        mx="auto"
                    >
                        <VStack
                            spacing={{ base: 4, md: 5 }}
                            alignItems="center"
                            justifyContent="center"
                            textAlign="center"
                            position="relative"
                            zIndex="3"
                        >
                            <Text
                                fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
                                mb={0}
                                fontWeight="700"
                                color="brand.primary"
                            >
                                Our Values
                            </Text>
                            <Text fontSize={{ base: "md", md: "lg", lg: "xl" }} fontWeight="400" color="brand.heading">
                                These principles guide how we work with communities, partners, and each other—grounding our
                                programs and relationships in shared purpose.
                            </Text>
                        </VStack>
                    </Flex>
                    </FadeInWhenVisible>

                    <FadeInWhenVisible delay={0.1} amount={0.3} w="100%">
                    <VStack
                        spacing={gapY}
                        align="stretch"
                        maxW={{ base: "100%", md: "1200px" }}
                        w="100%"
                        mx="auto"
                        position="relative"
                        zIndex="3"
                    >
                        <SimpleGrid
                            columns={{ base: 3, md: 3 }}
                            spacingX={topGapX}
                            spacingY={gapY}
                            w="100%"
                            justifyItems="center"
                        >
                            {VALUES_TOP.map(({ label, src }) => (
                                <ValueCard key={label} label={label} src={src} />
                            ))}
                        </SimpleGrid>

                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            gap={bottomGapX}
                            wrap="nowrap"
                            w="100%"
                            rowGap={gapY}
                        >
                            {VALUES_BOTTOM.map(({ label, src }) => (
                                <ValueCard key={label} label={label} src={src} />
                            ))}
                        </Flex>
                    </VStack>
                    </FadeInWhenVisible>
                </VStack>
            </Box>
        </Box>
    );
}
