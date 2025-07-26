import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { NavHeader } from "../components/NavHeader";
import { ResponsiveItems } from "../components/ResponsiveItems";

export const CommonLayout = ()=>{
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