import { Button, Text } from "@chakra-ui/react"

export default function AdminPanelButton ({text, bgColor, textColor, fontWeight, onClick}) {
    return (
        <Button 
            onClick={onClick}
            _hover={{ bg: "rgb(200,200,200)", color: textColor}}
            _active={{ bg: bgColor }}

            bgColor={bgColor}
            borderColor="rgb(153,153,153)"
            fontWeight={fontWeight}
            fontSize={16}
            textColor={textColor}

            width="178px"
            height="45px"
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
