import { Box, Text, Grid } from "@chakra-ui/react";
import FadeInWhenVisible from "../ui/FadeInWhenVisible";
import InvolvementCard from "../ui/InvolvementCard";
import SimpleCircle from "../../ui/SimpleCircle";
import { openDonateWidget } from "../../../lib/giveButter";

/** Figma 1440px frame — maps x with calc(50vw - 720px + x). Circles are 0° (no rotation). */
const DECOR_FRAME_HALF = "720px";

const joinMissionTopRightCircle = {
  size: "272px",
  strokeWidth: "30px",
  opacity: 0.1,
  color: "var(--color-brand-accent)",
};

const joinMissionBottomLeftCircle = {
  size: "490px",
  strokeWidth: "40px",
  opacity: 0.07,
  color: "var(--color-brand-accent)",
};

export default function GetInvolved() {
  return (
    <Box
      position="relative"
      as="section"
      w="100%"
      overflowY="visible"
      overflowX="hidden"
      py={{ base: 22, md: 40 }}
    >
      {/* Positioned vs full-width section so calc(50vw …) matches Figma 1440 frame */}
      <SimpleCircle
        {...joinMissionTopRightCircle}
        position="absolute"
        zIndex={0}
        top={{ base: "48px", md: "124px" }}
        left={{
          base: "auto",
          md: `calc(50vw - ${DECOR_FRAME_HALF} + 1060px)`,
        }}
        right={{ base: "-24px", md: "auto" }}
      />
      <SimpleCircle
        {...joinMissionBottomLeftCircle}
        position="absolute"
        zIndex={0}
        top={{
          base: "auto",
          md: `calc(124px + 202px + 56px - 72px)`,
        }}
        bottom={{ base: "-72px", md: "auto" }}
        left={{
          base: "16px",
          md: `calc(50vw - ${DECOR_FRAME_HALF} + 32px)`,
        }}
      />

      <Box
        maxW="1100px"
        mx="auto"
        px={{ base: 6, md: 12, lg: 20 }}
        position="relative"
        zIndex={1}
      >
        <FadeInWhenVisible amount={0.4}>
        <Box
          bg="surface.default"
          border="1px solid"
          borderColor="border.light"
          py={{ base: 8, md: 12 }}
          px={{ base: 4, md: 6, lg: 8 }}
          borderRadius={10}
          boxShadow="md"
        >
          <Text
            textAlign="center"
            fontWeight={700}
            fontSize={{ base: "30px", md: "40px", lg: "48px" }}
            my={{ base: 8, md: 10 }}
            textColor="neutral.strong"
          >
            Join Our Mission.
          </Text>

          <Grid
            templateColumns={{
              base: "minmax(0, 1fr)",
              md: "repeat(3, minmax(0, 1fr))",
            }}
            gap={{ base: 18, md: 20 }}
            w="full"
            maxW="980px"
            mx="auto"
            alignItems="stretch"
            justifyItems="stretch"
          >
            <InvolvementCard
              title="Volunteer"
              description="Lend your time at our events."
              linkname="Volunteer With Us"
              link="https://docs.google.com/forms/d/e/1FAIpQLSfHRyVM1116n02eKWHbwKME1WIrRWQbIy2S44Z-8Ap0V57hYA/viewform"
            />

            <InvolvementCard
              title="Partner"
              description="Collaborate with us to expand our reach."
              linkname="Become a Partner"
              link="/partners"
            />

            <InvolvementCard
              title="Donate"
              description="Your financial support fuels our mission."
              linkname="Support our Cause"
              onAction={openDonateWidget}
            />
          </Grid>
        </Box>
        </FadeInWhenVisible>
      </Box>
    </Box>
  );
}
