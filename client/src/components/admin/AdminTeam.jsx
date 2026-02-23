import { Box, Text, VStack, Flex, HStack, Button } from "@chakra-ui/react";
import { useState } from "react";
import EditMemberCard from "./ui/EditMemberCard";
import ManageCohortCard from "./ui/ManageCohortCard";

export default function AdminTeam () {
    const [ editingMember , setEditingMember ] = useState(null);
    {/* Finish the backend part here */}
    const [ teamMembers , setTeamMembers ] = useState([
        { name: "Jemal Hussein", position: "Program Director" },
        { name: "Maria Garcia", position: "Community Coordinator" },
        { name: "James Chen", position: "Operations Manager" },
        { name: "Sarah Williams", position: "Outreach Specialist" },
        { name: "David Lee", position: "Data Analyst" },
        { name: "Emily Rodriguez", position: "Program Coordinator" },
    ]);

    const [ editingCohort, setEditingCohort ] = useState(null);
    {/* Finish the backend part here */}
    const [cohorts , setCohorts ] = useState([
        { title: "Spring 2025" , enrollment: 32 , status: "Starts: Mar 15, 2025", name: "Care Navigation", participants: [
                { name: "Sarah Johnson" , email: "sarah.j@email.com" },
                { name: "Michael Chen" , email: "m.chen@email.com" },
                { name: "Lisa Rodriguez" , email: "lisa.rodriguez@email.com" },
                { name: "David Park" , email: "d.park@email.com" },
                { name: "Jennifer Williams" , email: "jennifer.w@email.com" },
            ] , members: {
                coordinator: "Alex Johnson",
                staff: [
                    { name: "Maria Garcia", position: "Community Coordinator" },
                    { name: "Sarah Williams", position: "Outreach Specialist" },
                    { name: "James Chen", position: "Operations Manager" },
                    { name: "David Lee", position: "Data Analyst" },
                ]
            }},
        {title: "Winter 2024", enrollment: 48, status: "In Progress"},
        {title: "Spring 2024", enrollment: 25, status: "Complete"},
        {title: "Fall 2024", enrollment: 40, status: "Starts: Jan 10, 2025"},
        {title: "Spring 2023", enrollment: 15, status: "Complete"},
    ]);

    if (editingMember) {
        return (
            <></>
        );
    }

    return (
        <VStack gap={30} width="1700px" textColor="rgb(51,51,51)">
            <Box borderBottom="2px solid rgb(51,51,51)" pb={10} height={10} width="100%">
                <Text textAlign="left" fontWeight={700} fontSize={24} width="100%">
                    Team & Cohorts
                </Text>
            </Box>

            <Flex width="100%" gap={30} direction={{ base:"column", md:"row" }}>
                
                <VStack width={{base: "100%", md:"50%"}} height="100%" border="2px solid rgb(51,51,51)" p={6} gap={4}>
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
                        <EditMemberCard key={member.name} name={member.name} position={member.position} />
                    ))}

                </VStack>

                <VStack width={{base: "100%", md:"50%"}} height="100%" border="2px solid rgb(51,51,51)"  p={6} gap={4}>
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
                        <ManageCohortCard key={cohort.title} title={cohort.title} enrollment={cohort.enrollment} status={cohort.status} />
                    ))}

                </VStack>
                
            </Flex>
        </VStack>
    );
}
