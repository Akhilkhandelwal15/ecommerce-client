export const PromotionSection = () => {
    return (
        <section className="mt-8">
            <div className="container">
                {/* row */}
                <div className="table-responsive-xl pb-6 pb-xl-0">
                    <div className="row flex-nowrap">
                        <div className="col-12 col-xl-4 col-lg-6">
                        <div className="p-8 mb-3 rounded" style={{
                            background: "url('../assets/images/banner/ad-banner-1.jpg') no-repeat",
                            backgroundSize: "cover"
                            }}
                        >
                            <div>
                                <h3 className="mb-0 fw-bold">
                                    10% cashback on
                                    <br />
                                    personal care
                                </h3>
                                <div className="mt-4 mb-5 fs-5">
                                    <p className="mb-0">Max cashback: $12</p>
                                    <span>
                                    Code:
                                    <span className="fw-bold text-dark"> CARE12</span>
                                    </span>
                                </div>
                                <a href="#" className="btn btn-dark">Shop Now</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-xl-4 col-lg-6">
                        <div className="p-8 mb-3 rounded" style={{
                            background: "url('../assets/images/banner/ad-banner-2.jpg') no-repeat",
                            backgroundSize: "cover"
                            }}
                        >
                            {/* Banner Content */}
                            <div>
                                {/* Banner Content */}
                                <h3 className="fw-bold mb-3">
                                    Say yes to
                                    <br />
                                    season’s fresh
                                </h3>
                                <div className="mt-4 mb-5 fs-5">
                                    <p className="fs-5 mb-0">
                                    Refresh your day
                                    <br />
                                    the fruity way
                                    </p>
                                </div>

                                <a href="#" className="btn btn-dark">Shop Now</a>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-xl-4 col-lg-6">
                        <div className="p-8 mb-3 rounded" style={{
                            background: "url('../assets/images/banner/ad-banner-3.jpg') no-repeat",
                            backgroundSize: "cover"
                            }}
                        >
                            <div>
                                {/* Banner Content */}
                                <h3 className="fw-bold mb-3">
                                    When in doubt,
                                    <br />
                                    eat ice cream
                                </h3>
                                <div className="mt-4 mb-5 fs-5">
                                    <p className="fs-5 mb-0">
                                    Enjoy a scoop of
                                    <br />
                                    summer today
                                    </p>
                                </div>

                                <a href="#" className="btn btn-dark">Shop Now</a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}