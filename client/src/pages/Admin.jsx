import AdminPanel from "../components/admin/AdminPanel";

export default function Admin ({children}) {
    return (
        <>
            <AdminPanel />
            {children}
        </>
    );
}
