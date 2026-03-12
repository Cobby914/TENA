import { Box, Text, VStack } from "@chakra-ui/react";

export default function AdminSettings() {
  return (
    <VStack align="stretch" gap={6}>
      <Box borderBottom="2px solid rgb(51,51,51)" pb={4}>
        <Text fontWeight={700} fontSize={24} color="gray.800">
          Settings
        </Text>
        <Text color="gray.600" mt={1}>
          Configure admin-level preferences and operational defaults.
        </Text>
      </Box>

      <Box borderWidth="1px" borderColor="gray.300" bg="white" p={5}>
        <Text fontWeight={600} color="gray.700" mb={2}>
          Coming soon
        </Text>
        <Text color="gray.600" fontSize="sm">
          This section is prepared for organization settings, notification preferences, and access policy controls.
        </Text>
      </Box>
    </VStack>
  );
}
