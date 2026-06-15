// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import TopBar from "../components/layout/TopBar";
import Header from "../components/layout/Header";
import HeroSlider from "../components/sections/HeroSlider";
import Facts from "../components/sections/Facts";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Services from "../components/sections/Services";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import Team from "../components/sections/Team";
import Blog from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import CTA from "../components/sections/CTA";
import Partners from "../components/sections/Partners";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <HeroSlider />
      <Facts />
      <About />
      <Features />
      <Services />
      <Pricing />
      <Testimonials />
      <Team />
      <Blog />
      <Contact />
      <CTA />
      <Partners />
      <Footer />
    </>
  );
}
