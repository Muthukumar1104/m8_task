import React, { useRef } from "react";
import "./Landingpagecontent.css";
import Initialdish from "./Initialdish/Initialdish";
import Whychoose from "./Whychoose/Whychoose";
import Specialmenu from "./Specialmenu/Specialmenu";
import Regularfood from "./Regularfood/Regularfood";
import Startintro from "./Startintro/Startintro";
import Specialchef from "./Specialchef/Specialchef";

const Landingpagecontent = () => {
  return (
    <div className="landingpage_body">
      <Startintro />
      <Initialdish />
      <Whychoose />
      <Specialmenu />
      <Regularfood />
      <Specialchef />
    </div>
  );
};

export default Landingpagecontent;
