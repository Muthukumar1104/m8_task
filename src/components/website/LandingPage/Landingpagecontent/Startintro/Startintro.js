import React from "react";
import "./Startintro.css";
import Images from "../../../../../assets/Js/images";

const Startintro = () => {
  return (
    <div className="start_intro col-lg-12 col-md-12 col-sm-12">
      <img src={Images?.leaf} className="leaf" />
      <div className="start row col-lg-12 col-md-12 col-sm-12">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <button class="btn btn-outline-success hungry mb-3" type="submit">
            Hungry
          </button>
          <h1 className="mb-3">JUST COME TO ORDER FOODIED & ORDER</h1>
          <h6>Here You Will Find All The Best Quantity And Pure Food </h6>
          <h6 className="mb-4">Now To Satisify Your Hanger Pangs</h6>
          <div className="buttons d-flex col-lg-12">
            <button
              class="btn btn-outline-success me-3 order col-lg-6"
              type="submit"
            >
              Order Now
            </button>
            <button
              class="btn btn-outline-success explore col-lg-6"
              type="submit"
            >
              Explore More
            </button>
          </div>
        </div>
        <div className="Allfood col-lg-6 col-md-6 col-sm-12">
          <img src={Images?.Allfood} className="Allfoodimg" />
        </div>
      </div>
    </div>
  );
};

export default Startintro;
