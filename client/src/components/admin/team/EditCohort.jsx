import { Box, Text, VStack, Flex, HStack, Button, Input, Select } from "@chakra-ui/react";
import { ArrowLeft } from "lucide-react";
export default function EditCohort ({ cohort, onClickBack }) {
    return (
        <VStack gap={2.5} width="1200px" textColor="neutral.strong">
            <HStack onClick={onClickBack} width="100%" _hover={{textDecoration: "underline"}}>
                <ArrowLeft size={14} color="var(--color-neutral-muted)"/> 
                <Text textAlign="left" fontWeight={400} fontSize={14} width="100%" textColor="neutral.muted">
                    Back to Team & Cohorts 
                </Text>
            </HStack>

            <Box borderBottomWidth="2px" borderBottomStyle="solid" borderBottomColor="neutral.strong" pb={10} height={10} width="100%">
                <Text textAlign="left" fontWeight={700} fontSize={24} width="100%">
                    Editing Cohort: {cohort.title} - {cohort.name}
                </Text>
            </Box>

            <VStack width="100%" heigth="295px" borderWidth="2px" borderStyle="solid" borderColor="neutral.muted" pt={22} p={6} gap={5} bgColor="surface.default">
                <Box borderBottomWidth="2px" borderBottomStyle="solid" borderBottomColor="neutral.strong" pb={4} height={10} width="100%">
                    <Text textAlign="left" fontWeight={700} fontSize={16} width="100%">
                        1. COHORT INFORMATION
                    </Text>
                </Box>
                <VStack height="64px" width="100%" gap={2}>
                    <Text width="100%" fontWeight={600} fontSize={13}>
                        Cohort Name:
                    </Text>
                    <Input 
                        height="40px"
                        borderWidth="2px"
                        borderStyle="solid"
                        borderColor="neutral.muted"
                        borderRadius={0}
                        p={2.5}
                        bgColor="surface.default"
                        _placeholder={{ color: "var(--color-neutral-strong)" }}
                        placeholder={cohort.title + " - " + cohort.name} 
                    />
                </VStack>
                <VStack height="86px" width="100%" gap={2}>
                    <Text width="100%" fontWeight={600} fontSize={13}>
                        Current Enrollment:
                    </Text>
                    <Input 
                        height="40px"
                        borderWidth="2px"
                        borderStyle="solid"
                        borderColor="neutral.muted"
                        borderRadius={0}
                        p={2.5}
                        bgColor="surface.soft"
                        placeholder={cohort.enrollment} 
                    />
                </VStack>
            </VStack>

            <VStack width="100%" heigth="475px" borderWidth="2px" borderStyle="solid" borderColor="neutral.muted" pt={22} p={6} gap={5} bgColor="surface.default">
                <HStack borderBottomWidth="2px" borderBottomStyle="solid" borderBottomColor="neutral.strong" pb={4} height={10} width="100%">
                    <Text textAlign="left" fontWeight={700} fontSize={16} width="100%">
                        2. MANAGE PARTICIPANTS
                        <Box as="span" display="inline-block" ml={3} width="105px" height="23px" textAlign="center" border="1px solid" borderColor="neutral.muted" py={1} px={2}>
                            <Text fontWeight={600} fontSize={10} textColor="neutral.muted" verticalAlign="center">
                                {cohort.enrollment} / 40 ENROLLED
                            </Text>
                        </Box>
                    </Text>
                </HStack>
                <VStack width="100%" height="300px" borderWidth="2px" borderStyle="solid" borderColor="neutral.muted" overflowY="scroll" gap={0}>

                    {cohort.participants.map((p) => (
                        <HStack width="100%" height="57px" border="1px solid" borderColor="border.light" px={4} py={3} justifyContent="space-between">
                            <VStack width="667px" gap={-1} textAlign="left" >
                                <Text fontWeight={600} fontSize={13} width="100%">
                                    {p.name}
                                </Text>
                                <Text fontWeight={400} fontSize={11} textColor="neutral.subtle" width="100%">
                                    {p.email}
                                </Text>
                            </VStack>

                            <Button width="55px" height="25px" border="1px solid" borderColor="neutral.muted" borderRadius={0} px="10px" py="5px" bgColor="surface.soft">
                                <Text fontWeight={500} fontSize={11}>
                                    Remove
                                </Text>
                            </Button> 
                        </HStack>
                    ))}

                </VStack>
                <Button width="100%" height="45px" borderWidth="2px" borderStyle="solid" borderColor="neutral.muted" borderRadius={0} px={4} py={2.5} bgColor="surface.default">
                    <Text fontWeight={600} fontSize={13} textColor="black">
                        + ADD PARTICIPANT
                    </Text>
                </Button>
            </VStack>

            <VStack width="100%" heigth="400px" borderWidth="2px" borderStyle="solid" borderColor="neutral.muted" pt={22} p={6} gap={5} bgColor="surface.default">
                <HStack borderBottomWidth="2px" borderBottomStyle="solid" borderBottomColor="neutral.strong" pb={4} height={10} width="100%" alignContents="left">
                    <Text textAlign="left" fontWeight={700} fontSize={16} width="100%">
                        3. ASSIGNED TEAM MEMBERS
                    </Text>
                </HStack>
                <VStack height="66px" width="100%" gap={2}>
                    <Text width="100%" fontWeight={600} fontSize={13}>
                        Program Coordinator:
                    </Text>
                    <Input 
                        height="40px"
                        borderWidth="2px"
                        borderStyle="solid"
                        borderColor="neutral.muted"
                        borderRadius={0}
                        p={2.5}
                        bgColor="surface.default"
                        _placeholder={{ color: "var(--color-neutral-strong)" }}
                        placeholder={cohort.members.coordinator} 
                    />
                </VStack>
                <VStack height="140px" width="100%" gap={2}>
                    <Text width="100%" fontWeight={600} fontSize={13}>
                        Additional Staff:
                    </Text>
                    <Box width="100%">
                        <Select
                            multiple
                            height="100px"
                            borderWidth="2px"
                            borderStyle="solid"
                            borderColor="neutral.muted"
                            borderRadius={0}
                            css={{
                                padding: "5px",
                                "option:checked": {
                                background: "var(--color-surface-muted) !important",
                                }
                            }}
                        >
                            {cohort.members.staff.map((staff) => (
                                <option width="100%" key={staff.name} value={staff.name} fontSize={11}>
                                    {staff.name} - {staff.position}
                                </option>
                            ))}
                        </Select>
                        <Text fontWeight={400} fontSize={10} width="100%" textColor="neutral.subtle">
                            Hold Ctrl/Cmd to select multiple
                        </Text>
                    </Box>
                </VStack>
            </VStack>
            
            <Box width="100%" height="67px" borderTopWidth="2px" borderTopStyle="solid" borderTopColor="neutral.muted" />

        </VStack>
    );
}
