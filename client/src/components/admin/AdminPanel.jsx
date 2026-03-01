import { Flex, Box, Text, VStack } from "@chakra-ui/react";
import { useState } from "react"; 
import AdminPanelButton from "./AdminPanelButton";
import AdminDashboard from "./AdminDashboard";
import AdminPrograms from "./AdminPrograms";
import AdminTeam from "./AdminTeam";
import AdminSettings from "./AdminSettings";

export default function AdminPanel () {
    const [currScreen, setCurrScreen] = useState('Dashboard');
    const screens = ['Dashboard', 'Programs', 'Team & Cohorts', 'Settings']
    const renderScreen = () => {
        switch (currScreen) {
            case 'Dashboard':
                return <AdminDashboard />
            case 'Programs':
                return <AdminPrograms />
            case 'Team & Cohorts':
                return <AdminTeam />
            case 'Settings':
                return <AdminSettings />
        }
    }

    return (
        <Flex direction="row" >
            <Box minWidth={{ base: "110px", md: "220px" }} minHeight="100vh" p={5} bgColor="rgb(224, 224, 224)" borderRight="2px solid rgb(153, 153, 153)">
                <VStack spacing={2} align="stretch">
                    <Text mb={5} width="100%" fontSize={14} fontWeight={700} textColor="rgb(51, 51, 51)" letterSpacing={1}>
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

            {/* Main Admin Screen Content */}
            <Box flex="1" p={30} bgColor="rgb(245,245,245)">
                {renderScreen()}
            </Box>
        </Flex>
    );
}
