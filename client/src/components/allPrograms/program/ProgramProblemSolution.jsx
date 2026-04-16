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
  VStack,
} from "@chakra-ui/react";
import FadeInWhenVisible from "../../home/ui/FadeInWhenVisible";
import { useProgramById } from "../../../hooks/useProgramsById";
import { resolveProgramImage } from "../../../lib/programImageResolver";

function parseSolutionText(solutionText) {
  return String(solutionText ?? "")
    .replace(/\\n/g, "\n")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .map((line) => {
      if (line === "") return { type: "spacer" };
      if (/^[-*•]\s+/.test(line)) {
        return { type: "bullet", text: line.replace(/^[-*•]\s+/, "") };
      }
      return { type: "paragraph", text: line };
    });
}

function parseBold(text) {
  const parts = String(text ?? "").split(/\*\*(.*?)\*\*/g);
  return parts.flatMap((part, i) => {
    if (i % 2 === 1) {
      return (
        <Text as="span" key={`bold-${i}`} fontWeight="700">
          {part}
        </Text>
      );
    }

    const subParts = part.split(/(\S+?)\^/g);
    return subParts.map((sub, j) =>
      j % 2 === 1 ? (
        <Text as="span" key={`blue-${i}-${j}`} color="brand.primary">
          {sub}
        </Text>
      ) : (
        sub
      )
    );
  });
}

export default function ProgramProblemSolution({ id }) {
  const { program, isLoading, errorMsg } = useProgramById(id);
  const lines = parseSolutionText(program?.solution);
  const problemImageSrc = resolveProgramImage(program?.problem_image);
  const solutionImageSrc = resolveProgramImage(program?.solution_image);

  if (isLoading) {
    return (
      <Center minH="50vh" bg="surface.section">
        <VStack spacing={4}>
          <Spinner size="xl" color="brand.primary" thickness="4px" />
          <Text color="gray.600">Loading program content...</Text>
        </VStack>
      </Center>
    );
  }

  if (errorMsg) {
    return (
      <Center minH="50vh" bg="surface.section">
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
      bg="surface.section"
      width="100%"
      py={{ base: 12, md: 16, lg: 20 }}
    >
      <Box maxW="1700px" mx="auto" px={{ base: 8, sm: 12, md: 22, lg: 32 }}>
        <VStack spacing={{ base: 12, md: 16, lg: 20 }}>
          <FadeInWhenVisible w="100%" amount={0.4}>
            <Heading
              as="h2"
              fontSize={{ base: "2xl", sm: "3xl", md: "3xl", lg: "4xl" }}
              lineHeight={{ base: 1.2, md: 1.25 }}
              textAlign="left"
            >
              {parseBold(program?.summary)}
            </Heading>
          </FadeInWhenVisible>

          <FadeInWhenVisible w="100%" amount={0.35} delay={0.06}>
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="stretch"
              gap={{ base: 8, md: 10, lg: 14 }}
            >
              <Box flex="1.2">
                <Heading
                  as="h3"
                  fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                  mb={5}
                  color="brand.heading"
                >
                  The Problem
                </Heading>
                <Text
                  fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
                  lineHeight={1.5}
                  whiteSpace="pre-line"
                >
                  {parseBold(program?.problem)}
                </Text>
              </Box>

              <Box
                flex="1"
                minH={{ base: "400px", lg: 0 }}
                position="relative"
                overflow="hidden"
                borderRadius="md"
                bg="gray.100"
              >
                {problemImageSrc && (
                  <Image
                    src={problemImageSrc}
                    alt="The problem"
                    position="absolute"
                    inset={0}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                )}
              </Box>
            </Flex>
          </FadeInWhenVisible>

          <FadeInWhenVisible w="100%" amount={0.35} delay={0.12}>
            <Flex
              direction={{ base: "column", lg: "row" }}
              align="stretch"
              gap={{ base: 8, md: 10, lg: 14 }}
            >
              <Box
                flex="1"
                minH={{ base: "400px", lg: 0 }}
                position="relative"
                overflow="hidden"
                borderRadius="md"
                bg="gray.100"
              >
                {solutionImageSrc && (
                  <Image
                    src={solutionImageSrc}
                    alt="What we're doing"
                    position="absolute"
                    inset={0}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                )}
              </Box>

              <Box flex="1.2">
                <Heading
                  as="h3"
                  fontSize={{ base: "xl", sm: "2xl", md: "3xl", lg: "4xl" }}
                  mb={5}
                  color="brand.heading"
                >
                  What We're Doing
                </Heading>

                {lines.map((line, idx) =>
                line.type === "spacer" ? (
                    <Box key={idx} h={4} />
                ) : line.type === "paragraph" ? (
                    <Text
                    key={idx}
                    fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
                    lineHeight={1.5}
                    mb={2}
                    >
                    {parseBold(line.text)}
                    </Text>
                ) : (
                    <Flex key={idx} alignItems="flex-start" gap={2} mb={2}>
                    <Text as="span" mt="0.1em" flexShrink={0} fontSize="1.5em" lineHeight={1.5}>•</Text>
                    <Text as="span" fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }} lineHeight={1.5}>
                        {parseBold(line.text)}
                    </Text>
                    </Flex>
                )
                )}
              </Box>
            </Flex>
          </FadeInWhenVisible>
        </VStack>
      </Box>
    </Box>
  );
}