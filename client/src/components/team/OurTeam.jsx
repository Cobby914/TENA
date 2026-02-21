import { useMemo } from "react";
import { Box, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import MemberCard from "../ui/MemberCard";
import CollapsibleSection from "../ui/CollapsibleSection";
import { useTeamMembers } from "./useTeamMembers";
import { buildCohortEntries, isBoardMember } from "./teamMemberUtils";

export default function OurTeam() {
  const { members, errorMsg } = useTeamMembers();

  const boardMembers = useMemo(() => {
    return members.filter(isBoardMember);
  }, [members]);

  const cohortEntries = useMemo(() => {
    return buildCohortEntries(members);
  }, [members]);

  return (
    <VStack
      p={{ base: 4, md: 10, lg: 20 }}
      spacing={{ base: 10, md: 20 }}
      alignItems="left"
    >
      <Text
        fontSize={{ base: "2xl", md: "3xl", lg: "40px" }}
        mt={{ base: -2, md: -5, lg: -10 }}
      >
        The Team
      </Text>

      {errorMsg ? (
        <Box mt={{ base: -2, md: -5, lg: -10 }} width="100%">
          <Text color="red.500">{errorMsg}</Text>
        </Box>
      ) : null}

      <SimpleGrid
        mt={{ base: -2, md: -5, lg: -10 }}
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={5}
      >
        {boardMembers.map((member) => (
          <MemberCard
            key={member.id}
            name={member.name}
            position={member.role}
            imageSrc={member.imageSrc}
          />
        ))}
      </SimpleGrid>

      {cohortEntries.map(([cohortName, membersInCohort]) => (
        <CollapsibleSection key={cohortName} title={cohortName}>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
            spacing={5}
            transform={{
              base: "scale(0.8)",
              md: "scale(0.9)",
              lg: "scale(0.93)",
            }}
            transformOrigin="top left"
          >
            {membersInCohort.map((member) => (
              <MemberCard
                key={member.id}
                name={member.name}
                position={member.role}
                imageSrc={member.imageSrc}
              />
            ))}
          </SimpleGrid>
        </CollapsibleSection>
      ))}
    </VStack>
  );
}
