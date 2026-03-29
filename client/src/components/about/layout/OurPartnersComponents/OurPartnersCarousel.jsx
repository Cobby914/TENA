import { useMemo, useState, useEffect } from "react";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import leftArrow from "../../../../assets/OurPartners/ArrowButtons/left circle.svg";
import leftArrowHover from "../../../../assets/OurPartners/ArrowButtons/left arrow filled.svg";
import rightArrow from "../../../../assets/OurPartners/ArrowButtons/right arrow.svg";
import rightArrowHover from "../../../../assets/OurPartners/ArrowButtons/right arrow filled.svg";

export default function OurPartnersCarousel({
  title,
  images = [],
  logosPerView = 4,
  autoScrollInterval = 3000
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  const totalImages = images.length;

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

  useEffect(() => {
    if (totalImages <= logosPerView) return;
    const interval = setInterval (() => {
      goToNext();
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [goToNext, totalImages, logosPerView, autoScrollInterval]);

  const visibleImages = useMemo(() => {
    if (!totalImages) return [];
    // If images are fewer than the view count, just show them all
    const count = Math.min(logosPerView, totalImages);
    
    return Array.from({ length: count }, (_, offset) => {
      const imageIndex = (activeIndex + offset) % totalImages;
      return images[imageIndex];
    });
  }, [activeIndex, images, totalImages, logosPerView]);

  return (
    <Box width="100%">
      <Flex align="center" justify="space-between" mb={4}>
        <Text
          fontFamily="body"
          fontWeight="700"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color="#black"
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
        bg="white"
        p={{ base: 6, md: 8 }}
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
                alt={`${title} logo ${index}`}
                maxH={{ base: "60px", md: "95px" }}
                objectFit="contain"
              />
            </Flex>
          ))}
        </Flex>

        {totalImages > 0 && (
          <HStack justify="center" spacing={2} mt={{ base: 6, md: 8 }}>
            {images.map((_, index) => (
              <Box
                key={index}
                width="8px"
                height="8px"
                borderRadius="full"
                transition="all 0.3s"
                bg={index === activeIndex ? "#1573CF" : "#000000"}
              />
            ))}
          </HStack>
        )}
      </Box>
    </Box>
  );
}
