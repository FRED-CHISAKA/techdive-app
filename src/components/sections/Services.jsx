export default function Services() {
  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
                <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
                <h1 className="mb-0">Services Built Specifically For Your Business</h1>
                <div className="animated-line mx-auto mt-2"></div>
            </div>
            <div className="row g-5 services-inner">

                {/* <!-- Software Development --> */}
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                    <div className="services-item bg-light">
                        <div className="p-4 text-center services-content">
                            <div className="services-content-icon">
                                <i className="fa fa-code fa-7x mb-4 text-primary"></i>
                                <h4 className="mb-3">Software Development</h4>
                                <p className="mb-4">Custom, responsive, and visually striking designs that reflect your brand and engage your audience seamlessly across devices.</p>
                                <a href="webdevelopment-service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Web Development --> */}
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                    <div className="services-item bg-light">
                        <div className="p-4 text-center services-content">
                            <div className="services-content-icon">
                                <i className="fa fa-mobile fa-7x mb-4 text-primary"></i>
                                <h4 className="mb-3">Web & Mobile Apps</h4>
                                <p className="mb-4">Full-stack development using the latest technologies to build fast, secure, and scalable web applications tailored to your business needs.</p>
                                <a href="webdevelopment-service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Cloud & DevOps --> */}
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                    <div className="services-item bg-light">
                        <div className="p-4 text-center services-content">
                            <div className="services-content-icon">
                                <i className="fa fa-cloud fa-7x mb-4 text-primary"></i>
                                <h4 className="mb-3">Cloud & DevOps</h4>
                                <p className="mb-4">Intuitive user interfaces and engaging user experiences designed to increase satisfaction and drive conversions.</p>
                                <a href="cloud-service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Cybersecurity --> */}
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                    <div className="services-item bg-light">
                        <div className="p-4 text-center services-content">
                            <div className="services-content-icon">
                                <i className="fas fa-user-shield fa-7x mb-4 text-primary"></i>
                                <h4 className="mb-3">Cybersecurity</h4>
                                <p className="mb-4">Protect your digital assets with advanced security solutions including threat monitoring, vulnerability assessment, and risk management.</p>
                                <a href="cybersecurity-service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- IT Consulting --> */}
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                    <div className="services-item bg-light">
                        <div className="p-4 text-center services-content">
                            <div className="services-content-icon">
                                <i className="fa fa-users fa-7x mb-4 text-primary"></i>
                                <h4 className="mb-3">IT Consulting</h4>
                                <p className="mb-4">Comprehensive online marketing strategies including SEO, social media, email campaigns, and paid advertising to grow your brand.</p>
                                <a href="services.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- IoT Infrastructure --> */}
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                    <div className="services-item bg-light">
                        <div className="p-4 text-center services-content">
                            <div className="services-content-icon">
                                <i className="fas fa-laptop-code fa-7x mb-4 text-primary"></i>
                                <h4 className="mb-3">IoT Solutions</h4>
                                <p className="mb-4">Custom software development in multiple programming languages to build solutions that streamline operations and solve complex problems.</p>
                                <a href="IoT-service.html" className="btn btn-secondary text-white px-5 py-3 rounded-pill">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}