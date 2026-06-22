export default function Contact() {
  return (
  
    <div className="container-fluid py-5 contact-section wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">

            <div className="section-title text-center pb-3 mb-5 mx-auto">
                <h5 className="fw-bold text-primary text-uppercase">Get In Touch</h5>
                <h1 className="mb-0">Contact for any query</h1>
                <div className="animated-line mx-auto mt-2"></div>
            </div>
            <div className="contact-detail position-relative p-4 p-md-5">
                <div className="row g-5 mb-5 justify-content-center">
                    <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".3s">
                        <div className="d-flex bg-light p-3 rounded">
                            <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                                <i className="fas fa-map-marker-alt text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h4 className="text-primary">Address</h4>
                                <a href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" target="_blank" className="h5">982, Mumias, Kakamega</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
                        <div className="d-flex bg-light p-3 rounded">
                            <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                                <i className="fa fa-phone text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h4 className="text-primary">Call Us</h4>
                                <a className="h5" href="tel:+0123456789" target="_blank">+254 7960 80271</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
                        <div className="d-flex bg-light p-3 rounded">
                            <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                                <i className="fa fa-envelope text-white"></i>
                            </div>
                            <div className="ms-3">
                                <h4 className="text-primary">Email Us</h4>
                                <a className="h5" href="mailto:chisaka@techdive.com" target="_blank">chisaka@techdive.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                        <div className="p-4 p-md-5 h-100 rounded contact-map">
                            <iframe className="rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.687166455719!2d34.51924247283716!3d0.46457179953087757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177f89c90947f679%3A0x527a47ab37c46a46!2sMumias%20-%20Bungoma%20Rd!5e0!3m2!1sen!2ske!4v1771494334593!5m2!1sen!2ske" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                        <div className="p-4 p-md-5 rounded contact-form">
                            <h4 className="mb-4">Send us messages instantly with our contact form - Tell us about the service you need and we will give you the best solution.</h4>
                            <div className="mb-4">
                                <input type="text" className="form-control border-0 py-3" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <input type="email" className="form-control border-0 py-3" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <input type="text" className="form-control border-0 py-3" placeholder="Project" />
                            </div>
                            <div className="mb-4">
                                <textarea className="w-100 form-control border-0 py-3" rows="6" cols="10" placeholder="Message"></textarea>
                            </div>
                            <div className="text-start">
                                <button className="btn bg-primary text-white py-3 px-5" type="button">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  );
}