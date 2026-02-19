import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import MemberCard from "../ui/MemberCard";

export default function OurBoard() {
    return (
        <Box p={20}>
            <Text fontSize={40}>
                Our Board
            </Text>
            {/* 4 by 4 Cards of Board Members */}
            <SimpleGrid mt={10} columns={4} spacing={10}>

                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />

                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />

                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />

                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />
                <MemberCard name="Jemal Hussein" position="Position in Organization" />

            </SimpleGrid>
        </Box>
    );
}
