import { Box, Flex, Image, Text} from "@chakra-ui/react";

const logos = [
  "/OurPartners/CommunityBasedOrgs/12221 1.png",
  "/OurPartners/CommunityBasedOrgs/30045 1.png",
  "/OurPartners/CommunityBasedOrgs/33784 1.png",
  "/OurPartners/CommunityBasedOrgs/36354 1.png",
  "/OurPartners/CommunityBasedOrgs/62141 1.png",
  "/OurPartners/CommunityBasedOrgs/83406 1.png",
  "/OurPartners/CommunityBasedOrgs/99933 1.png",
  "/OurPartners/CommunityBasedOrgs/SCR-20260112-bsvd 1.png",
  "/OurPartners/Educational/2486 1.png",
  "/OurPartners/Educational/16055 1.png",
  "/OurPartners/Educational/64671 1.png",
  "/OurPartners/Educational/66838 1.png",
  "/OurPartners/Educational/95664 1.png",
  "/OurPartners/Educational/SCR-20260112-bspa 1.png",
  "/OurPartners/Educational/SCR-20260112-bsrh 1.png",
  "/OurPartners/Educational/SCR-20260112-bssf 1.png",
  "/OurPartners/Sponsors/bombas.png",
  "/OurPartners/Sponsors/DEO.png",
  "/OurPartners/Sponsors/GroundGameHealth.png",
  "/OurPartners/Sponsors/JCO.png",
  "/OurPartners/Sponsors/Kaiser.png",
  "/OurPartners/Sponsors/PublicHealth.png",
  "/OurPartners/Sponsors/SCR-20260112-bsnr 1.png",
  "/OurPartners/Sponsors/SouthLA.png",
].map((src) => ({
  src: encodeURI(src),
  alt: src.split("/").pop()?.replace(/\.[^/.]+$/, "") || "Partner logo",
}));

export default function Sponsors () {
    const dupLogos = [...logos, ...logos];
    
    return (
        <Box mt={20} overflow={"hidden"} bg="white" py={10} w="100%" >
            <Text fontWeight={700} fontSize={60} letterSpacing={0} textAlign={"center"}> 
                Our Partners 
            </Text>
            <Box mt={20}>
                <style>
                    {`
                        @keyframes scroll {
                            0% { transform: translateX(0); }
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
