import { NavLink } from "react-router-dom";

export const AdminSidebar = () => {
    return (
        <nav className="navbar-vertical-nav d-none d-xl-block">
            <div className="navbar-vertical">
                <div className="px-4 py-5">
                    <a href="../index.html" className="navbar-brand">
                        <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
                    </a>
                </div>
                <div className="navbar-vertical-content flex-grow-1" data-simplebar="">
                    <ul className="navbar-nav flex-column" id="sideNavbar">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin/dashboard">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-house"></i></span>
                                    <span className="nav-link-text">Dashboard</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="nav-item mt-6 mb-3">
                            <span className="nav-label">Store Managements</span>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="products.html">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-cart"></i></span>
                                    <span className="nav-link-text">Products</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"
                                data-bs-toggle="collapse"
                                data-bs-target="#navCustomer"
                                aria-expanded="false"
                                aria-controls="navCustomer"
                            >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-people"></i></span>
                                    <span className="nav-link-text">Users</span>
                                </div>
                            </a>
                            <div id="navCustomer" className="collapse show" data-bs-parent="#sideNavbar">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/admin/users">Users</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/admin/add-user">Create Users</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" to="/">Edit Users</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="categories.html">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-list-task"></i></span>
                                    <span className="nav-link-text">Categories</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link collapsed"
                                href="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#navCategoriesOrders"
                                aria-expanded="false"
                                aria-controls="navCategoriesOrders"
                            >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-bag"></i></span>
                                    <span className="nav-link-text">Orders</span>
                                </div>
                            </a>
                            <div id="navCategoriesOrders" className="collapse" data-bs-parent="#sideNavbar">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link" href="order-list.html">List</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="order-single.html">Single</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="vendor-grid.html">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-shop"></i></span>
                                    <span className="nav-link-text">Sellers / Vendors</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#"
                                data-bs-toggle="collapse"
                                data-bs-target="#navCustomer"
                                aria-expanded="false"
                                aria-controls="navCustomer"
                            >
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-people"></i></span>
                                    <span className="nav-link-text">Customers</span>
                                    <span className="badge bg-light-success text-dark-success ms-2">New</span>
                                </div>
                            </a>
                            <div id="navCustomer" className="collapse show" data-bs-parent="#sideNavbar">
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link" href="customers.html">Customers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="create-customers.html">Create Customers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="customers-edits.html">Edit Customers</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="reviews.html">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-star"></i></span>
                                    <span className="nav-link-text">Reviews</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
