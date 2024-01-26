"use client";

import React, { useState, useEffect } from "react";
import { useLocalStorage } from "react-use";

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
        "-webkit-backdrop-filter": "blur(10px)",
        padding: "10px",
        transform: transform,
        transition: "transform 0.5s ease-out",
      }}
    >
      <div>
        <div>
          <div>
            <p style={{ fontWeight: "bolder" }}>CookiesPolicy</p>
            <p>CookiesPolicyText</p>
          </div>
          <div tokens={{ childrenGap: 10 }}>
            <button type="button" class="btn btn-primary" onClick={() => handleClick("a")}>Accept</button>

            <a onClick={() => handleClick("d")}>Decline</a>
          </div>
        </div>
      </div>
    </div>
  );
}
