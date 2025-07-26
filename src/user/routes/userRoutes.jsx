import { Navigate } from "react-router-dom";
import ProtectedRoute from "../../shared/routes/ProtectedRoute";
import { Home } from "../pages/Home";

const userRoutes = {
    element: <ProtectedRoute />,
    children: [
        {
            // if the user visits the root path, redirect to Home
            index: true, // this matches exact path "/"
            element: <Navigate to="home" replace />,
        },
        {
            path: "home",
            element: <Home />
        }
    ]
}

export default userRoutes;