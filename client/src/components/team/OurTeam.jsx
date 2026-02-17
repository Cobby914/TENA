import {Text, VStack, SimpleGrid} from "@chakra-ui/react";
import MemberCard from "../ui/MemberCard";
import CohortCollapsible from "../ui/CohortCollapsible";

export default function OurTeam () {
    return (
        <VStack p={20} spacing={20} align="left">
            <Text fontSize={40} mt={-10}>
                The Team
            </Text>

            <SimpleGrid mt={-10} columns={4} spacing={5}>
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
            </SimpleGrid>

            <CohortCollapsible title="2023 Winter Cohort">
                <SimpleGrid columns={4} spacing={5} transform="scale(0.9)" transformOrigin="top left">
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                </SimpleGrid>
            </CohortCollapsible>

            <CohortCollapsible title="2023 Fall Cohort">
                <SimpleGrid columns={4} spacing={5} transform="scale(0.9)" transformOrigin="top left">
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                </SimpleGrid>
            </CohortCollapsible>

            <CohortCollapsible title="2023 Summer Cohort">
                <SimpleGrid columns={4} spacing={5} transform="scale(0.9)" transformOrigin="top left">
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                </SimpleGrid>
            </CohortCollapsible>

        </VStack>
    );
}