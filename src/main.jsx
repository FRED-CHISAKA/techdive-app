import "@fortawesome/fontawesome-free/css/all.min.css";import { StrictMode } from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./assets/css/tech-header.css";
import "./assets/css/footer-style.css";
import "./assets/css/tech-footer-upgrade.css";
import "./assets/css/footer-bootstrap.min.css";

// import "./assets/js/main.js";
// import "./assets/js/tech-header.js";

import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/lib/owlcarousel/assets/owl.theme.default.min.css";
import "./assets/lib/owlcarousel/owl.carousel.min.js";

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
