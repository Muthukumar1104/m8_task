import React, { Fragment } from "react";
import "./Contact.css";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="Contact col-lg-12 col-md-12 col-sm-12 m-4">
        <div className="container">
          <div className="row col-lg-12 col-md-12 col-sm-12">
            <div className="contactdetails col-lg-6 col-md-6 col-sm-12">
              <h1 className="mt-2 mb-4">Contact Details</h1>
              <p>Address: Alexandria, 32 Washingtorn str, 22303 </p>
              <p> Phones: (123) 456-7890 </p>
              <p>E-mail: info@demolink.org </p>
              <p>We are open: Mo-Fr 11:00-00:00, Sa-Su </p>
              <p>15:00-00:00</p>
            </div>
            <div className="comment col-lg-6 col-md-6 col-sm-12">
              <h1 className="mt-2 mb-4">Let’s Get in Touch</h1>
              <div className="formcontent">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control login-form"
                    id="email"
                    name="email"
                    placeholder="Enter Your Name"
                    required
                    //   onChange={handleChangelab}
                  />
                </div>
                <div className="form-group mt-4">
                  <input
                    type="email"
                    className="form-control login-form"
                    id="email"
                    name="email"
                    placeholder="Enter Your E-mail"
                    required
                    //   onChange={handleChangelab}
                  />
                </div>
                <div className="form-group mt-4">
                  <input
                    type="email"
                    className="form-control login-form"
                    id="email"
                    name="email"
                    placeholder="Enter Your Website"
                    required
                    //   onChange={handleChangelab}
                  />
                </div>
                <div className="form-group mt-4">
                  <textarea
                    type="text"
                    className="form-control login-form"
                    id="email"
                    name="email"
                    placeholder="Enter Your Messsage"
                    required
                    //   onChange={handleChangelab}
                  />
                </div>
                <button className="mt-4">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Contact;
