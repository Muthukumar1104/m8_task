import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="bg-grey text-white">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3">
            <h5>Menu</h5>
            <p>Home</p>
            <p>Why choose</p>
            <p>Special Menu</p>
            <p>Regular Food</p>
          </div>
          <div class="col-md-6 col-lg-3">
            <h5>Help</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & conditions</a>
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-lg-3">
            <h5>Contact</h5>
            <p>+91-7787091200</p>
            <p>info@foodied.com</p>
            <p>12345,Chennai.</p>
          </div>
          <div class="col-md-6 col-lg-3">
            <h5 className="mb-3">Subscribe Our Newsletter</h5>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Email address"
              />
              <button class="btn btn-dark" type="button">
                Subscribe
              </button>
            </div>
            <div class="social-icons">
              <a
                href="https://www.facebook.com/your-page-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-facebook" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/your-page-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-twitter" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/your-page-url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-instagram" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/channel/your-channel-id"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa fa-youtube-play" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <p class="text-center">© 2023 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
