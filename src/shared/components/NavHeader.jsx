import { AllCategories } from "./AllCategories";
import { MegaMenu } from "./MegaMenu";

export const NavHeader = () => {
   return (
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-0 py-lg-2 navbar-default" aria-label="Offcanvas navbar large">
       <div className="container">
         <div className="offcanvas offcanvas-start" tabIndex="-1" id="navbar-default" aria-labelledby="navbar-defaultLabel">
            <div className="offcanvas-header pb-1">
              <a href="index.html"><img src="../assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" /></a>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div>
                <ul className="navbar-nav align-items-center">
                  <li className="dropdown me-6 d-none d-lg-block">
                     <a href="#" className="text-inherit" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "#fff" }}>
                       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-text-left me-2" viewBox="0 0 16 16">
                         <path
                           fillRule="evenodd"
                           d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"></path>
                       </svg>
                       All Categories
                     </a>
                     <AllCategories />
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link" href="#" role="button">Home</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link" href="#" role="button">Shop</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link" href="#" role="button">Stores</a>
                  </li>
                  <li className="nav-item dropdown dropdown-fullwidth">
                     <a className="nav-link dropdown-toggle" href="#" role="button">Mega menu</a>
                     <MegaMenu />
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link" href="#" role="button">About</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link" href="#" role="button">Contact Us</a>
                  </li>
                  <li className="nav-item dropdown">
                     <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
                     <ul className="dropdown-menu">
                       <li><a className="dropdown-item" href="signin.html">Sign in</a></li>
                       <li><a className="dropdown-item" href="signup.html">Signup</a></li>
                       <li><a className="dropdown-item" href="forgot-password.html">Forgot Password</a></li>
                       <li className="dropdown-submenu dropend">
                         <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">My Account</a>
                         <ul className="dropdown-menu">
                           <li><a className="dropdown-item" href="account-orders.html">Orders</a></li>
                           <li><a className="dropdown-item" href="account-settings.html">Settings</a></li>
                           <li><a className="dropdown-item" href="account-address.html">Address</a></li>
                           <li><a className="dropdown-item" href="account-payment-method.html">Payment Method</a></li>
                           <li><a className="dropdown-item" href="account-notification.html">Notification</a></li>
                         </ul>
                       </li>
                     </ul>
                  </li>
                </ul>
              </div>
            </div>
         </div>
       </div>
     </nav>
   );
}