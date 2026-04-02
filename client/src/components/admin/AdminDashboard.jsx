
import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Spinner,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  VStack
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { fetchPrograms } from "../../api/programsAPI";
import { fetchTeamMembers, fetchCohorts } from "../../api/teamMembersApi";
import { withAuthHeaders } from "../../auth/session";

const API_BASE = (import.meta.env.VITE_API_BASE_URL || "http://localhost:3001").replace(/\/+$/, "");

export default function AdminDashboard() {
  const [programCount, setProgramCount] = useState(0);
  const [teamMemberCount, setTeamMemberCount] = useState(0);
  const [cohortCount, setCohortCount] = useState(0);
  const [pendingUsers, setPendingUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        const [programs, teamMembers, cohorts, usersRes] = await Promise.all([
          fetchPrograms(undefined, controller.signal),
          fetchTeamMembers(controller.signal),
          fetchCohorts(controller.signal),
          fetch(`${API_BASE}/api/users`, {
            signal: controller.signal,
            headers: await withAuthHeaders()
          })
        ]);

        const usersData = await usersRes.json().catch(() => []);
        if (!usersRes.ok) {
          throw new Error(usersData?.error || `Unable to load users (${usersRes.status})`);
        }

        const normalizedUsers = Array.isArray(usersData) ? usersData : [];
        const pending = normalizedUsers.filter(
          (user) => String(user.role ?? "").toLowerCase() === "pending"
        );

        setProgramCount(programs.length);
        setTeamMemberCount(teamMembers.length);
        setCohortCount(cohorts.length);
        setPendingUsers(pending);
      } catch (err) {
        if (err?.name === "AbortError") return;
        setErrorMsg(err instanceof Error ? err.message : "Unable to load dashboard data");
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  const latestPendingUsers = useMemo(() => {
    return [...pendingUsers]
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
      .slice(0, 5);
  }, [pendingUsers]);

  return (
    <VStack align="stretch" gap={6}>
      <Box borderBottom="2px solid" borderColor="neutral.strong" pb={4}>
        <Heading size="lg" color="gray.800">
          Dashboard
        </Heading>
        <Text color="gray.600" mt={1}>
          Quick overview of admin activity and pending work.
        </Text>
      </Box>

      {loading ? (
        <HStack py={10} justify="center">
          <Spinner />
          <Text color="gray.600">Loading dashboard data...</Text>
        </HStack>
      ) : errorMsg ? (
        <Box borderWidth="1px" borderColor="red.300" bg="red.50" p={4}>
          <Text color="red.600">{errorMsg}</Text>
        </Box>
      ) : (
        <>
          <Grid
            templateColumns={{ base: "repeat(1, minmax(0, 1fr))", md: "repeat(2, minmax(0, 1fr))", lg: "repeat(4, minmax(0, 1fr))" }}
            gap={4}
          >
            <MetricCard label="Pending approvals" value={pendingUsers.length} />
            <MetricCard label="Total programs" value={programCount} />
            <MetricCard label="Team members" value={teamMemberCount} />
            <MetricCard label="Cohorts" value={cohortCount} />
          </Grid>

          <Box borderWidth="1px" borderColor="gray.300" bg="white" p={4}>
            <HStack justify="space-between" mb={3}>
              <Text fontWeight="600" color="gray.700">
                Recent pending approvals
              </Text>
              <Button size="sm" onClick={() => navigate("/admin/approvals")}>
                Open approvals
              </Button>
            </HStack>

            {latestPendingUsers.length === 0 ? (
              <Text color="gray.600" fontSize="sm">
                No pending approvals right now.
              </Text>
            ) : (
              <VStack align="stretch" gap={2}>
                {latestPendingUsers.map((user) => (
                  <HStack key={user.id} justify="space-between" borderWidth="1px" borderColor="gray.200" p={2}>
                    <Text fontSize="sm" color="gray.700">
                      {user.email}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                      {new Date(user.created_at).toLocaleDateString()}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            )}
          </Box>
        </>
      )}
    </VStack>
  );
}

function MetricCard({ label, value }) {
  return (
    <Box borderWidth="1px" borderColor="gray.300" bg="white" p={4}>
      <Stat>
        <StatLabel color="gray.600">{label}</StatLabel>
        <StatNumber color="gray.800">{value}</StatNumber>
      </Stat>
    </Box>
  );
}
