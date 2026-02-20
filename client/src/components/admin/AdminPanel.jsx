import { Box, Text, VStack } from "@chakra-ui/react";
import { useState } from "react"; 
import AdminPanelButton from "./AdminPanelButton";

export default function AdminPanel () {
    const [currScreen, setCurrScreen] = useState('Dashboard');
    const screens = ['Dashboard', 'Programs', 'Team & Cohorts', 'Settings']

    console.log("current active screen:", currScreen);
    return (
        <Box width="220px" height="1200px" p={5} bgColor="rgb(224, 224, 224)" borderColor="rgb(153, 153, 153)" borderWidth="2px">
            <VStack spacing={2}>
                <Text mb={5} width="100%" fontSize={16} fontWeight={700} textColor="rgb(51, 51, 51)" letterSpacing={1}>
                    ADMIN PANEL
                </Text>
                {screens.map((screen) => (
                    <AdminPanelButton 
                        key={screen}
                        onClick={() => setCurrScreen(screen)}
                        text={screen}
                        bgColor={currScreen === screen ? "rgb(102,102,102)" : "white"}
                        textColor={currScreen === screen ? "white" : "rgb(51, 51, 51)"}
                        fontWeight={currScreen === screen ? 600 : 400}
                    />
                ))}
                <AdminPanelButton text="Logout" textColor="rgb(51, 51, 51)" bgColor= "white" fontWeight={400}/>
            </VStack>
        </Box>
    );
}
