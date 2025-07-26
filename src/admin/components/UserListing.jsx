import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserThunk } from "../slices/adminUserSlice";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

export const UserListing = ()=>{
	const dispatch = useDispatch();
	const {userList, loading, error} = useSelector((state)=> state.adminUser);
	useEffect(()=>{
		dispatch(fetchUserThunk());
	}, [dispatch]);

	useEffect(() => {
		if (error) {
			toast.error(error);
		}
	}, [error]);
	
	if(loading){
		return (
			<main className="main-content-wrapper">
				<div className="d-flex justify-content-center align-items-center vh-100 bg-gradient-green">
					<ClipLoader color="#10B981" size={40} />
				</div>
			</main>
		);
	} 

	// console.log(userList);
    return (
        <main className="main-content-wrapper">
				<div className="container">
					<div className="row mb-8">
						<div className="col-md-12">
							<div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
								<div>
									<h2>Users</h2>
								</div>
								<div>
									<a href="create-customers.html" className="btn btn-primary">Add New Customer</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xl-12 col-12 mb-5">
							<div className="card h-100 card-lg">
								<div className="p-6">
									<div className="row justify-content-between">
										<div className="col-md-4 col-12">
											<form className="d-flex" role="search">
												<label htmlFor="searchCustomers" className="visually-hidden">Search Users</label>
												<input className="form-control" type="search" id="searchCustomers" placeholder="Search Users" aria-label="Search" />
											</form>
										</div>
									</div>
								</div>
								<div className="card-body p-0">
									<div className="table-responsive">
										<table className="table table-centered table-hover table-borderless mb-0 table-with-checkbox text-nowrap">
											<thead className="bg-light">
												<tr>
													<th>
														<div className="form-check">
															<input className="form-check-input" type="checkbox" value="" id="checkAll" />
															<label className="form-check-label" htmlFor="checkAll"></label>
														</div>
													</th>
													<th>Name</th>
													<th>Email</th>
													<th>Created On</th>
													<th>Phone</th>
													<th>Role</th>
													<th></th>
												</tr>
											</thead>
											<tbody>
												{userList.map((user)=>{
													return (
													<tr key={user._id}>
														<td>
															<div className="form-check">
																<input className="form-check-input" type="checkbox" value="" id="customerOne" />
																<label className="form-check-label" htmlFor="customerOne"></label>
															</div>
														</td>

														<td>
															<div className="d-flex align-items-center">
																<img src="../assets/images/avatar/avatar-1.jpg" alt="" className="avatar avatar-xs rounded-circle" />
																<div className="ms-2">
																	<a href="#!" className="text-inherit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">{user.firstname} {user.lastname}</a>
																</div>
															</div>
														</td>
														<td>{user.email}</td>

														<td>{new Date(user.createdAt).toDateString()}</td>
														<td>-</td>
														<td>{user.role}</td>

														<td>
															<div className="dropdown">
																<a href="#" className="text-reset" data-bs-toggle="dropdown" aria-expanded="false">
																	<i className="feather-icon icon-more-vertical fs-5"></i>
																</a>
																<ul className="dropdown-menu">
																	<li>
																		<a className="dropdown-item" href="#">
																			<i className="bi bi-trash me-3"></i>
																			Delete
																		</a>
																	</li>
																	<li>
																		<a className="dropdown-item" href="customers-edits.html">
																			<i className="bi bi-pencil-square me-3"></i>
																			Edit
																		</a>
																	</li>
																</ul>
															</div>
														</td>
													</tr>
													)
												})}
												
											</tbody>
										</table>
									</div>

									<div className="border-top d-md-flex justify-content-between align-items-center p-6">
										<span>Showing 1 to 8 of 12 entries</span>
										<nav className="mt-2 mt-md-0">
											<ul className="pagination mb-0">
												<li className="page-item disabled"><a className="page-link" href="#!">Previous</a></li>
												<li className="page-item"><a className="page-link active" href="#!">1</a></li>
												<li className="page-item"><a className="page-link" href="#!">2</a></li>
												<li className="page-item"><a className="page-link" href="#!">3</a></li>
												<li className="page-item"><a className="page-link" href="#!">Next</a></li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
    );
}