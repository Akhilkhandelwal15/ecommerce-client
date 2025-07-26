import { Navigate } from "react-router-dom";
import { AuthLayout } from "../../auth/layouts/AuthLayout";
import PublicRoute from "./PublicRoute";
import { Login } from "../../auth/pages/Login";
import { Signup } from "../../auth/pages/SIgnup";
import { ForgotPassword } from "../../auth/pages/ForgotPassword";
import { ResetPassword } from "../../auth/pages/ResetPassword";

const CommonRoutes = {
    path: "/",
    element: <PublicRoute />, 
    children: [
        {
            element: <AuthLayout />,
            children: [
                {
                    // if the user visits the root path, redirect to login
                    index: true, // this matches exact path "/"
                    element: <Navigate to="/login" replace />,
                },
                {
                    path: "login",
                    element: <Login />
                },
                {
                    path: "signup",
                    element: <Signup />
                },
                {
                    path: "forgot-password",
                    element: <ForgotPassword />
                },
                {
                    path: "reset-password",
                    element: <ResetPassword />
                }
            ]
        }
    ]
}

export default CommonRoutes;