export const Checkout = () => {
   return (
      <main>
         {/* section */}
         <div className="mt-4">
            <div className="container">
               {/* row */}
               <div className="row">
                  {/* col */}
                  <div className="col-12">
                     {/* breadcrumb */}
                     <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                           <li className="breadcrumb-item"><a href="#!">Home</a></li>
                           <li className="breadcrumb-item"><a href="#!">Shop</a></li>
                           <li className="breadcrumb-item active" aria-current="page">Shop Checkout</li>
                        </ol>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
         {/* section */}
         <section className="mb-lg-14 mb-8 mt-8">
            <div className="container">
               {/* row */}
               <div className="row">
                  {/* col */}
                  <div className="col-12">
                     <div>
                        <div className="mb-8">
                           {/* text */}
                           <h1 className="fw-bold mb-0">Checkout</h1>
                           <p className="mb-0">
                              Already have an account? Click here to
                              <a href="#!">Sign in</a>
                              .
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div>
                  {/* row */}
                  <div className="row">
                     <div className="col-xl-7 col-lg-6 col-md-12">
                        {/* accordion */}
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                           {/* accordion item */}
                           <div className="accordion-item py-4">
                              <div className="d-flex justify-content-between align-items-center">
                                 {/* heading one */}
                                 <a
                                    href="#"
                                    className="fs-5 text-inherit collapsed h4"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne"
                                    aria-expanded="true"
                                    aria-controls="flush-collapseOne">
                                    <i className="feather-icon icon-map-pin me-2 text-muted"></i>
                                    Add delivery address
                                 </a>
                                 {/* btn */}
                                 <a href="#" className="btn btn-outline-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addAddressModal">Add a new address</a>
                                 {/* collapse */}
                              </div>
                              <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                 <div className="mt-5">
                                    <div className="row">
                                       <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-4">
                                          {/* form */}
                                          <div className="card card-body p-6">
                                             <div className="form-check mb-4">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="homeRadio" checked />
                                                <label className="form-check-label text-dark" htmlFor="homeRadio">Home</label>
                                             </div>
                                             {/* address */}
                                             <address>
                                                <strong>Jitu Chauhan</strong>
                                                <br />
                                                4450 North Avenue Oakland,
                                                <br />
                                                Nebraska, United States,
                                                <br />
                                                <abbr title="Phone">P: 402-776-1106</abbr>
                                             </address>
                                             <span className="text-danger">Default address</span>
                                          </div>
                                       </div>
                                       <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-4">
                                          {/* input */}
                                          <div className="card card-body p-6">
                                             <div className="form-check mb-4">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="officeRadio" />
                                                <label className="form-check-label text-dark" htmlFor="officeRadio">Office</label>
                                             </div>
                                             <address>
                                                <strong>Nitu Chauhan</strong>
                                                <br />
                                                3853 Coal Road,
                                                <br />
                                                Tannersville, Pennsylvania, 18372, USA,
                                                <br />
                                                <abbr title="Phone">P: 402-776-1106</abbr>
                                             </address>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* accordion item */}
                           <div className="accordion-item py-4">
                              <a href="#" className="text-inherit collapsed h5" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                 <i className="feather-icon icon-clock me-2 text-muted"></i>
                                 Delivery time
                              </a>
                              {/* collapse */}
                              <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                 {/* nav */}
                                 <ul className="nav nav-pills nav-pills-light mb-3 nav-fill mt-5" id="pills-tab" role="tablist">
                                    {/* nav item buttons */}
                                    {/* ... */}
                                 </ul>
                                 {/* tab content */}
                                 <div className="tab-content" id="pills-tabContent">
                                    {/* tab pane */}
                                    {/* ... */}
                                 </div>
                                 <div className="mt-5 d-flex justify-content-end">
                                    <a
                                       href="#"
                                       className="btn btn-outline-gray-400 text-muted"
                                       data-bs-toggle="collapse"
                                       data-bs-target="#flush-collapseOne"
                                       aria-expanded="false"
                                       aria-controls="flush-collapseOne">
                                       Prev
                                    </a>
                                    <a href="#" className="btn btn-primary ms-2" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                       Next
                                    </a>
                                 </div>
                              </div>
                           </div>
                           {/* accordion item */}
                           <div className="accordion-item py-4">
                              <a href="#" className="text-inherit h5" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                 <i className="feather-icon icon-shopping-bag me-2 text-muted"></i>
                                 Delivery instructions
                                 {/* collapse */}
                              </a>
                              <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                 <div className="mt-5">
                                    <label htmlFor="DeliveryInstructions" className="form-label sr-only">Delivery instructions</label>
                                    <textarea className="form-control" id="DeliveryInstructions" rows="3" placeholder="Write delivery instructions "></textarea>
                                    <p className="form-text">Add instructions for how you want your order shopped and/or delivered</p>
                                    <div className="mt-5 d-flex justify-content-end">
                                       <a
                                          href="#"
                                          className="btn btn-outline-gray-400 text-muted"
                                          data-bs-toggle="collapse"
                                          data-bs-target="#flush-collapseTwo"
                                          aria-expanded="false"
                                          aria-controls="flush-collapseTwo">
                                          Prev
                                       </a>
                                       <a href="#" className="btn btn-primary ms-2" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                          Next
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* accordion item */}
                           <div className="accordion-item py-4">
                              <a href="#" className="text-inherit h5" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                 <i className="feather-icon icon-credit-card me-2 text-muted"></i>
                                 Payment Method
                                 {/* collapse */}
                              </a>
                              <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                 <div className="mt-5">
                                    <div>
                                       <div className="card card-bordered shadow-none mb-2">
                                          {/* card body */}
                                          <div className="card-body p-6">
                                             <div className="d-flex">
                                                <div className="form-check">
                                                   {/* checkbox */}
                                                   <input className="form-check-input" type="radio" name="flexRadioDefault" id="paypal" />
                                                   <label className="form-check-label ms-2" htmlFor="paypal"></label>
                                                </div>
                                                <div>
                                                   {/* title */}
                                                   <h5 className="mb-1 h6">Payment with Paypal</h5>
                                                   <p className="mb-0 small">You will be redirected to PayPal website to complete your purchase securely.</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       {/* card */}
                                       <div className="card card-bordered shadow-none mb-2">
                                          {/* card body */}
                                          <div className="card-body p-6">
                                             <div className="d-flex mb-4">
                                                <div className="form-check">
                                                   {/* input */}
                                                   <input className="form-check-input" type="radio" name="flexRadioDefault" id="creditdebitcard" />
                                                   <label className="form-check-label ms-2" htmlFor="creditdebitcard"></label>
                                                </div>
                                                <div>
                                                   <h5 className="mb-1 h6">Credit / Debit Card</h5>
                                                   <p className="mb-0 small">Safe money transfer using your bank accou k account. We support Mastercard tercard, Visa, Discover and Stripe.</p>
                                                </div>
                                             </div>
                                             <div className="row g-2">
                                                <div className="col-12">
                                                   {/* input */}
                                                   <div className="mb-3">
                                                      <label htmlFor="card-mask" className="form-label">Card Number</label>
                                                      <input type="text" className="form-control" id="card-mask" placeholder="xxxx-xxxx-xxxx-xxxx" required />
                                                   </div>
                                                </div>
                                                <div className="col-md-6 col-12">
                                                   {/* input */}
                                                   <div className="mb-3 mb-lg-0">
                                                      <label className="form-label" htmlFor="nameoncard">Name on card</label>
                                                      <input type="text" className="form-control" placeholder="Enter name" id="nameoncard" />
                                                   </div>
                                                </div>
                                                <div className="col-md-3 col-12">
                                                   {/* input */}
                                                   <div className="mb-3 mb-lg-0 position-relative">
                                                      <label className="form-label" htmlFor="expirydate">Expiry date</label>
                                                      <input type="text" className="form-control" id="expirydate" placeholder="MM/YY" />
                                                   </div>
                                                </div>
                                                <div className="col-md-3 col-12">
                                                   {/* input */}
                                                   <div className="mb-3 mb-lg-0">
                                                      <label htmlFor="digit-mask" className="form-label">
                                                         CVV Code
                                                         <i
                                                            className="fe fe-help-circle ms-1"
                                                            data-bs-toggle="tooltip"
                                                            data-placement="top"
                                                            title="A 3 - digit number, typically printed on the back of a card."></i>
                                                      </label>
                                                      <input type="password" className="form-control" name="digit-mask" id="digit-mask" placeholder="xxx" maxLength="3" inputMode="numeric" required />
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       {/* card */}
                                       <div className="card card-bordered shadow-none mb-2">
                                          {/* card body */}
                                          <div className="card-body p-6">
                                             {/* check input */}
                                             <div className="d-flex">
                                                <div className="form-check">
                                                   <input className="form-check-input" type="radio" name="flexRadioDefault" id="payoneer" />
                                                   <label className="form-check-label ms-2" htmlFor="payoneer"></label>
                                                </div>
                                                <div>
                                                   {/* title */}
                                                   <h5 className="mb-1 h6">Pay with Payoneer</h5>
                                                   <p className="mb-0 small">You will be redirected to Payoneer website to complete your purchase securely.</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       {/* card */}
                                       <div className="card card-bordered shadow-none">
                                          <div className="card-body p-6">
                                             {/* check input */}
                                             <div className="d-flex">
                                                <div className="form-check">
                                                   <input className="form-check-input" type="radio" name="flexRadioDefault" id="cashonDelivery" />
                                                   <label className="form-check-label ms-2" htmlFor="cashonDelivery"></label>
                                                </div>
                                                <div>
                                                   {/* title */}
                                                   <h5 className="mb-1 h6">Cash on Delivery</h5>
                                                   <p className="mb-0 small">Pay with cash when your order is delivered.</p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       {/* Button */}
                                       <div className="mt-5 d-flex justify-content-end">
                                          <a
                                             href="#"
                                             className="btn btn-outline-gray-400 text-muted"
                                             data-bs-toggle="collapse"
                                             data-bs-target="#flush-collapseThree"
                                             aria-expanded="false"
                                             aria-controls="flush-collapseThree">
                                             Prev
                                          </a>
                                          <a href="#" className="btn btn-primary ms-2">Place Order</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-md-12 offset-xl-1 col-xl-4 col-lg-6">
                        <div className="mt-4 mt-lg-0">
                           <div className="card shadow-sm">
                              <h5 className="px-6 py-4 bg-transparent mb-0">Order Details</h5>
                              <ul className="list-group list-group-flush">
                                 {/* list group item */}
                                 <li className="list-group-item px-4 py-3">
                                    <div className="row align-items-center">
                                       <div className="col-2 col-md-2">
                                          <img src="../assets/images/products/product-img-1.jpg" alt="Ecommerce" className="img-fluid" />
                                       </div>
                                       <div className="col-5 col-md-5">
                                          <h6 className="mb-0">Haldiram's Sev Bhujia</h6>
                                          <span><small className="text-muted">.98 / lb</small></span>
                                       </div>
                                       <div className="col-2 col-md-2 text-center text-muted">
                                          <span>1</span>
                                       </div>
                                       <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                          <span className="fw-bold">$5.00</span>
                                       </div>
                                    </div>
                                 </li>
                                 {/* list group item */}
                                 <li className="list-group-item px-4 py-3">
                                    <div className="row align-items-center">
                                       <div className="col-2 col-md-2">
                                          <img src="../assets/images/products/product-img-2.jpg" alt="Ecommerce" className="img-fluid" />
                                       </div>
                                       <div className="col-5 col-md-5">
                                          <h6 className="mb-0">NutriChoice Digestive</h6>
                                          <span><small className="text-muted">250g</small></span>
                                       </div>
                                       <div className="col-2 col-md-2 text-center text-muted">
                                          <span>1</span>
                                       </div>
                                       <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                          <span className="fw-bold">$20.00</span>
                                          <div className="text-decoration-line-through text-muted small">$26.00</div>
                                       </div>
                                    </div>
                                 </li>
                                 {/* list group item */}
                                 <li className="list-group-item px-4 py-3">
                                    <div className="row align-items-center">
                                       <div className="col-2 col-md-2">
                                          <img src="../assets/images/products/product-img-3.jpg" alt="Ecommerce" className="img-fluid" />
                                       </div>
                                       <div className="col-5 col-md-5">
                                          <h6 className="mb-0">Cadbury 5 Star Chocolate</h6>
                                          <span><small className="text-muted">1 kg</small></span>
                                       </div>
                                       <div className="col-2 col-md-2 text-center text-muted">
                                          <span>1</span>
                                       </div>
                                       <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                          <span className="fw-bold">$15.00</span>
                                          <div className="text-decoration-line-through text-muted small">$20.00</div>
                                       </div>
                                    </div>
                                 </li>
                                 {/* list group item */}
                                 <li className="list-group-item px-4 py-3">
                                    <div className="row align-items-center">
                                       <div className="col-2 col-md-2">
                                          <img src="../assets/images/products/product-img-4.jpg" alt="Ecommerce" className="img-fluid" />
                                       </div>
                                       <div className="col-5 col-md-5">
                                          <h6 className="mb-0">Onion Flavour Potato</h6>
                                          <span><small className="text-muted">250g</small></span>
                                       </div>
                                       <div className="col-2 col-md-2 text-center text-muted">
                                          <span>1</span>
                                       </div>
                                       <div className="col-3 text-lg-end text-start text-md-end col-md-3">
                                          <span className="fw-bold">$15.00</span>
                                          <div className="text-decoration-line-through text-muted small">$20.00</div>
                                       </div>
                                    </div>
                                 </li>
                                 {/* list group item */}
                                 <li className="list-group-item px-4 py-3">
                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                       <div>Item Subtotal</div>
                                       <div className="fw-bold">$70.00</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                       <div>
                                          Service Fee
                                          <i className="feather-icon icon-info text-muted" data-bs-toggle="tooltip" title="Default tooltip"></i>
                                       </div>
                                       <div className="fw-bold">$3.00</div>
                                    </div>
                                 </li>
                                 {/* list group item */}
                                 <li className="list-group-item px-4 py-3">
                                    <div className="d-flex align-items-center justify-content-between fw-bold">
                                       <div>Subtotal</div>
                                       <div>$73.00</div>
                                    </div>
                                 </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
}
