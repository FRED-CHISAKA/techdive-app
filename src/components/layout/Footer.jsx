export default function Footer() {
  return <div>
    <div className="container-fluid tech-footer mt-5 wow fadeInUp" data-wow-delay="0.1s">
       <div className="container">
         <div className="row gx-5">
           <div className="col-lg-4 col-md-6 footer-about">
             <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 tech-footer-brand p-4">
               <a href="index.html" className="navbar-brand">
                 <h1 className="m-0 ">
                   <img src="./assets/img/icon.jpg" alt="" />
                   Tech<span>Dive</span>
                 </h1>
               </a>
               <p className="mt-3 mb-4">To get first hand updates on our technological ventures and changes and any other updates, subscribe to our newsletter below.</p>
               <form action="">
                 <div className="input-group">
                   <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                   <button className="btn btn-dark">Sign Up</button>
                 </div>
               </form>
             </div>
           </div>
           <div className="col-lg-8 col-md-6">
             <div className="row gx-5">
               <div className="col-lg-4 col-md-12 pt-5 mb-5">
                 <div className="section-title section-title-sm pb-3 mb-4">
                   <h3 className="text-light mb-0">Get In Touch</h3>
                   <div className="animated-line mx-auto mt-2"></div>
                 </div>
                 <div className="d-flex mb-2">
                   <i className="bi bi-geo-alt text-primary me-2"></i>
                   <p className="mb-0">982 Mumias, Kakamega, Kenya</p>
                 </div>
                 <div className="d-flex mb-2">
                   <i className="bi bi-envelope-open text-primary me-2"></i>
                   <p className="mb-0">chisaka@techdive.com</p>
                 </div>
                 <div className="d-flex mb-2">
                   <i className="bi bi-telephone text-primary me-2"></i>
                   <p className="mb-0">+254 960 80271</p>
                 </div>
                 <div className="d-flex mt-4">
                   <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                   <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                   <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                   <a className="btn btn-primary btn-square" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                 </div>
               </div>
               <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                 <div className="section-title section-title-sm pb-3 mb-4">
                   <h3 className="text-light mb-0">Quick Links</h3>
                   <div className="animated-line mx-auto mt-2"></div>
                 </div>
                 <div className="link-animated d-flex flex-column justify-content-start">
                   <a className="text-light mb-2" href="index.html"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                     <a className="text-light mb-2" href="about.html"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                     <a className="text-light mb-2" href="services.html"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                     <a className="text-light mb-2" href="projects.html"><i className="bi bi-arrow-right text-primary me-2"></i>Our Projects</a>
                     <a className="text-light mb-2" href="blog.html"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                     <a className="text-light" href="contact.html"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                 </div>
               </div>
               <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                 <div className="section-title section-title-sm pb-3 mb-4">
                   <h3 className="text-light mb-0">Popular Links</h3>
                   <div className="animated-line mx-auto mt-2"></div>
                 </div>
                 <div className="link-animated d-flex flex-column justify-content-start">
                   <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                   <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                   <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                   <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                   <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                   <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
    </div>
  
    <div className="container-fluid tech-footer-bottom">
       <div className="container text-center">
         <div className="row justify-content-end">
           <div className="col-lg-8 col-md-6">
               <div className="d-flex align-items-center justify-content-center">
               <p className="mb-0"> <a className="text-white" href="https://www.techdive.com">&copy; TechDive.</a> All Rights Reserved. 
                 Designed by <a className="text-white" href="https://www.portfolio-chisaka-fred.com">Chisaka Fred</a>
               </p>
               </div>
           </div>
         </div>
       </div>
    </div>

    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>

  </div>;
}