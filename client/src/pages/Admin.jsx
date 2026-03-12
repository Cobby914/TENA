import AdminPanel from "../components/admin/AdminPanel";
import { Outlet } from "react-router-dom";

export default function Admin() {
    return (
        <AdminPanel>
            <Outlet />
        </AdminPanel>
    );
}
