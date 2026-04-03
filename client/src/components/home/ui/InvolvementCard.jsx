import { useRef, useEffect } from "react";
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
  const opensExternally = Boolean(onAction || isExternalLink);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (!opensExternally) return;
    const clearStuckInteraction = () => {
      if (document.visibilityState !== "visible") return;
      const el = ctaRef.current;
      if (el && document.activeElement === el && typeof el.blur === "function") {
        el.blur();
      }
    };
    document.addEventListener("visibilitychange", clearStuckInteraction);
    window.addEventListener("pageshow", clearStuckInteraction);
    return () => {
      document.removeEventListener("visibilitychange", clearStuckInteraction);
      window.removeEventListener("pageshow", clearStuckInteraction);
    };
  }, [opensExternally]);

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
          ref={opensExternally ? ctaRef : undefined}
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
          boxShadow="none"
          _hover={{
            bgColor: "brand.primary",
            color: "surface.default",
            opacity: 1,
            boxShadow: "inset 0 0 0 9999px rgb(0 0 0 / 0.14)",
          }}
          _active={{
            bgColor: "brand.primary",
            color: "surface.default",
            opacity: 1,
            boxShadow: "inset 0 0 0 9999px rgb(0 0 0 / 0.2)",
          }}
          sx={{
            WebkitTapHighlightColor: "transparent",
            transition: "box-shadow 0.2s ease",
          }}
        >
          {linkname}
        </Button>
      </Flex>
    </Box>
  );
}
