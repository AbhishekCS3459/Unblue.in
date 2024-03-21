import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import one from "public/images/portfolio/one.png";
import two from "public/images/portfolio/two.png";
import three from "public/images/portfolio/three.png";
import four from "public/images/portfolio/four.png";
import five from "public/images/portfolio/five.png";
import six from "public/images/portfolio/six.png";
import seven from "public/images/portfolio/seven.png";
import dot from "public/images/portfolio/dot.png";
import TextSlider from "./TextSlider";

const PortfolioText = () => {
  const [hover, setHover] = useState(0);
  return (
    <section
      className="section portfolio pb-0 fade-wrapper position-relative"
      style={{
        marginBottom: "25px",
      }}
    >
      <TextSlider TextMessage="Portfolio" />
      <div className="container-fluid">
        <div className="row gaper">
          <div
            className="col-12 col-sm-6 col-xl-3"
            style={{
              borderRadius: "50px",
            }}
          >
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 0 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(0)}
              style={{
                borderRadius: "25px",
              }}
            >
              <Link href="portfolio">
                <Image src={one} alt="Image" />
              </Link>
              <div
                className="portfolio__single-content"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Digital Marketing</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-6 col-xl-3"
            style={{
              borderRadius: "25px",
            }}
          >
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 1 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(1)}
              style={{
                borderRadius: "25px",
              }}
            >
              <Link href="portfolio">
                <Image src={two} alt="Image" />
              </Link>
              <div
                className="portfolio__single-content"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Digital Marketing</Link>
                </h4>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-6 col-xl-3"
            style={{
              borderRadius: "25px",
            }}
          >
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 2 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(2)}
              style={{
                borderRadius: "25px",
              }}
            >
              <Link href="portfolio">
                <Image src={three} alt="Image" />
              </Link>
              <div
                className="portfolio__single-content"
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                }}
              >
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Digital Marketing</Link>
                </h4>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 3 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(3)}
            >
              <Link href="portfolio">
                <Image src={four} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Digital Marketing</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 4 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(4)}
            >
              <Link href="portfolio">
                <Image src={five} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Digital Marketing</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 5 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(5)}
            >
              <Link href="portfolio">
                <Image src={six} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Digital Marketing</Link>
                </h4>
              </div>
            </div>
          </div> */}
          <div
            className="col-12 col-sm-6 col-xl-3"
            style={{
              borderRadius: "25px",
            }}
          >
            <div
              className="portfolio__single-alt-wrapper fade-top"
              style={{
                borderRadius: "25px",
              }}
            >
              <div className="portfolio__single-alt topy-tilt">
                <h4>
                  <Link href="portfolio">view all work</Link>
                </h4>
                <Link href="portfolio" className="arr">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <Image src={dot} alt="Image" className="dot-one" />
                <Image src={dot} alt="Image" className="dot-two" />
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-sm-6 col-xl-3">
            <div
              className={
                "portfolio__single topy-tilt fade-top" +
                (hover === 6 ? " portfolio__single-active" : " ")
              }
              onMouseEnter={() => setHover(6)}
            >
              <Link href="portfolio">
                <Image src={seven} alt="Image" />
              </Link>
              <div className="portfolio__single-content">
                <Link href="portfolio">
                  <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                </Link>
                <h4>
                  <Link href="portfolio">Digital Marketing</Link>
                </h4>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="lines d-none d-lg-flex">
        {/* <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div> */}
      </div>
    </section>
  );
};

export default PortfolioText;
