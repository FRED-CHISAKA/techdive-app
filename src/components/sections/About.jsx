export default function About() {
  return (
    <div className="container-fluid py-5 about-section wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row gx-5 align-items-center">
                {/*Left Column: Image */}
                <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
                    <div className="about-img-wrapper position-relative">
                        <img src="assets/img/about.jpg" alt="TechDive Concept" className="img-fluid rounded shadow" />
                    </div>
                </div>

                {/* <!-- Right Column: Content --> */}
                <div className="col-lg-6 order-lg-1">
                    <h5 className="fw-bold text-primary text-uppercase">Who We Are</h5>
                    <h1 className="mb-0">The Best Technological Solution With Years of Experience</h1>
                    <div className="animated-line mx-0 mt-2 mb-4"></div>
                    <p className="mb-3">
                        <strong>TechDive</strong> is a Software Engineering firm focused on delivering reliable, secure, and scalable digital solutions. We combine modern technologies with practical engineering to help businesses solve real-world problems.
                    </p>
                    
                    <ul className="list-unstyled about-features mb-4">
                        <li><i className="fa fa-check-circle text-primary me-2"></i>Custom Software & Enterprise Applications</li>
                        <li><i className="fa fa-check-circle text-primary me-2"></i>Web & Mobile App Development</li>
                        <li><i className="fa fa-check-circle text-primary me-2"></i>Cloud Solutions & IoT Integration</li>
                        <li><i className="fa fa-check-circle text-primary me-2"></i>Tech Consultation & Support</li>
                    </ul>
                    <a href="services.html" className="btn btn-primary">Explore Our Services</a>
                </div>
            </div>
        </div>
    </div>
  );
}