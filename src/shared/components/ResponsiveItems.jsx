export const ResponsiveItems = ()=>{
    return (
      <div className="bg-white position-fixed bottom-0 w-100 z-1 shadow-lg d-block d-lg-none text-center">
         <div className="d-flex align-items-center">
            <div className="w-25 icon-hover py-4">
               <button
                  className="navbar-toggler collapsed d-lg-none"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#navbar-default"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-text-indent-left text-primary" viewBox="0 0 16 16">
                     <path
                        d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                  </svg>
               </button>
            </div>

            <div className="dropdown w-25 ms-2 py-4 icon-hover">
               <a href="#" className="text-inherit" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="text-center">
                     <div className="position-relative d-inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                           <path
                              d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg>
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                           1
                           <span className="visually-hidden">unread messages</span>
                        </span>
                     </div>
                  </div>
               </a>

               <div className="dropdown-menu dropdown-menu-lg p-0">
                  <div>
                     <h6 className="px-4 border-bottom py-3 mb-0">Notification</h6>
                     <p className="mb-0 px-4 py-3">
                        <a href="signin.html">Sign in</a>
                        or
                        <a href="signup.html">Register</a>
                        in or so you don t have to enter your details every time
                     </p>
                  </div>
               </div>
            </div>

            <div className="w-25 ms-2 py-4 icon-hover">
               <a href="javascript:void(0)" className="text-inherit" data-bs-toggle="modal" data-bs-target="#userModal">
                  <div className="text-center">
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                           <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                           <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                     </div>
                  </div>
               </a>
            </div>
            <div className="w-25 ms-2 py-4 icon-hover">
               <a href="account-orders.html" className="text-inherit">
                  <div className="text-center">
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-archive" viewBox="0 0 16 16">
                           <path
                              d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                     </div>
                  </div>
               </a>
            </div>
            <div className="w-25 ms-2 py-4 icon-hover">
               <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" href="#offcanvasExample" role="button" aria-controls="offcanvasRight" className="text-inherit">
                  <div className="text-center">
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                           <path
                              d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                     </div>
                  </div>
               </a>
            </div>
            <div className="w-25 ms-2 py-4 icon-hover">
               <a className="text-inherit" data-bs-toggle="offcanvas" href="#offcanvasCategory" role="button" aria-controls="offcanvasCategory">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                     <path
                        d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                  </svg>
               </a>
            </div>
         </div>
      </div>  
    );
}