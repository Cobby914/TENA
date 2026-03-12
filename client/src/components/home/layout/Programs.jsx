import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import ProgramCard from "../../ui/ProgramCard";
import { useProgramData } from "../../allPrograms/useProgramsData";

export default function Programs() {
    const { programs, errorMsg, isLoading } = useProgramData(4);

    return (
        <Box
            as="section"
            bg="white"
            minW="100%"
        >
            <SimpleGrid 
                columns={{ base: 1, md: 2 }} spacing={8} py={30} px={{base: 0 , lg: 40}} minW={"100%"} justifyItems={"center"} alignItems={"center"}>
                {isLoading
                    ? [1, 2, 3, 4].map((i) => (
                        <Skeleton key={i} height="300px" borderRadius="lg" /> 
                    )) : programs.map((program) => (
                        <ProgramCard 
                            key={program.id}
                            title={program.title}
                            description={program.summary}
                            imageSrc={null}
                            link={null}
                        />
                    ))
                }
            </SimpleGrid>
        </Box>
    );
}
