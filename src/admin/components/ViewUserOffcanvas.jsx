export const ViewUserOffcanvas = ()=>{
    return(
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
				<div className="offcanvas-header border-bottom">
					<h5 className="offcanvas-title" id="offcanvasRightLabel">Customer Details</h5>
					<button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				</div>
				<div className="offcanvas-body d-flex flex-column gap-4">
					<div className="d-flex flex-row align-items-center gap-4 w-100">
						<div className="flex-shrink-0">
							<img src="../assets/images/avatar/avatar-1.jpg" alt="avatar" className="avatar avatar-xl rounded-circle" />
						</div>

						<div className="d-flex flex-column gap-1 flex-grow-1">
							<h3 className="mb-0 h5 d-flex flex-row gap-3">
								Anita Parmar
								<span className="badge bg-light-success text-dark-success">Verified</span>
							</h3>

							<div className="d-md-flex align-items-center justify-content-between">
								<div className="">#CU001</div>
								<div className="text-black-50">
									Last Active:
									<span className="text-dark">31 May, 2025 3:24PM</span>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex flex-md-row flex-column gap-md-6 gap-2">
						<div className="d-flex flex-row gap-2">
							<span className="text-dark fw-semibold">Email</span>
							<span className="text-black-50">anitaparmar@example.com</span>
						</div>
						<div className="d-flex flex-row gap-2">
							<span className="text-dark fw-semibold">Phone Number</span>
							<span className="text-black-50">123-456-7890</span>
						</div>
					</div>
					<div className="card rounded">
						<div className="card-body">
							<div className="row">
								<div className="border-end col-4">
									<div className="d-flex flex-column gap-1">
										<span className="text-black-50">Join Date</span>
										<span className="text-dark">31 May, 2024</span>
									</div>
								</div>
								<div className="border-end col-4">
									<div className="d-flex flex-column gap-1">
										<span className="text-black-50">Total Spent</span>
										<span className="text-dark">$105</span>
									</div>
								</div>
								<div className="col-4">
									<div className="d-flex flex-column gap-1">
										<span className="text-black-50">Total Order</span>
										<span className="text-dark">3</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="border-bottom p-4">
							<h3 className="mb-0 h6">Details</h3>
						</div>
						<div className="card-body p-4 d-flex flex-column gap-5">
							<div className="d-flex flex-column gap-2 lh-1">
								<div className="h6 mb-0">Email</div>
								<span className="text-black-50">anitaparmar@example.com</span>
							</div>
							<div className="d-flex flex-column gap-2 lh-1">
								<div className="h6 mb-0">Phone Number</div>
								<span className="text-black-50">123-456-7890</span>
							</div>

							<div className="d-flex flex-column gap-2">
								<div className="h6 mb-0">Address</div>
								<div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
										<label className="form-check-label" htmlFor="flexRadioDefault1">123 Apple St., Springfield, IL, 62701, USA</label>
									</div>
									<div className="form-check">
										<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
										<label className="form-check-label" htmlFor="flexRadioDefault2">456 Banana St., Metropolis, NY, 10001, USA</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="bg-light rounded-top px-4 py-3">
							<a
								href="#"
								className="d-flex align-items-center justify-content-between text-inherit"
								data-bs-toggle="collapse"
								data-bs-target="#collapseOne"
								aria-expanded="true"
								aria-controls="collapseOne"
							>
								<div className="d-flex flex-row align-items-center gap-2">
									<h3 className="mb-0 h5">Orders</h3>
									<span className="text-black-50 lh-1">#001</span>
								</div>
								<div className="d-flex flex-row gap-6 align-items-center">
									<div>
										<span className="text-inherit">
											Date:
											<span className="text-dark">31 May, 2025</span>
										</span>
									</div>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down chevron-down" viewBox="0 0 16 16">
										<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
									</svg>
								</div>
							</a>
						</div>
						<div className="card-body py-0 px-4">
							<div className="accordion d-flex flex-column" id="accordionExample1">
								<div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
									<ul className="list-group list-group-flush mb-0">
										<li className="list-group-item px-0 py-1">
											<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
												<div className="d-flex flex-row justify-content-between gap-3 align-items-center">
													<img src="../assets/images/products/product-img-18.jpg" className="icon-shape icon-xxl" alt="product img" />

													<span className="h6 mb-0">Organic Banana</span>
												</div>
												<span className="text-black-50">$35.00</span>
											</a>
										</li>
										<li className="list-group-item px-0 py-1">
											<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
												<div className="d-flex flex-row justify-content-between gap-3 align-items-center">
													<img src="../assets/images/products/product-img-15.jpg" className="icon-shape icon-xxl" alt="product img" />

													<span className="h6 mb-0">Fresh Apple</span>
												</div>
												<span className="text-black-50">$70.00</span>
											</a>
										</li>
										<li className="list-group-item px-0 py-1">
											<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
												<div className="d-flex flex-row justify-content-between gap-3 align-items-center">
													<img src="../assets/images/products/product-img-19.jpg" className="icon-shape icon-xxl" alt="product img" />

													<span className="h6 mb-0">BeetRoot</span>
												</div>
												<span className="text-black-50">$29.00</span>
											</a>
										</li>
										<li className="list-group-item px-0 py-3">
											<div className="d-flex flex-row justify-content-between">
												<span className="text-dark fw-semibold">Total Order Amount</span>
												<span className="text-dark fw-semibold">$134.00</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="card">
						<div className="bg-light rounded-top px-4 py-3">
							<a
								href="#"
								className="d-flex align-items-center justify-content-between text-inherit"
								data-bs-toggle="collapse"
								data-bs-target="#collapseTwo"
								aria-expanded="false"
								aria-controls="collapseTwo"
							>
								<div className="d-flex flex-row align-items-center gap-2">
									<h3 className="mb-0 h5">Orders</h3>
									<span className="text-black-50 lh-1">#002</span>
								</div>
								<div className="d-flex flex-row gap-6 align-items-center">
									<div>
										<span className="text-inherit">
											Date:
											<span className="text-dark">12 May, 2025</span>
										</span>
									</div>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down chevron-down" viewBox="0 0 16 16">
										<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
									</svg>
								</div>
							</a>
						</div>
						<div className="card-body py-0 px-4">
							<div className="accordion d-flex flex-column" id="accordionExample2">
								<div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
									<ul className="list-group list-group-flush mb-0">
										<li className="list-group-item px-0 py-1">
											<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
												<div className="d-flex flex-row justify-content-between gap-3 align-items-center">
													<img src="../assets/images/products/product-img-18.jpg" className="icon-shape icon-xxl" alt="product img" />

													<span className="h6 mb-0">Organic Banana</span>
												</div>
												<span className="text-black-50">$35.00</span>
											</a>
										</li>
										<li className="list-group-item px-0 py-1">
											<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
												<div className="d-flex flex-row justify-content-between gap-3 align-items-center">
													<img src="../assets/images/products/product-img-15.jpg" className="icon-shape icon-xxl" alt="product img" />

													<span className="h6 mb-0">Fresh Apple</span>
												</div>
												<span className="text-black-50">$70.00</span>
											</a>
										</li>
										<li className="list-group-item px-0 py-1">
											<a href="#!" className="text-inherit d-flex flex-row align-items-center justify-content-between">
												<div className="d-flex flex-row justify-content-between gap-3 align-items-center">
													<img src="../assets/images/products/product-img-19.jpg" className="icon-shape icon-xxl" alt="product img" />

													<span className="h6 mb-0">BeetRoot</span>
												</div>
												<span className="text-black-50">$29.00</span>
											</a>
										</li>
										<li className="list-group-item px-0 py-3">
											<div className="d-flex flex-row justify-content-between">
												<span className="text-dark fw-semibold">Total Order Amount</span>
												<span className="text-dark fw-semibold">$134.00</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
}