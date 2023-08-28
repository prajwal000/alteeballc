import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-4 mob-img">
            <img
              src={require("../images/logo.webp")}
              width="370px"
              className="ps-5 "
              alt=""
            />
          </div>
          <div className="col-lg-8">
            <h2 className="hero-text">
              Helping With Any Of Your
              <br />
              Business Needs!
            </h2>
          </div>
        </div>
      </section>
      <section className="container">
        <p className="text-center">
          <h2 className="hero-text">We Are Hiring For Brocelli Hospital !</h2>
        </p>
        <div className="text-center">
          {" "}
          <img
            src={require("../images/post1.webp")}
            width="768px"
            height="100%"
            alt=""
          />
        </div>
        <div className="py-4 text-center">
          <button className="primary-btn">Apply Now</button>
        </div>

        <p className="hero-text2">
          Brocelli Hospital in Dubai is currently hiring for various positions
          to join their team of healthcare professionals. The hospital is
          committed to providing the highest quality of healthcare services to
          patients in the region, and they are seeking qualified and experienced
          individuals who share their values and passion for excellence in
          healthcare.There are several positions available, including nurses,
          physicians, medical technicians, administrative staff, and support
          staff. Each position requires different qualifications and experience,
          but all candidates must have a strong commitment to patient care and
          safety.
        </p>

        <p className="hero-text2 pt-5">
          The hospital offers competitive salaries, comprehensive benefits, and
          opportunities for professional growth and advancement. In addition,
          employees will have access to state-of-the-art facilities and
          technologies that enable them to provide the best possible care to
          patients.
        </p>
        <p className="hero-text2">
          As a leading healthcare provider in Dubai, Brocelli Hospital has a
          reputation for excellence in patient care, research, and education.
          They are committed to creating a supportive and inclusive work
          environment that values diversity and promotes collaboration and
          teamwork. If you are interested in joining the Brocelli Hospital team
          and making a difference in the lives of patients in Dubai, you can
          apply for open positions on the website.
        </p>
      </section>
      <section className="container">
        <h2 className="hero-text text-center py-4">Our Sectors</h2>
        <div className="row">
          <div className="col-lg-4">
            <img
              src={require("../images/sector-1.webp")}
              width="400px"
              height="260px"
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <img
              src={require("../images/sector-2.webp")}
              width="400px"
              height="260px"
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <img
              src={require("../images/sector-3.webp")}
              width="400px"
              height="260px"
              alt=""
            />
          </div>
        </div>
        <div className="row py-4">
          <div className="col-lg-4">
            <img
              src={require("../images/sector-4.webp")}
              width="400px"
              height="260px"
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <img
              src={require("../images/sector-5.webp")}
              width="400px"
              height="260px"
              alt=""
            />
          </div>
          <div className="col-lg-4">
            <img
              src={require("../images/sector-6.webp")}
              width="400px"
              height="260px"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="hero-text text-center pb-4">About us</h2>
        <div className="row align-items-center py-4">
          <div className="col-lg-6">
            <p className="hero-text2">
              At our recruitment business, we understand that finding the right
              talent for your organization can be challenging, time-consuming,
              and costly. That’s why we’re here to help with any of your
              business needs related to recruitment.
            </p>
            <p className="hero-text2">
              With years of experience in the industry, we have the expertise
              and resources to assist you with a wide range of recruitment
              needs, including sourcing, screening, interviewing, and hiring top
              talent for your business. Whether you’re looking to fill a
              specific position or build a high-performing team, we’re committed
              to helping you find the right candidates who can contribute to
              your success
            </p>
            <p className="hero-text2">
              Our team of experienced recruiters is dedicated to providing
              personalized solutions that are tailored to your unique business
              needs. We work closely with you to understand your company
              culture, values, and goals to ensure that we find candidates who
              are the right fit for your organization.
            </p>
          </div>
          <div className="col-lg-6">
            <img src={require("../images/about-us.webp")} alt="" />
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="hero-text text-center py-4">Our Analytical Approach</h2>
        <p className="hero-text2 pt-5">
          Our service includes a comprehensive consult to help identify gaps and
          opportunities, and results in a comprehensive report that includes a
          project plan with timelines a cost analysis. Our individualized plans
          are made up of quality services that will help you get there quickly
          and smoothly.
        </p>
        <div className="text-center">
          <img src={require("../images/our-goals-1.webp")} alt="" />
        </div>
        <p className="hero-text3 py-4">
          We Design Holistic, Human-Centered Digital Experiences.​
        </p>
        <p className="hero-text2">
          With 18 years of expertise assisting employers, working professionals,
          and jobseekers in filling positions and enhancing their skills and
          talent, AL Teeba LLC, a leading executive search & recruitment agency
          and training provider, was founded in the year 2004. The UAE Region’s
          Al Teeba positions across sectors and our Training Programs &
          Certifications have made a significant contribution to the advancement
          of professional careers.
        </p>
        <p className="hero-text2 pt-4">
          With 18 years of expertise assisting employers, working professionals,
          and jobseekers in filling positions and enhancing their skills and
          talent, AL Teeba LLC, a leading executive search & recruitment agency
          and training provider, was founded in the year 2004. The UAE Region’s
          Al Teeba positions across sectors and our Training Programs &
          Certifications have made a significant contribution to the advancement
          of professional careers.
        </p>
      </section>
      <section className="container py-4">
        <h3 className="text-center hero-text">High Demands jobs in UAE</h3>
        <div className="row">
          <div className="col-lg-6">
            <img
              src={require("../images/nursing-1.webp")}
              width="500px"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <img
              src={require("../images/socail-media-1.webp")}
              width="500px"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="container py-4">
        <h3 className="text-center hero-text">HIRING FOR AL TEEBA GROUP</h3>
        <div className="text-center">
          <img
            src={require("../images/Al-Teeba-Position.webp")}
            width="768px"
            alt=""
          />
        </div>
        <div className="py-4 text-center">
          <button className="primary-btn">Apply Now</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
