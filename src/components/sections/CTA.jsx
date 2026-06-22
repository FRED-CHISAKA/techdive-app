export default function CTA() {
  return ( 
    <section className="clients-cta py-5 modern-cta">
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="cta-title mb-4 fade-in-up">Ready to Dive Into Intelligent Systems?</h1>
                    <div className="animated-line mx-auto mt-2"></div>
                    <p className="cta-subtitle text-dark-50 mb-4 fade-in-up delay-1">
                        Whether you're building from the ground up or optimizing existing infrastructure, 
                        TechDive is ready to transform your ideas into high-performance digital solutions.
                    </p>
                    <div className="cta-buttons fade-in-up delay-2">
                        <a href="contact.html" className="btn btn-primary btn-lg me-3">
                            <i className="bi bi-chat-dots me-2"></i> Get Started Today
                        </a>
                        <a href="services.html" className="btn btn-outline-light btn-lg">
                            <i className="bi bi-grid-3x3-gap me-2"></i> View Our Services
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}