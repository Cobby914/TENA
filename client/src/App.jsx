import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import useCounterStore from "./store/useCounterStore";

export default function App() {
  const { count, increment } = useCounterStore();

  async function ping() {
    const res = await fetch("/api/health");
    const data = await res.json();
    alert(data.status);
  }

  return (
    <Box minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading>Vercel Fullstack Starter</Heading>
        <Text>Protected API + Client</Text>
        <Text>Counter: {count}</Text>
        <Button onClick={increment}>Increment</Button>
        <Button colorScheme="teal" onClick={ping}>
          Ping API
        </Button>
      </VStack>
    </Box>
  );
}