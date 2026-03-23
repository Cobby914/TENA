import { useState } from "react";
import { Box, Menu, MenuButton, Button } from "@chakra-ui/react";

export default function DropdownButton ({text, children, ...props}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box 
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            display="inline-block"
        >
            <Menu isOpen={isOpen} placement="bottom-start" gutter={0} transition="none" w="100%">
                <MenuButton
                    as={Button}
                    bg="white"
                    color="black"
                    fontWeight="600"
                    fontSize= "1.5vw"
                    width = "10vw"
                    height="6vh"
                    px = "1vw"
                    textAlign = "left"
                    borderRadius={4}

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
