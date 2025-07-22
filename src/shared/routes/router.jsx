import { createBrowserRouter, Navigate } from "react-router-dom";
import { AuthLayout } from "../../auth/layouts/AuthLayout";
import { Login } from "../../auth/pages/Login";
import { Signup } from "../../auth/pages/SIgnup";
import { ForgotPassword } from "../../auth/pages/ForgotPassword";
import PublicRoute from "./PublicRoute";
import ProtectedRoute from "./ProtectedRoute";
import { Home } from "../../user/pages/Home";
import { RootLayout } from "../layouts/RootLayout";
import { ResetPassword } from "../../auth/pages/ResetPassword";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
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
                            },
                            {
                                path: "reset-password",
                                element: <ResetPassword />
                            }
                        ]
                    }
                ]
            },
            {
                path: "/",
                element: <ProtectedRoute />,
                children: [
                    {
                        // if the user visits the root path, redirect to Home
                        index: true, // this matches exact path "/"
                        element: <Navigate to="/home" replace />,
                    },
                    {
                        path: "home",
                        element: <Home />
                    }
                ]
            }
        ]
    }
    
]);

export default router;