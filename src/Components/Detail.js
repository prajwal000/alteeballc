import React from "react";
import Data from "./servicedata.json";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Detail() {
  let { id } = useParams();
  let qq = Data.find((a) => a.id === id);
  return (
    <>
      <Header />
      <section className="container py-5">
        <div className="contactus-1 px-5 pt-5 pb-5">
          <h2 className="hero-text px-5 pt-5">{qq.title}</h2>
          <p className="contactus-links px-5 pb-3 ">
            Leave a Comment / By admin
          </p>
          <p className="hero-text2 px-5">{qq.P1}</p>
          <p className="hero-text2 px-5">{qq.P2}</p>
          <p className="hero-text2 px-5">{qq.P3}</p>
          <p className="hero-text2 px-5">{qq.P4}</p>
          <p className="hero-text2 px-5">{qq.P5}</p>
          <p className="hero-text2 px-5">{qq.P6}</p>
        </div>
        <div className="d-flex justify-content-between py-5">
          <div>
            <Link className=" contactus-links">← Previous Post</Link>
          </div>
          <div className=" contactus-links">Next Post →</div>
        </div>

        <div className="p-5 contactus-1 ">
          <h2 className="hero-text ps-5 pb-3">Leave a Comment</h2>
          <p className="px-5 hero-text2">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <form className="px-5">
            <textarea
              class="form-control "
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              rows="10"
            ></textarea>
            <input
              type="text "
              className=" my-4 py-3 form px-2 me-5"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className=" my-4 py-3 form px-2 me-5"
              placeholder="Email"
              required
            />
            <input
              type="url"
              className=" my-4 py-3 form px-2 "
              placeholder="Website"
              required
            />
            <div className="d-flex align-items-center">
              <input type="checkbox" />
              <div className="hero-text2 ps-4">
                Save my name, email, and website in this browser for the next
                time I comment.
              </div>
            </div>
            <button className="primary-btn my-4">Post Comment</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Detail;
