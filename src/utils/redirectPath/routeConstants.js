import About from "../../components/website/About/About";
import Category from "../../components/website/Category/Category";
import Maincategory from "../../components/website/Category/Maincategory/Maincategory";
import Subcategory from "../../components/website/Category/Subcategory/Subcategory";
import Contact from "../../components/website/Contact/Contact";
import Landingpage from "../../components/website/LandingPage/Landingpage";
import Login from "../../components/website/Login/Login";

//Route path
export const initialRoutes = [
  {
    path: "/",
    name: "login",
    element: Login,
  },
  {
    path: "/home",
    name: "Landingpage",
    element: Landingpage,
  },
  {
    path: "/about",
    name: "About",
    element: About,
  },
  {
    path: "/contact",
    name: "Contact",
    element: Contact,
  },
  {
    path: "/category",
    name: "Category",
    element: Category,
  },
  {
    path: "/category",
    name: "Maincategory",
    element: Maincategory,
  },
  {
    path: "/category/:id",
    name: "Category",
    element: Subcategory,
  },
];
