import {
  Box, Flex, Text, SimpleGrid, VStack, Container,
  Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, Heading, Center
} from '@chakra-ui/react';
import CareAndFairCard from "../ui/CareAndFairCard";
import { createProgram } from './CreateProgram';



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
        <Box w="full" py={{ base: 12, md: 16, lg: 40 }}>
            <Box
                maxW="2500px"
                mx="auto"
                px={{ base: 4, md: 10, lg: 20 }}
            >
                <VStack
                    spacing={{ base: 16, md: 24, lg: 48 }}
                    align="center"
                    width="100%"
                    maxW="1400px"
                    mx="auto"
                >

                    {programList.map((data) => (
                    <CareAndFairCard 
                        key={data.id} 
                        title={data.title} 
                        description={data.summary} 
                        imageSrc={data.im} 
                        link = {data.link}
                        reversed = {data.reversed}/>))}
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
