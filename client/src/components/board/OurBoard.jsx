import React from 'react';
import {
  Box, Flex, Text, SimpleGrid, VStack, Container,
  Spinner, Alert, AlertIcon, AlertTitle, AlertDescription, Heading, Center
} from '@chakra-ui/react';

import { createBoard } from './createBoard';
import MemberCard from "../ui/MemberCard";

const OurBoard = () => {
  const { board, loading, error } = createBoard();

  if (loading) {
    return (
      <Center minH="60vh">
        <VStack spacing={4}>
          <Spinner size="xl" color="blue.500" thickness="4px" />
          <Text color="gray.500">Fetching board members...</Text>
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

  return (
    <Box width="100vw" background="#FFFFFF" overflowX="hidden">
      <Flex direction="column" alignItems="center">
        
        <Box 
          background="#b8b8b8" 
          width="100vw" 
          maxWidth="1536px" 
          height="50vh" 
          maxHeight="380px"
          pt="min(10vh, 100px)" 
        >
          <Text 
            ml="min(5vw, 106px)" 
            fontSize="min(1.5vw, 36px)" 
            color="black"
            fontWeight="400"
          >
            The People Supporting our Team
          </Text>
        </Box>

        <Container maxW="1536px" py={12} px="min(5vw, 106px)">
          <Heading as="h2" size="xl" mb={10} fontWeight="bold">
            Our Board
          </Heading>

          <SimpleGrid 
            minChildWidth="280px" 
            spacingX={{ base: 4, md: 10 }}
            spacingY={{ base: 8, md: 12 }}
            width="100%"
            justifyItems="center"
          >
            {board.map((member) => (
              <MemberCard 
                key={member.id} 
                name={member.name} 
                position={member.role} 
                imgSrc={member.im} 
              />
            ))}
          </SimpleGrid>

          {board.length === 0 && (
            <Center py={20}>
              <Text color="gray.400 italic">No board members found matching the criteria.</Text>
            </Center>
          )}
        </Container>
      </Flex>
    </Box>
  );
};

export default OurBoard;