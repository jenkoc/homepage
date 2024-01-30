import React, { useState } from "react";
import { useLocalStorage } from "react-use";

export function CookieBanner() {
  const [consent, setConsent] = useLocalStorage("cc", "x");
  const [transform, setTransform] = useState("translateY(0)");

  const handleClick = (value) => {
    setTransform("translateY(100%)");
    setTimeout(() => setConsent(value), 500);
  };

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
      <div className={`container d-flex justify-content-between p-1`}>
        <div className="text-left">
          <p style={{ fontWeight: "bolder" }}>Cookie Richtlinie</p>
          <p>
            Wir nutzen Cookies auf unserer Website. Einige von ihnen sind
            essenziell, während andere uns helfen, diese Website und Ihre
            Erfahrung zu verbessern. Weitere Informationen zu den von uns
            verwendeten Cookies finden Sie in unseren{" "}
            <a href="/cookiePolicy" className="text-muted">
              Cookie-Richtlinien
            </a>
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
