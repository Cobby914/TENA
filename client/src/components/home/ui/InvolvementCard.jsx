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
      w="100%"
      minW={0}
      h="100%"
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
          maxW="100%"
          borderRadius={8}
          px={{ base: 3, md: 4 }}
          py={4}
          mt={8}
          flexShrink={0}
          h="auto"
          minH="48px"
          whiteSpace="normal"
          overflowWrap="break-word"
          wordBreak="break-word"
          lineHeight="short"
          textAlign="center"
          fontSize={{ base: "13px", sm: "14px", md: "clamp(12px, 2.1vw, 16px)" }}
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
