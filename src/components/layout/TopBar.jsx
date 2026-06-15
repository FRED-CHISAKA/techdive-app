export default function TopBar() {
  return (
    <div className="tech-topbar">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Left Info */}
        <div className="top-left d-flex align-items-center">
          <span>
            <i className="fas fa-map-marker-alt me-2"></i>
            982 Mumias, Kakamega, Kenya
          </span>

          <span className="ms-4">
            <i className="fas fa-envelope me-2"></i>
            chisaka@techdive.com
          </span>
        </div>

        {/* Sliding Text */}
        <div className="top-center">
          <span className="sliding-text">
            Note : We help you Grow your Business
          </span>
        </div>

        {/* Social Icons */}
        <div className="top-right">
          <a
            className="button-socials"
            href="#"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="button-socials"
            href="#"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="button-socials"
            href="#"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="button-socials"
            href="#"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

      </div>
    </div>
  );
}