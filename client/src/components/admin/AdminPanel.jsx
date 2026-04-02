import { Flex, Box, Text, VStack } from "@chakra-ui/react";
import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AdminPanelButton from "./AdminPanelButton";
import { useAuthStore } from "../../store/useAuthStore";

const NAV_ITEMS = [
    { label: "Dashboard", path: "/admin/dashboard" },
    { label: "Approvals", path: "/admin/approvals" },
    { label: "Programs", path: "/admin/programs" },
    { label: "Team & Cohorts", path: "/admin/team" },
    { label: "Settings", path: "/admin/settings" }
];

export default function AdminPanel({ children }) {
    const navigate = useNavigate();
    const location = useLocation();
    const session = useAuthStore((s) => s.session);
    const clearSession = useAuthStore((s) => s.clearSession);

    const handleLogout = () => {
        clearSession();
        navigate("/login", { replace: true });
    };

    const activePath = useMemo(() => {
        const pathname = location.pathname.replace(/\/+$/, "");
        const exactMatch = NAV_ITEMS.find((item) => item.path === pathname);
        if (exactMatch) return exactMatch.path;
        const prefixMatch = NAV_ITEMS.find((item) => pathname.startsWith(item.path));
        return prefixMatch?.path ?? "/admin/dashboard";
    }, [location.pathname]);

    return (
        <Flex direction="row" >
            <Box minWidth={{ base: "110px", md: "220px" }} minHeight="100vh" p={5} bgColor="surface.muted" borderRightWidth="2px" borderRightStyle="solid" borderRightColor="neutral.muted">
                <VStack spacing={2} align="stretch">
                    <Text mb={5} width="100%" fontSize={14} fontWeight={700} textColor="neutral.strong" letterSpacing={1}>
                        ADMIN PANEL
                    </Text>
                    <Text mb={3} width="100%" fontSize={12} textColor="neutral.muted">
                        {session?.user?.email ?? "Not signed in"}
                    </Text>
                    {NAV_ITEMS.map((item) => (
                        <AdminPanelButton 
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            text={item.label}
                            bgColor={activePath === item.path ? "neutral.muted" : "surface.default"}
                            textColor={activePath === item.path ? "surface.default" : "neutral.strong"}
                            fontWeight={activePath === item.path ? 600 : 400}
                        />
                    ))}
                    <AdminPanelButton text="Logout" textColor="neutral.strong" bgColor="surface.default" fontWeight={400} onClick={handleLogout}/>
                </VStack>
            </Box>

            {/* Main Admin Screen Content */}
            <Box flex="1" p={{ base: 4, md: 8 }} bgColor="surface.soft">
                {children}
            </Box>
        </Flex>
    );
}
