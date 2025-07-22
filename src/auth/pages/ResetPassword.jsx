import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { resetPasswordSchema } from "../../shared/validators/resetPasswordSchema";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { resetUserPassword } from "../authSlice";

export const ResetPassword = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token"); 

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset
   } = useForm({
       resolver: yupResolver(resetPasswordSchema),
   });

   const handlePasswordToggle = () => {
      setShowPassword((prev) => !prev);
   };

   const handleConfirmPasswordToggle = () => {
      setShowConfirmPassword((prev) => !prev);
   };

   const onSubmit = async (data) => {
      console.log(data);
      try{
         const res = await dispatch(resetUserPassword({...data, token})).unwrap();
         console.log("reset password response:", res);
         if(res.success){
            navigate('/login');
            toast.success(res.message || "Password changed successfully!");
         }
      }
      catch(error){
         console.log("Error occured while changing the password:", error);
         toast.error(error|| "An error occurred while reseting the password. Please try again.");
         reset();
      }
   };

   return (
      <>
         <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
            <img
               src="../assets/images/svg-graphics/signup-g.svg"
               alt=""
               className="img-fluid"
            />
         </div>
         <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
            <div className="mb-lg-9 mb-5">
               <h1 className="mb-1 h2 fw-bold">Reset Password</h1>
               <p>Please enter the new password and confirm the password.</p>
            </div>
            <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
               <div className="row g-3">
                  <div className="col-12">
                     <div className="password-field position-relative">
                        <label
                           htmlFor="formSignupPassword"
                           className="form-label visually-hidden"
                        >
                           New Password
                        </label>
                        <div className="password-field position-relative">
                           <input
                              type={showPassword ? "text" : "password"}
                              className={`form-control fakePassword ${errors.password ? "is-invalid" : ""}`}
                              id="formSignupPassword"
                              placeholder="Password"
                              {...register("password")}
                           />
                           <span>
                              <i className={`bi ${showPassword ? "bi-eye" : "bi-eye-slash"} passwordToggler`} onClick={handlePasswordToggle}></i>
                           </span>
                           {errors.password && (
                              <div className="invalid-feedback">
                                 {errors.password.message}
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
                  <div className="col-12">
                     <div className="password-field position-relative">
                        <label
                           htmlFor="formSignupConfirmPassword"
                           className="form-label visually-hidden"
                        >
                           Confirm Password
                        </label>
                        <div className="password-field position-relative">
                           <input
                              type={showConfirmPassword ? "text" : "password"}
                              className={`form-control fakePassword ${errors.confirmPassword ? "is-invalid" : ""}`}
                              id="formSignupConfirmPassword"
                              placeholder="Confirm Password"
                              {...register("confirmPassword")}
                           />
                           <span>
                              <i className={`bi ${showConfirmPassword ? "bi-eye" : "bi-eye-slash"} passwordToggler`} onClick={handleConfirmPasswordToggle}></i>
                           </span>
                           {errors.confirmPassword && (
                              <div className="invalid-feedback">
                                 {errors.confirmPassword.message}
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
                  <div className="col-12 d-grid">
                     <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Reset Password"}
                     </button>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
};