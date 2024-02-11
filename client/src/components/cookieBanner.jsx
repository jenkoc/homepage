import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "react-use";
import { appInsights } from "../appInsights";

const CookieBanner = () => {
const [consent, setConsent] = useLocalStorage("cc", "x");
  const [transform, setTransform] = useState("translateY(0)");

  const handleClick = (value) => {
    setTransform("translateY(100%)");
    setTimeout(() => setConsent(value), 500);

    if (value === "a") {
      appInsights.loadAppInsights();
      appInsights.trackPageView();
    }
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
          <p style={{ fontWeight: "bolder" }}>Cookie Policy</p>
          <p>
            We use cookies on our website. Some of them are essential, while
            others help us improve this website and your experience. For more
            information about the cookies we are using, please see our{" "}
            <Link to="/cookiePolicy">cookie policy</Link>.
          </p>
        </div>
        <div className="align-items-end d-flex justify-content-end">
          <button
            type="button"
            className="btn btn-primary m-1"
            onClick={() => handleClick("a")}
          >
            Accept
          </button>
          <button
            type="button"
            className="btn btn-secondary m-1"
            onClick={() => handleClick("d")}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;