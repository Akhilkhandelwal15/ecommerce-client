import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { createUserSchema } from "../../shared/validators/createUserSchema";
import { useDispatch } from "react-redux";
import { addAdminUser } from "../slices/adminUserSlice";
import { toast } from "react-toastify";

export const CreateUserBody = () => {

    const dispatch = useDispatch();
    
    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset
    } = useForm({
        resolver: yupResolver(createUserSchema)
    });

    const onSubmit = async(data) => {
        console.log("data", data);
        try{
            const userData = {
                role: data.role,
                firstname: data.firstName,
                lastname: data.lastName,
                email: data.email,
                password: data.password
            }

            const res = await dispatch(addAdminUser(userData)).unwrap();
            console.log("res:", res);

            if(res.success){
                toast.success(res.message || "User created successfully 🎉");
                reset();
            }

        }
        catch(error){
            console.log("Error during adding user:", error);
            toast.error(error|| "An error occurred during adding user. Please try again.");
            reset();
        }
    }

    return (
        <main className="main-content-wrapper">
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div>
                            <h2>Create User</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow border-0">
                            <div className="card-body d-flex flex-column gap-8 p-7">
                                <div className="d-flex flex-column gap-4">
                                    <h3 className="mb-0 h6">User Information</h3>
                                    <form className="row g-3 needs-validation" onSubmit={handleSubmit(onSubmit)} noValidate>
                                        <div className="col-lg-6 col-12">
                                            <div>
                                                <label htmlFor="userRole" className="form-label">
                                                    User Role
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <select className={`form-control ${errors.role ? "is-invalid" : ""}`} id="userRole" {...register("role")}>
                                                    <option value="">Select Role</option>
                                                    <option value="user">User</option>
                                                    <option value="admin">Admin</option>
                                                </select>
                                                {errors.role && (
                                                    <div className="invalid-feedback">{errors.role.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div>
                                                <label htmlFor="firstName" className="form-label">
                                                    FirstName
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="text" className={`form-control ${errors.firstName ? "is-invalid" : ""}`} id="firstName" placeholder="First Name" {...register("firstName")} />
                                                {errors.firstName && (
                                                    <div className="invalid-feedback">{errors.firstName.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div>
                                                <label htmlFor="lastName" className="form-label">
                                                    LastName
                                                </label>
                                                <input type="text" className="form-control" id="lastName" placeholder="Last Name" {...register("lastName")} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div>
                                                <label htmlFor="email" className="form-label">
                                                    Email
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="email" className={`form-control ${errors.email ? "is-invalid" : ""}`} id="email" placeholder="Email Address" {...register("email")} />
                                                {errors.email && (
                                                    <div className="invalid-feedback">{errors.email.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div>
                                                <label htmlFor="password" className="form-label">
                                                    Password
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="password" className={`form-control ${errors.password ? "is-invalid" : ""}`} id="password" placeholder="Password" {...register("password")} />
                                                {errors.password && (
                                                    <div className="invalid-feedback">{errors.password.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div>
                                                <label htmlFor="confirmPassword" className="form-label">
                                                    Confirm Password
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="password" className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`} id="confirmPassword" placeholder="Confirm Password" {...register("confirmPassword")} />
                                                {errors.confirmPassword && (
                                                    <div className="invalid-feedback">{errors.confirmPassword.message}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="col-12 mt-3">
                                                <div className="d-flex flex-column flex-md-row gap-2">
                                                    <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                                                        {isSubmitting ? 'Creating new user...' : 'Create New User'}
                                                    </button>
                                                    {/* <button className="btn btn-secondary">Cancel</button> */}
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
