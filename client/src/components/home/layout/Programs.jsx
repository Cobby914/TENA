import { Box, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import ProgramCard from "../../ui/ProgramCard";
import { useProgramData } from "../../allPrograms/useProgramsData";

const programImages = import.meta.glob(
  "./programHomePageIMGS/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

{
  /* Getting The Images and Propping them to it's respective cardd */
}
function normalizeProgramKey(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/\s+img$/, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getProgramImagePath(title) {
  const targetKey = normalizeProgramKey(title);

  const matchedEntry = Object.entries(programImages).find(([filePath]) => {
    const fileName = filePath.split("/").pop() ?? "";
    return normalizeProgramKey(fileName) === targetKey;
  });

  return matchedEntry?.[1] ?? null;
}

export default function Programs() {
  const { programs, errorMsg, isLoading } = useProgramData(4);

  return (
    <Box
      as="section"
      bg="white"
      px={{ base: 6, md: 10, lg: 24 }}
      py={{ base: 12, md: 16 }}
    >
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={{ base: 8, md: 10 }}
        maxW="1280px"
        mx="auto"
      >
        {isLoading
          ? [1, 2, 3, 4].map((i) => (
              <Skeleton
                key={i}
                height={{ base: "360px", md: "285px" }}
                borderRadius="12px"
              />
            ))
          : programs.map((program) => (
              <ProgramCard
                key={program.id}
                title={program.title}
                description={program.summary}
                imageSrc={getProgramImagePath(program.title)}
                link="/programs"
              />
            ))}
      </SimpleGrid>

      {!isLoading && !programs.length && !errorMsg ? (
        <Text mt={8} textAlign="center" color="#3F5F85">
          No programs available right now.
        </Text>
      ) : null}

      {errorMsg ? (
        <Text mt={8} textAlign="center" color="red.500">
          {errorMsg}
        </Text>
      ) : null}
    </Box>
  );
}
