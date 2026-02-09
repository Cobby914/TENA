import { Card, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import Button from "./Button";

export default function ProgramCard({
    title,
    description,
    imageSrc,
    buttonText,
    ...props
}) {
    return (
        <Card
            w="100%"
            maxW={{ base: "100%", md: "614px" }}
            h={{ base: "auto", md: "468px" }}
            minH={{ base: "350px", md: "468px" }}
            p={{ base: 4, md: 6 }}
            border="1px solid black"
            borderRadius="0"
            {...props}
        >
            <Grid 
                templateColumns={{ base: "1fr", sm: "1fr 1fr" }}
                templateRows={{ base: "auto auto auto auto", sm: "1fr 1fr" }}
                h="100%"
                gap={{ base: 4, sm: 0 }}
            >

                {/* Title */}
                <GridItem>
                    <Text fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
                        {title}
                    </Text>
                </GridItem>

                {/* Image */}
                <GridItem 
                    display="flex" 
                    justifyContent={{ base: "center", sm: "flex-end" }}
                >
                    <Image
                        src={imageSrc}
                        boxSize={{ base: "100px", md: "128px" }}
                        objectFit="contain"
                    />
                </GridItem>

                {/* Description */}
                <GridItem>
                    <Text 
                        fontSize={{ base: "xs", md: "sm" }}
                        display="flex"
                        alignItems={{ base: "flex-start", sm: "flex-end" }}
                        h="100%"
                    >
                        {description}
                    </Text>
                </GridItem>

                {/* Learn more button */}
                <GridItem
                    display="flex"
                    justifyContent={{ base: "center", sm: "flex-end" }}
                    alignItems="flex-end"
                >
                    <Button as="u">{buttonText}</Button>
                </GridItem>

            </Grid>
        </Card>
    );
}