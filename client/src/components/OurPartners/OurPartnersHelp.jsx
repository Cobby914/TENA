import {
  Box,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import FadeInWhenVisible from "../home/ui/FadeInWhenVisible";
const helpImage =
  "/OurPartners/HowWeHelp/dfc9dda9b603d278afc8e3ee4615d2583f799421.jpg";

export default function OurPartnersHelp() {
  const listItemStyles = {
    fontFamily: "body",
    fontWeight: "400",
    lineHeight: "1.35",
    fontSize: { base: "sm", md: "md", lg: "xl" },
    color: "neutral.strong",
  };

  return (
    <Box
      as="section"
      width="100%"
      bg="surface.muted"
      py={{ base: 10, md: 14, lg: 16 }}
    >
      <Box maxW="1536px" mx="auto" px={{ base: 6, md: 12, lg: 20 }}>
        <Box
          width="100%"
          px={{ base: 0, md: 2, lg: 4 }}
          py={{ base: 0, md: 2, lg: 4 }}
        >
          <Flex
            direction={{ base: "column", lg: "row" }}
            gap={{ base: 8, md: 10, lg: 12 }}
            align="center"
          >
            <FadeInWhenVisible
              flex={{ base: "unset", lg: "1" }}
              width="100%"
              maxW={{ base: "100%", lg: "620px" }}
              amount={0.35}
            >
              <Box width="100%" maxW={{ base: "100%", lg: "620px" }}>
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
            </FadeInWhenVisible>

            <FadeInWhenVisible
              flex={{ base: "unset", lg: "1.2" }}
              width="100%"
              amount={0.35}
              delay={0.1}
            >
              <VStack width="100%" align="stretch" spacing={{ base: 7, md: 8 }}>
                <Box>
                  <Text
                    fontFamily="body"
                    fontWeight="700"
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    color="#1573CF"
                    mb={{ base: 4, md: 5 }}
                  >
                    How Our Partners Help:
                  </Text>

                  <UnorderedList
                    spacing={{ base: 4, md: 5 }}
                    ml={{ base: 5, md: 6 }}
                  >
                    <ListItem {...listItemStyles}>
                      The work of building healthier communities doesn't happen
                      alone. Whether you lead a foundation, run a company, head
                      a research team, or represent an organization with
                      resources to share, there is a place for you in this work.
                    </ListItem>
                    <ListItem {...listItemStyles}>
                      Fund the Work: Your investment directly powers our hubs,
                      care navigation services, and workforce programs. When you
                      fund TENA, you're putting resources exactly where the gap
                      is, in the community, at the table, and in the hands of
                      people who need it most.
                    </ListItem>
                    <ListItem {...listItemStyles}>
                      Become a Hub Partner: Bring your organization's services
                      directly to the community. Our hubs are designed to host
                      resource vendors across housing, food access, utilities,
                      health insurance, healthcare and more. If you have
                      something the community needs, we want you at the table.
                    </ListItem>
                    <ListItem {...listItemStyles}>
                      Research With Us: Our model sits at the intersection of
                      community health, social determinants, and workforce
                      development. We welcome academic and institutional
                      partners who want to study, document, and amplify what
                      equitable care looks like in practice.
                    </ListItem>
                  </UnorderedList>
                </Box>

                <Box>
                  <Text
                    fontFamily="body"
                    fontWeight="700"
                    fontSize={{ base: "2xl", md: "3xl", lg: "3xl" }}
                    lineHeight="1.2"
                    whiteSpace={{ base: "normal", lg: "nowrap" }}
                    color="#1573CF"
                    mb={{ base: 4, md: 5 }}
                  >
                    Ready to explore a partnership? Let's talk!
                  </Text>
                  <Text
                    fontFamily="body"
                    fontWeight="400"
                    lineHeight="1.35"
                    fontSize={{ base: "sm", md: "md", lg: "xl" }}
                    color="neutral.strong"
                  >
                    To support our work, volunteer, or partner with us please
                    reach out to Jemal at jemal.hussein@tenacares.org
                  </Text>
                </Box>
              </VStack>
            </FadeInWhenVisible>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
