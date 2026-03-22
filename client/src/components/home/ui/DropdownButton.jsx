import { useState } from "react";
import { Box, Menu, MenuButton, Button } from "@chakra-ui/react";

export default function DropdownButton ({text, children, ...props}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            display="inline-block"
            width={{ base: "150px", md: "160px" }}
        >
            <Menu isOpen={isOpen} placement="bottom-start" gutter={0} transition="none" w="100%">
                <MenuButton
                    as={Button}
                    bg="white"
                    color="black"
                    fontWeight="600"
                    fontSize={{ base: 10, md: 20}}
                    height={{ base: "50px", md: "55px"}}
                    width="auto"
                    borderRadius={6}
                    _active={"none"}
                    {...props}
                >
                    {text}
                </MenuButton>
                {children}
            </Menu>
        </Box>
    );
};
