import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ()=>{
    const {user, isAuthenticated, role} = useSelector((state) => state.auth);

    if(!user || !isAuthenticated){
        return <Navigate to="/login" replace />;
    }

    if(role !== "user"){
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default ProtectedRoute;