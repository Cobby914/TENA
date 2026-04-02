import { Box, Flex, Text, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useProgramById } from "../../../hooks/useProgramsById";
import { resolveProgramImage } from "../../../lib/programImageResolver";

const breadcrumbLinkProps = {
  fontFamily: "Inter",
  fontSize: "26px",
  lineHeight: "32px",
  color: "#F8F9FB",
  fontWeight: "600",
  transition: "font-weight 0.2s ease, opacity 0.2s ease",
  textDecoration: "none",
  _hover: {
    textDecoration: "underline",
    fontWeight: "800",
    opacity: 0.9,
  },
  sx: {
    "&[aria-current='page']": {
      fontWeight: "800",
    },
  },
};

export default function ProgramHeader({ id, backgroundPosition }) {
  const { program } = useProgramById(id);
  const backgroundImageSrc = resolveProgramImage(program?.background_image);
  const programTitle = String(program?.title ?? "").trim() || "Loading program...";

  return (
    <Box
      as="section"
      width="100%"
      position="relative"
      overflow="visible"
      minH={{ base: "300px", md: "400px", lg: "500px" }}
      py={{ base: 24, md: 36, lg: 52 }}
      {...(backgroundImageSrc && {
        backgroundImage: `url(${backgroundImageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: backgroundPosition,
        backgroundRepeat: "no-repeat",
      })}
    >
      {backgroundImageSrc && (
        <Box
          position="absolute"
          inset={0}
          bg="blackAlpha.500"
          zIndex={0}
        />
      )}

      <Box
        position="absolute"
        right={{ base: "-167px", md: "-167px", lg: "-167px" }}
        top="100%"
        transform="translateY(-50%)"
        width="334px"
        height="334px"
        borderRadius="334px"
        border="40px solid #5CDAC5"
        opacity={0.15}
        zIndex={2}
        pointerEvents="none"
        display={{ base: "none", md: "block" }}
      />

      <Box
          position="absolute"
          top={{ base: 16, md: 20, lg: 28 }}
          left={{ base: 8, md: 14, lg: 28 }}
          zIndex={1}
      >
        <Flex direction="column" alignItems="flex-start">
          <Flex align="center" mb={8} gap={2}>
            <Link
              as={NavLink}
              to="/programs"
              {...breadcrumbLinkProps}
            >
              Programs
            </Link>
            <Text
              fontFamily="Inter"
              fontSize="26px"
              fontWeight="800"
              lineHeight="32px"
              color="#F8F9FB"
            >
              &gt;
            </Text>
            <Text
              fontFamily="Inter"
              fontSize="26px"
              fontWeight="800"
              lineHeight="32px"
              color="#F8F9FB"
            >
              {programTitle}
            </Text>
          </Flex>

          <Text
              fontFamily="Inter"
              fontSize="64px"
              fontStyle="normal"
              fontWeight="800"
              lineHeight="100%"
              textAlign="left"
              color="#F8F9FB"
          >
            {programTitle}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}
