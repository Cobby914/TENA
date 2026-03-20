import {
  Box, Table, Thead, Tbody, Tr, Th, TableContainer,
  HStack, Text, Button, IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import UserRow from "./UserRow";

const PAGE_SIZE = 7;

export default function ApprovalsTable({
  users,
  currentPage,
  onPageChange,
  onApprove,
  onAssignRole,
  onDeny,
  onRevoke,
  processingByUser
}) {
  const totalPages = Math.ceil(users.length / PAGE_SIZE);
  const pageUsers  = users.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <Box
      border="2px solid"
      borderColor="gray.400"
      borderRadius="sm"
      overflow="hidden"
    >
      <TableContainer>
        <Table variant="simple" size="sm">
          <Thead bg="rgb(228, 228, 228)">
            <Tr>
              {["USER", "REQUESTED", "STATUS", "ASSIGN ROLE", "ACTIONS"].map((col) => (
                <Th
                  key={col}
                  fontSize="xs"
                  letterSpacing="widest"
                  color="rgb(85,85,85)"
                  fontWeight="700"
                  fontFamily="body"
                  py={4}
                  borderBottom="2px solid"
                  borderColor="gray.400"
                >
                  {col}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {pageUsers.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                onApprove={onApprove}
                onAssignRole={onAssignRole}
                onDeny={onDeny}
                onRevoke={onRevoke}
                isProcessing={Boolean(processingByUser?.[user.id])}
              />
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Footer */}
      <HStack
        justify="space-between"
        px={4}
        py={3}
        borderTop="2px solid"
        borderColor="gray.400"
        bg="rgb(238,238,238)"
      >
        <Text fontSize="sm" color="rgb(136,136,136)" fontFamily="body">
          Showing {pageUsers.length} of {users.length} users
        </Text>

        <HStack spacing={1}>
          <IconButton
            icon={<ChevronLeftIcon />}
            size="sm"
            variant="outline"
            borderRadius="sm"
            borderWidth="2px"
            borderColor="gray.400"
            isDisabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Previous page"
          />
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              size="sm"
              borderRadius="sm"
              borderWidth="2px"
              variant={page === currentPage ? "solid" : "outline"}
              bg={page === currentPage ? "gray.700" : "white"}
              color={page === currentPage ? "white" : "gray.700"}
              borderColor={page === currentPage ? "gray.700" : "gray.400"}
              fontFamily="body"
              _hover={{ bg: page === currentPage ? "gray.600" : "gray.100" }}
              onClick={() => onPageChange(page)}
              minW="32px"
            >
              {page}
            </Button>
          ))}
          <IconButton
            icon={<ChevronRightIcon />}
            size="sm"
            variant="outline"
            borderRadius="sm"
            borderWidth="2px"
            borderColor="gray.400"
            isDisabled={currentPage === totalPages || totalPages === 0}
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Next page"
          />
        </HStack>
      </HStack>
    </Box>
  );
}
