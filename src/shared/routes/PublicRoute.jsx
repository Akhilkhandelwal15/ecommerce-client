// To redirect logged in users away from the login, signup and forgot password pages

import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const {isAuthenticated, role} = useSelector((state) => state.auth);

    if(isAuthenticated){
        if(role==="admin" || role==="superadmin"){
            return <Navigate to="/admin" replace />;
        }
        else{
            return <Navigate to="/home" replace />;
        }
    }

    return <Outlet />;
}

export default PublicRoute;
