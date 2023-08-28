import React from "react";
import { Link } from "react-router-dom";
import Data from "./servicedata.json";
import Header from "./Header";
import Footer from "./Footer";

function Services() {
  return (
    <>
      <Header />
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-8 contactus-1 p-5">
            <h2 className="hero-text py-2 px-5">Services</h2>
            <h3 className="service-text px-5 text-center py-4">
              Category of our services
            </h3>
            {Data.slice(0, 5).map((a) => {
              return (
                <>
                  <div className="position-relative">
                    <img src={a.image} className="card-img-top p-5" alt="..." />
                    <h2 className="position-absolute title-text">{a.title}</h2>
                  </div>
                  <p className="px-5 hero-text2">{a.titledata}</p>
                  <Link to={`/detail/${a.id}`}>
                    {" "}
                    <button className="primary-btn ms-5">Learn More</button>
                  </Link>
                </>
              );
            })}
            <h3 className="service-text px-5 text-center py-4">Site Content</h3>
            {Data.slice(5, 8).map((a) => {
              return (
                <>
                  <div className="row">
                    <div className="col-lg-6">
                      <img
                        src={a.image}
                        className=" p-5"
                        alt="..."
                        width="400px"
                        height="400px"
                      />
                    </div>
                    <div className="col-lg-6 py-3">
                      <h2 className="hero-text  pt-5">{a.title}</h2>
                      <p className="hero-text2">{a.titledata} </p>
                      <button className="primary-btn ">Learn More</button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="col-lg-4">
            <div className="contactus-1 p-5 mb-2">
              <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Search"
                aria-label=".form-control-lg example"
              />
            </div>

            <div className="contactus-1 pb-4 mb-2">
              <h2 className="p-5 contact-head">Recent posts</h2>
              <p className="px-5 contactus-links">
                Urgent Hiring Position apply now
              </p>
              <p className="px-5 contactus-links"> International Recruitment</p>
              <p className="px-5 contactus-links"> Our Goals</p>
              <p className="px-5 contactus-links"> Marketing Plans</p>
              <p className="px-5 contactus-links"> HR Consulting</p>
            </div>
            <div className="contactus-1 p-5 mb-2">
              <h2 className=" contact-head">Recent Comments</h2>
            </div>
            <div className="contactus-1 p-5 mb-2 ">
              <h2 className="contact-head">Archives</h2>
              <p className="contactus-links">March 2023</p>
            </div>
            <div className="contactus-1 pb-4 mb-2">
              <h2 className="px-5 pt-5 pb-3 contact-head">Meta</h2>
              <p className="px-5 contactus-links">Log in</p>
              <p className="px-5 contactus-links"> Entries feed</p>
              <p className="px-5 contactus-links"> Comments feed</p>
              <p className="px-5 contactus-links"> Marketing Plans</p>
              <p className="px-5 contactus-links"> WordPress.org</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
