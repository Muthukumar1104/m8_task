import React from "react";
import "./Whychoose.css";

const Whychoose = () => {
  const whyChoose = [
    {
      img: <i class="fa fa-cutlery" aria-hidden="true" />,
      name: "Serve Healthy Food",
      content:
        "We serve all healthy food here.You can choose any food you like",
    },
    {
      img: <i class="fa fa-star" aria-hidden="true" />,
      name: "Best Quality",
      content:
        "Our food quality is excellent.You will get exactly what you want here",
    },
    {
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="currentColor"
          class="bi bi-truck"
          viewBox="0 0 16 16"
        >
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
        </svg>
      ),
      name: "Fast Delivery",
      content:
        "You can say the main goal of our dlivery man is to deliver orders qucikly.You will receive it shortly after ordering",
    },
  ];

  return (
    <div className="why_choose">
      {/* <img src={Images?.leaf} className="leaf" /> */}
      <div class="container">
        <h2 className="mb-3">Why Choose US?</h2>
        <h6 className="mb-5">
          You will choose us because you get the best quality food from us and
          we deliver fast
        </h6>
        <div class="row">
          {whyChoose?.map((dish) => (
            <div class="card_part col-lg-4 col-md-4 col-sm-12 mb-sm-4">
              <div class="card d-flex flex-fill h-100">
                <div className="card-body">
                  <div class="d-flex justify-content-center align-items-center">
                    {dish?.img}
                  </div>
                  <h2>{dish.name}</h2>
                  <h6>{dish.content}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
