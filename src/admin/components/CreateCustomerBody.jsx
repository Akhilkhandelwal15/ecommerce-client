export const CreateCustomer = () => {
    return (
        <main className="main-content-wrapper">
            <div className="container">
                <div className="row mb-8">
                    <div className="col-md-12">
                        <div>
                            <h2>Create Customer</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="#" className="text-inherit">Dashboard</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Create</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card shadow border-0">
                            <div className="card-body d-flex flex-column gap-8 p-7">
                                <div className="d-flex flex-column flex-md-row align-items-center mb-4 file-input-wrapper gap-2">
                                    <div>
                                        <img className="image avatar avatar-lg rounded-3" src="../assets/images/docs/placeholder-img.jpg" alt="Image" />
                                    </div>
                                    <div className="file-upload btn btn-light ms-md-4">
                                        <input type="file" className="file-input opacity-0" />
                                        Upload Photo
                                    </div>
                                    <span className="ms-2">JPG, GIF or PNG. 1MB Max.</span>
                                </div>
                                <div className="d-flex flex-column gap-4">
                                    <h3 className="mb-0 h6">Customer Information</h3>
                                    <form className="row g-3 needs-validation" noValidate>
                                        <div className="col-lg-6 col-12">
                                            <div>
                                                <label htmlFor="creatCustomerName" className="form-label">
                                                    Name
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="text" className="form-control" id="creatCustomerName" placeholder="Customer Name" required />
                                                <div className="invalid-feedback">Please enter customer name</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div>
                                                <label htmlFor="creatCustomerEmail" className="form-label">
                                                    Email
                                                    <span className="text-danger">*</span>
                                                </label>
                                                <input type="email" className="form-control" id="creatCustomerEmail" placeholder="Email Address" required />
                                                <div className="invalid-feedback">Please enter email</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <div>
                                                <label htmlFor="creatCustomerPhone" className="form-label">Phone</label>
                                                <input type="text" className="form-control" id="creatCustomerPhone" placeholder="Number" required />
                                                <div className="invalid-feedback">Please enter phone</div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <label className="form-label" htmlFor="creatCustomerDate">Birthday</label>
                                            <input type="text" className="form-control flatpickr" id="creatCustomerDate" placeholder="dd/mm/yyyy" required />
                                            <div className="invalid-feedback">Please enter date</div>
                                        </div>
                                        <div>
                                            <div className="col-12 mt-3">
                                                <div className="d-flex flex-column flex-md-row gap-2">
                                                    <button className="btn btn-primary" type="submit">Create New Customer</button>
                                                    <button className="btn btn-secondary" type="submit">Cancel</button>
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
