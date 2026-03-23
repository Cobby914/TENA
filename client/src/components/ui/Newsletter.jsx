import { Card, Grid, GridItem, Text, Button, Input, Box, SimpleGrid } from "@chakra-ui/react";

import InputBox from "./InputBox.jsx";

export default function NewsLetter({

}){
    return (
        
        <Box bg = "#DEE3EB" width = "34vw" height = "80vh"  borderRadius = "none" shadow = {false}
         maxWidth = "449px" maxHeight = "520px" ratio = {449/520} rounded = {4}>
            {/* We can create an input box component and use it here instead in future! */}
            <SimpleGrid maxWidth= "449px" maxHeight = "520px" height = "80vh" ratio = {449/520} width = "33vw">
                <GridItem align = "center">
                        <Text fontSize=  "min(2.2vw,30px)" whiteSpace={"nowrap"}
                        marginTop = {{base: "clamp(4vh,4vh, 30px)", lg: "30px"}} letterSpacing={0} fontWeight = "600" 
                        color = "#1573CF" fontFamily="INTER" >
                            Newsletter Signup
                        </Text>
                </GridItem>
                <GridItem align = "left"  paddingLeft = {{base: "clamp(1.6vw, 1.6vw, 20px)", lg: "20px"}}>
                    <Text fontSize= {{ base: "1.7vw", md: "1.7vw", lg: "22px" }}  align = "left"
                         letterSpacing={0} fontFamily = "INTER" color = "#3F5F85" fontWeight = {500}>
                        First Name
                        </Text>
                    <InputBox maxWidth = "401px" maxHeight = "44px" ratio = {401/44}  borderWidth = {1} borderColor = "#1573CF"
                     width = "28vw" height = "5vh" >
                    {/*For future back end development */}
                    </InputBox>

                </GridItem>
                <GridItem align = "left"  paddingLeft = {{base: "clamp(1.6vw, 1.6vw, 20px)", lg: "20px"}}>
                    <Text fontSize= {{ base: "1.7vw", md: "1.7vw", lg: "22px" }} fontFamily = "INTER"
                     color = "#3F5F85" fontWeight = {500}align = "left"
                        letterSpacing={0} fontStyle = "regular">
                        Last Name
                        </Text>
                    <InputBox maxWidth = "401px" maxHeight = "44px" ratio = {401/44}  borderWidth = {1} borderColor = "#1573CF"
                     width = "28vw" height = "5vh" >
                    
                    {/*For future back end development */}
                    </InputBox>


                </GridItem>

                <GridItem align = "left" paddingLeft = {{base: "clamp(1.6vw, 1.6vw, 20px)", lg: "20px"}}>
                    <Text fontSize= {{ base: "1.7vw", md: "1.7vw", lg: "22px" }}  align = "left"
                        letterSpacing={0} fontFamily = "INTER" color = "#3F5F85" fontWeight = {500}>
                        Email
                        </Text>
                    <InputBox maxWidth = "401px" maxHeight = "44px" ratio = {401/44} borderWidth = {1} borderColor = "#1573CF"
                    width = "28vw" height = "5vh" >
                    {/*For future back end development */}
                    </InputBox>

                </GridItem>

                <GridItem align = "center">
                    <Button bg = "#5CDAC5" maxWidth = "151px" maxHeight = "40px" align = "center"  borderRadius={0}  fontWeight={"bold"}
                    ratio = {151/40} width = "15vw" height = "5vh" fontSize= {{ base: "1.7vw", md: "1.7vw", lg: "22px" }}>
                Signup
                    </Button>
                </GridItem>
            </SimpleGrid>
        </Box>

    );
}
