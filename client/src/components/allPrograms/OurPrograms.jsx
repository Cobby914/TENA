import { Text, Box, Flex } from "@chakra-ui/react";
import MultiRingCircle from "../ui/MultiRingCircle";

const programsHeaderImg = "/programs/ProgramsHeaderIMG.jpg";    

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
                <Text
                    fontFamily="Inter"
                    fontSize="26px"
                    fontWeight="800"
                    lineHeight="32px"
                    color="#F8F9FB"
                    mb={8}
                >
                    Programs
                </Text>
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
