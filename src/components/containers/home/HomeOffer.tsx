import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import blogthumb from "public/images/offer/blog-thumb.png";
import two from "public/images/offer/two.png";
import three from "public/images/offer/three.png";
import star from "public/images/offer/star.png";
import RawData from "./serviceData.json";
import { serviceData } from "@/store/atoms/serviceSingleAtom";
import { useRecoilState } from "recoil";

const HomeOffer = () => {
  const [data, setData] = useRecoilState(serviceData);
  const linearGradient = {
    backgroundImage:
      "linear-gradient(90deg, #ff7425 0%, rgba(255, 116, 37, 0) 60.08%)",
    backgroundColor: "red",
    color: "black",
    fontWeight: "bold",
  };
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const caseStudyItems = document.querySelectorAll(".offer__cta-single");
      const deviceWidth = window.innerWidth;

      if (deviceWidth > 576) {
        caseStudyItems.forEach((item) => {
          const contentBox = item.getBoundingClientRect();
          const dx = event.clientX - contentBox.x;
          const dy = event.clientY - contentBox.y;
          const thirdChild = item.children[2] as HTMLElement;
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section offer fade-wrapper light">
      <div className="container">
        <div className="row gaper">
          <div className="col-12 col-lg-5 ">
            <div className="offer__content section__content">
              <span
                className="sub-title"
                style={linearGradient}
              >
                WHAT WE OFFER
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <h2 className="title title-anim">
                Giving Your Business Some Great Ideas
              </h2>
              <div className="paragraph">
                <p
                >
                  Bring to the table win-win survival strategies to ensure
                  proactive domination. At the end of the day, going forward, a
                  new normal that has evolved from generation on the runway
                  heading towards a streamlined cloud solution going forward
                  porttitor dictum sapien.
                </p>
              </div>
              <div className="section__content-cta">
                <Link href="our-services" className="btn btn--secondary">
                  view all services
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  ⭐<i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link
                    href="service-single"
                    onClick={() => {
                      setData(RawData.SMM);
                    }}
                    style={{ color: "white" }}
                  >
                    Social Media Management
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  ⭐<i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link
                    href="service-single"
                    onClick={() => {
                      setData(RawData.Marketing);
                    }}
                    style={{ color: "white" }}
                  >
                    Marketing & Branding
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={two} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  ⭐<i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link
                    href="service-single"
                    onClick={() => {
                      setData(RawData.VideoEditing);
                    }}
                    style={{ color: "white" }}
                  >
                    Video Editing
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={three} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                <span className="sub-title">
                  ⭐<i className="fa-solid fa-arrow-right"></i>
                </span>
                <h2>
                  <Link
                    href="service-single"
                    onClick={() => {
                      setData(RawData.Advertisement);
                    }}
                    style={{ color: "white" }}
                  >
                    Advertisement
                    <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                  </Link>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt="Image" className="star" />
      {/* <div className="lines d-none d-lg-flex">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> */}
    </section>
  );
};

export default HomeOffer;
