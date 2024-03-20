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
          href="https://calendly.com/piyushraj_unblue/marketing-consultation"
          className="btn btn--secondary custombtn"
          style={{
            color: "#000",
            fontWeight: "bolder",
            fontFamily: "sans-serif",
          }}
        >
          Book A Free Call Now
        </Link>
      </div>
    </div>
  );
}
