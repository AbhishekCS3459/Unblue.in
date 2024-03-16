import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/images/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="footer section pb-0"
      style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 col-xl-6">
            <div className="footer__single">
              <Link href="/" className="logo">
                <Image src={logo} alt="Image" />
              </Link>
              <div className="footer__single-meta">
                <Link href="" target="_blank">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                  Haldia, West Bengal,India
                </Link>
                <Link href="tel:+91 72609 20637">
                  <i className="fa-sharp fa-solid fa-phone-volume"></i>
                  +91 72609 20637
                </Link>
                <Link href="mailto:unblueconsultation@gmail.com">
                  <i className="fa-sharp fa-solid fa-envelope"></i>
                  unblueconsultation@gmail.com
                </Link>
              </div>
          
            </div>
          </div>
          <div className="col-12 col-lg-2 col-xl-2">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Discover</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="about-us">About Us</Link>
                  </li>
                  <li>
                    <Link href="contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="award-winnings">Award Winning</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 col-xl-4">
            <div className="footer__single">
              <div className="footer__single-intro">
                <h5>Services</h5>
              </div>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="video-editing"
                    onClick={()=>{
                    
                    }}
                    >
                      Video Editing
                    </Link>
                  </li>
                  <li>
                    <Link  href="content-creation">
                      Content Creation
                    </Link>
                  </li>
                  <li>
                    <Link  href="marketing-and-branding">
                      Marketing and Branding
                    </Link>
                  </li>
                  <li>
                    <Link  href="social-media-management">
                      Social Media Management
                    </Link>
                  </li>
        
                </ul>
                {/* <p>
                  Welcome to our digital agency We specialize in helping
                  business most like yours succeed online.
                </p> */}
                {/* <div className="footer__single-form">
                  <form action="#" method="post">
                    <div className="input-email">
                      <input
                        type="email"
                        name="subscribe-news"
                        id="subscribeNews"
                        placeholder="Enter Your Email"
                        required
                      />
                      <button type="submit" className="subscribe">
                        <i className="fa-sharp fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </form>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row align-items-center gaper">
                <div className="col-12 col-lg-8">
                  <div className="footer__copyright-text text-center text-lg-start">
                    <p>
                      Copyright &copy;
                      <span id="copyYear">{currentYear}</span> by Unblue . All
                      Rights Reserved
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <div className="social justify-content-center justify-content-lg-end">
                    {/* <Link href="https://www.facebook.com/" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link> */}

                    <Link
                      href="https://www.linkedin.com/company/unblue-consultation/"
                      target="_blank"
                      
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link
                      href="https://www.instagram.com/unblue.in"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
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

export default Footer;
