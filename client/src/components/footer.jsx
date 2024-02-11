import { Link } from "react-router-dom";

const Footer = () => {
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
          <li>
            <div className="nav-item dropdown p-2">
              <button
                className="text-muted hover-underline-animation"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--textColor)",
                }}
              >
                Feed
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    to="/feed/rss"
                    target="_blank"
                    className="nav-link px-2 text-muted hover-underline-animation"
                    style={{ color: "var(--textColor) !important" }}
                  >
                    <svg
                      className="m-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="20"
                      width="20"
                    >
                      <path
                        fill="#000000"
                        fillRule="evenodd"
                        d="M1 1h0.5C13.374 1 23 10.626 23 22.5v0.5h-4v-0.5C19 12.835 11.165 5 1.5 5H1V1Zm0.5 7H1v4h0.5C7.299 12 12 16.701 12 22.5v0.5h4v-0.5C16 14.492 9.508 8 1.5 8Zm3 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0 -7Z"
                        clipRule="evenodd"
                        strokeWidth="1"
                      ></path>
                    </svg>
                    RSS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feed/atom"
                    target="_blank"
                    className="nav-link px-2 text-muted hover-underline-animation"
                    style={{ color: "var(--textColor) !important" }}
                  >
                    <svg
                      className="m-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      height="20"
                      width="20"
                    >
                      <path
                        fill="var(--bs-primary)"
                        fillRule="evenodd"
                        d="M1 1h0.5C13.374 1 23 10.626 23 22.5v0.5h-4v-0.5C19 12.835 11.165 5 1.5 5H1V1Zm0.5 7H1v4h0.5C7.299 12 12 16.701 12 22.5v0.5h4v-0.5C16 14.492 9.508 8 1.5 8Zm3 8a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0 -7Z"
                        clipRule="evenodd"
                        strokeWidth="1"
                      ></path>
                    </svg>
                    Atom
                  </Link>
                </li>
                <li>
                  <Link
                    to="/feed/json"
                    target="_blank"
                    className="nav-link px-2 text-muted hover-underline-animation"
                    style={{ color: "var(--textColor) !important" }}
                  >
                    <svg
                      className="m-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                      height="20"
                      width="20"
                    >
                      <g id="braces-circle--interface-math-braces-sign-mathematics">
                        <path
                          id="Subtract"
                          fill="#000"
                          fillRule="evenodd"
                          d="M7 0.25a6.75 6.75 0 1 0 0 13.5A6.75 6.75 0 0 0 7 0.25ZM3.743 5.61A1.798 1.798 0 0 1 5.5 3.876a0.625 0.625 0 1 1 0 1.25c-0.056 0 -0.19 0.03 -0.305 0.122 -0.096 0.076 -0.19 0.201 -0.204 0.438 -0.024 0.387 -0.126 0.907 -0.443 1.315 0.317 0.408 0.42 0.928 0.443 1.315 0.014 0.237 0.108 0.362 0.204 0.438a0.557 0.557 0 0 0 0.305 0.122 0.625 0.625 0 1 1 0 1.25c-0.62 0 -1.682 -0.47 -1.757 -1.736 -0.026 -0.438 -0.166 -0.652 -0.298 -0.718L3.22 7.56a0.625 0.625 0 0 1 0 -1.118l0.225 -0.112c0.132 -0.066 0.272 -0.28 0.298 -0.718ZM8.5 3.876c0.62 0 1.682 0.47 1.757 1.736 0.026 0.438 0.166 0.652 0.298 0.718l0.225 0.112a0.625 0.625 0 0 1 0 1.118l-0.225 0.112c-0.132 0.066 -0.272 0.28 -0.298 0.718A1.798 1.798 0 0 1 8.5 10.125a0.625 0.625 0 1 1 0 -1.25c0.056 0 0.19 -0.03 0.305 -0.122 0.096 -0.076 0.19 -0.201 0.204 -0.438 0.024 -0.387 0.126 -0.907 0.443 -1.315 -0.317 -0.408 -0.42 -0.928 -0.443 -1.315 -0.014 -0.237 -0.108 -0.362 -0.204 -0.438a0.557 0.557 0 0 0 -0.305 -0.122 0.625 0.625 0 1 1 0 -1.25Z"
                          clipRule="evenodd"
                          strokeWidth="1"
                        ></path>
                      </g>
                    </svg>
                    Json
                  </Link>
                </li>
              </ul>
            </div>
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
