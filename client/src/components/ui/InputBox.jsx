import {Input, Box} from "@chakra-ui/react";

export default function ImportBox({
 children, ...props 
}){
    return (
        <Box bg = "#FFFFFF" width = "401px" height = "44px" 
        {...props}>
            {/* Eventually, add input functionality for backend use*/}
        </Box>
    );
}
