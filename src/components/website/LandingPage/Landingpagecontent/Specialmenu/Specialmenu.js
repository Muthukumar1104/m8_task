import React from "react";
import "./Specialmenu.css";
import Images from "../../../../../assets/Js/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Specialmenu = () => {
  const Specialmenu = [
    {
      img: Images?.salad,
      name: "Salad",
      content: "This is an excellent salad that is very healthy",
      price: "Rs.100",
    },
    {
      img: Images?.friedfish,
      name: "Fried Fish",
      content: "This is an excellent fried fish that is very healthy",
      price: "Rs.350",
    },
    {
      img: Images?.biryani,
      name: "Chicken Biryani",
      content: "This is an excellent biryani that is very healthy",
      price: "Rs.120",
    },
    {
      img: Images?.eggmasala,
      name: "Egg Masala",
      content: "This is an excellent eggmasala that is very healthy",
      price: "Rs.140",
    },
    {
      img: Images?.icecream,
      name: "Special Dessert",
      content: "This is an excellent special dessert that is very healthy",
      price: "Rs.140",
    },
  ];

  const settings = {
    dots: true, // Display dots for navigation
    infinite: true, // Loop through the slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 4, // Number of slides to scroll at once
    prevArrow: <></>, // Empty component to hide the default left arrow
    nextArrow: <></>, // Empty component to hide the default right arrow
    responsive: [
      // responsive
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="special_menu">
      <img src={Images?.leaf} className="leaf" />
      <div class="container">
        <h2 className="mb-3">SPECIAL MENU</h2>
        <h6 className="mb-5">
          Some of special food menu is given here these are what people order
          more.If you order from here.
        </h6>
        <Slider {...settings}>
          {Specialmenu?.map((dish) => (
            <div className="p-1">
              <div class="card flex-fill h-100 mb-sm-2 col-lg-4 col-md-4 col-sm-12">
                <div className="card-body">
                  <img src={dish.img} className="card-img-top img-fluid mb-2" />
                  <h2>{dish.name}</h2>
                  <h6 className="mb-3">{dish.content}</h6>
                  <div className="plus_icon d-flex justify-content-center align-items-center">
                    <i class="fa fa-plus-square-o" aria-hidden="true" />
                  </div>
                  <div className="d-flex price">
                    <div>{dish.price}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Specialmenu;
