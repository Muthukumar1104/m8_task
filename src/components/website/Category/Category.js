import React, { Fragment } from "react";
import Maincategory from "./Maincategory/Maincategory";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

const Category = () => {
  return (
    <Fragment>
      <Navbar />
        <Maincategory />
  
      <Footer />
    </Fragment>
  );
};

export default Category;
