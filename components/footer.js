import Image from "next/image";
import Link from "next/link";
import styles from "../app/page.module.css";

export const Footer = () => {
  return (
    <footer className="p-4">
      <div className="row">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link href="/imprint" className="nav-link px-2 text-muted" style={{ color: "var(--textColor) !important" }}>
              Impressum
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/cookiePolicy" className="nav-link px-2 text-muted" style={{ color: "var(--textColor) !important" }}>
              Cookie Richtlinie
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/privacyPolicy" className="nav-link px-2 text-muted" style={{ color: "var(--textColor) !important" }}>
            Datenschutz
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={`${styles.container} py-1 my-1 border-top justify-content-between`}
        style={{ borderColor: "var(--textColor) !important" }}
      >
        <p style={{ color: "var(--textColor) !important" }}>© 2024 Jens Kock</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="link-dark"
              href="https://twitter.com/ccJensKock"
              target="_blank"
            >
              <Image width="24" height="24" alt="x" src="x.svg" />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="link-dark"
              href="https://www.linkedin.com/in/jens-kock/"
              target="_blank"
            >
              <Image width="24" height="24" alt="linkedin" src="linkedin.svg" />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="link-dark"
              href="https://github.com/jenskock"
              target="_blank"
            >
              <Image width="24" height="24" alt="linkedin" src="github.svg" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
