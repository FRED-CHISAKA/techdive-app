export default function HeroSlider() {
  return (
    <section className="tech-slider">
        <div id="techHeroSlider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {/* <!-- Slide 1 --> */}
                <div className="carousel-item active">
                    <div className="container-fluid">
                        <div className="row align-items-center slider-row">

                            <div className="col-lg-6 slider-image">
                                <img src="assets/img/hero/slide1.jpg" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-6 slider-content">
                                <h1>
                                    TECHDIVE - <br />
                                    <span>A Take On Tech.</span>
                                </h1>
                                <p>
                                    We dive deep into technology to design, build, and secure powerful digital solutions for businesses, startups, and institutions.
                                </p>

                                <a href="about.html" className="slider-btn">
                                    Learn More
                                    <span className="arrow">→</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- Slide 2 --> */}
                <div className="carousel-item">
                    <div className="container-fluid">
                        <div className="row align-items-center slider-row">

                            <div className="col-lg-6 slider-image">
                                <img src="assets/img/hero/slide2.jpg" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-6 slider-content">
                                <h1>
                                    TECHDIVE - <br />
                                    <span>A Take On Tech.</span>
                                </h1>
                                <p>
                                    From custom software and enterprise systems to cybersecurity, cloud, and IoT solutions — TechDive helps organizations innovate, scale, and operate efficiently in a digital world.
                                </p>

                                <a href="about.html" className="slider-btn">
                                    Learn More
                                    <span className="arrow">→</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Controls --> */}
            <button className="carousel-control-prev" type="button" data-bs-target="#techHeroSlider" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#techHeroSlider" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>

        </div>

    </section>
  );
}
