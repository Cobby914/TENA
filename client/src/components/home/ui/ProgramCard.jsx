import { Card, Grid, GridItem, Text, Image } from "@chakra-ui/react";
import Button from "./Button";

export default function ProgramCard({
    title,
    description,
    imageSrc,
    buttonText,
}) {
    return (
        <Card
            w="614px"
            h="468px"
            p="6"
            border="1px solid black"
            borderRadius="0"
        >
            <Grid templateColumns="1fr 1fr" templateRows="1fr 1fr" h="100%">

                {/* Title */}
                <GridItem>
                    <Text fontSize="4xl">
                        {title}
                    </Text>
                </GridItem>

                {/* Image */}
                <GridItem display="flex" justifyContent="flex-end">
                    <Image
                        src={imageSrc}
                        boxSize="64px"
                        objectFit="contain"
                    />
                </GridItem>

                {/* Description */}
                <GridItem>
                    <Text fontSize="sm">
                        {description}
                    </Text>
                </GridItem>

                {/* Learn more button */}
                <GridItem
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <Button as="u">{buttonText}</Button>
                </GridItem>

            </Grid>
        </Card>
    );
}