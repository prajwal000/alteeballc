import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Contactus() {
  return (
    <>
      <Header />
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-8 contactus-1 p-5">
            <h2 className="p-5 hero-text">Contact Us</h2>
            <p className="px-5 contact-content">
              {" "}
              Thank you for visiting our website! We value your interest and
              feedback.
            </p>

            <p className="px-5 contact-content">
              {" "}
              If you have any questions, comments, or suggestions, please feel
              free to reach out to us. You can contact us through the following
              methods:
            </p>

            <p className="px-5 contact-content">
              {" "}
              We are always happy to hear from our visitors and customers.
              Whether you need assistance with an order, have a general inquiry,
              or simply want to provide feedback, we are here to help.
            </p>

            <p className="px-5 contact-content">
              {" "}
              Please note that we strive to respond to all inquiries within 24
              hours during business days. If you do not receive a response
              within this time frame, please check your spam folder or contact
              us again.
            </p>

            <p className="px-5 contact-content">
              {" "}
              Thank you again for your interest in our website, and we look
              forward to hearing from you soon.
            </p>
            <iframe
              className="px-5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d382881.62767604983!2d54.20570748883315!3d24.45162175263211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e440f723ef2b9%3A0xc7cc2e9341971108!2sAbu%20Dhabi%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2snp!4v1684825827277!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <h5 className="text-center py-4">AL Teeba LLC</h5>
            <p className="text-center hero-text2">
              GGICO Metro Station 2 – Dubai – United Arab Emirates
            </p>
            <p className="text-center hero-text2">+971 42699322</p>

            <h5 className="text-center py-4">Hours</h5>
            <p className="text-center hero-text2">Open 09:00 AM – 05:00 PM</p>
            <p className="text-center hero-text2">
              Saturday – Sunday : Appointment Only
            </p>
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

export default Contactus;
