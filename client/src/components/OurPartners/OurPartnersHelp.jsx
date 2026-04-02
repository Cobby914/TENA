import { Box, Flex, Image, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react";
const helpImage =
  "/OurPartners/HowWeHelp/dfc9dda9b603d278afc8e3ee4615d2583f799421.jpg";

export default function OurPartnersHelp() {
  return (
    <Box as="section" width="100%" bg="surface.muted" py={{ base: 10, md: 14, lg: 16 }}>
      <Box maxW="1536px" mx="auto" px={{ base: 6, md: 12, lg: 20 }}>
        <Box
          width="100%"
          px={{ base: 0, md: 2, lg: 4 }}
          py={{ base: 0, md: 2, lg: 4 }}
        >
          <Flex direction={{ base: "column", lg: "row" }} gap={{ base: 8, md: 10, lg: 12 }} align="center">
            <Box flex={{ base: "unset", lg: "1" }} width="100%" maxW={{ base: "100%", lg: "620px" }}>
            <Image
              src={helpImage}
              alt="TENA team at community outreach event"
              width="100%"
              maxW={{ base: "100%", lg: "620px" }}
              mx={{ base: "auto", lg: "0" }}
              borderRadius="12px"
              objectFit="cover"
            />
            </Box>

            <VStack flex={{ base: "unset", lg: "1.2" }} width="100%" align="stretch" spacing={{ base: 7, md: 8 }}>
              <Box>
                <Text
                  fontFamily="body"
                  fontWeight="700"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  color="neutral.strong"
                  mb={{ base: 4, md: 5 }}
                >
                  How Our Partners Help:
                </Text>

                <UnorderedList spacing={{ base: 4, md: 5 }} ml={{ base: 5, md: 6 }}>
                  <ListItem fontFamily="body" fontWeight="400" lineHeight="1.4" fontSize={{ base: "md", md: "lg", lg: "2xl" }} color="neutral.strong">
                    Direct Community Impact: Financial support directly funds our front-line navigation services, connecting vulnerable individuals to essential healthcare, housing, and economic resources.
                  </ListItem>
                  <ListItem fontFamily="body" fontWeight="400" lineHeight="1.4" fontSize={{ base: "md", md: "lg", lg: "2xl" }} color="neutral.strong">
                    Driving Systemic Change: Strategic partnerships empower our advocacy efforts, allowing us to actively challenge the structural inequities and injustices that shape health outcomes.
                  </ListItem>
                  <ListItem fontFamily="body" fontWeight="400" lineHeight="1.4" fontSize={{ base: "md", md: "lg", lg: "2xl" }} color="neutral.strong">
                    Sustaining &amp; Scaling Operations: Ongoing funding builds the essential infrastructure and capacity we need to expand our reach.
                  </ListItem>
                </UnorderedList>
              </Box>

              <Box>
                <Text
                  fontFamily="body"
                  fontWeight="700"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  color="neutral.strong"
                  mb={{ base: 4, md: 5 }}
                >
                  Reach out to Join Us:
                </Text>
                <UnorderedList ml={{ base: 5, md: 6 }}>
                  <ListItem fontFamily="body" fontWeight="400" lineHeight="1.4" fontSize={{ base: "md", md: "lg", lg: "2xl" }} color="neutral.strong">
                    To support our work, volunteer, or partner with us please reach out to Jemal at jemal.hussein@tenacares.org
                  </ListItem>
                </UnorderedList>
              </Box>
            </VStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
