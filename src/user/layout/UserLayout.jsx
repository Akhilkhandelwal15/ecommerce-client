import { Outlet } from "react-router-dom";
import { Header } from "../../shared/components/Header";
import { NavHeader } from "../../shared/components/NavHeader";
import { ResponsiveItems } from "../../shared/components/ResponsiveItems";

export const UserLayout = ()=>{
    return (
        <>
            <Header />
            <NavHeader />
            <ResponsiveItems />
            <main>
                <Outlet />
            </main>
        </>
    );
}