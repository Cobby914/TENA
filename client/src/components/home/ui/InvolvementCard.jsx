import { Box, Text, Button, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { prefetchGivebutterCampaign } from "../../../lib/giveButter";

export default function InvolvementCard({
  title,
  description,
  linkname,
  link,
  onAction,
}) {
  const isExternalLink = link && /^https?:\/\//.test(link);

  return (
    <Box
      bgColor="surface.default"
      width={{ base: "100%", md: "235px" }}
      h="100%"
      minW={{ base: "100%", md: "235px" }}
      shadow={false}
    >
      <Flex direction="column" align="stretch" h="100%" w="100%">
        <Text
          w="100%"
          textAlign={"center"}
          fontWeight={700}
          fontSize={{ base: 24, md: 26, lg: 30 }}
          lineHeight={"133%"}
          textColor="brand.heading"
          mb={2}
          flexShrink={0}
        >
          {title}
        </Text>

        <Text
          flex="1"
          fontSize={{ base: 18, md: 20, lg: 24 }}
          fontWeight={400}
          w="full"
          textAlign={"center"}
          lineHeight={"150%"}
          letterSpacing={0}
          textColor="neutral.text"
        >
          {description}
        </Text>

        <Button
          {...(onAction
            ? {
                onClick: onAction,
                onMouseEnter: prefetchGivebutterCampaign,
                onFocus: prefetchGivebutterCampaign,
              }
            : isExternalLink
              ? { as: "a", href: link, target: "_blank", rel: "noopener noreferrer" }
              : { as: RouterLink, to: link })}
          bgColor="brand.primary"
          w="full"
          borderRadius={8}
          p={6}
          mt={8}
          flexShrink={0}
          fontSize={{ base: 14, lg: 16 }}
          fontWeight={500}
          color="surface.default"
          textDecoration="none"
        >
          {linkname}
        </Button>
      </Flex>
    </Box>
  );
}
