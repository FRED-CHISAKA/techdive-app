export default function Testimonials() {
  return (
  <div className="container-fluid py-5 testimonial-section wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">

            {/* <!-- Section Title--> */}
            <div className="section-title text-center pb-3 mb-5 mx-auto">
                <h5 className="fw-bold text-primary text-uppercase">Testimonials</h5>
                <h1 className="mb-0">What Our Clients Say About TechDive Solutions</h1>
                <div className="animated-line mx-auto mt-2"></div>
            </div>

            {/* <!-- Carousel --> */}
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">

                {/* <!-- Testimonial 1 --> */}
                <div className="testimonial-item my-4">
                    <div className="d-flex align-items-center pt-5 pb-4 px-4">
                        <img className="img-fluid rounded" src="assets/img/testimonial-1.jpg" 
                             alt="Client Image" />
                        <div className="ps-4 text-start">
                            <h4 className="mb-1">Aylene Mitch</h4>
                            <small className="text-uppercase">IT Director</small>
                        </div>
                    </div>
                    <div className="pb-5 px-4">
                        TechDive transformed our outdated infrastructure into a secure, scalable cloud-based system. 
                        Their expertise in cybersecurity and enterprise solutions is unmatched.
                    </div>
                </div>

                {/* <!-- Testimonial 2 --> */}
                <div className="testimonial-item my-4">
                    <div className="d-flex align-items-center pt-5 pb-4 px-4">
                        <img className="img-fluid rounded" src="assets/img/testimonial-2.png" 
                            alt="Client Image" />
                        <div className="ps-4 text-start">
                            <h4 className="mb-1">Freshley Maney</h4>
                            <small className="text-uppercase">Business Owner</small>
                        </div>
                    </div>
                    <div className="pb-5 px-4">
                        From web development to system automation, TechDive delivered exactly what we envisioned. 
                        Professional, innovative, and always ahead of schedule.
                    </div>
                </div>

                {/* <!-- Testimonial 3 --> */}
                <div className="testimonial-item my-4">
                    <div className="d-flex align-items-center pt-5 pb-4 px-4">
                        <img className="img-fluid rounded" src="assets/img/testimonial-3.jpg" 
                             alt="Client Image" />
                        <div className="ps-4 text-start">
                            <h4 className="mb-1">Aya Ashley</h4>
                            <small className="text-uppercase">Operations Manager</small>
                        </div>
                    </div>
                    <div className="pb-5 px-4">
                        The IoT integration TechDive implemented increased our operational efficiency by 40%. 
                        Their technical depth and support team are outstanding.
                    </div>
                </div>

                {/* <!-- Testimonial 4 --> */}
                <div className="testimonial-item my-4">
                    <div className="d-flex align-items-center pt-5 pb-4 px-4">
                        <img className="img-fluid rounded" src="assets/img/testimonial-4.png" 
                            alt="Client Image" />
                        <div className="ps-4 text-start">
                            <h4 className="mb-1">Ben Carson</h4>
                            <small className="text-uppercase">Startup Founder</small>
                        </div>
                    </div>
                    <div className="pb-5 px-4">
                        TechDive built our custom software platform from scratch. 
                        Secure, fast, scalable — exactly what a growing startup needs.
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}