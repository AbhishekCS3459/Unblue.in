import React from "react";
import Image from "next/image";
import Link from "next/link";
import thumb from "public/images/footer/footer-three-thumb.png";
import logo from "public/images/logo.png";

const FooterThree = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="section footer-three pb-0">
      <div className="container">
        <div className="row gaper align-items-start">
          <div className="col-12 col-lg-4">
            <div className="footer-three__single">
              <div className="footer-thumb">
                <Image src={thumb} alt="Image" />
                <div className="footer-thumb__content">
                  <h5>head quarters, USA</h5>
                </div>
              </div>
              <div className="footer-three__group ps-0">
                <ul>
                  <li>
                    <Link
                      href=""
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      Haldia,West Bengal, India
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      +91 72609 20637
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:unblueconsultation@gmail.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      unblueconsultation@gmail.com

                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href=""
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="group-wrapper">
              <div className="footer-three__group">
                <div className="intro">
                  <h5>Haldia</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href=""
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                          West Bengal, India
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      +91 72609 20637
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:unblueconsultation@gmail.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                      unblueconsultation@gmail.com

                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href=""
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group section__content-cta">
                <div className="intro">
                  <h5>India</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href=""
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      West Bengal, India
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                      +91 72609 20637
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@xpovio.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                     unblueconsultation@gmail.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href=""
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="group-wrapper">
              <div className="footer-three__group">
                <div className="intro">
                  <h5>Poland</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href=""
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      West Bengal, India
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                    +91 72609 20637
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@xpovio.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                     unblueconsultation@gmail.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href=""
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
              <div className="footer-three__group section__content-cta">
                <div className="intro">
                  <h5>Haldia</h5>
                </div>
                <ul>
                  <li>
                    <Link
                      href=""
                      target="_blank"
                    >
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                      West Bengal, India
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:406-555-0120">
                      <i className="fa-sharp fa-solid fa-phone-volume"></i>
                    +91 72609 20637
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:info@xpovio.com">
                      <i className="fa-sharp fa-solid fa-envelope"></i>
                     unblueconsultation@gmail.com
                    </Link>
                  </li>
                </ul>
                <div className="cta">
                  <Link
                    href=""
                    target="_blank"
                  >
                    View Map
                    <i className="fa-sharp fa-solid fa-paper-plane"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-three__copyright">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="footer__copyright">
                <div className="row align-items-center gaper">
                  <div className="col-12 col-lg-8">
                    <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span> by Unblue {" "}
                      . All Rights Reserved
                    </p>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="text-center text-lg-end">
                      <Link href="/" className="logo">
                        <Image src={logo} alt="Image" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterThree;
