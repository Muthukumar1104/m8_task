import { createContext } from "react";

const Appcontext = createContext({
  loggedin: false,
  success: false,
  message: "",
  loginfo: {},
});

export default Appcontext;
