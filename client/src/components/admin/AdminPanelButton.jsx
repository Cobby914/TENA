import { Button, Text } from "@chakra-ui/react"

export default function AdminPanelButton ({text, bgColor, textColor, fontWeight, onClick}) {
    return (
        <Button 
            onClick={onClick}
            _hover={{ bg: "surface.muted", color: textColor}}
            _active={{ bg: bgColor }}

            bgColor={bgColor}
            borderColor="neutral.muted"
            fontWeight={fontWeight}
            fontSize={{ base: "14px", md: "16px" }}
            textColor={textColor}

            width="100%"
            height="40px"
            borderWidth="1px"
            borderRadius={0}
            px="10px"
            py="12px" 
        >
            <Text width="100%" textAlign="left">
                {text}
            </Text>
        </Button>
    );
}
