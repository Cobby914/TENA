import { useEffect, useState, useMemo } from "react";
import {
  Box, Heading, Text, Input, InputGroup, InputLeftElement,
  HStack, Divider, Spinner, Center, useToast, Container, Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ApprovalsTable from "../components/approvals/ApprovalsTable";
import { clearAuthSession, withAuthHeaders } from "../auth/session";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const API = `${API_BASE}/api/users`;
const CACHE_KEY = "approvals_users";

export default function Approvals() {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch]   = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const toast = useToast();
  const navigate = useNavigate();

  const fetchUsers = async (force = false) => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached && !force) {
      setUsers(JSON.parse(cached));
      setLoading(false);
      return;
    }
    try {
      const res  = await fetch(API, { headers: withAuthHeaders() });
      if (res.status === 401) {
        clearAuthSession();
        navigate("/login", { replace: true });
        return;
      }
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Failed to load users");
      }
      setUsers(data);
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch {
      toast({ title: "Failed to load users", status: "error", duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleApprove = async (id, role) => {
    try {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: withAuthHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({ role, is_verified: true }),
      });
      await fetchUsers(true);
      toast({ title: "User approved", status: "success", duration: 2000 });
    } catch {
      toast({ title: "Failed to approve user", status: "error", duration: 3000 });
    }
  };

  const handleDeny = async (id) => {
    try {
      await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: withAuthHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify({ role: "denied" }),
      });
      await fetchUsers(true);
      toast({ title: "User denied", status: "warning", duration: 2000 });
    } catch {
      toast({ title: "Failed to deny user", status: "error", duration: 3000 });
    }
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return users;
    return users.filter((u) => u.email.toLowerCase().includes(q));
  }, [users, search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const pendingCount = users.filter((u) => u.role === "pending").length;

  const filterButtons = ["All", "Pending", "Approved", "Denied"];

  return (
    <Box minH="100vh" bg="rgb(245,245,245)" py={10}>
      <Container maxW="1300px" px={6}>
        {/* Header */}
        <HStack justify="space-between" align="baseline" mb={2}>
          <Heading fontSize="2xl" fontWeight="700" color="gray.800" fontFamily="body">
            User Approvals
          </Heading>
          {pendingCount > 0 && (
            <Text fontSize="sm" color="rgb(136,136,136)" fontFamily="body">
              {pendingCount} pending request{pendingCount !== 1 ? "s" : ""}
            </Text>
          )}
        </HStack>

        <Divider borderColor="gray.700" borderWidth="2px" mb={6} />

        {/* Search + Filter Row */}
        <HStack spacing={3} mb={6}>
          <InputGroup maxW="260px">
            <InputLeftElement pointerEvents="none">
              <SearchIcon color="gray.400" />
            </InputLeftElement>
            <Input
              placeholder="Search by email..."
              value={search}
              onChange={handleSearch}
              bg="white"
              borderColor="gray.400"
              borderWidth="2px"
              borderRadius="sm"
              fontFamily="body"
              fontSize="sm"
              _focus={{ borderColor: "gray.600", boxShadow: "none" }}
            />
          </InputGroup>

          {filterButtons.map((label, i) => (
            <Button
              key={label}
              size="sm"
              borderRadius="sm"
              fontFamily="body"
              fontSize="sm"
              px={4}
              borderWidth="2px"
              variant={i === 0 ? "solid" : "outline"}
              bg={i === 0 ? "gray.800" : "white"}
              color={i === 0 ? "white" : "gray.700"}
              borderColor={i === 0 ? "gray.800" : "gray.400"}
              _hover={{ bg: i === 0 ? "gray.700" : "gray.100" }}
              // functionality to be added later
            >
              {label}
            </Button>
          ))}
        </HStack>

        {/* Table */}
        {loading ? (
          <Center py={20}>
            <Spinner size="lg" color="gray.500" />
          </Center>
        ) : (
          <ApprovalsTable
            users={filtered}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onApprove={handleApprove}
            onDeny={handleDeny}
          />
        )}
      </Container>
    </Box>
  );
}
