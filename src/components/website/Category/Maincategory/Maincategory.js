import React, { useEffect, useState, useContext } from "react";
import "./Maincategory.css";
import Appcontext from "../../../common/Appcontext/Appcontext";
import Images from "../../../../assets/Js/images";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Maincategory = () => {
  const { user } = useContext(Appcontext);
  const [maincategory, setMaincategory] = useState([]);

  //Main-category
  useEffect(() => {
    axios({
      method: "get",
      url: " https://api.toou.in/main_category",
      headers: {
        Authorization: `Bearer ${user?.loginfo?.access_token}`,
      },
      params: {
        id: user?.loginfo?.id,
        geotag: "11.025378,76.9758161",
      },
    }).then((res) => {
      if (res?.status == 200) {
        setMaincategory(res?.data?.data);
      }
    });
  }, []);

  //Images-import
  const categoryImg = [
    {
      img: Images?.product,
      content:
        "If you’re competitor focused, you have to wait until there is a competitor doing something. Being customer-focused allows you to be more pioneering",
    },
    {
      img: Images?.food,
      content:
        "Tapas are small Spanish appetizers or snacks. They can include a variety of options like marinated olives, cheese cubes",
    },
    {
      img: Images?.service,
      content:
        "Customers don’t expect you to be perfect. They do expect you to fix things when they go wrong.",
    },
  ];

  //show details
  const navigate = useNavigate();
  const showDetails = (detail) => {
    navigate(`/category/${detail?.name}`, { state: { Detail: detail ?? {} } });
  };

  return (
    <div className="Maincategory mt-5 mb-5">
      <div className="container col-lg-12 col-md-12 col-sm-12">
        {maincategory?.map((maincat, i) => (
          <div
            className="card h-auto col-lg-3 col-md-4 col-sm-12"
            onClick={() => showDetails(maincat)}
          >
            <div className="card-body">
              <img
                src={categoryImg[i].img}
                className="card-img-top img-fluid mb-2"
              />
              <h2>{maincat.name}</h2>
              <h6 className="mb-3">{categoryImg[i].content}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maincategory;
