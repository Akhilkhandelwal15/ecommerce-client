// To redirect logged in users away from the login, signup and forgot password pages

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const {isAuthenticated} = useSelector((state) => state.auth);

    if(isAuthenticated){
        return <Navigate to="/home" replace />;
    }

    return <Outlet />;
}

export default PublicRoute;
