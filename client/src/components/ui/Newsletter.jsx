import { Text, Button, Input, Box, VStack, FormControl, FormLabel, Icon} from "@chakra-ui/react";

import InputBox from "./InputBox.jsx";
import { ChevronRight } from "lucide-react";

export default function NewsLetter({

}){
    return (
        
        <Box bg = "#DEE3EB" width = "100%" height = "100%" maxWidth = "500px" ratio = {450/500} rounded = {4} py={4} px={2}>
            {/* We can create an input box component and use it here instead in future! */}
            <VStack w="100%" ratio = {449/520} gap={10}>
                <Box align = "center" textColor="rgba(21, 115, 207, 1)">
                    <Text fontSize={24} fontWeight={600} lineHeight={"32px"}>
                        Newsletter Signup
                    </Text>
                </Box>

                <form>
                    <VStack w="100%" textColor={"rgb(74, 92, 131)"} > 
                        <FormControl isRequired>
                            <FormLabel fontSize={20}>First Name</FormLabel>
                            <Input bg={"white"} borderRadius={0} border="1px solid rgba(21, 115, 207, 1)" w="100%" />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel fontSize={20}>Last Name</FormLabel>
                            <Input bg={"white"} borderRadius={0} border="1px solid rgba(21, 115, 207, 1)" />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel fontSize={20}>Email</FormLabel>
                            <Input bg={"white"} borderRadius={0} border="1px solid rgba(21, 115, 207, 1)" />
                        </FormControl>

                        <Box display="flex" justifyContent={"center"} mt={4}>
                            <Button type="submit" bg="rgba(92, 218, 197, 1)" textColor={"black"} rightIcon={<Icon as={ChevronRight} />} _hover={{ bg: "rgba(82, 208, 187, 1)" }} >
                                Signup
                            </Button>
                        </Box>
                    </VStack>
                </form>
            </VStack>
        </Box>

    );
}
