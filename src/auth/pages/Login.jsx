import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { loginSchema } from "../../shared/validators/loginSchema";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getCurrentUser, loginUser } from "../authSlice";

export const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePasswordToggle = ()=>{
        console.log("here");
        setShowPassword((prev)=> !prev);
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm({
        resolver: yupResolver(loginSchema),
        // mode: "onTouched"
    });

    const onSubmit = async (data) => {
        try{
            const res = await dispatch(loginUser(data)).unwrap();
            console.log("login response:", res);
            if(res.success){
                console.log("Login successful:");
                const userRes = await dispatch(getCurrentUser()).unwrap();
                console.log("Current user response:", userRes);
                if(userRes.success){
                    toast.success(res.message || "Login Successful 🎉");
                    navigate("/home");
                }
            }            
        }
        catch(error){
            console.error("Error during login:", error);
            toast.error(error || "An error occurred during login. Please try again.");
            reset();
        }
    };

    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                <img
                    src="../assets/images/svg-graphics/signin-g.svg"
                    alt="Sign in"
                    className="img-fluid"
                />
            </div>
            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                <div className="mb-lg-9 mb-5" />
                <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                <p>Welcome back to FreshCart! Enter your email to get started.</p>
                <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="row g-3">
                        <div className="col-12">
                            <input
                                type="email"
                                className={`form-control${errors.email ? " is-invalid" : ""}`}
                                id="formSigninEmail"
                                placeholder="Email"
                                {...register("email")}
                            />
                            {errors.email && (
                                <div className="invalid-feedback d-block">
                                    {errors.email.message}
                                </div>
                            )}
                        </div>
                        <div className="col-12">
                            <div className="password-field position-relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={`form-control${errors.password ? " is-invalid" : ""}`}
                                    id="formSigninPassword"
                                    placeholder="*****"
                                    {...register("password")}
                                />
                                <span>
                                    <i className={`bi passwordToggler ${showPassword ? 'bi-eye' : 'bi-eye-slash'}`} onClick={handlePasswordToggle}></i>
                                </span>
                                {errors.password && (
                                    <div className="invalid-feedback d-block">
                                        {errors.password.message}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexCheckDefault"
                                    {...register("rememberMe")}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    Remember me
                                </label>
                            </div>
                            <div>
                                Forgot password? <NavLink to="/forgot-password">Reset It</NavLink>
                            </div>
                        </div>
                        <div className="col-12 d-grid">
                            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                {isSubmitting ? "Signing in..." : "Sign In"}
                            </button>
                        </div>
                        <div>
                            Don’t have an account? <NavLink to="/signup">Sign Up</NavLink>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
