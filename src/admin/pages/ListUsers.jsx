import { UserListing } from "../components/UserListing";
import { ViewUserOffcanvas } from "../components/ViewUserOffcanvas";

export const ListUsers = ()=>{
    return (
        <>
            <UserListing />
            <ViewUserOffcanvas />
        </>
    );
}