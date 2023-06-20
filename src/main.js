//import all routes,header,sidebar
import React, { useState, useEffect, useReducer, Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { initialRoutes } from "./utils/redirectPath/routeConstants";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import Appcontext from "./components/common/Appcontext/Appcontext";
import Login from "./components/website/Login/Login";

function AppRoutes() {
  useEffect(() => {
    var li = sessionStorage.getItem("loggedIn");
    var logged = JSON.parse(sessionStorage.getItem("profile"));
    setUser({
      type: "onload",
      loggedin: li != undefined && li != "false",
      loginfo: logged ?? {},
    });
    console.log(logged, "leofsdf");
  }, []);
  // console.log(logged, "leofsdf");
  const initialprops = {
    loggedin: false,
    loginfo: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          loggedin: true,
          loginfo: action.loginfo,
        };
      case "logout":
        return { loggedin: false, OTPverify: false };
      case "onload":
        return {
          ...state,
          loggedin: action.loggedin,
          loginfo: action.loginfo,
        };
      default:
        return state;
    }
  };

  const [user, dispatch] = useReducer(reducer, initialprops);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const setUser = (obj) => {
    dispatch(obj);
  };

  return (
    <Appcontext.Provider
      value={{
        user,
        setUser,
        success,
        setSuccess,
        message,
        setMessage,
      }}
    >
      <div className="container-fluid pe-0 ps-0">
        <Router>
          <Routes>
            {user.loggedin ? (
              <Fragment>
                {initialRoutes.map((route, idx) => {
                  return (
                    route.element && (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        element={<route.element />}
                      />
                    )
                  );
                })}
              </Fragment>
            ) : (
              <Route path={"/"} name="Login" element={<Login />} />
            )}
          </Routes>
        </Router>
      </div>
    </Appcontext.Provider>
  );
}

export default AppRoutes;
