import OurPartnersCarousel from "./OurPartnersCarousel";
import { Box, Text, VStack } from "@chakra-ui/react";

//return image path in consistent order at every refresh
const sortImageModules = (modules) =>
  Object.entries(modules)
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    )
    .map(([, imagePath]) => imagePath);

const communityBasedOrgImages = sortImageModules(
  import.meta.glob(
    "../../../../assets/OurPartners/CommunityBasedOrgs/*.png", //only using pngs since that is the only file type in assests change it as a multi-extension pattern if diff file types will be used
    {
      eager: true,
      import: "default",
    },
  ),
);

const educationalImages = sortImageModules(
  import.meta.glob("../../../../assets/OurPartners/Educational/*.png", {
    eager: true,
    import: "default",
  }),
);

const partnersSponsorsImages = sortImageModules(
  import.meta.glob("../../../../assets/OurPartners/Sponsors/*.png", {
    eager: true,
    import: "default",
  }),
);

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
