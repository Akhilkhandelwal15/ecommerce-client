import { createBrowserRouter, Navigate } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import adminRoutes from "../../admin/routes/AdminRoute";
import { CommonLayout } from "../layouts/CommonLayout";
import { UserLayout } from "../../user/layout/UserLayout";
import { AdminLayout } from "../../admin/layout/AdminLayout";
import CommonRoutes from "./commonRoutes";
import userRoutes from "../../user/routes/userRoutes";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <RootLayout />,
//         children: [
//             {
//                 path: "/",
//                 element: <PublicRoute />, 
//                 children: [
//                     {
//                         element: <AuthLayout />,
//                         children: [
//                             {
//                                 // if the user visits the root path, redirect to login
//                                 index: true, // this matches exact path "/"
//                                 element: <Navigate to="/login" replace />,
//                             },
//                             {
//                                 path: "/login",
//                                 element: <Login />
//                             },
//                             {
//                                 path: "/signup",
//                                 element: <Signup />
//                             },
//                             {
//                                 path: "/forgot-password",
//                                 element: <ForgotPassword />
//                             },
//                             {
//                                 path: "reset-password",
//                                 element: <ResetPassword />
//                             }
//                         ]
//                     }
//                 ]
//             },
//             {
//                 path: "/",
//                 element: <ProtectedRoute />,
//                 children: [
//                     {
//                         // if the user visits the root path, redirect to Home
//                         index: true, // this matches exact path "/"
//                         element: <Navigate to="/home" replace />,
//                     },
//                     {
//                         path: "home",
//                         element: <Home />
//                     }
//                 ]
//             },
//             adminRoutes
//         ]
//     }
    
// ]);

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <CommonLayout />,
                children: [
                    CommonRoutes
                ]
            },
            {
                path: "admin",
                element: <AdminLayout />,
                children: [
                    adminRoutes
                ]
            },
            {
                element: <UserLayout />,
                children: [
                    userRoutes
                ]
            },
        ]
    }
    
]);

export default router;