import { Box, Flex, Text } from "@chakra-ui/react";
import { useProgramById } from "../../useProgramsById";
import { resolveProgramImage } from "../../programImageResolver";

export default function ProgramHeader({ id, title, backgroundPosition }) {
  const { program } = useProgramById(id);
  const backgroundImageSrc = resolveProgramImage(program?.background_image);

  return (
    <Box
      as="section"
      width="100%"
      position="relative"
      overflow="hidden"
      py={{ base: 24, md: 36, lg: 52 }}
      {...(backgroundImageSrc && {
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
        backgroundRepeat: "no-repeat",
      })}
    >
      {backgroundImageSrc && (
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.500"
          zIndex={0}
        />
      )}

      <Box maxW="2500px" mx="auto" px={{ base: 4, md: 10, lg: 20 }} position="relative" zIndex={1}>
        <Flex
          maxW="1200px"
          mx="auto"
          align="center"
          justify="space-between"
          gap={{ base: 8, md: 12, lg: 20 }}
          direction={{ base: "column", lg: "row" }}
        >
          <Flex
            direction="column"
            alignItems="flex-start"
            maxW={{ base: "100%", lg: "520px" }}
          >
            <Text
                fontFamily="Inter"
                fontSize="48px"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="100%"
                textAlign="left"
                mb={{ base: 4, md: 6 }}
                color="#F8F9FB"
            >
              {title}
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
