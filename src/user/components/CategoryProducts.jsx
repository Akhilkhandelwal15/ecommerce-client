export const CategoryProducts = () => {
    return (
         <section>
            <div className="container">
               {/* row */}
               <div className="row">
                  <div className="col-12 mb-6">
                     {/* heading */}
                     <h3 className="mb-1">Fruits & vegetables</h3>
                     <p className="mb-0">eat fresh, stay healthy</p>
                  </div>
               </div>
               {/* slider */}
               <div className="product-slider">
                  {/* item */}
                  <div className="item">
                     {/* item */}
                     <div className="card card-product">
                        <div className="card-body">
                           {/* badge */}
                           <div className="text-center position-relative">
                              <div className="position-absolute top-0 start-0">
                                 <span className="badge bg-danger">Sale</span>
                              </div>
                              {/* img */}
                              <a href="#!"><img src="../assets/images/products/product-img-15.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              {/* action btn */}
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           {/* title */}
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                           </div>
                           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Apple</a></h2>
                           <div>
                              {/* rating */}
                              <small className="text-warning">
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5(149)</span>
                           </div>
                           {/* price */}
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$18</span>
                                 <span className="text-decoration-line-through text-muted">$24</span>
                              </div>
                              {/* btn */}
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* item */}
                  <div className="item">
                     {/* item */}
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              {/* badge */}
                              <div className="position-absolute top-0 start-0">
                                 <span className="badge bg-success">14%</span>
                              </div>
                              {/* img */}
                              <a href="#!"><img src="../assets/images/products/product-img-16.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              {/* action btn */}
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           {/* title */}
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                           </div>
                           {/* title */}
                           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Golden Pineapple</a></h2>
                           {/* rating */}
                           <div className="text-warning">
                              {/* rating */}
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5 (25)</span>
                           </div>
                           {/* price */}
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div><span className="text-dark">$24</span></div>
                              {/* btn */}
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* item */}
                  <div className="item">
                     {/* item */}
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              {/* img */}
                              <a href="#!"><img src="../assets/images/products/product-img-17.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              {/* action btn */}
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           {/* title */}
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                           </div>
                           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Kiwi</a></h2>
                           {/* rating */}
                           <div className="text-warning">
                              {/* rating */}
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                              </small>
                              <span className="text-muted small">5 (469)</span>
                           </div>
                           {/* rating */}
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$32</span>
                                 <span className="text-decoration-line-through text-muted">$35</span>
                              </div>
                              {/* btn */}
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* item */}
                  <div className="item">
                     {/* item */}
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              {/* badge */}
                              <div className="position-absolute top-0 start-0">
                                 <span className="badge bg-danger">Hot</span>
                              </div>
                              {/* img */}
                              <a href="#!"><img src="../assets/images/products/product-img-18.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              {/* action btn */}
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           {/* action btn */}
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                           </div>
                           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Banana</a></h2>
                           {/* rating */}
                           <div className="text-warning">
                              {/* rating */}
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                                 <i className="bi bi-star"></i>
                              </small>
                              <span className="text-muted small">3.5 (456)</span>
                           </div>
                           {/* price */}
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$3</span>
                                 <span className="text-decoration-line-through text-muted">$5</span>
                              </div>
                              {/* btn */}
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* item */}
                  <div className="item">
                     {/* item */}
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              {/* img */}
                              <a href="#!"><img src="../assets/images/products/product-img-19.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              {/* action btn */}
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           {/* title */}
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                           </div>
                           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Beatroot</a></h2>
                           {/* rating */}
                           <div className="text-warning">
                              {/* rating */}
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5 (39)</span>
                           </div>
                           {/* price */}
                           <div className="d-flex justify-content-between mt-4">
                              <div>
                                 <span className="text-dark">$13</span>
                                 <span className="text-decoration-line-through text-muted">$18</span>
                              </div>
                              {/*  btn */}
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* item */}
                  <div className="item">
                     {/* item */}
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              {/* badge */}
                              <div className="position-absolute top-0 start-0">
                                 <span className="badge bg-danger">Sale</span>
                              </div>
                              {/* img */}
                              <a href="#!"><img src="../assets/images/products/product-img-15.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              {/* action btn */}
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           {/* title */}
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                           </div>
                           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Apple</a></h2>
                           <div>
                              {/* rating */}
                              <small className="text-warning">
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5(149)</span>
                           </div>
                           {/* price */}
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$18</span>
                                 <span className="text-decoration-line-through text-muted">$24</span>
                              </div>
                              {/* btn */}
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* item */}
                  <div className="item">
                     {/* item */}
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              {/* badge */}
                              <div className="position-absolute top-0 start-0">
                                 <span className="badge bg-success">14%</span>
                              </div>
                              {/* img */}
                              <a href="#!"><img src="../assets/images/products/product-img-16.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              {/* action btn */}
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           {/* title */}
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                           </div>
                           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Golden Pineapple</a></h2>
                           <div className="text-warning">
                              {/* rating */}
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5 (25)</span>
                           </div>
                           {/* price */}
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div><span className="text-dark">$24</span></div>
                              {/* btn */}
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* item */}
                  <div className="item">
                     {/* item */}
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              {/* img */}
                              <a href="#!"><img src="../assets/images/products/product-img-17.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              {/* action btn */}
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           {/* title */}
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                           </div>
                           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Kiwi</a></h2>
                           {/* rating*/}
                           <div className="text-warning">
                              {/* rating */}
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                              </small>
                              <span className="text-muted small">5 (469)</span>
                           </div>
                           {/* price */}
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$32</span>
                                 <span className="text-decoration-line-through text-muted">$35</span>
                              </div>
                              {/*  btn */}
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* item */}
                  <div className="item">
                     {/* item */}
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              {/* badge */}
                              <div className="position-absolute top-0 start-0">
                                 <span className="badge bg-danger">Hot</span>
                              </div>
                              {/* img */}
                              <a href="#!"><img src="../assets/images/products/product-img-18.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              {/* action btn */}
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           {/* title */}
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                           </div>
                           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Fresh Banana</a></h2>
                           <div className="text-warning">
                              {/* rating */}
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                                 <i className="bi bi-star"></i>
                              </small>
                              <span className="text-muted small">3.5 (456)</span>
                           </div>
                           {/* price */}
                           <div className="d-flex justify-content-between align-items-center mt-3">
                              <div>
                                 <span className="text-dark">$3</span>
                                 <span className="text-decoration-line-through text-muted">$5</span>
                              </div>
                              {/* btn */}
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* item */}
                  <div className="item">
                     {/* item */}
                     <div className="card card-product">
                        <div className="card-body">
                           <div className="text-center position-relative">
                              {/* img */}
                              <a href="#!"><img src="../assets/images/products/product-img-19.jpg" alt="Grocery Ecommerce Template" className="mb-3 img-fluid" /></a>
                              {/* action btn */}
                              <div className="card-product-action">
                                 <a href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                                    <i className="bi bi-eye" data-bs-toggle="tooltip" data-bs-html="true" title="Quick View"></i>
                                 </a>
                                 <a href="shop-wishlist.html" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Wishlist"><i className="bi bi-heart"></i></a>
                                 <a href="#!" className="btn-action" data-bs-toggle="tooltip" data-bs-html="true" title="Compare"><i className="bi bi-arrow-left-right"></i></a>
                              </div>
                           </div>
                           {/* title */}
                           <div className="text-small mb-1">
                              <a href="#!" className="text-decoration-none text-muted"><small>Fruits & Vegetables</small></a>
                           </div>
                           <h2 className="fs-6"><a href="#!" className="text-inherit text-decoration-none">Beatroot</a></h2>
                           {/* rating */}
                           <div className="text-warning">
                              {/* rating */}
                              <small>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-fill"></i>
                                 <i className="bi bi-star-half"></i>
                              </small>
                              <span className="text-muted small">4.5 (39)</span>
                           </div>
                           {/* price */}
                           <div className="d-flex justify-content-between mt-4">
                              <div>
                                 <span className="text-dark">$13</span>
                                 <span className="text-decoration-line-through text-muted">$18</span>
                              </div>
                              {/* btn */}
                              <div>
                                 <a href="#!" className="btn btn-primary btn-sm">
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       width="16"
                                       height="16"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                       className="feather feather-plus">
                                       <line x1="12" y1="5" x2="12" y2="19"></line>
                                       <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                    Add
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
    );
}