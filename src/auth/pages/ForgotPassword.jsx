import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { forgotPasswordSchema } from "../../shared/validators/forgotpsswordSchema";
import { useDispatch } from "react-redux";
import { sendResetPasswordLink } from "../authSlice";
import { toast } from "react-toastify";

export const ForgotPassword = () => {
    const dispatch = useDispatch();

    const onSubmit = async(data)=>{
        try{
            const res = await dispatch(sendResetPasswordLink(data)).unwrap();
            console.log("res:", res);
            if(res.success){
                toast.success(res.message || "Reset password link sent successfully!");
                reset();
            }
        }
        catch(error){
            console.error("Error occured:", error);
            toast.error(error || "An error occurred. Please try again.");
            reset();
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm({
        resolver: yupResolver(forgotPasswordSchema),
        mode: "onTouched"
    });
    return (
        <>
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                <img src="../assets/images/svg-graphics/fp-g.svg" alt="" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1 d-flex align-items-center">
                <div>
                    <div className="mb-lg-9 mb-5">
                        <h1 className="mb-2 h2 fw-bold">Forgot your password?</h1>
                        <p>
                            Please enter the email address associated with your account and We will email you a link to reset your password.
                        </p>
                    </div>
                    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                        <div className="row g-3">
                            <div className="col-12">
                                <label htmlFor="formForgetEmail" className="form-label visually-hidden">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className={`form-control${errors.email ? " is-invalid" : ""}`}
                                    id="formForgetEmail"
                                    placeholder="Email"
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <div className="invalid-feedback">{errors.email.message}</div>
                                )}
                            </div>
                            <div className="col-12 d-grid gap-2">
                                <button type="submit" className="btn btn-primary">
                                    {isSubmitting ? 'Submitting...' : 'Reset Password'}
                                </button>
                                <NavLink to="/login" className="btn btn-link">
                                    Back
                                </NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
