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
                    fontSize= {{base: 16, lg: 18}}
                    width ="auto"
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
