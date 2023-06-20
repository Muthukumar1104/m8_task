import React, { useContext } from "react";
import "./Navbar.css";
import Appcontext from "../Appcontext/Appcontext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { setUser } = useContext(Appcontext);
  //logout function
  const navigate = useNavigate();
  const handleLogOut = (e) => {
    e.preventDefault();
    setUser({ type: "logout" });
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <div className="Topnavbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container col-lg-12">
          <div className="logo col-lg-4">
            <a class="navbar-brand " href="/">
              FOODIED
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse col-lg-8" id="navbarNav">
            <ul class="navbar-nav col-lg-6">
              <li class="nav-item">
                <a class="nav-link" href="/home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/category">
                  Category
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <form class="col-lg-6 col-sm-12 " onSubmit={(e) => handleLogOut(e)}>
              <button class="btn btn-outline-success" type="submit">
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
