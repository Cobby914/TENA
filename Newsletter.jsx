import { Card, Grid, GridItem, Text, Button, Input, Box, SimpleGrid } from "@chakra-ui/react";

import InputBox from "./InputBox.jsx";

export default function NewsLetter({
align, marginTop
}){
    return (
        
        <Card bg = "#d9d9d9" width = "449px" height = "520px" align = {align} borderRadius = "none" shadow = {false}
        marginTop = {marginTop}>
            {/* We can create an input box component and use it here instead in future! */}
            <SimpleGrid h = "100%">
                <GridItem>
                        <Text fontSize = {30} fontWeight = {400} align = "center" whiteSpace={"nowrap"}
                        mt= {10} letterSpacing={0} fontStyle = "regular">
                            Sign up for our Newsletter
                        </Text>
                </GridItem>
                <GridItem align = "center">
                    <Text fontSize = {24} fontWeight = {400} align = "left" paddingLeft = "6"
                         letterSpacing={0} fontStyle = "regular">
                        First Name
                        </Text>
                    <InputBox>
                    {/*For future back end development */}
                    </InputBox>

                </GridItem>
                <GridItem align = "center">
                    <Text fontSize = {24} fontWeight = {400} align = "left" paddingLeft = "6"
                        letterSpacing={0} fontStyle = "regular">
                        Last Name
                        </Text>
                    <InputBox>
                    {/*For future back end development */}
                    </InputBox>


                </GridItem>

                <GridItem align = "center">
                    <Text fontSize = {24} fontWeight = {400} align = "left" paddingLeft = "6"
                        letterSpacing={0} fontStyle = "regular">
                        Email
                        </Text>
                    <InputBox>
                    {/*For future back end development */}
                    </InputBox>

                </GridItem>

                <GridItem align = "center">
                    <Button bg = "#7f7f7f" width = "151px" height = "40px" align = "center"  borderRadius={0}  fontWeight={"bold"}>
                Sign Up
                    </Button>
                </GridItem>
            </SimpleGrid>
        </Card>

    );
}