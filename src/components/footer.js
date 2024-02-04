import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-4">
      <div className="row">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              to="/imprint"
              className="nav-link px-2 text-muted hover-underline-animation"
              style={{ color: "var(--textColor) !important" }}
            >
              Imprint
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/cookiePolicy"
              className="nav-link px-2 text-muted hover-underline-animation"
              style={{ color: "var(--textColor) !important" }}
            >
              Cookie Policy
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/privacyPolicy"
              className="nav-link px-2 text-muted hover-underline-animation"
              style={{ color: "var(--textColor) !important" }}
            >
              Data Protection
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`container py-1 my-1 justify-content-center`}
        style={{ borderColor: "var(--textColor) !important" }}
      >
        <p style={{ color: "var(--textColor) !important" }}>© 2024 Jens Kock</p>
      </div>
    </footer>
  );
};

export default Footer;
