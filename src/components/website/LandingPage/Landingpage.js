import React, { useContext, useEffect, useState } from "react";
import "./Landingpage.css";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";
import Landingpagecontent from "./Landingpagecontent/Landingpagecontent";
import axios from "axios";
import Appcontext from "../../common/Appcontext/Appcontext";

const Landingpage = () => {
  const { user } = useContext(Appcontext);

  //Dashboard API
  const [dashboard, setDashboard] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://ecommerce.toou.in:4011/customer/product_dashboard",
      headers: {
        Authorization: `Bearer ${user?.loginfo?.access_token}`,
      },
      params: {
        id: user?.loginfo?.id,
        geotag: "11.025378,76.9758161",
      },
    }).then((res) => {
      if (res?.status == 200) {
        setDashboard(res?.data?.data);
      }
    });
  }, []);

  return (
    <div className="landingPage">
      <div className="blob">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#74d174"
            d="M43.7,-12.4C50.3,6,44.9,30.2,31.5,38.9C18.1,47.6,-3.3,40.8,-19.7,28.6C-36,16.4,-47.3,-1.3,-43.2,-16.4C-39.1,-31.4,-19.5,-43.7,-0.5,-43.6C18.6,-43.4,37.2,-30.8,43.7,-12.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <Navbar />
      <Landingpagecontent />
      <Footer />
    </div>
  );
};

export default Landingpage;
