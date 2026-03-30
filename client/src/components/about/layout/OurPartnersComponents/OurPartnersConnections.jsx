import OurPartnersCarousel from "./OurPartnersCarousel";
import { Box, Text, VStack } from "@chakra-ui/react";

const communityBasedOrgImages = [
  "/OurPartners/CommunityBasedOrgs/12221 1.png",
  "/OurPartners/CommunityBasedOrgs/30045 1.png",
  "/OurPartners/CommunityBasedOrgs/33784 1.png",
  "/OurPartners/CommunityBasedOrgs/36354 1.png",
  "/OurPartners/CommunityBasedOrgs/62141 1.png",
  "/OurPartners/CommunityBasedOrgs/83406 1.png",
  "/OurPartners/CommunityBasedOrgs/99933 1.png",
  "/OurPartners/CommunityBasedOrgs/SCR-20260112-bsvd 1.png",
].map(encodeURI);

const educationalImages = [
  "/OurPartners/Educational/2486 1.png",
  "/OurPartners/Educational/16055 1.png",
  "/OurPartners/Educational/64671 1.png",
  "/OurPartners/Educational/66838 1.png",
  "/OurPartners/Educational/95664 1.png",
  "/OurPartners/Educational/SCR-20260112-bspa 1.png",
  "/OurPartners/Educational/SCR-20260112-bsrh 1.png",
  "/OurPartners/Educational/SCR-20260112-bssf 1.png",
].map(encodeURI);

const partnersSponsorsImages = [
  "/OurPartners/Sponsors/bombas.png",
  "/OurPartners/Sponsors/DEO.png",
  "/OurPartners/Sponsors/GroundGameHealth.png",
  "/OurPartners/Sponsors/JCO.png",
  "/OurPartners/Sponsors/Kaiser.png",
  "/OurPartners/Sponsors/PublicHealth.png",
  "/OurPartners/Sponsors/SCR-20260112-bsnr 1.png",
  "/OurPartners/Sponsors/SouthLA.png",
].map(encodeURI);

export default function OurPartnersConnections() {
  return (
    <Box as="section" width="100%" py={{ base: 10, md: 14, lg: 20 }}>
      <Box maxW="1536px" mx="auto" px={{ base: 6, md: 12, lg: 20 }}>
        <Text
          fontFamily="body"
          fontWeight="700"
          color="#1D232E"
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          lineHeight={{ base: "1.12", md: "1.08" }}
          maxW="1320px"
        >
          <Box as="span" color="#1573CF">
            Together
          </Box>
          ,{" "}
          we create hope.{" "}
          <Box as="span" color="#1573CF">
            Together
          </Box>
          ,{" "}
          we change lives. Thank you for believing in our mission. Because when
          we work{" "}
          <Box as="span" color="#1573CF">
            together
          </Box>
          ,{" "}
          there's no limit to the hope we can spark, the lives we can uplift,
          and the change we can create.
        </Text>

        <VStack
          spacing={{ base: 10, md: 14 }}
          align="stretch"
          mt={{ base: 10, md: 16, lg: 20 }}
        >
          <OurPartnersCarousel
            title="Community Based Organizations"
            images={communityBasedOrgImages}
          />
          <OurPartnersCarousel title="Educational" images={educationalImages} />
          <OurPartnersCarousel
            title="Partners/Sponsors"
            images={partnersSponsorsImages}
          />
        </VStack>
      </Box>
    </Box>
  );
}
