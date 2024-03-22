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
                        fontFamily: "BOLD",
                        marginTop: "1rem",
                        
                      }}
                    >
                    Welcome to UNBLUE, where creativity knows no bounds and your brand&apos;s potential is unleashed! 
                    🚀 As a premier digital agency, we specialize in crafting captivating narratives through video editing, 
                    content creation, advertising, and branding that leave a lasting impression.

At UNBLUE, we do not just create content; we sculpt experiences that resonate deeply with your audience, driving engagement 
and sparking conversations. Our team of visionary storytellers, innovative designers, and strategic marketers work tirelessly 
to bring your brand&apos;s vision to life in ways that defy expectations.

Whether you are seeking to elevate your online presence, launch a memorable campaign, or redefine your brand identity, UnBlue 
is your partner in success. With our blend of creativity, expertise, and passion, we transform ideas into impactful realities 
that set you apart in today&apos;s competitive digital landscape.

Join us on a journey where the possibilities are endless, and the results are extraordinary. Let&apos;s paint the digital canvas
 together and make your brand shine brighter than ever before. Elevate your digital presence with UNBLUE – where creativity 
 meets innovation, and your success is our mission! 
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
