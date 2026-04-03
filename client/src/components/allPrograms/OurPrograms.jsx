import { Text, Box, Flex } from "@chakra-ui/react";
import MultiRingCircle from "../ui/MultiRingCircle";
import FadeInWhenVisible from "../home/ui/FadeInWhenVisible";

const programsHeaderImg = "/program-assets/ProgramsHeaderIMG.jpg";    

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

        <FadeInWhenVisible
            trigger="mount"
            y={16}
            duration={0.7}
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
                    color="surface.soft"
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
                    color="surface.soft"
                >
                    Our Programs
                </Text>
            </Flex>
        </FadeInWhenVisible>
        </Box>
    );    
}
