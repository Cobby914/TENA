import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
  UnorderedList,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import { useProgramById } from "../../useProgramsById";
import { resolveProgramImage } from "../../programImageResolver";

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
    } else {
      paragraphs.push(line);
    }
  });

  return { paragraphs, bullets };
}

export default function ProgramProblemSolution({ id, introCopy }) {
  const { program, isLoading, errorMsg } = useProgramById(id);
  const { paragraphs, bullets } = splitSolutionText(program?.solution);
  const problemImageSrc = resolveProgramImage(program?.problem_image);
  const solutionImageSrc = resolveProgramImage(program?.solution_image);

  if (isLoading) {
    return (
      <Center minH="50vh" bg="rgb(241, 241, 241)">
        <VStack spacing={4}>
          <Spinner size="xl" color="blue.500" thickness="4px" />
          <Text color="gray.600">Loading program content...</Text>
        </VStack>
      </Center>
    );
  }

  if (errorMsg) {
    return (
      <Center minH="50vh" bg="rgb(241, 241, 241)">
        <Alert status="error" maxW="600px" borderRadius="md">
          <AlertIcon />
          <Box>
            <AlertTitle>Failed to load program</AlertTitle>
            <AlertDescription>{errorMsg}</AlertDescription>
          </Box>
        </Alert>
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
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
            lineHeight={{ base: 1.2, md: 1.25 }}
            maxW={{ base: "100%", lg: "980px" }}
          >
            {introCopy}
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
                {program?.problem}
              </Text>
            </Box>

            <Box flex="1" width="100%" minH="430px" overflow="hidden" borderRadius="md" bg="gray.200">
              {problemImageSrc && (
                <Image
                  src={problemImageSrc}
                  alt="The problem"
                  objectFit="cover"
                  w="100%"
                  h="430px"
                />
              )}
            </Box>
          </Flex>

          <Flex
            direction={{ base: "column", lg: "row" }}
            align="flex-start"
            gap={{ base: 8, md: 10, lg: 14 }}
          >
            <Box flex="1" width="100%" minH="430px" overflow="hidden" borderRadius="md" bg="gray.200">
              {solutionImageSrc && (
                <Image
                  src={solutionImageSrc}
                  alt="What we're doing"
                  objectFit="cover"
                  w="100%"
                  h="430px"
                />
              )}
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
