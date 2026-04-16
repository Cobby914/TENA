import {
  Box,
  Center,
  Grid,
  Heading,
  Image,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import FadeInWhenVisible from "../../home/ui/FadeInWhenVisible";
import { useProgramById } from "../../../hooks/useProgramsById";
const inTheWorksImg = "/program-assets/InTheWorksIMG.png";

function parseStatString(rawStat) {
  if (!rawStat) return null;
  const [title, subtitle] = String(rawStat).split("#", 2).map((part) => part.trim());
  return {
    title: title || "",
    subtitle: subtitle || "",
  };
}

function buildStatsFromProgram(program) {
  const statFields = [program?.stat1, program?.stat2, program?.stat3, program?.stat4];
  if (!statFields.every((value) => value && String(value).trim())) {
    return null;
  }
  return statFields.map((value) => parseStatString(value));
}

export default function MeasurableProgress({ id }) {
  const { program, isLoading: programLoading, errorMsg: programError } = useProgramById(id);

  const programStats = buildStatsFromProgram(program);
  const displayStats = programStats;
  const showStats = Boolean(displayStats && displayStats.length === 4);
  const isLoading = programLoading;
  const errorMsg = programError;

  const measurableProgressSubtexts = {
    3: "Everyone deserves someone in their corner.",
    4: "Your neighborhood coffee shop just became your health resource.",
    5: "Training the healers our communities have always deserved.",
  };

  const selectedMeasurableText = measurableProgressSubtexts[id] ?? measurableProgressSubtexts[3];

  if (isLoading) {
    return (
      <Box as="section" bg="brand.navy" width="100%" py={{ base: 12, md: 16, lg: 20 }}>
        <Center minH="40vh">
          <VStack spacing={4}>
            <Spinner size="xl" color="surface.default" thickness="4px" />
            <Text color="surface.default">Loading measurable progress...</Text>
          </VStack>
        </Center>
      </Box>
    );
  }

  if (errorMsg) {
    return (
      <Box as="section" bg="brand.navy" width="100%" py={{ base: 12, md: 16, lg: 20 }}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 10, lg: 20 }}>
          <Box bg="surface.glass" borderRadius="2xl" p={{ base: 6, md: 8 }}>
            <Heading fontSize={{ base: "3xl", md: "5xl" }} color="surface.default" mb={4}>
              Measurable Progress
            </Heading>
            <Text color="gray.200">{errorMsg}</Text>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box as="section" bg="brand.navy" width="100%" py={{ base: 12, md: 16, lg: 20 }} borderRadius="3xl" overflow="hidden">
      <Box maxW="2500px" mx="auto" px={{ base: 14, sm: 24, md: 52, lg: 80 }}>
        <Box bg="brand.navy" borderRadius="3xl" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 8, md: 10, lg: 12 }}>
          <FadeInWhenVisible
            w="100%"
            amount={0.4}
            maxW="920px"
            mx={showStats ? 0 : "auto"}
            mb={{ base: 10, md: 14 }}
            textAlign={showStats ? { base: "center", md: "left" } : "center"}
          >
            <Heading
              as="h2"
              fontSize={{ base: "4xl", sm: "4xl", md: "6xl", lg: "7xl" }}
              lineHeight={1.02}
              color="surface.default"
              fontWeight="800"
            >
              {showStats ? "Measurable Progress" : "In the Works"}
            </Heading>
            <Text
              mt={{ base: 5, md: 6 }}
              fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
              lineHeight={1.3}
              color="gray.200"
              textAlign={showStats ? { base: "left", md: "left" } : "center"}
            >
              {showStats
                ? selectedMeasurableText
                : "Check back soon and join us in developing progress."}
            </Text>
          </FadeInWhenVisible>

          {!showStats && (
            <FadeInWhenVisible w="100%" amount={0.35} delay={0.08}>
            <Box textAlign="center" mt={{ base: 8, md: 10 }}>
              <Image
                src={inTheWorksImg}
                alt="In The Works"
                mx="auto"
                maxW={{ base: "90px", md: "120px", lg: "150px" }}
                w="100%"
              />
              <Box
                mt={{ base: 8, md: 10 }}
                position="relative"
                bg="brand.accentFaint"
                borderRadius="0 15px 15px 0"
                px={{ base: 6, md: 8 }}
                py={{ base: 6, md: 8 }}
                display="inline-block"
                textAlign="left"
                maxW={{ base: "full", md: "840px", lg: "980px" }}
              >
                <Box
                  position="absolute"
                  left={0}
                  top={0}
                  bottom={0}
                  w="8px"
                  bg="brand.accent"
                  borderRadius="0 5px 5px 0"
                />
                <Box pl={{ base: 3, md: 4 }}>
                  <Text
                    color="gray.200"
                    fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
                    lineHeight={1.5}
                    fontWeight="500"
                  >
                    We believe every person deserves access to quality healthcare — regardless of zip code, income, or background. TENA trains community health workers from within the communities they serve.
                  </Text>
                  <Text
                    mt={4}
                    color="brand.accent"
                    fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
                    fontWeight="500"
                  >
                    — TENA
                  </Text>
                </Box>
              </Box>
            </Box>
            </FadeInWhenVisible>
          )}

          {showStats ? (
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} rowGap={{ base: 4, md: 5, lg: 6 }} columnGap={{ base: 4, md: 6, lg: 8 }}>
              {displayStats.map((stat, idx) => (
                <FadeInWhenVisible key={idx} w="100%" amount={0.35} delay={idx * 0.08}>
                <Box
                  py={{ base: 4, md: 6, lg: 8 }}
                  px={0}
                  minH="220px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  textAlign="left"
                >
                  <Text
                    fontSize={{ base: "7xl", md: "8xl", lg: "8xl" }}
                    fontWeight="800"
                    color="brand.accent"
                    lineHeight={1}
                  >
                    {stat.title}
                  </Text>
                  <Text
                    mt={4}
                    color="gray.200"
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    fontWeight="700"
                    lineHeight={1.2}
                  >
                    {stat.subtitle}
                  </Text>
                </Box>
                </FadeInWhenVisible>
              ))}
            </Grid>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
