import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  Spinner,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useTeamMembers } from "../useTeamMembers";
import MemberCard from "../../ui/MemberCard";

export default function OurTeam() {
  const { members, cohorts, loading, errorMsg } = useTeamMembers();

  return (
    <Box width="100%" bg="#FFFFFF">
      <Box
        bg="#DEE3EB"
        borderBottomRadius={{ base: "18px", md: "24px" }}
        pb={{ base: 10, md: 14, lg: 16 }}
      >
        <Box
          maxW="1536px"
          mx="auto"
          px={{ base: 6, md: 12, lg: 20 }}
          pt={{ base: 8, md: 10 }}
        >
          <Text
            maxW="1060px"
            color="#1D232E"
            fontWeight="700"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            lineHeight={{ base: "1.2", md: "1.15" }}
          >
            Meet our team: change-makers committed to{" "}
            <Box as="span" color="#1573CF">
              transforming equity
            </Box>{" "}
            through navigation and advocacy.
          </Text>

          {loading ? (
            <Center py={12}>
              <Spinner size="lg" color="#1573CF" />
            </Center>
          ) : errorMsg ? (
            <Text color="red.600" mt={6}>
              {errorMsg}
            </Text>
          ) : (
            <Wrap
              mt={{ base: 8, md: 10 }}
              spacing={{ base: 4, md: 5 }}
              justify="flex-start"
            >
              {members.map((member) => (
                <WrapItem key={member.id}>
                  <MemberCard
                    name={member.name}
                    position={member.role}
                    imageSrc={member.imageSrc}
                    variant="team"
                  />
                </WrapItem>
              ))}
            </Wrap>
          )}
        </Box>
      </Box>

      <Box
        maxW="1536px"
        mx="auto"
        px={{ base: 6, md: 12, lg: 20 }}
        py={{ base: 8, md: 12 }}
      >
        <Accordion allowMultiple defaultIndex={cohorts.length > 0 ? [0] : []}>
          {cohorts.map((cohort) => (
            <AccordionItem
              key={cohort.id}
              border="none"
              borderBottom="1px solid #E1E6ED"
            >
              <h3>
                <AccordionButton
                  px={0}
                  py={{ base: 5, md: 6 }}
                  _hover={{ bg: "transparent" }}
                >
                  <Box flex="1" textAlign="left">
                    <Text
                      fontWeight="700"
                      fontSize={{ base: "3xl", md: "4xl" }}
                      color="#111827"
                    >
                      {cohort.title}
                    </Text>
                  </Box>
                  <AccordionIcon color="#111827" />
                </AccordionButton>
              </h3>

              <AccordionPanel px={0} pb={{ base: 7, md: 10 }}>
                <Box
                  border="1px solid #D8DCE2"
                  bg="#F3F5F7"
                  borderRadius="4px"
                  py={{ base: 4, md: 5 }}
                  px={{ base: 4, md: 6 }}
                >
                  <Text color="#4B5563" fontSize={{ base: "sm", md: "md" }}>
                    COLIN PLEASEEEEEE IMPLEMENT THIS INTERN FILTERING SECTIONS
                    PLEAWSEE
                  </Text>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
}
