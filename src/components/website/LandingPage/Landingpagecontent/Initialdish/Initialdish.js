import React from "react";
import "./Initialdish.css";
import Images from "../../../../../assets/Js/images";

const Initialdish = () => {
  const firstpartdish = [
    {
      img: Images?.burger,
      name: "Chicken Burger",
      content: "This is an excellent chicken burger that is very healthy",
      price: "Rs.100",
    },
    {
      img: Images?.pizza,
      name: "Chicken Pizza",
      content: "This is an excellent chicken pizza that is very healthy",
      price: "Rs.350",
    },
    {
      img: Images?.biryani,
      name: "Chicken Rice",
      content: "This is an excellent chicken rice that is very healthy",
      price: "Rs.120",
    },
    {
      img: Images?.icecream,
      name: "Special Dessert",
      content: "This is an excellent special dessert that is very healthy",
      price: "Rs.140",
    },
  ];

  return (
    <div className="initialdish">
      <div class="container">
        <div class="row">
          {firstpartdish?.map((dish) => (
            <div class="card_part col-lg-3 col-md-6 col-sm-12 mb-sm-4">
              <div class="card d-flex flex-fill h-100">
                <div className="card-body">
                  <img src={dish.img} className="card-img-top img-fluid mb-2" />
                  <h2>{dish.name}</h2>
                  <h6 className="mb-3">{dish.content}</h6>
                  <div className="price d-flex">
                    <div>{dish.price}</div>
                    <button>Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Initialdish;
