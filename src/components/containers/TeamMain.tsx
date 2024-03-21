import React from "react";
import Image from "next/image";
import Link from "next/link";

import one from "public/images/teams/Nilambar.png";
import two from "public/images/teams/Piyush.png";
import three from "public/images/teams/Abhijit.png";
import four from "public/images/teams/Aquib.png";


import five from "public/images/teams/five.png";
import six from "public/images/teams/six.png";

const TeamMain = () => {
  return (
    <section className="section team-m fade-wrapper">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={one} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/Nilambar.png')" }}
                >
                  <div className="info">
                    <p>Myself Nilambar Giri. Fundraising Consultant</p>
                  </div>
                  <h4>
                    <Link href="team-single">Nilambar Giri</Link>
                  </h4>
                  <p>Founder</p>
                  <div className="social-alt">
                    <Link
                      className="fa-brands fa-instagram"
                      href="https://www.instagram.com/nilambar_09/"
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i
                        style={{ color: "white", fontWeight: "bolder" }}
                      ></i>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/nilambar-giri/"
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={two} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/Piyush.png')" }}
                >
                  <div className="info">
                    <p>Myself Piyush Raj. Marketing Consultant</p>
                  </div>
                  <h4>
                    <Link href="team-single">Piyush Raj</Link>
                  </h4>
                  <p>CMO & Co-founder</p>
                  <div className="social-alt">
                    <Link
                      href="https://www.instagram.com/rajpiyush29/"
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i
                        className="fa-brands fa-instagram"
                        style={{ color: "white", fontWeight: "bolder" }}
                      ></i>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/rajpiyush29/"
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={three} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/Abhijit.png')" }}
                >
                  <div className="info">
                    <p>Myself Abhijit Das. A professional video editor</p>
                  </div>
                  <h4>
                    <Link href="team-single">Abhijit Das</Link>
                  </h4>
                  <p>Video Editor</p>
                  <div className="social-alt">
                    <Link
                      href="https://www.instagram.com/abhijit_das67_"
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i
                        className="fa-brands fa-instagram"
                        style={{ color: "white", fontWeight: "bolder" }}
                      ></i>
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/abhijit-das67/"
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={four} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/Aquib.png')" }}
                >
                  <div className="info">
                    <p>Myself Aquib Azmi. A professional video editor</p>
                  </div>
                  <h4>
                    <Link href="team-single">Aquib Azmi</Link>
                  </h4>
                  <p>Video Editor </p>
                  <div className="social-alt">
                    <Link
                      href="https://www.instagram.com/the_azmiicreations"
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i
                        className="fa-brands fa-instagram"
                        style={{ color: "white", fontWeight: "bolder" }}
                      ></i>
                    </Link>

                    <Link
                      href="https://www.linkedin.com/in/aquibtheazmi001"
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* uSER 5TH */}
          {/* <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={five} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Sana p. Lesh</Link>
                  </h4>
                  <p>Senior engineer</p>
                  <div className="social-alt">
                    <Link
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="https://www.twitter.com/"
                      target="_blank"
                      aria-label="share us on twitter"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link
                      href="https://www.pinterest.com/"
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* USER 6TH */}
          {/* <div className="col-12 col-md-6 col-xl-4">
            <div className="team-m__single fade-top">
              <div className="thumb">
                <Link href="team-single">
                  <Image src={six} alt="Image" />
                </Link>
                <div
                  className="thumb__content"
                  style={{ backgroundImage: "url('/images/teams/bg.png')" }}
                >
                  <div className="info">
                    <p>
                      “Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </p>
                  </div>
                  <h4>
                    <Link href="team-single">Sana p. Lesh</Link>
                  </h4>
                  <p>Senior engineer</p>
                  <div className="social-alt">
                    <Link
                      href="https://www.facebook.com/"
                      target="_blank"
                      aria-label="share us on instagram"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link
                      href="https://www.twitter.com/"
                      target="_blank"
                      aria-label="share us on twitter"
                    >
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link
                      href="https://www.pinterest.com/"
                      target="_blank"
                      aria-label="share us on linkedin"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="row">
          <div className="col-12">
            <div className="section__content-cta text-center">
              <button className="btn btn--secondary">Load More..</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TeamMain;
