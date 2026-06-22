export default function Blog() {
  return (
    <div className="container-fluid py-5 blog-section wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">

            {/* <!-- Section Title --> */}
            <div className="section-title text-center pb-3 mb-5 mx-auto">
                <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
                <h1 className="mb-0">Read the Latest Insights from TechDive</h1>
                <div className="animated-line mx-auto mt-2"></div>
            </div>

            <div className="row g-5">

                {/* <!-- Blog Item 1 --> */}
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="blog-item rounded overflow-hidden position-relative d-flex flex-column">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/blog/blog-1.jpg" alt="Building a Cloud Platform" />
                            <span className="blog-category">Cloud</span>
                        </div>
                        <div className="p-4 blog-content d-flex flex-column mt-auto">
                            <div className="d-flex mb-3 text-muted">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>James Mwangi</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>12 Feb, 2026</small>
                            </div>
                            <h4 className="mb-3">Building a Scalable Cloud Platform</h4>
                            <p>Learn how TechDive designed a secure and scalable cloud platform to improve business efficiency.</p>
                            <a href="cloud-insight.html" className="slider-btn read-more">
                                Read More
                                <i className="bi bi-arrow-right arrow"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Blog Item 2 --> */}
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                    <div className="blog-item rounded overflow-hidden position-relative d-flex flex-column">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/blog/blog-2.jpg" alt="Cybersecurity Best Practices" />
                            <span className="blog-category">Security</span>
                        </div>
                        <div className="p-4 blog-content d-flex flex-column mt-auto">
                            <div className="d-flex mb-3 text-muted">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>Sarah Wanjiru</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>10 Feb, 2026</small>
                            </div>
                            <h4 className="mb-3">Top Cybersecurity Best Practices</h4>
                            <p>Discover TechDive’s guide to protecting your enterprise systems from modern cybersecurity threats.</p>
                            <a href="security-insight.html" className="slider-btn read-more">
                                Read More
                                <i className="bi bi-arrow-right arrow"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* <!-- Blog Item 3 --> */}
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                    <div className="blog-item rounded overflow-hidden position-relative d-flex flex-column">
                        <div className="blog-img position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="assets/img/blog/blog-3.jpg" alt="IoT Integration in Business" />
                            <span className="blog-category">IoT</span>
                        </div>
                        <div className="p-4 blog-content d-flex flex-column mt-auto">
                            <div className="d-flex mb-3 text-muted">
                                <small className="me-3"><i className="far fa-user text-primary me-2"></i>David Ochieng</small>
                                <small><i className="far fa-calendar-alt text-primary me-2"></i>08 Feb, 2026</small>
                            </div>
                            <h4 className="mb-3">IoT Integration to Boost Efficiency</h4>
                            <p>How TechDive implemented IoT solutions to increase operational efficiency and monitoring in enterprises.</p>
                            <a href="IoT-insight.html" className="slider-btn read-more">
                                Read More
                                <i className="bi bi-arrow-right arrow"></i>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}