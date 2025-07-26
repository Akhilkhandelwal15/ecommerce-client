import { useDispatch, useSelector } from "react-redux";
import { logoutUser, resetAuthState } from "../../auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Header = () => {
   const {isAuthenticated} = useSelector((state)=>state.auth);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const handleLogout = async()=>{
      try{
         const res = await dispatch(logoutUser()).unwrap();
         dispatch(resetAuthState());
         if(res.success){
            toast.success(res.message || "User Logged out succesfully!")
         }
      }
      catch(error){
         if(error){
            toast.error(error || "An error occurred during logout. Please try again.")
         }
      }
   }

   const navigateToSignin = ()=>{
    navigate("/login");
   }
   return (
      <header>
       <div className="container">
         <div className="row align-items-center pt-6 pb-4 mt-4 mt-lg-0">
            <div className="col-xl-2 col-md-3 mb-4 mb-md-0 col-12 text-center text-md-start">
              <a href="../index.html"><img src="../assets/images/logo/freshcart-logo.svg" alt="eCommerce HTML Template" /></a>
            </div>
            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-9">
              <form action="#">
                <div className="input-group">
                  <input className="form-control" type="search" placeholder="Search for products" aria-label="Recipient's username" aria-describedby="button-addon2" />
                  <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                </div>
              </form>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-3 d-none d-lg-block">
              <div className="d-flex align-items-center justify-content-between ms-4">
                <div className="text-center">
                  <div className="dropdown">
                     <a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
                       <div className="lh-1">
                         <div className="position-relative d-inline-block mb-2">
                           <i className="bi bi-bell fs-4"></i>
                           <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              1
                              <span className="visually-hidden">unread messages</span>
                           </span>
                         </div>
                         <p className="mb-0 d-none d-xl-block small">Notification</p>
                       </div>
                     </a>

                     <div className="dropdown-menu dropdown-menu-lg p-0">
                       <div>
                         <h6 className="px-4 border-bottom py-3 mb-0">Notification</h6>
                         <p className="mb-0 px-4 py-3">
                           <a href="#">Sign in</a>
                           {" or "}
                           <a href="#">register</a>
                           {" in or so you don t have to enter your details every time"}
                         </p>
                       </div>
                     </div>
                  </div>
                </div>
                <div className="ms-6 text-center">
                  <a href="account-orders.html" className="text-reset">
                     <div className="lh-1">
                       <div className="mb-2">
                         <i className="bi bi-archive fs-4"></i>
                       </div>
                       <p className="mb-0 d-none d-xl-block small">My Orders</p>
                     </div>
                  </a>
                </div>
                <div className="text-center ms-6">
                  <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight" className="text-reset">
                     <div className="text-center">
                       <div>
                         <i className="bi bi-cart2 fs-4"></i>
                       </div>
                       <p className="mb-0 d-none d-xl-block small">Shopping Cart</p>
                     </div>
                  </a>
                </div>
                <div className="ms-6 text-center">
                  <button className="btn p-0 border-0 bg-transparent text-reset">
                     {isAuthenticated ? (
                        <div className="lh-1" onClick={handleLogout}>
                           <div className="mb-2">
                              <i className="bi bi-box-arrow-right fs-4"></i>
                           </div>
                           <p className="mb-0 d-none d-xl-block small">Log Out</p>
                        </div>
                     ): (
                        <div className="lh-1" onClick={navigateToSignin}>
                           <div className="mb-2">
                              <i className="bi bi-box-arrow-left fs-4"></i>
                           </div>
                           <p className="mb-0 d-none d-xl-block small">Sign In</p>
                        </div>
                     )}
                  </button>
                </div>
              </div>
            </div>
         </div>
       </div>
     </header>
   );
}