/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import banneronethumb from "public/images/banner/banner-one-thumb.png";
import star from "public/images/star.png";
import videoframe from "public/images/video-frame.png";
import YoutubeEmbed from "@/components/youtube/YoutubeEmbed";

gsap.registerPlugin(ScrollTrigger);
const HomeOneBanner = () => {
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const device_width = window.innerWidth;

      if (
        document.querySelectorAll(".g-ban-one").length > 0 &&
        device_width > 576
      ) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".banner",
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: false,
          },
        });

        tl.set(".g-ban-one", {
          y: "-10%",
        });

        tl.to(".g-ban-one", {
          opacity: 0,
          scale: 2,
          y: "100%",
          zIndex: -1,
          duration: 2,
        });
      }
    }
  }, []);

  return (
    <>
      <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner__content">
                <h1
                  className="text-uppercase text-start fw-9 mb-0 title-anim"
                  style={{
                    pointerEvents: "none",
                    textShadow: "0px 50px 50px black",
                  }}
                >
                  A creative & &nbsp;
                  <span className="text-stroke">{' '}Innovative </span>
                  <span className="interval">
                    <i className="icon-arrow-top-right"></i> digital agency
                  </span>
                </h1>
                <div className="banner__content-inner">
                  <p>
                    We are a dynamic squad of passionate souls who are dedicated
                    to accelerating brand's growth through the unlimited power
                    of social media like Instagram, YouTube, LinkedIn and more.
                  </p>
                  <div className="cta section__content-cta">
                    <div className="single">
                      <h5 className="fw-7">2+</h5>
                      <p className="fw-5">Years Of Experience</p>
                    </div>
                    <div className="single">
                      <h5 className="fw-7">100+</h5>
                      <p className="fw-5">Completed Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          style={{
            pointerEvents: "none",
          }}
          //TODO
          src={banneronethumb}
          alt="Image"
          className="banner-one-thumb d-none d-sm-block g-ban-one"
        />
        <Image src={star} alt="Image" className="star" />
        <div className="banner-left-text banner-social-text d-none d-md-flex">
          <Link href="mailto:unblueconsultation@gmail.com">
            Mail Us: unblueconsultation@gmail.com
          </Link>
          <Link href="tel:+91 72609 20637">Call : +91 72609 20637 / 99329 08262 </Link>
        </div>
        <div className="banner-right-text banner-social-text d-none d-md-flex">
          <Link
            //DONE

            href="https://www.instagram.com/unblue.in"
            target="_blank"
          >
            Instagram
          </Link>
          <Link
            href="https://www.linkedin.com/company/unblue-consultation/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
        <button
          className="video-frame video-btn"
          onClick={() => setVideoActive(true)}
        >
          <Image src={videoframe} alt="Image" priority />
          <i className="fa-sharp fa-solid fa-play"></i>
        </button>
        <div className="lines d-none d-lg-flex">
          {/* <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div> */}
        </div>
      </section>
      <div
        className={(videoActive ? " video-zoom-in" : " ") + " video-backdrop"}
        onClick={() => setVideoActive(false)}
      >
        <div className="video-inner">
          <div
            className="video-container"
            onClick={(e: any) => e.stopPropagation()}
          >
            {videoActive && <YoutubeEmbed embedId="6ZbdMUKbOxQ" />}
            <button
              aria-label="close video popup"
              className="close-video-popup"
              onClick={() => setVideoActive(false)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeOneBanner;
