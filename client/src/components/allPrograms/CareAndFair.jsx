import {
  Box, Text, VStack, Container,
  Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, Center
} from '@chakra-ui/react';
import CareAndFairCard from "../ui/CareAndFairCard";
import SimpleCircle from "../ui/SimpleCircle";
import FadeInWhenVisible from "../home/ui/FadeInWhenVisible";
import { SegmentedStaticText } from "../ui/SegmentedTypewriter";
import { createProgram } from "../../hooks/createProgram";

const PROGRAMS_INTRO_SEGMENTS = [
  { text: "TENA", accent: true },
  { text: " is a community-centric nonprofit building ecosystems that ", accent: false },
  { text: "empower", accent: true },
  { text: " underserved communities to ", accent: false },
  { text: "overcome", accent: true },
  { text: " systemic barriers through optimizing ", accent: false },
  { text: "access", accent: true },
  { text: " to resources, knowledge, and entry to healthcare professions.", accent: false },
];

const Programs = () => {
    const {prog, loading, error} = createProgram();

    if (loading) {
        return (
          <Center minH="60vh">
            <VStack spacing={4}>
              <Spinner size="xl" color="brand.primary" thickness="4px" />
              <Text color="gray.500">Fetching programs...</Text>
            </VStack>
          </Center>
        );
      }
        if (error) {
          return (
            <Container maxW="container.md" mt={10}>
              <Alert status="error" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" borderRadius="lg" py={6}>
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">Data Fetching Failed</AlertTitle>
                <AlertDescription maxWidth="sm">
                  {error}. Ensure your backend server is running on port 3001 and your database is connected.
                </AlertDescription>
              </Alert>
            </Container>
          );
        }     
        const programList = prog ?? [];
    return(
        <Box w="full" py={{ base: 8, md: 12, lg: 24 }} position="relative">
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 8, md: 16, lg: 32 }}
                position="relative"
                zIndex={1}
            >
                <SimpleCircle
                    position="absolute"
                    right={{ base: -80, md: -100, lg: -120 }}
                    top={{ base: 260, md: 320, lg: 360 }}
                    size={{ base: "180px", md: "220px", lg: "260px" }}
                    strokeWidth="36px"
                    color="var(--color-brand-accent)"
                    opacity={0.15}
                    zIndex={0}
                    display={{ base: "none", md: "block" }}
                />

                <FadeInWhenVisible w="100%" amount={0.4}>
                <Box mb={{ base: 10, md: 14, lg: 20 }} mt={{ base: 4, md: 6, lg: 8 }} maxW="1400px" mx="auto">
                    <SegmentedStaticText
                        as="h2"
                        segments={PROGRAMS_INTRO_SEGMENTS}
                        accentColor="brand.primary"
                        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                        lineHeight={{ base: 1.2, md: 1.25 }}
                        fontWeight="700"
                        color="neutral.text"
                    />
                </Box>
                </FadeInWhenVisible>

                <VStack
                    spacing={{ base: 10, md: 16, lg: 24 }}
                    align="center"
                    width="100%"
                >
                    {programList.map((data, index) => (
                    <FadeInWhenVisible key={data.id} w="100%" amount={0.35} delay={index * 0.08}>
                    <CareAndFairCard 
                        title={data.title} 
                        description={data.description} 
                        imageSrc={data.im} 
                        link={data.link}
                        reversed={data.reversed}
                    />
                    </FadeInWhenVisible>
                    ))}
                </VStack>

                {programList.length === 0 && (
                <Center py={20}>
                <Text color="gray.400" fontStyle="italic">No programs found matching the criteria.</Text>
                </Center>
                )}

            </Box>
        </Box>
    )};

export default Programs;