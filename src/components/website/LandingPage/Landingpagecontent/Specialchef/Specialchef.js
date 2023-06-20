import React from "react";
import "./Specialchef.css";
import Images from "../../../../../assets/Js/images";

const Specialchef = () => {
  const Specialchef = [
    {
      img: Images?.chef1,
      className: "chef_img",
    },
    {
      img: Images?.chef2,
      className: "chef_img2",
    },
    {
      img: Images?.chef3,
      className: "chef_img3",
    },
  ];

  return (
    <div className="Specialchef">
      <img src={Images?.leaf} className="leaf" />
      <div class="container mb-5">
        <h2 className="mb-3">OUR SPECIAL CHEF's</h2>
        <h6> Featured are some of our special chefs who work</h6>
        <h6 className="mb-5">to prepare your meals</h6>
        <div class="row">
          {Specialchef?.map((chef) => (
            <div class="chef row col-lg-4 col-md-4 col-sm-12 ">
              <img src={chef?.img} className={chef?.className} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialchef;
