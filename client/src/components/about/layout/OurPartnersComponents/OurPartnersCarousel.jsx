import { useMemo, useState } from "react";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import leftArrow from "../../../../assets/OurPartners/ArrowButtons/left circle.svg";
import leftArrowHover from "../../../../assets/OurPartners/ArrowButtons/left arrow filled.svg";
import rightArrow from "../../../../assets/OurPartners/ArrowButtons/right arrow.svg";
import rightArrowHover from "../../../../assets/OurPartners/ArrowButtons/right arrow filled.svg";

export default function OurPartnersCarousel({
  title,
  images = [],
  logosPerView = 4,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  const totalImages = images.length;
  const visibleCount = Math.min(logosPerView, totalImages || 1);

  //builds the current visible logos based of activeIndex, then uses mod to wrap around images from end to start
  const visibleImages = useMemo(() => {
    if (!totalImages) return [];

    return Array.from({ length: visibleCount }, (_, offset) => {
      const imageIndex = (activeIndex + offset) % totalImages;
      return images[imageIndex];
    });
  }, [activeIndex, images, totalImages, visibleCount]);

  //moves one step left then wraps to the last image based on user index
  const goToPrevious = () => {
    if (!totalImages) return;
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  //moves one set right then wraps the index to 0 after last image
  const goToNext = () => {
    if (!totalImages) return;
    setActiveIndex((prev) => (prev + 1) % totalImages);
  };

  return (
    <Box width="100%">
      <Flex align="center" justify="space-between" mb={4}>
        <Text
          fontFamily="body"
          fontWeight="700"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color="#000000"
        >
          {title}
        </Text>

        <HStack spacing={2}>
          <Button
            type="button"
            onClick={goToPrevious}
            onMouseEnter={() => setIsLeftHovered(true)}
            onMouseLeave={() => setIsLeftHovered(false)}
            bg="transparent"
            p={0}
            minW="auto"
            height="auto"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focusVisible={{ boxShadow: "none" }}
            aria-label={`Previous ${title} slide`}
          >
            <Image
              src={isLeftHovered ? leftArrowHover : leftArrow}
              alt="Previous"
              width={{ base: "34px", md: "44px" }}
              height={{ base: "34px", md: "44px" }}
            />
          </Button>

          <Button
            type="button"
            onClick={goToNext}
            onMouseEnter={() => setIsRightHovered(true)}
            onMouseLeave={() => setIsRightHovered(false)}
            bg="transparent"
            p={0}
            minW="auto"
            height="auto"
            _hover={{ bg: "transparent" }}
            _active={{ bg: "transparent" }}
            _focusVisible={{ boxShadow: "none" }}
            aria-label={`Next ${title} slide`}
          >
            <Image
              src={isRightHovered ? rightArrowHover : rightArrow}
              alt="Next"
              width={{ base: "34px", md: "44px" }}
              height={{ base: "34px", md: "44px" }}
            />
          </Button>
        </HStack>
      </Flex>

      <Box
        border="1px solid #D3D8DF"
        borderRadius="8px"
        bg="#FFFFFF"
        px={{ base: 6, md: 8 }}
        py={{ base: 6, md: 8 }}
      >
        <Flex align="center" justify="space-between" gap={{ base: 4, md: 8 }}>
          {visibleImages.map((src, index) => (
            <Flex
              key={`${src}-${index}`}
              flex="1"
              justify="center"
              align="center"
              minH={{ base: "72px", md: "110px" }}
            >
              <Image
                src={src}
                alt={`${title} logo ${index + 1}`}
                maxH={{ base: "60px", md: "95px" }}
                objectFit="contain"
              />
            </Flex>
          ))}
        </Flex>

        {totalImages > 0 && (
          <HStack justify="center" spacing={2} mt={{ base: 6, md: 8 }}>
            {Array.from({ length: totalImages }).map((_, index) => (
              <Box
                key={`${title}-dot-${index}`}
                width="8px"
                height="8px"
                borderRadius="full"
                bg={index === activeIndex ? "#1573CF" : "#000000"}
              />
            ))}
          </HStack>
        )}
      </Box>
    </Box>
  );
}
