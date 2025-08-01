import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { signupSchema } from "../../shared/validators/signUpSchema";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerUser, resetAuthState } from "../authSlice";

export const Signup = () => {

   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset
   } = useForm({
       resolver: yupResolver(signupSchema),
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
         const dataToSend = {
            firstname: data.firstName,
            lastname: data.lastName,
            password: data.password,
            email: data.email
         }
         const res = await dispatch(registerUser(dataToSend)).unwrap();
         console.log("signup response:", res);
         if(res.success){
            navigate('/login');
            toast.success(res.message || "Signup Successful 🎉");
         }
         // dispatch(resetAuthState()); // I don't need it here because I am not using any global state in this component
      }
      catch(error){
         console.log("Error during signup:", error);
         toast.error(error|| "An error occurred during signup. Please try again.");
         reset();
         // dispatch(resetAuthState()); // I don't need it here because I am not using any global state in this component
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
               <h1 className="mb-1 h2 fw-bold">Get Start Shopping</h1>
               <p>Welcome to FreshCart! Enter your email to get started.</p>
            </div>
            <form className="needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
               <div className="row g-3">
                  <div className="col">
                     <label
                        htmlFor="formSignupfname"
                        className="form-label visually-hidden"
                     >
                        First Name
                     </label>
                     <input
                        type="text"
                        className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
                        id="formSignupfname"
                        placeholder="First Name"
                        {...register("firstName")}
                     />
                     {errors.firstName && (
                        <div className="invalid-feedback">
                           {errors.firstName.message}
                        </div>
                     )}
                  </div>
                  <div className="col">
                     <label
                        htmlFor="formSignuplname"
                        className="form-label visually-hidden"
                     >
                        Last Name
                     </label>
                     <input
                        type="text"
                        className="form-control"
                        id="formSignuplname"
                        placeholder="Last Name"
                        {...register("lastName")}
                     />
                  </div>
                  <div className="col-12">
                     <label
                        htmlFor="formSignupEmail"
                        className="form-label visually-hidden"
                     >
                        Email address
                     </label>
                     <input
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        id="formSignupEmail"
                        placeholder="Email"
                        {...register("email")}
                     />
                     {errors.email && (
                        <div className="invalid-feedback">
                           {errors.email.message}
                        </div>
                     )}
                  </div>
                  <div className="col-12">
                     <div className="password-field position-relative">
                        <label
                           htmlFor="formSignupPassword"
                           className="form-label visually-hidden"
                        >
                           Password
                        </label>
                        <div className="password-field position-relative">
                           <input
                              type={showPassword ? "text" : "password"}
                              className={`form-control fakePassword ${errors.password ? "is-invalid" : ""}`}
                              id="formSignupPassword"
                              placeholder="*****"
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
                              placeholder="*****"
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
                        {isSubmitting ? "Signing up..." : "Sign Up"}
                     </button>
                  </div>
                  <div>
                     Already have an account? <NavLink to="/login">Sign In</NavLink>
                  </div>
               </div>
            </form>
         </div>
      </>
   );
};