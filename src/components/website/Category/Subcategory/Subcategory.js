import React, { useContext, useState, useEffect, Fragment } from "react";
import "./Subcategory.css";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import Appcontext from "../../../common/Appcontext/Appcontext";
import Navbar from "../../../common/Navbar/Navbar";
import Footer from "../../../common/Footer/Footer";
import Images from "../../../../assets/Js/images";

const Subcategory = () => {
  const { user } = useContext(Appcontext);

  //Get details
  const location = useLocation();
  const { Detail } = location.state ?? "";
  console.log("data", Detail);

  //Sub-category
  const [subcategory, setSubcategory] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: " https://api.toou.in/shop_category",
      headers: {
        Authorization: `Bearer ${user?.loginfo?.access_token}`,
      },
      // params: {
      //   id: user?.loginfo?.id,
      //   geotag: "11.025378,76.9758161",
      // },
    }).then((res) => {
      if (res?.status == 200) {
        setSubcategory(res?.data?.data);
      }
    });
  }, []);

  //Get categorywise data
  const categorywiseData = subcategory?.filter(
    (subcat) => subcat?.category?.name === Detail?.name
  );

  const subcategoryImg =
    Detail?.name === "Product"
      ? [
          {
            img: Images?.electronics,
            content: "This is an excellent electronics that is very healthy",
          },
          {
            img: Images?.fruits,
            content: "This is an excellent fruits that is very healthy",
          },
          {
            img: Images?.fancy,
            content: "This is an excellent fancy dress",
          },
          {
            img: Images?.dress,
            content: "This is an excellent dress matrerial",
          },
        ]
      : Detail?.name === "Food"
      ? [
          {
            img: Images?.restaurants,
            content: "This is an excellent restaurants that is very healthy",
          },
          {
            img: Images?.backery,
            content: "This is an excellent backery that is very healthy",
          },
          {
            img: Images?.juice,
            content: "This is an excellent juice that is very healthy",
          },
          {
            img: Images?.biryani,
            content: "This is an excellent biryani that is very healthy",
          },
        ]
      : Detail?.name === "Service"
      ? [
          {
            img: Images?.bikeservice,
            content: "This is an excellent bike service",
          },
        ]
      : [];

  return (
    <Fragment>
      <Navbar />
      <div className="Subcategory mt-4 mb-5">
        <div className="container col-lg-12 col-md-12 col-sm-12">
          {categorywiseData?.map((maincat, i) => (
            <NavLink to={"/home"} className="links">
              <div
                className="card h-auto col-lg-3 col-md-4 col-sm-12"
                // onClick={() => showDetails(maincat)}
              >
                <div className="card-body">
                  <img
                    src={subcategoryImg[i].img}
                    className="card-img-top img-fluid mb-2"
                  />
                  <h2>{maincat.name}</h2>
                  <h6 className="mb-3">{subcategoryImg[i].content}</h6>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Subcategory;
