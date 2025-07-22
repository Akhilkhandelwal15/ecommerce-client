import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
    return (
        <section className="my-lg-6 my-8">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <Outlet />
                </div>
            </div>
        </section>
    );
}