import { Box, Flex, Image, Text} from "@chakra-ui/react";

const logoImgs = import.meta.glob(
  "./sponsorHomepageImgs/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

function normalize(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/\s+img$/, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getLogoImgPath(title) {
  const targetKey = normalize(title);

  const matchedEntry = Object.entries(logoImgs).find(([filePath]) => {
    const fileName = filePath.split("/").pop() ?? "";
    return normalize(fileName) === targetKey;
  });

  return matchedEntry?.[1] ?? null;
}

export default function Sponsors () {

    const logos = [
        {src: getLogoImgPath("IBTU_logo"), alt: "IBTU"},
        {src: getLogoImgPath("SLA_Cafe_logo"), alt: "SLA Cafe"},
        {src: getLogoImgPath("USC_KSM_logo"), alt: "USC KSM"},
        {src: getLogoImgPath("Pear_Suite_logo"), alt: "Pear Suite"},
        {src: getLogoImgPath("KGI_logo"), alt: "KGI"}
    ];

    const dupLogos = [...logos, ...logos];
    
    return (
        <Box my={20}>
            <Text fontSize={60} fontWeight={700} py={20} textAlign="center">
                Our Partners
            </Text>
            <Box mt={20} overflow={"hidden"} bg="white" py={10} w="100vw">
                <style>
                    {`
                        @keyframes scroll {
                            0% { transofrm: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                    `}
                </style>
                <Flex display="inline-flex" width="max-content" animation={"scroll 50s linear infinite"}>
                    {dupLogos.map((logo, index) => (
                        <Box key={index} px={14} flexShrink={0} display="flex" alignItems="center">
                            <Image src={logo.src} alt={logo.alt} h="100px" objectFit="contain" />
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
}
