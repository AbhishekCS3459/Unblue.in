import Link from "next/link";
import React from "react";

export default function BookButton() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <div className="footer__cta text-start ">
        <Link
          href="contact-us"
          className="btn btn--secondary custombtn"
          style={{
            color: "#000",
            fontWeight: "bolder",
            fontFamily: "sans-serif",
          }}
        >
          book a call now
        </Link>
      </div>
    </div>
  );
}
