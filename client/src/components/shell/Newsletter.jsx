import { Text, Button, Input, Box, VStack, FormControl, FormLabel, Icon, useToast} from "@chakra-ui/react";
import { useState } from "react";
import InputBox from "../ui/InputBox.jsx";
import { ChevronRight } from "lucide-react";

export default function NewsLetter(){
    
const [formData, setFormData] = useState({
        firstName: "",  
        lastName: "",
        email: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const payload = {
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName
        };

        try {
            const response = await fetch("http://localhost:3001/api/newsletter_subscribers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (response.ok) {
                toast({
                    title: "Success!",
                    description: "You've been added to our newsletter.",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                setFormData({ firstName: "", lastName: "", email: "" });
            } else {
                throw new Error(data.error || "Server error");
            }
        } catch (err) {
            toast({
                title: "Subscription Failed",
                description: err.message,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Box bg="surface.muted" width = "100%" height = "100%" maxWidth = "500px" ratio = {450/500} borderRadius={"5px"} py={9} px={6}>
            {/* We can create an input box component and use it here instead in future! */}
            <VStack w="100%" ratio = {449/520} gap={10} alignItems={"stretch"}>
                <Box align = "center" textColor="brand.primary">
                    <Text fontSize={24} fontWeight={600} lineHeight={"32px"} letterSpacing={0}>
                        Newsletter Signup
                    </Text>
                </Box>

                <form onSubmit={handleSubmit}>
                    <VStack w="100%" textColor="brand.heading" alignItems={"stretch"} spacing={8}> 
                        <FormControl isRequired>
                            <FormLabel fontSize={18}>First Name</FormLabel>
                            <Input name="firstName" value={formData.firstName} onChange={handleChange} h={9} bg="surface.default" borderRadius={0} border="1px solid" borderColor="brand.primary" w="100%" mt={-1}/>
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel fontSize={18}>Last Name</FormLabel>
                            <Input name="lastName" value={formData.lastName} onChange={handleChange} mt={-1} h={9} bg="surface.default" borderRadius={0} border="1px solid" borderColor="brand.primary" />
                        </FormControl>

                        <FormControl isRequired>
                            <FormLabel fontSize={18}>Email</FormLabel>
                            <Input type="email" name="email" value={formData.email} onChange={handleChange} mt={-1} h={9} bg="surface.default" borderRadius={0} border="1px solid" borderColor="brand.primary" />
                        </FormControl>

                        <Box display="flex" justifyContent={"center"} mt={4}>
                            <Button isLoading={isLoading} type="submit" bg="brand.accent" textColor={"black"} rightIcon={<Icon as={ChevronRight} />} _hover={{ bg: "brand.accentHover" }} >
                                Signup
                            </Button>
                        </Box>
                    </VStack>
                </form>
            </VStack>
        </Box>

    );
}
