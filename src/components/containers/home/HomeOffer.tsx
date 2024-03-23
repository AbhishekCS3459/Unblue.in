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
      "linear-gradient(90deg, #00cb7e 15%, rgba(255, 116, 37, 0) 60.08%)",
    backgroundColor: "#08A9F3",
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
          if(thirdChild)
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
              <span className="sub-title" style={linearGradient}>
               What We Offer
                <i className="fa-solid fa-arrow-right"></i>

              </span>
              <h2 className="title title-anim">
                We don&apos;t just offer services. we provide solutions that
                transform brands.
              </h2>
              <div className="paragraph">
                <p>
                  Fulfill your ambitions with our innovative solutions. From
                  concept to execution, we are here to turn your vision into
                  reality. Explore our offerings and let&apos;s create greatness
                  together!
                </p>
              </div>
              <div className="section__content-cta"
              >
                <Link
                  href="our-services"
                  className="btn btn--secondary"
                  style={{
                    background:"#006BFA",
                    outline: "blue",
                    stroke: "blue",
                    border: "blue 1px solid",
                  }}
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 col-xl-6 offset-xl-1">
            <div className="offer__cta">
              <div className="offer__cta-single fade-top">
                {/* <span className="sub-title">
                  <i className="fa-solid fa-arrow-right"></i>
                </span> */}
                <h2>
                  <div
                    className="section__content-cta"
                    style={{
                      backgroundColor: "tranaparent",
                      color: "white",
                      padding: "10px",
                      borderRadius: "30px",
                      cursor: "pointer",
                      border: "1px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 0px 5px 3px #b6f5f6",
                    }}
                  >
                    {/* yahe per our projects ka ek page banega aur our-services ke jagah pe "services-single" krke link add hoga */}
                    <Link
                      href="our-services"
                      
                      onClick={() => {
                        setData(RawData.VideoEditing);
                      }}
                      style={{
                        color: "white",
                        fontSize: "40px",
                        marginLeft: "10px",
                      }}
                    >
                      Video Editing
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={blogthumb} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                {/* <span className="sub-title">
                  <i className="fa-solid fa-arrow-right"></i>
                </span> */}
                <h2>
                  <div
                    className="section__content-cta"
                    style={{
                      backgroundColor: "tranaparent",
                      color: "white",
                      padding: "10px",
                      borderRadius: "30px",
                      cursor: "pointer",
                      border: "1px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 0px 5px 3px #b6f5f6",
                    }}
                  >
                    <Link
                      // href="service-single"
                      href="our-services"
                      onClick={() => {
                        setData(RawData.Advertisement);
                      }}
                      style={{
                        color: "white",
                        fontSize: "40px",
                        marginLeft: "10px",
                      }}
                    >
                      Content Creation
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={two} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                {/* <span className="sub-title">
                  <i className="fa-solid fa-arrow-right"></i>
                </span> */}
                <h2>
                  <div
                    className="section__content-cta"
                    style={{
                      backgroundColor: "tranaparent",
                      color: "white",
                      padding: "10px",
                      borderRadius: "30px",
                      cursor: "pointer",
                      border: "1px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 0px 5px 3px #b6f5f6",
                    }}
                  >
                    <Link
                      // href="service-single"
                      href="our-services"
                      onClick={() => {
                        setData(RawData.Marketing);
                      }}
                      style={{
                        color: "white",
                        fontSize: "40px",
                        marginLeft: "10px",
                      }}
                    >
                      Marketing & Branding
                      <i className="fa-sharp fa-solid fa-arrow-up-right"></i>
                    </Link>
                  </div>
                </h2>
                <div className="offer-thumb-hover d-none d-md-block">
                  <Image src={three} alt="Image" />
                </div>
              </div>
              <div className="offer__cta-single fade-top">
                {/* <span className="sub-title">
                  <i className="fa-solid fa-arrow-right"></i>
                </span> */}
                <h2>
                  <div
                    className="section__content-cta"
                    style={{
                      backgroundColor: "tranaparent",
                      color: "white",
                      padding: "10px",
                      borderRadius: "30px",
                      cursor: "pointer",
                      border: "1px solid white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0px 0px 5px 3px #b6f5f6",
                    }}
                  >
                    <Link
                      // href="service-single"
                      href="our-services"
                      onClick={() => {
                        setData(RawData.SMM);
                      }}
                      style={{
                        color: "white",
                        fontSize: "40px",
                        marginLeft: "10px",
                      }}
                    >
                      Social Media Management
                      <i
                        className="fa-sharp fa-solid fa-arrow-up-right"
                        style={{ marginRight: "10px" }}
                      ></i>
                    </Link>
                  </div>
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
