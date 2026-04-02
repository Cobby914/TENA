import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Center,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import FadeInWhenVisible from "../../home/ui/FadeInWhenVisible";
import { useTeamMembers } from "../../../hooks/useTeamMembers";
import MemberCard from "../../ui/MemberCard";

export default function OurTeam() {
  const { members, cohorts, loading, errorMsg } = useTeamMembers();

  return (
    <Box width="100%" bg="surface.default">
      <Box
        bg="surface.muted"
        borderBottomRadius={{ base: "18px", md: "24px" }}
        pb={{ base: 10, md: 14, lg: 16 }}
      >
        <Box
          maxW="1536px"
          mx="auto"
          px={{ base: 6, md: 12, lg: 20 }}
          pt={{ base: 8, md: 10 }}
        >
          <FadeInWhenVisible w="100%" amount={0.4}>
          <Text
            maxW="1060px"
            color="neutral.text"
            fontWeight="700"
            fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            lineHeight={{ base: "1.2", md: "1.15" }}
          >
            Meet our team: change-makers committed to{" "}
            <Box as="span" color="brand.primary">
              transforming equity
            </Box>{" "}
            through navigation and advocacy.
          </Text>
          </FadeInWhenVisible>

          {loading ? (
            <Center py={12}>
              <Spinner size="lg" color="brand.primary" />
            </Center>
          ) : errorMsg ? (
            <Text color="red.600" mt={6}>
              {errorMsg}
            </Text>
          ) : (
            <SimpleGrid
              mt={{ base: 8, md: 10 }}
              columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
              spacing={{ base: 4, md: 5 }}
              w="100%"
              justifyItems="center"
            >
              {members.map((member, index) => (
                <FadeInWhenVisible key={member.id} w="100%" amount={0.35} delay={index * 0.05}>
                  <MemberCard
                    name={member.name}
                    position={member.role}
                    imageSrc={member.imageSrc}
                    variant="team"
                  />
                </FadeInWhenVisible>
              ))}
            </SimpleGrid>
          )}
        </Box>
      </Box>

      <FadeInWhenVisible w="100%" amount={0.38} delay={0.08}>
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
              borderBottom="1px solid"
              borderColor="border.light"
            >
              <h3>
                <AccordionButton
                  px={0}
                  py={{ base: 4, md: 5 }}
                  _hover={{ bg: "transparent" }}
                  alignItems="center"
                >
                  <Box flex="1" textAlign="left" pr={2}>
                    <Text
                      as="span"
                      fontWeight="700"
                      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                      color="neutral.strong"
                      lineHeight="1.2"
                    >
                      {cohort.title}
                    </Text>
                  </Box>
                  <AccordionIcon
                    color="neutral.strong"
                    fontSize={{ base: "xl", md: "2xl" }}
                  />
                </AccordionButton>
              </h3>

              <AccordionPanel px={0} pb={{ base: 8, md: 10 }} pt={0}>
                {cohort.interns.length === 0 ? (
                  <Text color="neutral.subtle" fontSize={{ base: "sm", md: "md" }}>
                    No interns listed for this cohort yet.
                  </Text>
                ) : (
                  <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
                    spacing={{ base: 4, md: 5 }}
                    w="100%"
                    justifyItems="center"
                  >
                    {cohort.interns.map((intern) => (
                      <MemberCard
                        key={intern.id}
                        name={intern.name}
                        position={intern.role}
                        imageSrc={intern.imageSrc}
                        variant="cohort"
                      />
                    ))}
                  </SimpleGrid>
                )}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
      </FadeInWhenVisible>
    </Box>
  );
}
