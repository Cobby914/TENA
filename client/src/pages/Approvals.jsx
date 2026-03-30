import { useEffect, useState, useMemo } from "react";
import {
  Box, Heading, Text, Input, InputGroup, InputLeftElement,
  HStack, Divider, Spinner, Center, useToast, Container, Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ApprovalsTable from "../components/approvals/ApprovalsTable";
import { withAuthHeaders } from "../auth/session";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const API = `${API_BASE}/api/users`;
const CACHE_KEY = "approvals_users";

export default function Approvals() {
  const [users, setUsers]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch]   = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [processingByUser, setProcessingByUser] = useState({});
  const toast = useToast();
  const navigate = useNavigate();
  const clearSession = useAuthStore((s) => s.clearSession);

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
        clearSession();
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

  const setUserProcessing = (id, isProcessing) => {
    setProcessingByUser((prev) => {
      const next = { ...prev };
      if (isProcessing) {
        next[id] = true;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const updateUser = async (id, payload, successTitle, successStatus = "success") => {
    setUserProcessing(id, true);
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "PUT",
        headers: withAuthHeaders({ "Content-Type": "application/json" }),
        body: JSON.stringify(payload),
      });
      if (res.status === 401) {
        clearSession();
        navigate("/login", { replace: true });
        return false;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to update user");
      }
      await fetchUsers(true);
      toast({ title: successTitle, status: successStatus, duration: 2000 });
      return true;
    } catch (err) {
      toast({
        title: err instanceof Error ? err.message : "Failed to update user",
        status: "error",
        duration: 3000
      });
      return false;
    } finally {
      setUserProcessing(id, false);
    }
  };

  const deleteUser = async (id, successTitle, successStatus = "warning") => {
    setUserProcessing(id, true);
    try {
      const res = await fetch(`${API}/${id}`, {
        method: "DELETE",
        headers: withAuthHeaders()
      });
      if (res.status === 401) {
        clearSession();
        navigate("/login", { replace: true });
        return false;
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to remove user");
      }
      await fetchUsers(true);
      toast({ title: successTitle, status: successStatus, duration: 2000 });
      return true;
    } catch (err) {
      toast({
        title: err instanceof Error ? err.message : "Failed to remove user",
        status: "error",
        duration: 3000
      });
      return false;
    } finally {
      setUserProcessing(id, false);
    }
  };

  const handleApprove = async (id, role) => {
    await updateUser(id, { role, is_verified: true }, "User approved");
  };

  const handleAssignRole = async (id, role) => {
    await updateUser(id, { role, is_verified: true }, "Role updated");
  };

  const handleDeny = async (id) => {
    await deleteUser(id, "User denied and removed");
  };

  const handleRevoke = async (id) => {
    await deleteUser(id, "Access revoked and account removed");
  };

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    const base = users.filter((u) => {
      if (!q) return true;
      return String(u.email ?? "").toLowerCase().includes(q);
    });

    if (statusFilter === "Pending") {
      return base.filter((u) => u.role === "pending");
    }
    if (statusFilter === "Approved") {
      return base.filter((u) => u.role === "user" || u.role === "admin");
    }
    if (statusFilter === "Denied") {
      return base.filter((u) => u.role === "denied");
    }
    return base;
  }, [users, search, statusFilter]);

  useEffect(() => {
    const maxPage = Math.max(1, Math.ceil(filtered.length / 7));
    if (currentPage > maxPage) {
      setCurrentPage(maxPage);
    }
  }, [filtered.length, currentPage]);

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

          {filterButtons.map((label) => (
            <Button
              key={label}
              size="sm"
              borderRadius="sm"
              fontFamily="body"
              fontSize="sm"
              px={4}
              borderWidth="2px"
              variant={label === statusFilter ? "solid" : "outline"}
              bg={label === statusFilter ? "gray.800" : "white"}
              color={label === statusFilter ? "white" : "gray.700"}
              borderColor={label === statusFilter ? "gray.800" : "gray.400"}
              _hover={{ bg: label === statusFilter ? "gray.700" : "gray.100" }}
              onClick={() => {
                setStatusFilter(label);
                setCurrentPage(1);
              }}
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
            onAssignRole={handleAssignRole}
            onDeny={handleDeny}
            onRevoke={handleRevoke}
            processingByUser={processingByUser}
          />
        )}
      </Container>
    </Box>
  );
}
