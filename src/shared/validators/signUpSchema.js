import * as yup from "yup";

export const signupSchema = yup.object({
    firstName: yup.string().required("First name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    confirmPassword: yup.string().required("Confirm Password is required").oneOf([yup.ref("password"), null], "Passwords must match"),
});