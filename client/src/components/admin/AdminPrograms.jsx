import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function AdminPrograms() {
  const navigate = useNavigate();

  return (
    <VStack align="stretch" gap={6}>
      <Box borderBottom="2px solid rgb(51,51,51)" pb={4}>
        <Text fontWeight={700} fontSize={24} color="gray.800">
          Programs
        </Text>
        <Text color="gray.600" mt={1}>
          Manage program content and statistics.
        </Text>
      </Box>

      <Box borderWidth="1px" borderColor="gray.300" bg="white" p={5}>
        <Text fontWeight={600} color="gray.700" mb={2}>
          Next step
        </Text>
        <Text color="gray.600" fontSize="sm" mb={4}>
          Program CRUD screens are not implemented yet. Use the public programs page for now while this admin editor is being built.
        </Text>
        <HStack>
          <Button size="sm" onClick={() => navigate("/programs")}>
            Open public programs page
          </Button>
        </HStack>
      </Box>
    </VStack>
  );
}
