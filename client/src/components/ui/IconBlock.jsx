import { Box, Text, VStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function IconBlock({ children, text, route, ...props }) {
    return(
        <VStack spacing={{ base: 4, md: 6 }} alignItems="center">
            <NavLink to={route}>
                <Box
                    width={{ base: '120px', md: '160px', lg: '192px' }}
                    height={{ base: '120px', md: '160px', lg: '192px' }}
                    bg="neutral.muted"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    {/* Image here */}
                </Box>
            </NavLink>
            {/* Text Below */}
            <Text 
                fontSize={{ base: '24px', md: '30px', lg: '36px' }}
                lineHeight="1.15" 
                textAlign="center"
            >
                {text}
            </Text>

            {children}

        </VStack>
    )
}