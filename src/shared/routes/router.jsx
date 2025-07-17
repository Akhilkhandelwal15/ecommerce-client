import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout } from "../../auth/layouts/AuthLayout";
import { Login } from "../../auth/pages/Login";
import { Signup } from "../../auth/pages/SIgnup";
import { ForgotPassword } from "../../auth/pages/ForgotPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                // if the user visits the root path, redirect to login
                index: true, // 👈 this matches exact path "/"
                element: <Navigate to="/login" replace />,
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />
            }
        ]
    }
]);

export default router;