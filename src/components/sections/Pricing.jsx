export default function Pricing() {
  return (
    <div className="container-fluid py-5 why-choose-us wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">

            {/* <!-- Section Header--> */}
            <div className="section-title text-center pb-3 mb-5 mx-auto">
                <h5 className="fw-bold text-primary text-uppercase">Our Plans</h5>
                <h1 className="mb-0">TechDive Service Packages</h1>
                <div className="animated-line mx-auto mt-2"></div>
            </div>

            <div className="row g-4">

                {/* <!-- Website Development --> */}
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h4>Website Development</h4>
                            <small>Professional Business Websites</small>
                        </div>

                        <div className="pricing-body">
                            <h2 className="price">From $699</h2>

                            <ul>
                                <li>Responsive Design</li>
                                <li>Admin Dashboard</li>
                                <li>SEO Optimization</li>
                                <li>Contact Forms</li>
                            </ul>

                            <a href="#" className="btn pricing-btn">Get Started</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile App Development (Featured) --> */}
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-card featured">
                        <div className="pricing-header">
                            <h4>Mobile App Development</h4>
                            <small>Android & iOS Applications</small>
                        </div>

                        <div className="pricing-body">
                            <h2 className="price">From $1499</h2>

                            <ul>
                                <li>Custom UI/UX</li>
                                <li>API Integration</li>
                                <li>Push Notifications</li>
                                <li>App Store Deployment</li>
                            </ul>

                            <a href="#" className="btn pricing-btn">Get Started</a>
                        </div>
                    </div>
                </div>

                {/* <!-- Hosting & Maintenance --> */}
                <div className="col-lg-4 col-md-6">
                    <div className="pricing-card">
                        <div className="pricing-header">
                            <h4>Hosting & Maintenance</h4>
                            <small>Secure & Reliable Infrastructure</small>
                        </div>

                        <div className="pricing-body">
                            <h2 className="price">From $29/month</h2>

                            <ul>
                                <li>99.9% Uptime</li>
                                <li>Daily Backups</li>
                                <li>SSL Certificate</li>
                                <li>24/7 Support</li>
                            </ul>

                            <a href="#" className="btn pricing-btn">Get Started</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}