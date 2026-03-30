import { Text, Box, Flex, VStack, Image, Circle, Container } from "@chakra-ui/react";
import SimpleCircle from "../../ui/SimpleCircle";

const heroImage = "/AboutUs/AboutUs-Hero.jpg";

/** Full-viewport-width strip (breaks out of max-width page wrappers). */
const fullBleedSx = {
    width: "100vw",
    maxWidth: "100vw",
    position: "relative",
    marginLeft: "calc(50% - 50vw)",
};

export default function WhoWeAre() {
    return (
        <Box as="section" bg="#3F5F85" py={{ base: 8, md: 10, lg: 12 }} position="relative" zIndex="1" sx={fullBleedSx}>
            <Container maxW="1536px" px={{ base: 4, sm: 6, md: 8, lg: 10, xl: 12, "2xl": 14 }} centerContent={false}>
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    alignItems="center"
                    justifyContent={{ base: "center", lg: "space-between" }}
                    gap={{ base: 8, md: 10, lg: 8, xl: 10 }}
                    w="100%"
                    mx="auto"
                >
                    <Flex
                        direction="column"
                        alignItems={{ base: "center", lg: "flex-start" }}
                        flex="1 1 auto"
                        minW={0}
                        w="100%"
                        maxW={{ lg: "min(100%, 58rem)" }}
                        textAlign={{ base: "center", lg: "left" }}
                    >
                        <Text
                            fontWeight="700"
                            fontStyle="normal"
                            lineHeight="100%"
                            mb={{ base: 4, md: 6 }}
                            color="#F8F9FB"
                            fontSize={{ base: "24px", md: "clamp(28px, 3.2vw, 48px)" }}
                        >
                            Who We Are
                        </Text>
                        <VStack spacing={{ base: 4, md: 6 }} alignItems={{ base: "center", lg: "flex-start" }} w="100%">
                            <Text
                                lineHeight="150%"
                                fontStyle="normal"
                                fontWeight="400"
                                color="#F8F9FB"
                                fontSize={{ base: "12px", md: "clamp(14px, 1.35vw, 24px)" }}
                                w="100%"
                            >
                                TENA was born from lived experience and community collaboration. What began as
                                grassroots support for families navigating the healthcare system revealed a deeper
                                truth: access alone is not enough without guidance, trust, and relationship.
                            </Text>
                            <Text
                                lineHeight="150%"
                                fontStyle="normal"
                                fontWeight="400"
                                color="#F8F9FB"
                                fontSize={{ base: "12px", md: "clamp(14px, 1.35vw, 24px)" }}
                                w="100%"
                            >
                                TENA&apos;s founders, inspired by community voices and driven by data, built an
                                organization that meets people holistically blending care navigation, preventive
                                outreach, and workforce development in ways that truly uplift communities
                            </Text>
                        </VStack>
                    </Flex>
                    <Box
                        flexShrink={0}
                        position="relative"
                        w="fit-content"
                        mx={{ base: "auto", lg: 0 }}
                    >
                        <Box
                            position="absolute"
                            zIndex={0}
                            pointerEvents="none"
                            aria-hidden
                            top={{
                                base: "38%",
                                sm: "40%",
                                md: "44%",
                                lg: "46%",
                                xl: "49%",
                                "2xl": "46%",
                            }}
                            left={{
                                base: "41%",
                                sm: "38%",
                                md: "44%",
                                lg: "46%",
                                xl: "49%",
                                "2xl": "46%",
                            }}
                        >
                            <SimpleCircle
                                size={{
                                    base: "220px",
                                    sm: "245px",
                                    md: "265px",
                                    lg: "285px",
                                    xl: "285px",
                                    "2xl": "285px",
                                }}
                                strokeWidth="20px"
                                strokeColor="#092751"
                                opacity={0.18}
                            />
                        </Box>
                        <Circle
                            as={Image}
                            src={heroImage}
                            position="relative"
                            zIndex={1}
                            boxSize={{
                                base: "min(220px, 72vw)",
                                sm: "min(260px, 55vw)",
                                md: "min(300px, 42vw)",
                                lg: "min(280px, 28vw)",
                                xl: "min(360px, 24vw)",
                                "2xl": "min(444px, 22vw)",
                            }}
                            objectFit="cover"
                            borderRadius="full"
                            overflow="hidden"
                            alt="TENA community event"
                        />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}
