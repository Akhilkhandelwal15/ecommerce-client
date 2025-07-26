import { Navigate } from "react-router-dom";
import { AdminLayout } from "../layout/AdminLayout";
import AdminProtectedRoutes from "./AdminProtectedRoutes";
import { AdminDashboard } from "../pages/AdminDashboard";
import { CreateUser } from "../pages/CeateUser";
import { ListUsers } from "../pages/ListUsers";

const adminRoutes = {
    element: <AdminProtectedRoutes />,
    children: [
        {
            index: true,
            element: <Navigate to="dashboard" />
        },
        {
            path: "dashboard",
            element: <AdminDashboard />
        },
        {
            path: "add-user",
            element: <CreateUser />
        },
        {
            path: "users",
            element: <ListUsers />
        }
    ]
}

export default adminRoutes;