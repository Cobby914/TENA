import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Center, Spinner } from "@chakra-ui/react";
import AdminPanel from "../components/admin/AdminPanel";

export default function Admin() {
  return (
    <AdminPanel>
      <Suspense
        fallback={
          <Center minH="50vh" py={12}>
            <Spinner size="lg" color="gray.600" thickness="3px" />
          </Center>
        }
      >
        <Outlet />
      </Suspense>
    </AdminPanel>
  );
}
