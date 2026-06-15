import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="tech-header navbar navbar-expand-lg fixed-top">
      <div className="container">
      
        <a className="navbar-brand tech-logo d-flex align-items-center" href="/">
          <img src="/assets/img/icon.jpg" alt="TechDive Logo" className="logo-img me-2" />
          <span>Tech</span>Dive
        </a>

        <button
          className="navbar-toggler"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto">
            <li><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item dropdown">
                <a class="nav-link" href=" " id="servicesDropdown"
                    role="button" data-bs-toggle="dropdown">
                    About
                </a>
                <ul class="dropdown-menu tech-dropdown">
                    <li><a className="dropdown-item" href="/about">About Techdive</a></li>
                    <li><a className="dropdown-item" href="/team">TechDive Team</a></li>
                    <li><a className="dropdown-item" href="/policy">Privacy Policy</a></li>
                </ul>
            </li>
            <li><a className="nav-link" href="/services">Services</a></li>
            <li><a className="nav-link" href="/projects">Projects</a></li>
            <li><a className="nav-link" href="/blog">Insights</a></li>
            <li><a className="nav-link" href="/contact">Contact</a></li>
          </ul>
          {/* <!-- Right Section --> */}
          <div className="nav-right d-flex align-items-center">

              {/* <!-- Search Button --> */}
              <a href=" " class="search-btn me-3" id="openSearch">
                  <i className="fas fa-search"></i>
              </a>

              {/* <!-- Login Button --> */}
              <a href=" " className="btn btn-tech-login">Login</a>

          </div>
        </div>
      </div>
    </header>
  );
}
