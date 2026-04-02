import { useMemo, useState } from "react";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const leftArrow = "/OurPartners/ArrowButtons/left circle.svg";
const leftArrowHover = "/OurPartners/ArrowButtons/left arrow filled.svg";
const rightArrow = "/OurPartners/ArrowButtons/right arrow.svg";
const rightArrowHover = "/OurPartners/ArrowButtons/right arrow filled.svg";

const fadeSlideInRight = keyframes`
  from { opacity: 0; transform: translateX(18px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const fadeSlideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-18px); }
  to   { opacity: 1; transform: translateX(0); }
`;

export default function OurPartnersCarousel({
  title,
  images = [],
  logosPerView = 4,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [animKey, setAnimKey] = useState(0);
  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  const totalImages = images.length;

  const goToPrevious = () => {
    if (!totalImages) return;
    setDirection("left");
    setAnimKey((k) => k + 1);
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToNext = () => {
    if (!totalImages) return;
    setDirection("right");
    setAnimKey((k) => k + 1);
    setActiveIndex((prev) => (prev + 1) % totalImages);
  };

  const visibleImages = useMemo(() => {
    if (!totalImages) return [];
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
        <Flex
          key={animKey}
          align="center"
          justify="space-between"
          gap={{ base: 4, md: 8 }}
          animation={`${direction === "right" ? fadeSlideInRight : fadeSlideInLeft} 0.35s ease both`}
        >
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
