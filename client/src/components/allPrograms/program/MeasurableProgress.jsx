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
import { useProgramById } from "../../../hooks/useProgramsById";
const inTheWorksImg = "/programs/InTheWorksIMG.png";

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

  const measurableProgressSubtexts = [
    "Real impact, one member at a time.",
    "Bringing care to the corners of the community.",
    "Building the workforce LA County needs, from within.",
  ];

  const selectedMeasurableText = (() => {
    if (!program) return measurableProgressSubtexts[0];
    const key = Number.isInteger(program.id) ? program.id : String(program.title ?? "");
    if (Number.isInteger(key)) {
      return measurableProgressSubtexts[key % measurableProgressSubtexts.length];
    }
    const hash = Array.from(String(key)).reduce((sum, char) => sum + char.charCodeAt(0), 0);
    return measurableProgressSubtexts[hash % measurableProgressSubtexts.length];
  })();

  if (isLoading) {
    return (
      <Box as="section" bg="#092751" width="100%" py={{ base: 12, md: 16, lg: 20 }}>
        <Center minH="40vh">
          <VStack spacing={4}>
            <Spinner size="xl" color="white" thickness="4px" />
            <Text color="white">Loading measurable progress...</Text>
          </VStack>
        </Center>
      </Box>
    );
  }

  if (errorMsg) {
    return (
      <Box as="section" bg="#092751" width="100%" py={{ base: 12, md: 16, lg: 20 }}>
        <Box maxW="1200px" mx="auto" px={{ base: 4, md: 10, lg: 20 }}>
          <Box bg="rgba(255,255,255,0.06)" borderRadius="2xl" p={{ base: 6, md: 8 }}>
            <Heading fontSize={{ base: "4xl", md: "5xl" }} color="white" mb={4}>
              Measurable Progress
            </Heading>
            <Text color="gray.200">{errorMsg}</Text>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box as="section" bg="#092751" width="100%" py={{ base: 12, md: 16, lg: 20 }} borderRadius="3xl" overflow="hidden">
      <Box maxW="2500px" mx="auto" px={{ base: 24, md: 52, lg: 80 }}>
        <Box bg="#092751" borderRadius="3xl" px={{ base: 4, md: 6, lg: 8 }} py={{ base: 8, md: 10, lg: 12 }}>
          <Box
            maxW="920px"
            mx={showStats ? 0 : "auto"}
            mb={{ base: 10, md: 14 }}
            textAlign={showStats ? { base: "center", md: "left" } : "center"}
          >
            <Heading
              as="h2"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              lineHeight={1.02}
              color="white"
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
          </Box>

          {!showStats && (
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
                bg="rgba(92, 218, 197, 0.1)"
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
                  bg="#5CDAC5"
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
                    color="#5CDAC5"
                    fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
                    fontWeight="500"
                  >
                    — TENA
                  </Text>
                </Box>
              </Box>
            </Box>
          )}

          {showStats ? (
            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} rowGap={{ base: 4, md: 5, lg: 6 }} columnGap={{ base: 4, md: 6, lg: 8 }}>
              {displayStats.map((stat, idx) => (
                <Box
                  key={idx}
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
                    color="#5CDAC5"
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
              ))}
            </Grid>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}
