export const AdminResponsiveSidebar = () => {
    return (
        <nav className="navbar-vertical-nav offcanvas offcanvas-start navbar-offcanvac" tabIndex="-1" id="offcanvasExample">
            <div className="navbar-vertical">
                <div className="px-4 py-5 d-flex justify-content-between align-items-center">
                    <a href="../index.html" className="navbar-brand">
                        <img src="../assets/images/logo/freshcart-logo.svg" alt="" />
                    </a>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="navbar-vertical-content flex-grow-1" data-simplebar="">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link" href="index.html">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-house"></i></span>
                                    <span>Dashboard</span>
                                </div>
                            </a>
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
                            <a className="nav-link" href="categories.html">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-list-task"></i></span>
                                    <span className="nav-link-text">Categories</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#navOrders" aria-expanded="false" aria-controls="navOrders">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-bag"></i></span>
                                    <span className="nav-link-text">Orders</span>
                                </div>
                            </a>
                            <div id="navOrders" className="collapse" data-bs-parent="#sideNavbar">
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
                            <a className="nav-link" href="customers.html">
                                <div className="d-flex align-items-center">
                                    <span className="nav-link-icon"><i className="bi bi-people"></i></span>
                                    <span className="nav-link-text">Customers</span>
                                </div>
                            </a>
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
