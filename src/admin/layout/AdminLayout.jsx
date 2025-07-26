import { Outlet } from "react-router-dom";
import { AdminHeader } from "../components/AdminHeader";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminResponsiveSidebar } from "../components/AdminResponsiveSidebar";

export const AdminLayout = ()=>{
    return (
        <>
            <AdminHeader />
            <div className="main-wrapper">
                <AdminSidebar />
                <AdminResponsiveSidebar />
                <Outlet />
            </div>
        </>
    );
}