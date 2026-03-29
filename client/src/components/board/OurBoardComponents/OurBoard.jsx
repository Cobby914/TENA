import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Center,
  Container,
  Spinner,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useBoardMembers } from "../createBoard";
import MemberCard from "../../ui/MemberCard";

export default function OurBoard() {
  const { board, loading, error } = useBoardMembers();

  if (loading) {
    return (
      <Center minH="30vh">
        <Spinner size="xl" color="#1573CF" thickness="4px" />
      </Center>
    );
  }

  if (error) {
    return (
      <Container maxW="container.md" mt={10}>
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          borderRadius="lg"
          py={6}
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Data Fetching Failed
          </AlertTitle>
          <AlertDescription maxWidth="sm">{error}</AlertDescription>
        </Alert>
      </Container>
    );
  }

  return (
    <Box
      as="section"
      width="100%"
      pt={{ base: 8, md: 12, lg: 20 }}
      pb={{ base: 16, md: 20 }}
    >
      <Box maxW="1536px" mx="auto" px={{ base: 6, md: 12, lg: 20 }}>
        <Wrap spacing={{ base: 5, md: 6, lg: 7 }} justify="center">
          {board.map((member) => (
            <WrapItem key={member.id}>
              <MemberCard
                name={member.name}
                position={member.role}
                imageSrc={member.imageSrc}
                variant="board"
              />
            </WrapItem>
          ))}
        </Wrap>

        {board.length === 0 && (
          <Center py={20}>
            <Text color="gray.500">No board members found.</Text>
          </Center>
        )}
      </Box>
    </Box>
  );
}
