import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoutes = ()=>{
    const {isAuthenticated, role} = useSelector((state)=> state.auth);
    console.log("role:", role);
    if(!isAuthenticated){
        return <Navigate to="/login" replace />;
    }
    if(role!=='admin' && role!='superadmin'){
        console.log("here");
        return <Navigate to="/" replace />;
    }
    
    return <Outlet />;
}

export default AdminProtectedRoutes;