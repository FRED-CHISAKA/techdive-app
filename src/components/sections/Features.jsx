export default function Features() {
  return (
    <div className="container-fluid py-5 why-choose-us wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
                <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
                <div className="animated-line mx-auto mt-2"></div>
            </div>
            <div className="row g-5">
                {/* <!-- Left Features --> */}
                <div className="col-lg-4 col-md-6">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                                <i className="fa fa-shield-alt text-white"></i>
                            </div>
                            <h4>Security-First Engineering</h4>
                            <p className="mb-0">We implement best practices in authentication, data protection, secure communication, and infrastructure hardening.</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                                <i className="fa fa-cubes text-white"></i>
                            </div>
                            <h4>Scalable Architecture</h4>
                            <p className="mb-0">Whether you are a startup or an expanding enterprise, our solutions scale seamlessly without requiring complete redesigns.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Center Image --> */}
                <div className="col-lg-4 col-md-12 wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="assets/img/feature.jpg" />
                    </div>
                </div>
                {/* <!-- Right Features --> */}
                <div className="col-lg-4 col-md-6">
                    <div className="row g-5">
                        <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                                <i className="fa fa-users-cog text-white"></i>
                            </div>
                            <h4>Deep Technical Expertise</h4>
                            <p className="mb-0">We combine knowledge across software engineering, cloud systems, network security, and emerging technologies like IoT to deliver well-rounded solutions.</p>
                        </div>
                        <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                            <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                                <i className="fa fa-users text-white"></i>
                            </div>
                            <h4>Long-Term Partnership</h4>
                            <p className="mb-0">TechDive supports, maintains, and evolves your systems long after deployment by prioritizing relationships over transactions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}