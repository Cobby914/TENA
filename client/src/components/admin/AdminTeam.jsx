import { Box, Text, VStack, Flex, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import EditMemberCard from "./team/EditMemberCard";
import ManageCohortCard from "./team/ManageCohortCard";
import EditCohort from "./team/EditCohort";
import { useAdminTeamData } from "../../hooks/useAdminTeamData";

export default function AdminTeam() {
  const [editingMember, setEditingMember] = useState(null);
  const [editingCohort, setEditingCohort] = useState(null);
  const { teamMembers, cohorts, errorMsg } = useAdminTeamData();

  if (editingCohort) {
    return (
      <EditCohort
        cohort={editingCohort}
        onClickBack={() => {
          setEditingCohort(null);
          setEditingMember(null);
        }}
      />
    );
  }

  return (
    <VStack gap={8} width="100%" maxW="1400px" textColor="neutral.strong" align="stretch">
      <Box borderBottom="2px solid" borderColor="neutral.strong" pb={10} height={10} width="100%">
        <Text textAlign="left" fontWeight={700} fontSize={24} width="100%">
          Team & Cohorts
        </Text>
      </Box>

      {errorMsg ? (
        <Box width="100%">
          <Text color="red.500">{errorMsg}</Text>
        </Box>
      ) : null}

      <Flex width="100%" gap={6} direction={{ base: "column", xl: "row" }}>
        <VStack width={{ base: "100%", xl: "50%" }} height="100%" borderWidth="2px" borderColor="neutral.strong" borderStyle="solid" p={6} gap={4}>
          <HStack borderBottomWidth="2px" borderBottomStyle="solid" borderBottomColor="neutral.strong" justifyContent="space-between" pb={2} width="100%">
            <Text textAlign="left" fontWeight={600} fontSize={16} width={32}>
              TEAM MEMBERS
            </Text>
            <Button width="100px" height="25px" border="1px solid" borderColor="neutral.muted" borderRadius={0} px="10px" py="5px" bgColor="surface.soft">
              <Text fontWeight={500} fontSize={11}>
                + Add Member
              </Text>
            </Button>
          </HStack>

          {teamMembers.map((member) => (
            <EditMemberCard
              key={member.id}
              onClick={() => {
                setEditingCohort(null);
                setEditingMember(member);
              }}
              name={member.name}
              position={member.position}
            />
          ))}
        </VStack>

        <VStack width={{ base: "100%", xl: "50%" }} height="100%" borderWidth="2px" borderColor="neutral.strong" borderStyle="solid" p={6} gap={4}>
          <HStack borderBottomWidth="2px" borderBottomStyle="solid" borderBottomColor="neutral.strong" justifyContent="space-between" pb={2} width="100%">
            <Text textAlign="left" fontWeight={600} fontSize={16} width={32}>
              COHORTS
            </Text>
            <Button width="100px" height="25px" border="1px solid" borderColor="neutral.muted" borderRadius={0} px="10px" py="5px" bgColor="surface.soft">
              <Text fontWeight={500} fontSize={11}>
                + New Cohort
              </Text>
            </Button>
          </HStack>

          {cohorts.map((cohort) => (
            <ManageCohortCard
              key={cohort.id}
              onClick={() => {
                setEditingMember(null);
                setEditingCohort(cohort);
              }}
              title={cohort.title}
              enrollment={cohort.enrollment}
              status={cohort.status}
            />
          ))}
        </VStack>
      </Flex>
    </VStack>
  );
}
