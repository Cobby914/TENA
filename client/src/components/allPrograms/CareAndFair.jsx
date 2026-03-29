import {
  Box, Flex, Text, SimpleGrid, VStack, Container,
  Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, Heading, Center
} from '@chakra-ui/react';
import CareAndFairCard from "../ui/CareAndFairCard";
import { createProgram } from './CreateProgram';

function MultiRingCircle({ width = 300, height = 300 }) {
  return (
    <Box w={width} h={height} position="relative">
      <svg viewBox="0 0 320 320" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="mainPageHalfGradient" x1="0%" y1="0%" x2="0%" y2="100%">
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
              stroke="url(#mainPageHalfGradient)"
              strokeWidth="6"
            />
          );
        })}
      </svg>
    </Box>
  );
}

const Programs = () => {
    const {prog, loading, error} = createProgram();

    if (loading) {
        return (
          <Center minH="60vh">
            <VStack spacing={4}>
              <Spinner size="xl" color="blue.500" thickness="4px" />
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
        <Box w="full" py={{ base: 12, md: 16, lg: 40 }} position="relative">
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 24, md: 52, lg: 80 }}
                position="relative"
                zIndex={1}
            >
                <Box
                    position="absolute"
                    right={{ base: -80, md: -100, lg: -120 }}
                    top={{ base: 260, md: 320, lg: 360 }}
                    width={{ base: "180px", md: "220px", lg: "260px" }}
                    height={{ base: "180px", md: "220px", lg: "260px" }}
                    borderRadius="full"
                    border="36px solid #5CDAC5"
                    opacity={0.15}
                    zIndex={0}
                    pointerEvents="none"
                    display={{ base: "none", md: "block" }}
                />

                <Box mb={{ base: 16, md: 24, lg: 36 }} mt={{ base: 4, md: 6, lg: 8 }}>
                    <Heading
                        as="h2"
                        fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                        lineHeight={{ base: 1.2, md: 1.25 }}
                    >
                        <Text as="span" color="#1573CF">TENA</Text> is a community-centric nonprofit building ecosystems that <Text as="span" color="#1573CF">empower</Text> underserved communities to <Text as="span" color="#1573CF">overcome</Text> systemic barriers through optimizing <Text as="span" color="#1573CF">access</Text> to resources, knowledge, and entry to healthcare professions.
                    </Heading>
                </Box>

                <VStack
                    spacing={{ base: 16, md: 24, lg: 48 }}
                    align="center"
                    width="100%"
                >
                    {programList.map((data) => (
                    <CareAndFairCard 
                        key={data.id} 
                        title={data.title} 
                        description={data.description} 
                        imageSrc={data.im} 
                        link={data.link}
                        reversed={data.reversed}
                    />))}
                </VStack>

                {programList.length === 0 && (
                <Center py={20}>
                <Text color="gray.400 italic">No programs found matching the criteria.</Text>
                </Center>
                )}

            </Box>
        </Box>

    )};

export default Programs;