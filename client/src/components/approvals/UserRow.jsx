import {
  Tr, Td, HStack, VStack, Avatar, Text, Badge, Select, Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const STATUS_MAP = {
  pending: { label: "PENDING" },
  denied:  { label: "DENIED"  },
  user:    { label: "APPROVED" },
  admin:   { label: "APPROVED" },
};

export default function UserRow({ user, onApprove, onAssignRole, onDeny, onRevoke, isProcessing }) {
  const status     = STATUS_MAP[user.role] ?? { label: "UNKNOWN" };
  const isPending  = user.role === "pending";
  const isDenied   = user.role === "denied";
  const isApproved = user.role === "user" || user.role === "admin";
  const currentApprovedRole = user.role === "admin" ? "admin" : "user";
  const approvedRoleOptions = currentApprovedRole === "admin" ? ["admin", "user"] : ["user", "admin"];

  const firstName = String(user.first_name ?? "").trim();
  const lastName = String(user.last_name ?? "").trim();
  const fullName = `${firstName} ${lastName}`.trim();
  const displayName = fullName || user.email || "Unknown User";
  const initials = (firstName[0] ?? user.email?.[0] ?? "U").toUpperCase() + (lastName[0] ?? "").toUpperCase();
  const [selectedRole, setSelectedRole] = useState(isApproved ? currentApprovedRole : "");
  const canApprove  = isPending && selectedRole !== "";
  const canRestore = isDenied && selectedRole !== "";

  useEffect(() => {
    setSelectedRole("");
  }, [user.id, user.role]);

  return (
    <Tr
      bg="surface.default"
      _hover={{ bg: "surface.muted" }}
      transition="background 0.15s"
    >
      {/* USER */}
      <Td borderColor="border.default" borderBottomWidth="1px" py={7}>
        <HStack spacing={3}>
          <Avatar
            size="sm"
            name={initials}
            bg="surface.muted"
            color="neutral.strong"
            borderColor="neutral.muted"
            borderWidth="1px"
            borderStyle="solid"
            getInitials={() => initials}
          />
          <VStack align="start" spacing={0}>
            <Text fontWeight="600" fontSize="sm" color="neutral.text" fontFamily="body">
              {displayName}
            </Text>
            <Text fontSize="xs" color="neutral.subtle" fontFamily="body">
              {user.email}
            </Text>
          </VStack>
        </HStack>
      </Td>

      {/* REQUESTED */}
      <Td borderColor="border.default" borderBottomWidth="1px" py={7}>
        <Text fontSize="sm" color="neutral.subtle" fontFamily="body">
          {new Date(user.created_at).toLocaleDateString("en-US", {
            month: "short", day: "numeric", year: "numeric",
          })}
        </Text>
      </Td>

      {/* STATUS */}
      <Td borderColor="border.default" borderBottomWidth="1px" py={7}>
        <Badge
        fontSize="xs"
        px={2}
        py={1}
        borderRadius="sm"
        letterSpacing="wide"
        fontFamily="body"
        borderWidth="1px"
        borderColor={isDenied ? "border.default" : isApproved ? "neutral.muted" : "neutral.muted"}
        color={isDenied ? "neutral.subtle" : isApproved ? "neutral.strong" : "neutral.text"}
        bg={isApproved ? "surface.muted" : isPending ? "surface.muted" : "transparent"}
        opacity={isDenied ? 0.5 : 1}
        >
        {status.label}
        </Badge>
      </Td>

      {/* ASSIGN ROLE */}
      <Td borderColor="border.default" borderBottomWidth="1px" py={7}>
        {isDenied ? (
          <Select
            size="sm"
            placeholder="Select role..."
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            isDisabled={isProcessing}
            bg="surface.default"
            borderColor="neutral.muted"
            borderWidth="2px"
            borderRadius="sm"
            fontFamily="body"
            w="145px"
            _focus={{ borderColor: "neutral.strong", boxShadow: "none" }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Select>
        ) : isApproved ? (
          <Select
            size="sm"
            value={currentApprovedRole}
            onChange={(e) => {
              const nextRole = e.target.value;
              if (nextRole !== currentApprovedRole) {
                onAssignRole(user.id, nextRole);
              }
            }}
            isDisabled={isProcessing}
            bg="surface.default"
            borderColor="neutral.muted"
            borderWidth="2px"
            borderRadius="sm"
            fontFamily="body"
            w="145px"
            _focus={{ borderColor: "neutral.strong", boxShadow: "none" }}
          >
            {approvedRoleOptions.map((role) => (
              <option key={role} value={role}>
                {role === "admin" ? "Admin" : "User"}
              </option>
            ))}
          </Select>
        ) : (
          <Select
            size="sm"
            placeholder="Select role..."
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            isDisabled={isProcessing}
            bg="surface.default"
            borderColor="neutral.muted"
            borderWidth="2px"
            borderRadius="sm"
            fontFamily="body"
            w="145px"
            _focus={{ borderColor: "neutral.strong", boxShadow: "none" }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Select>
        )}
      </Td>

      {/* ACTIONS */}
      <Td borderColor="border.default" borderBottomWidth="1px" py={7}>
        {isDenied && (
          <HStack spacing={2}>
            <Button
              size="sm"
              borderRadius="sm"
              borderWidth="2px"
              bg={canRestore ? "neutral.strong" : "neutral.muted"}
              color="surface.default"
              fontFamily="body"
              borderColor={canRestore ? "neutral.strong" : "neutral.muted"}
              _hover={canRestore ? { bg: "neutral.text" } : {}}
              isDisabled={!canRestore || isProcessing}
              isLoading={isProcessing}
              onClick={() => onApprove(user.id, selectedRole)}
            >
              APPROVE
            </Button>
          </HStack>
        )}

        {isApproved && (
          <HStack spacing={2}>
            <Button
              size="sm"
              variant="outline"
              borderRadius="sm"
              borderWidth="2px"
              borderColor="neutral.muted"
              color="neutral.text"
              fontFamily="body"
              isDisabled={isProcessing}
              onClick={() => onRevoke(user.id)}
            >
              REVOKE
            </Button>
          </HStack>
        )}

        {isPending && (
          <HStack spacing={2}>
            <Button
              size="sm"
              borderRadius="sm"
              borderWidth="2px"
              bg={canApprove ? "neutral.strong" : "neutral.muted"}
              color="surface.default"
              fontFamily="body"
              borderColor={canApprove ? "neutral.strong" : "neutral.muted"}
              _hover={canApprove ? { bg: "neutral.text" } : {}}
              isDisabled={!canApprove || isProcessing}
              isLoading={isProcessing}
              onClick={() => onApprove(user.id, selectedRole)}
            >
              APPROVE
            </Button>
            <Button
              size="sm"
              variant="outline"
              borderRadius="sm"
              borderWidth="2px"
              borderColor="neutral.muted"
              color="neutral.text"
              fontFamily="body"
              isDisabled={isProcessing}
              onClick={() => onDeny(user.id)}
            >
              DENY
            </Button>
          </HStack>
        )}
      </Td>
    </Tr>
  );
}
