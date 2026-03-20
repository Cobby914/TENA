import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Container,
  Flex,
  Heading,
  Spinner,
  Text,
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import ImagePlaceholder from "../../../ui/MVimagePH";
import { useProgramData } from "../../useProgramsData";

//Fallback solutions incase API call doesn't work or if problem/solution is found but yields no data in DB
const INTRO_COPY =
  "TENA provides personalized, one-on-one care navigation to help individuals understand their options and successfully access healthcare and social resources.";

const FALLBACK_PROBLEM =
  "Los Angeles County's healthcare and social service systems are complex, fragmented, and difficult to navigate, especially for low-income, immigrant, and historically marginalized communities. Despite Medi-Cal expansion, over one million LA County residents remain uninsured or underinsured, disproportionately impacting Latino, Black, and immigrant populations.";

const FALLBACK_SOLUTION = `Our navigators support community members with:
- Health insurance enrollment and primary care connection.
- Food, housing, and social service navigation.
- Health system education to build long-term confidence.

We do not just point people to resources, we walk alongside them until they feel empowered to navigate independently.`;

//for string matching in getCareNavigationProgram
function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

//Find Care Navigation program from fetched DB list
function getCareNavigationProgram(programs) {
  if (!Array.isArray(programs)) return null;

  return (
    programs.find((program) =>
      String(program?.link ?? "")
        .toLowerCase()
        .includes("/programs/carenavigation"),
    ) ||
    programs.find(
      (program) => normalizeText(program?.title) === "carenavigation",
    ) ||
    programs.find((program) =>
      normalizeText(program?.title).includes("carenavigation"),
    ) ||
    null
  );
}

//Parses the Solution text into paragraphs OR bullet points
function splitSolutionText(solutionText) {
  const lines = String(solutionText ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const paragraphs = [];
  const bullets = [];

  lines.forEach((line) => {
    if (/^[-*•]\s+/.test(line)) {
      bullets.push(line.replace(/^[-*•]\s+/, ""));
      return;
    }
    paragraphs.push(line);
  });

  return { paragraphs, bullets };
}

//Fetches program data using useProgramData() API call, selects Care Navigation row, pulls problem/solution, renders section w/ error and loading states
export default function CareNaviProblemSolution() {
  const { programs, errorMsg, isLoading } = useProgramData();
  const careNavigationProgram = getCareNavigationProgram(programs);
  const problemText =
    String(careNavigationProgram?.problem ?? "").trim() || FALLBACK_PROBLEM;
  const solutionText =
    String(careNavigationProgram?.solution ?? "").trim() || FALLBACK_SOLUTION;
  const { paragraphs, bullets } = splitSolutionText(solutionText);

  if (isLoading) {
    return (
      <Center minH="50vh" bg="rgb(241, 241, 241)">
        <VStack spacing={4}>
          <Spinner size="xl" color="blue.500" thickness="4px" />
          <Text color="gray.600">Loading care navigation content...</Text>
        </VStack>
      </Center>
    );
  }

  return (
    <Box
      as="section"
      bg="rgb(241, 241, 241)"
      width="100%"
      py={{ base: 12, md: 16, lg: 20 }}
    >
      <Box maxW="2500px" mx="auto" px={{ base: 4, md: 10, lg: 20 }}>
        <VStack
          spacing={{ base: 12, md: 16, lg: 20 }}
          align="stretch"
          maxW="1200px"
          mx="auto"
        >
          {!!errorMsg && (
            <Container maxW="container.lg" p={0}>
              <Alert status="warning" borderRadius="md">
                <AlertIcon />
                <Box>
                  <AlertTitle fontSize="md">Using fallback content</AlertTitle>
                  <AlertDescription fontSize="sm">{errorMsg}</AlertDescription>
                </Box>
              </Alert>
            </Container>
          )}

          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            lineHeight={{ base: 1.2, md: 1.25 }}
            maxW={{ base: "100%", lg: "980px" }}
          >
            {INTRO_COPY}
          </Heading>

          <Flex
            direction={{ base: "column", lg: "row" }}
            align="flex-start"
            gap={{ base: 8, md: 10, lg: 14 }}
          >
            <Box flex="1.2">
              <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} mb={5}>
                The Problem
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                lineHeight={1.5}
                whiteSpace="pre-line"
              >
                {problemText}
              </Text>
            </Box>

            <Box flex="1" width="100%">
              <ImagePlaceholder label="IMG" height="430px" />
            </Box>
          </Flex>

          <Flex
            direction={{ base: "column", lg: "row" }}
            align="flex-start"
            gap={{ base: 8, md: 10, lg: 14 }}
          >
            <Box flex="1" width="100%">
              <ImagePlaceholder label="IMG" height="430px" />
            </Box>

            <Box flex="1.2">
              <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} mb={5}>
                What We're Doing
              </Heading>

              {paragraphs.map((paragraph, idx) => (
                <Text
                  key={`solution-paragraph-${idx}`}
                  fontSize={{ base: "lg", md: "xl" }}
                  lineHeight={1.5}
                  mb={bullets.length > 0 || idx < paragraphs.length - 1 ? 4 : 0}
                >
                  {paragraph}
                </Text>
              ))}

              {bullets.length > 0 && (
                <UnorderedList spacing={2} pl={6} mb={4}>
                  {bullets.map((bullet, idx) => (
                    <ListItem
                      key={`solution-bullet-${idx}`}
                      fontSize={{ base: "lg", md: "xl" }}
                    >
                      {bullet}
                    </ListItem>
                  ))}
                </UnorderedList>
              )}
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Box>
  );
}
