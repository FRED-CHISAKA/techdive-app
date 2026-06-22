export default function Team() {
  return (
    <div className="container-fluid py-5 team-section wow fadeInUp" id="#team" data-wow-delay="0.1s">
        <div className="container py-5">

            {/* <!-- Section Title --> */}
            <div className="section-title text-center pb-3 mb-5 mx-auto">
                <h5 className="fw-bold text-primary text-uppercase">Our Team</h5>
                <h1 className="mb-0">TechDive Experts Ready to Transform Your Business</h1>
                <div className="animated-line mx-auto mt-2"></div>
            </div>

            <div className="row g-5">

                {/* <!-- Team Member 1 --> */}
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item rounded overflow-hidden position-relative">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/team-1.jpg" alt="James Mwangi" />
                            <div className="team-social d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-3">
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4 team-info">
                            <h4 className="text-primary">Chisaka Fred</h4>
                            <p className="text-uppercase m-0">Chief Technology Officer</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Team Member 2 --> */}
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="team-item rounded overflow-hidden position-relative">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/team-2.jpg" alt="Sarah Wanjiru" />
                            <div className="team-social d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-3">
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4 team-info">
                            <h4 className="text-primary">Bree Lashley</h4>
                            <p className="text-uppercase m-0">Lead Software Engineer</p>
                        </div>
                    </div>
                </div>

                {/* <!-- Team Member 3 --> */}
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="team-item rounded overflow-hidden position-relative">
                        <div className="team-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/team-3.png" alt="David Ochieng" />
                            <div className="team-social d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x mb-3">
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-instagram"></i></a>
                                <a className="btn btn-sm btn-primary btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="text-center py-4 team-info">
                            <h4 className="text-primary">Bradley Olena</h4>
                            <p className="text-uppercase m-0">IoT Solutions Architect</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}