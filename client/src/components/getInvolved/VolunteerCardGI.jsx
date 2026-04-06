import { Box } from "@chakra-ui/react";
import SimpleCircle from "../ui/SimpleCircle";

const Volun = "/static/get-involved/GetInvolvedVolunteering.jpg";
import GIC from "./GetInvolvedCard"

export default function GetInvolvedCard ({}) {
    return (
    <Box width="100%" position="relative" display="block">
        <Box position="relative" width="100%" maxW="1283px" mx="auto">

            <GIC
                title="Volunteering"
                description="Make a real impact in your community. Volunteers support health fairs, care navigation, and outreach efforts across Los Angeles County. Your time helps neighbors access care, build confidence, and feel supported."
                buttonName="Learn More"
                image_here={Volun}
                destination="https://docs.google.com/forms/d/e/1FAIpQLSfHRyVM1116n02eKWHbwKME1WIrRWQbIy2S44Z-8Ap0V57hYA/viewform"
                imageDecorations={
                    <Box
                        position="absolute"
                        top="-90px"
                        left="250px"
                        pointerEvents="none"
                        zIndex={0}
                    >
                        <SimpleCircle
                            size="250px"
                            strokeWidth="25px"
                            strokeColor="var(--color-brand-primary)"
                            opacity={0.2}
                            position="relative"
                        />
                    </Box>
                }
                decorations={
                    <Box
                        position="absolute"
                        bottom="0"
                        right={{ base: "10%", md: "35%" }}
                        width={{ base: "80px", md: "120px" }}
                        height={{ base: "40px", md: "60px" }}
                        pointerEvents="none"
                        zIndex={0}
                    >
                        <SimpleCircle
                            size="200px"
                            strokeWidth="35px"
                            strokeColor="var(--color-brand-accent)"
                            opacity={0.15}
                            position="absolute"
                            left="-20px"
                            top="-20px"
                        />
                    </Box>
                }
            />

            <Box
                position="absolute"
                right="-70px"
                top="50%"
                transform="translateY(-50%)"
                pointerEvents="none"
                zIndex={0}
            >
                <SimpleCircle
                    size="140px"
                    strokeWidth="25px"
                    strokeColor="var(--color-brand-accent)"
                    opacity={0.15}
                    position="relative"
                />
            </Box>

        </Box>
    </Box>
    );
}