import React from "react";
import "./Regularfood.css";
import Images from "../../../../../assets/Js/images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Regularfood = () => {
  const Regularfood = [
    {
      img: Images?.beefpasta,
      name: "Beef Pasta",
      content: "This is an excellent beef pasta that is very healthy",
      price: "Rs.240",
    },
    {
      img: Images?.biryani,
      name: "Chicken Biryani",
      content: "This is an excellent chicken biryani that is very healthy",
      price: "Rs.220",
    },
    {
      img: Images?.chickenfry,
      name: "Chicken Fry",
      content: "This is an excellent chickenfry that is very healthy",
      price: "Rs.340",
    },
    {
      img: Images?.muttonkheema,
      name: "Mutton Kheema",
      content: "This is an excellent mutton kheema that is very healthy",
      price: "Rs.420",
    },
    {
      img: Images?.biryani,
      name: "Chicken Biryani",
      content: "This is an excellent chicken biryani that is very healthy",
      price: "Rs.220",
    },
    {
      img: Images?.chickenfry,
      name: "Chicken Fry",
      content: "This is an excellent chickenfry that is very healthy",
      price: "Rs.340",
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
    <div className="Regularfood">
      <div class="container">
        <h2 className="mb-3">OUR REGULAR FOOD</h2>
        <h6 className="mb-5">
          This is our daily food list.Here you will find all kinds of food
          choose your favourite food and order
        </h6>
        <Slider {...settings}>
          {Regularfood?.map((dish) => (
            <div className="p-1">
              <div class="card flex-fill h-100 mb-sm-2 col-lg-4 col-md-4 col-sm-12">
                <div className="card-body">
                  <img src={dish.img} className="card-img-top img-fluid mb-2" />
                  <h2>{dish.name}</h2>
                  <h6 className="mb-3">{dish.content}</h6>
                  <div className="d-flex price">
                    <div>{dish.price}</div>
                    <button>Buy Now</button>
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

export default Regularfood;
