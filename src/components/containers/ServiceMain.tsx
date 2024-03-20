import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import toast, { Toaster } from "react-hot-toast";

const ServiceMain = () => {
  const notify = () => {
    toast.success('Please Wait a Few Days.', {
      style: {
        border: '1px solid skyblue',
        padding: '16px',
        color: 'black',
      },
      iconTheme: {
        primary: 'skyblue',
        secondary: '#FFFAEE',
      },
    });
    
  };
  return (
    <section className="section service-t">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-t__slider-w">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                centeredSlides={false}
                modules={[Autoplay, Navigation]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  nextEl: ".next-service-t",
                  prevEl: ".prev-service-t",
                }}
                className="service-t__slider"
                breakpoints={{
                  1400: {
                    slidesPerView: 4,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
              >
                <SwiperSlide
                >
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          01
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="content-creation">Content Creation</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Define Idea</li>
                        <li>Competitor Reserach</li>
                        <li>Target Audience</li>
                        <li>Idea Validation</li>
               
                      </ul>
                      {/* <div className="cta">
                        <Link href="content-creation">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="video-editing"> Video Editing </Link>
                        </h4>
                      </div>
                      <ul>
                      <li>Shorts & Reels </li>
                        <li>Animated Video</li>
                        <li>Corporate Video</li>
                        <li>Documentary Video</li>
                        
                    
                      </ul>
                      {/* <div className="cta">
                        <Link href="video-editing">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="social-media-management">
                            Social Media Management
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>YouTube</li>
                        <li>Instagram</li>
                        <li>Final Presentation</li>
                        <li>Final Delivery</li>
                   
                      </ul>
                      {/* <div className="cta">
                        <Link href="social-media-management">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                {/* pitch designing  */}
                {/* <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Pitch Designing </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Front End</li>
                        <li>Backend</li>
                        <li>Mobile App</li>
                        <li>Post Delivery Support</li>
              
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          04
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="marketing-and-branding">
                           Marketing and Branding{" "}
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Define Identity</li>
                        <li>Brand Perception</li>
                        <li>Values & Promise</li>
                        <li>Experiecnce</li>
          
                      </ul>
                      {/* <div className="cta">
                        <Link href="marketing-and-branding">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide onClick={notify}>
                  <div className="service-t-single-wrapper" >
                    <div className="service-t__slider-single">
                      <div className="intro"
                      >
                        <span className="sub-title">
                          05
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="#"
                          // onClick={notify}
                          >
                            Comming Soon......
                          </Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Updated Soon</li>
                        <li>Updated Soon</li>
                        <li>Updated Soon</li>
                        <li>Updated Soon</li>
                      </ul>
                      {/* <div className="cta">
                        <Link href="service-single"
                        >
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          02
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">StartUp Funding</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Hi-Fidelity Wireframe</li>
                        <li>Design System</li>
                        <li>Final Presentation</li>
                        <li>Final Delivery</li>
                        <li>Post Delivery Support</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="service-t-single-wrapper">
                    <div className="service-t__slider-single">
                      <div className="intro">
                        <span className="sub-title">
                          03
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                        <h4>
                          <Link href="service-single">Development</Link>
                        </h4>
                      </div>
                      <ul>
                        <li>Front End</li>
                        <li>Backend</li>
                        <li>Mobile App</li>
                        <li>Post Delivery Support</li>
                        <li>server development</li>
                      </ul>
                      <div className="cta">
                        <Link href="service-single">
                          <i className="icon-arrow-top-right"></i>
                          <span>service details</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide> */}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-group">
        <button aria-label="previous item" className="slide-btn prev-service-t">
          <i className="fa-light fa-angle-left"></i>
        </button>
        <button aria-label="next item" className="slide-btn next-service-t">
          <i className="fa-light fa-angle-right"></i>
        </button>
      </div>

      <Toaster   position="top-right"
  reverseOrder={false}/>
    </section>
  );
};

export default ServiceMain;
