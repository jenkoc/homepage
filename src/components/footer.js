export const Footer = () => {
  return (
    <footer className="p-4">
      <div className="row">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a
              href="/imprint"
              className="nav-link px-2 text-muted hover-underline-animation"
              style={{ color: "var(--textColor) !important" }}
            >
              Imprint
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/cookiePolicy"
              className="nav-link px-2 text-muted hover-underline-animation"
              style={{ color: "var(--textColor) !important" }}
            >
              Cookie Policy
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/privacyPolicy"
              className="nav-link px-2 text-muted hover-underline-animation"
              style={{ color: "var(--textColor) !important" }}
            >
              Data Protection
            </a>
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
