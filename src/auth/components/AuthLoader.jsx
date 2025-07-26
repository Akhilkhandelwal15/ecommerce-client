import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUser } from "../authSlice";
import { ClipLoader } from "react-spinners";

const AuthLoader = ({children})=>{
    const dispatch = useDispatch();
    const {isLoading, isAuthChecked} = useSelector((state)=> state.auth);
    // console.log("->>", isLoading, isAuthChecked);

    useEffect(()=>{
        // console.log('->>>>>');
        dispatch(getCurrentUser());
    }, [dispatch]);

    if(isLoading || !isAuthChecked){
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 bg-gradient-green">
                <ClipLoader color="#10B981" size={60} />
            </div>
        );
        // return <div>Loading authentication...</div>;
    }

    return children;
}

export default AuthLoader;