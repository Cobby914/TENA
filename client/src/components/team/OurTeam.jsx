import {Text, VStack, SimpleGrid} from "@chakra-ui/react";
import MemberCard from "../ui/MemberCard";
import CollapsibleSection from "../ui/CollapsibleSection";

export default function OurTeam () {
    return (
        <VStack p={{ base: 4, md: 10, lg: 20 }} spacing={{ base: 10, md: 20 }} alignItems="left">
            <Text fontSize={{ base: "2xl", md: "3xl", lg: "40px" }} mt={{ base: -2, md: -5, lg: -10 }}>
                The Team
            </Text>

            <SimpleGrid mt={{ base: -2, md: -5, lg: -10 }} columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5}>
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
            </SimpleGrid>

            <CollapsibleSection title="2023 Winter Cohort">
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5} transform={{ base: "none", md: "scale(0.9)", lg: "scale(0.9)" }} transformOrigin="top left">
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                </SimpleGrid>
            </CollapsibleSection>

            <CollapsibleSection title="2023 Fall Cohort">
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5} transform={{ base: "none", md: "scale(0.9)", lg: "scale(0.9)" }} transformOrigin="top left">
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                </SimpleGrid>
            </CollapsibleSection>

            <CollapsibleSection title="2023 Summer Cohort">
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={5} transform={{ base: "none", md: "scale(0.9)", lg: "scale(0.9)" }} transformOrigin="top left">
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                    <MemberCard name="Jemal Hussein" position="Position in Organization" />
                </SimpleGrid>
            </CollapsibleSection>

        </VStack>
    );
}