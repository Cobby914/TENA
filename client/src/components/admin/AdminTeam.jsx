import { Box, Text, VStack, Flex, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import EditMemberCard from "./team/EditMemberCard";
import ManageCohortCard from "./team/ManageCohortCard";
import EditCohort from "./team/EditCohort";
import { useAdminTeamData } from "./useAdminTeamData";

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
    <VStack gap={30} width="1700px" textColor="rgb(51,51,51)">
      <Box borderBottom="2px solid rgb(51,51,51)" pb={10} height={10} width="100%">
        <Text textAlign="left" fontWeight={700} fontSize={24} width="100%">
          Team & Cohorts
        </Text>
      </Box>

      {errorMsg ? (
        <Box width="100%">
          <Text color="red.500">{errorMsg}</Text>
        </Box>
      ) : null}

      <Flex width="100%" gap={30} direction={{ base: "column", md: "row" }}>
        <VStack width={{ base: "100%", md: "50%" }} height="100%" border="2px solid rgb(51,51,51)" p={6} gap={4}>
          <HStack borderBottom="2px solid rgb(51,51,51)" justifyContent="space-between" pb={2} width="100%">
            <Text textAlign="left" fontWeight={600} fontSize={16} width={32}>
              TEAM MEMBERS
            </Text>
            <Button width="100px" height="25px" border="1px solid rgb(102,102,102)" borderRadius={0} px="10px" py="5px" bgColor="rgb(245,245,245)">
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

        <VStack width={{ base: "100%", md: "50%" }} height="100%" border="2px solid rgb(51,51,51)" p={6} gap={4}>
          <HStack borderBottom="2px solid rgb(51,51,51)" justifyContent="space-between" pb={2} width="100%">
            <Text textAlign="left" fontWeight={600} fontSize={16} width={32}>
              COHORTS
            </Text>
            <Button width="100px" height="25px" border="1px solid rgb(102,102,102)" borderRadius={0} px="10px" py="5px" bgColor="rgb(245,245,245)">
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
