import { Box, SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProgramCard from "../../ui/ProgramCard";
import { useProgramData } from "../../allPrograms/useProgramsData";
import { resolveProgramImage } from "../../allPrograms/programImageResolver";

const MotionBox = motion.create(Box);

export default function Programs() {
  const { programs, errorMsg, isLoading } = useProgramData(4);
  const fadeInCard = {
    initial: { opacity: 0, y: 20},
    animate: { opacity: 1, y: 0},
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1.0] }
  };

  return (
    <Box
      as="section"
      bg="rgba(241, 244, 248, 1)"
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
      >
        {isLoading
          ? [1, 2, 3, 4].map((i) => (
              <Skeleton
                key={i}
                height={{ base: "360px", md: "285px" }}
                borderRadius="12px"
              />
            ))
          : programs.map((program, index) => (
              <MotionBox key={program.id} initial="initial" whileInView={"animate"} viewport={{ once: false, amount: 0.4, margin: "0px 0px -50px 0px" }} variants={fadeInCard} custom={index}>
                <ProgramCard
                  title={program.title}
                  description={program.summary}
                  imageSrc={resolveProgramImage(program.background_image)}
                  link="/programs"
                />
              </MotionBox>
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
