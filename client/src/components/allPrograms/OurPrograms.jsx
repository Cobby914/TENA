import { Text, Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
const programsHeaderImg = "/programs/ProgramsHeaderIMG.jpg";

function MultiRingCircle({ width = 300, height = 300 }) {
  return (
    <Box w={width} h={height} position="relative">
      <svg viewBox="0 0 320 320" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="ourProgramsHalfGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5CDAC5" />
            <stop offset="50%" stopColor="#5CDAC5" />
            <stop offset="50%" stopColor="#1573CF" />
            <stop offset="100%" stopColor="#1573CF" />
          </linearGradient>
        </defs>
        {Array.from({ length: 6 }).map((_, index) => {
          const radius = 150 - index * 20;
          return (
            <circle
              key={index}
              cx="160"
              cy="160"
              r={radius}
              fill="none"
              stroke="url(#ourProgramsHalfGradient)"
              strokeWidth="6"
            />
          );
        })}
      </svg>
    </Box>
  );
}

export default function OurPrograms() {
    return(
        <Box
        as="section"
        width="100%"
        position="relative"
        overflow="visible"
        minH={{ base: "300px", md: "400px", lg: "500px" }}
        py={{ base: 24, md: 36, lg: 52 }}
        backgroundImage={`url(${programsHeaderImg})`}
        backgroundSize="cover"
        backgroundPosition="center 30%"
        backgroundRepeat="no-repeat"
        >
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.500"
          zIndex={0}
        />

        <Box
          position="absolute"
          left={{ base: -120, md: -140, lg: -160 }}
          top="100%"
          transform="translateY(-50%)"
          zIndex={10}
          pointerEvents="none"
          display={{ base: "none", md: "block" }}
        >
          <MultiRingCircle width={300} height={300} />
        </Box>

        <Box
            position="absolute"
            top={{ base: 16, md: 20, lg: 28 }}
            left={{ base: 8, md: 14, lg: 28 }}
            zIndex={1}
        >
            <Flex direction="column" alignItems="flex-start">
                <Link
                    as={NavLink}
                    to="/programs"
                    fontFamily="Inter"
                    fontSize="26px"
                    fontWeight="800"
                    lineHeight="32px"
                    color="#F8F9FB"
                    mb={8}
                    sx={{
                        textDecoration: "none",
                        "&:hover": {
                            textDecoration: "underline !important",
                            opacity: 0.75,
                        },
                    }}
                >
                    Programs
                </Link>
                <Text
                    fontFamily="Inter"
                    fontSize="64px"
                    fontStyle="normal"
                    fontWeight="800"
                    lineHeight="100%"
                    textAlign="left"
                    color="#F8F9FB"
                >
                    Our Programs
                </Text>
            </Flex>
        </Box>
        </Box>
    );    
}