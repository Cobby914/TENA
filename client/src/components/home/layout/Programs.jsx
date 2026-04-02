import { Box, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProgramCard from "../../ui/ProgramCard";
import { useProgramData } from "../../../hooks/useProgramsData";
import { resolveProgramImage } from "../../../lib/programImageResolver";

const MotionBox = motion.create(Box);

export default function Programs() {
  const { programs, errorMsg, isLoading } = useProgramData(4);
  const programsToShow = programs.slice(0, 4);
  const fadeInCard = {
    initial: { opacity: 0, y: 20},
    animate: { opacity: 1, y: 0},
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }
  };

  return (
    <Box
      as="section"
      bg="#F1F4F8"
      px={{ base: 6, md: 10, lg: 24 }}
      py={{ base: 12, md: 16 }}
      mt={20}
    >
      <Text fontWeight={700} fontSize={60} letterSpacing={0} lineHeight={"100%"} textColor={"rgba(29, 35, 46, 1)"} textAlign={"center"} my={20}>
        TENA Initiatives
      </Text>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={{ base: 8, md: 10 }}
        maxW="1280px"
        mx="auto"
        alignItems="stretch"
      >
        {isLoading
          ? [1, 2, 3, 4].map((i) => (
              <Skeleton
                key={i}
                height={{ base: "360px", md: "285px" }}
                borderRadius="12px"
              />
            ))
          : programsToShow.map((program, index) => (
              <MotionBox
                key={program.id}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.4, margin: "0px 0px -50px 0px" }}
                variants={fadeInCard}
                custom={index}
                h="100%"
                display="flex"
                flexDirection="column"
                gridColumn={
                  programsToShow.length % 2 === 1 && index === programsToShow.length - 1
                    ? { base: "auto", xl: "1 / -1" }
                    : "auto"
                }
                justifySelf={
                  programsToShow.length % 2 === 1 && index === programsToShow.length - 1
                    ? "center"
                    : "stretch"
                }
                maxW={
                  programsToShow.length % 2 === 1 && index === programsToShow.length - 1
                    ? { base: "none", xl: "640px" }
                    : "none"
                }
                w="100%"
              >
                <ProgramCard
                  title={program.title}
                  description={program.summary}
                  imageSrc={resolveProgramImage(program.background_image)}
                  link="/programs"
                  flex="1"
                  minH="0"
                />
              </MotionBox>
            ))}
      </SimpleGrid>

      {!isLoading && !programsToShow.length && !errorMsg ? (
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
