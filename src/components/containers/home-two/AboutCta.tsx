import React from "react";
import Image from "next/image";
import star from "public/images/testimonial/star.png";

const AboutCta = () => {
  return (
    <section className="cta-s section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="cta__wrapper"
              data-background="assets/images/cta-bg.png"
            >
              <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-9">
                  <div className="section__header text-center">
                    <h2 className="title">
                      Stay Ahead With Our Top Notch Services
                    </h2>
                    <p
                      style={{
                        textAlign: "start",
                        fontSize: "1.2rem",
                        lineHeight: "1.8",
                        fontFamily: "Poppins",
                        marginTop: "1rem",
                        
                      }}
                    >
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione deleniti magnam sapiente debitis ipsa libero ullam
                      obcaecati laboriosam qui beatae, voluptas porro ipsam!
                      Nemo pariatur tempore, magni veniam ad voluptatibus! Lorem
                      ipsum dolor sit amet consectetur adipisicing elit.
                      Expedita sint voluptate repudiandae deserunt quia ullam
                      officia laboriosam recusandae magnam, consequuntur modi
                      accusamus ut ea. Quod deleniti placeat officia illum
                      libero. Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Accusamus labore culpa autem nulla blanditiis
                      suscipit, quia odio atque dignissimos esse sit beatae
                      voluptatibus et velit, doloribus reiciendis consequuntur
                      nisi non.
                    </p>
                  </div>
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
              <Image src={star} alt="Image" className="star" />
              <Image src={star} alt="Image" className="star-two" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCta;
