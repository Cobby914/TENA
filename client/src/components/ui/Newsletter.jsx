import { Card, Grid, GridItem, Text, Button, Input, Box, SimpleGrid } from "@chakra-ui/react";

import InputBox from "./InputBox.jsx";

export default function NewsLetter({

}){
    return (
        
        <Box bg = "#d9d9d9" width = "34vw" height = "80vh"  borderRadius = "none" shadow = {false}
         maxWidth = "449px" maxHeight = "520px" ratio = {449/520} >
            {/* We can create an input box component and use it here instead in future! */}
            <SimpleGrid maxWidth= "449px" maxHeight = "520px" height = "80vh" ratio = {449/520} width = "33vw">
                <GridItem align = "center">
                        <Text fontSize = "2vw" fontWeight = {400}  whiteSpace={"nowrap"}
                        marginTop = "4vh" letterSpacing={0} fontStyle = "regular">
                            Sign up for our Newsletter
                        </Text>
                </GridItem>
                <GridItem align = "left" paddingLeft = "1.6vw">
                    <Text fontSize = "1.7vw" fontWeight = {400} align = "left"
                         letterSpacing={0} fontStyle = "regular">
                        First Name
                        </Text>
                    <InputBox maxWidth = "401px" maxHeight = "44px" ratio = {401/44} 
                    width = "30vw" height = "5vh" >
                    {/*For future back end development */}
                    </InputBox>

                </GridItem>
                <GridItem align = "left" paddingLeft = "1.6vw">
                    <Text fontSize = "1.7vw" fontWeight = {400} align = "left"
                        letterSpacing={0} fontStyle = "regular">
                        Last Name
                        </Text>
                    <InputBox maxWidth = "401px" maxHeight = "44px" ratio = {401/44}
                    width = "30vw" height = "5vh" >
                    
                    {/*For future back end development */}
                    </InputBox>


                </GridItem>

                <GridItem align = "left" paddingLeft = "1.6vw">
                    <Text fontSize = "1.7vw" fontWeight = {400} align = "left"
                        letterSpacing={0} fontStyle = "regular">
                        Email
                        </Text>
                    <InputBox maxWidth = "401px" maxHeight = "44px" ratio = {401/44}
                    width = "30vw" height = "5vh" >
                    {/*For future back end development */}
                    </InputBox>

                </GridItem>

                <GridItem align = "center">
                    <Button bg = "#7f7f7f" maxWidth = "151px" maxHeight = "40px" align = "center"  borderRadius={0}  fontWeight={"bold"}
                    ratio = {151/40} width = "15vw" height = "5vh" fontSize = "1.7vw    ">
                Sign Up
                    </Button>
                </GridItem>
            </SimpleGrid>
        </Box>

    );
}
