export const Login = () => {
    return (
        <section className="my-lg-14 my-8">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
                        <img
                            src="../assets/images/svg-graphics/signin-g.svg"
                            alt=""
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
                        <div className="mb-lg-9 mb-5"></div>
                        <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                        <p>Welcome back to FreshCart! Enter your email to get started.</p>
                        <form className="needs-validation">
                            <div className="row g-3">
                                <div className="col-12">
                                    <label
                                        htmlFor="formSigninEmail"
                                        className="form-label visually-hidden"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="formSigninEmail"
                                        placeholder="Email"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter name.
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="password-field position-relative">
                                        <label
                                            htmlFor="formSigninPassword"
                                            className="form-label visually-hidden"
                                        >
                                            Password
                                        </label>
                                        <div className="password-field position-relative">
                                            <input
                                                type="password"
                                                className="form-control fakePassword"
                                                id="formSigninPassword"
                                                placeholder="*****"
                                                required
                                            />
                                            <span>
                                                <i className="bi bi-eye-slash passwordToggler"></i>
                                            </span>
                                            <div className="invalid-feedback">
                                                Please enter password.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckDefault"
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                    <div>
                                        Forgot password? <a href="">Reset It</a>
                                    </div>
                                </div>
                                <div className="col-12 d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Sign In
                                    </button>
                                </div>
                                <div>
                                    Don’t have an account? <a href="">Sign Up</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};