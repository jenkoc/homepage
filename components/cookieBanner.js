"use client";

import React, { useState, useEffect } from "react";
import { useLocalStorage } from "react-use";
import Link from "next/link";

import styles from "../app/page.module.css";

export function CookieBanner() {
  const [isClient, setIsClient] = useState(false);
  const [consent, setConsent] = useLocalStorage("cc", "x");
  const [transform, setTransform] = useState("translateY(0)");

  const handleClick = (value) => {
    setTransform("translateY(100%)");
    setTimeout(() => setConsent(value), 500);
  };

  useEffect(() => {
    // wtf https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
    setIsClient(true);
  }, []);

  if (!isClient) return <div />;

  return (
    <div
      className="fixed-bottom"
      style={{
        display: consent === "a" || consent === "d" ? "none" : "block",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        padding: "10px",
        transform: transform,
        transition: "transform 0.5s ease-out",
      }}
    >
      <div className={`${styles.container} d-flex justify-content-between p-1`}>
        <div className="text-left">
          <p style={{ fontWeight: "bolder" }}>Cookie Richtlinie</p>
          <p>
            Wir nutzen Cookies auf unserer Website. Einige von ihnen sind
            essenziell, während andere uns helfen, diese Website und Ihre
            Erfahrung zu verbessern. Weitere Informationen zu den von uns
            verwendeten Cookies finden Sie in unseren{" "}
            <Link href="/cookiePolicy" className="text-muted">
              Cookie-Richtlinien
            </Link>
            .
          </p>
        </div>
        <div className="align-items-end d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={() => handleClick("a")}
          >
            Akzeptieren
          </button>
          <button
            type="button"
            className="btn btn-secondary m-1"
            onClick={() => handleClick("d")}
          >
            Ablehnen
          </button>
        </div>
      </div>
    </div>
  );
}
