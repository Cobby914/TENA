import { Box, Flex, Image, Text} from "@chakra-ui/react";

const logos = [
  { src: "/Home/Sponsers/BIUT.png", alt: "IBTU" },
  { src: "/Home/Sponsers/SLA.png", alt: "South LA Cafe" },
  { src: "/Home/Sponsers/USCMED.png", alt: "USC Keck School of Medicine" },
  { src: "/Home/Sponsers/PEAR_SUITE.png", alt: "Pear Suite" },
  { src: "/Home/Sponsers/KGI_LOGO.png", alt: "KGI" },
  { src: "/Home/Sponsers/BOMBAS.png", alt: "Bombas" },
  { src: "/Home/Sponsers/ICOH_LOGO.png", alt: "ICOH" },
  { src: "/Home/Sponsers/MBKU.png", alt: "MBKU" },
];

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
