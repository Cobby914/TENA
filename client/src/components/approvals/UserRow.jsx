import {
  Tr, Td, HStack, VStack, Avatar, Text, Badge, Select, Button,
} from "@chakra-ui/react";
import { useState } from "react";

const STATUS_MAP = {
  pending: { label: "PENDING" },
  denied:  { label: "DENIED"  },
  user:    { label: "APPROVED" },
  admin:   { label: "APPROVED" },
};

export default function UserRow({ user, onApprove, onDeny }) {
  const [selectedRole, setSelectedRole] = useState("");

  const status     = STATUS_MAP[user.role] ?? { label: "UNKNOWN" };
  const isPending  = user.role === "pending";
  const isDenied   = user.role === "denied";
  const isApproved = user.role === "user" || user.role === "admin";

  const displayName = "Firstname Lastname";
  const initials    = "FL";
  const canApprove  = isPending && selectedRole !== "";

  return (
    <Tr
      bg="rgb(255, 255, 255)"
      _hover={{ bg: "rgb(228,228,228)" }}
      transition="background 0.15s"
    >
      {/* USER */}
      <Td borderColor="gray.300" borderBottomWidth="1px" py={7}>
        <HStack spacing={3}>
          <Avatar
            size="sm"
            name={initials}
            bg="rgb(199, 199, 199)"
            color="rgb(100, 100, 100)"
            borderColor="rgb(120, 120, 120)"
            borderWidth="1px"
            borderStyle="solid"
            getInitials={() => initials}
          />
          <VStack align="start" spacing={0}>
            <Text fontWeight="600" fontSize="sm" color="gray.800" fontFamily="body">
              {displayName}
            </Text>
            <Text fontSize="xs" color="rgb(136,136,136)" fontFamily="body">
              {user.email}
            </Text>
          </VStack>
        </HStack>
      </Td>

      {/* REQUESTED */}
      <Td borderColor="gray.300" borderBottomWidth="1px" py={7}>
        <Text fontSize="sm" color="rgb(136,136,136)" fontFamily="body">
          {new Date(user.created_at).toLocaleDateString("en-US", {
            month: "short", day: "numeric", year: "numeric",
          })}
        </Text>
      </Td>

      {/* STATUS */}
      <Td borderColor="gray.300" borderBottomWidth="1px" py={7}>
        <Badge
        fontSize="xs"
        px={2}
        py={1}
        borderRadius="sm"
        letterSpacing="wide"
        fontFamily="body"
        borderWidth="1px"
        borderColor={isDenied ? "rgb(180,180,180)" : isApproved ? "rgb(100,100,100)" : "gray.500"}
        color={isDenied ? "rgb(180,180,180)" : isApproved ? "rgb(100,100,100)" : "gray.700"}
        bg={isApproved ? "rgb(228,228,228)" : isPending ? "rgb(228,228,228)" : "transparent"}
        opacity={isDenied ? 0.5 : 1}
        >
        {status.label}
        </Badge>
      </Td>

      {/* ASSIGN ROLE */}
      <Td borderColor="gray.300" borderBottomWidth="1px" py={7}>
        {isDenied ? (
          <Select
            size="sm"
            isDisabled
            placeholder="—"
            bg="rgb(220,220,220)"
            borderColor="gray.400"
            borderWidth="2px"
            borderRadius="sm"
            fontFamily="body"
            color="rgb(136,136,136)"
            w="145px"
          />
        ) : isApproved ? (
          <Select
            size="sm"
            isDisabled
            value={user.role === "admin" ? "admin" : "user"}
            bg="rgb(245,245,245)"
            borderColor="gray.400"
            borderWidth="2px"
            borderRadius="sm"
            fontFamily="body"
            w="145px"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Select>
        ) : (
          <Select
            size="sm"
            placeholder="Select role..."
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            bg="white"
            borderColor="gray.400"
            borderWidth="2px"
            borderRadius="sm"
            fontFamily="body"
            w="145px"
            _focus={{ borderColor: "gray.600", boxShadow: "none" }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Select>
        )}
      </Td>

      {/* ACTIONS */}
      <Td borderColor="gray.300" borderBottomWidth="1px" py={7}>
        {isDenied && (
          <Text fontSize="sm" color="rgb(136,136,136)" fontStyle="italic" fontFamily="body">
            No action
          </Text>
        )}

        {isApproved && (
          <Button
            size="sm"
            variant="outline"
            borderRadius="sm"
            borderWidth="2px"
            borderColor="gray.400"
            color="gray.500"
            fontFamily="body"
            isDisabled
          >
            REVOKE
          </Button>
        )}

        {isPending && (
          <HStack spacing={2}>
            <Button
              size="sm"
              borderRadius="sm"
              borderWidth="2px"
              bg={canApprove ? "gray.700" : "gray.300"}
              color="white"
              fontFamily="body"
              borderColor={canApprove ? "gray.700" : "gray.300"}
              _hover={canApprove ? { bg: "gray.600" } : {}}
              isDisabled={!canApprove}
              onClick={() => onApprove(user.id, selectedRole)}
            >
              APPROVE
            </Button>
            <Button
              size="sm"
              variant="outline"
              borderRadius="sm"
              borderWidth="2px"
              borderColor="gray.400"
              color="gray.700"
              fontFamily="body"
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
