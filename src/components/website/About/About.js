import React, { Fragment } from "react";
import "./About.css";
import Images from "../../../assets/Js/images";
import { NavLink } from "react-router-dom";
import Navbar from "../../common/Navbar/Navbar";
import Footer from "../../common/Footer/Footer";

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="About col-lg-12 col-md-12 col-sm-12  mt-5">
        <div className="container">
          <div className="quotas1 col-lg-12 col-md-12 col-sm-12">
            <img
              src={Images?.burger}
              className="burger col-lg-6 col-md-6 col-sm-12 mb-5"
            />
            <div className="content1 col-lg-6 col-md-6 col-sm-12">
              <h1 className="mt-2 mb-4">Vegan Dishes That Taste Good</h1>
              <p>
                Whenever you feel like tasting some amazing plant-based lunch,
                sandwich, salad or dinner – you know that we’re the place to go.
              </p>
              <p>
                At least that must be the case if you live anywhere near Fresno,
                California and then the word of mouth about our awesomeness has
                surely reached you too!
              </p>
              <p>
                Also, when it comes to our chefs & our menu we are second to
                none, including dozens of other vegan places in the local area…
              </p>
              <div className="quotas1_imges">
                <img src={Images?.quota_img1} className="quota_img1" />
                <img src={Images?.quota_img2} className="quota_img2" />
                <img src={Images?.quota_img3} className="quota_img3" />
              </div>
            </div>
          </div>
          <div className="quotas2 col-lg-12 col-md-12 col-sm-12">
            <img
              src={Images?.biryani}
              className="biryani col-lg-6 col-md-6 col-sm-12 mb-5"
            />
            <div className="content2 col-lg-6 col-md-6 col-sm-12">
              <h1 className="mt-2 mb-4">Quotes on Food</h1>
              <p>
                “We do not need to eat animals, wear animals, or use animals for
                entertainment purposes, and our only defense of these uses is
                our pleasure, amusement, and convenience.”
              </p>
              <p>
                "Food is not simply organic fuel to keep body and soul together;
                it is a perishable art that must be savored at the peak of
                perfection."
              </p>
              <p>
                "Food, in the end, in our tradition, is something holy. It's not
                about nutrients and calories. It's about sharing. It's about
                honesty. It's about identity."
              </p>
            </div>
          </div>
          <div className="quotas3 col-lg-12 col-md-12 col-sm-12">
            <h1 className="mt-2 mb-4">Our Range of Vegan Food!</h1>
            <hr className="rule mx-auto" />
            <div className="section_part row col-lg-12 col-md-12 col-sm-12">
              <div className="section col-lg-4 col-md-4 col-sm-12">
                <h5>Veggies & Soy</h5>
                <p>
                  Whenever you feel like you’re too tired to cook a salad
                  yourself, we will be delighted to feed you some tasty vegan &
                  vegetarian dishes.
                </p>
              </div>
              <div className="section col-lg-4 col-md-4 col-sm-12">
                <h5>Fruits</h5>
                <p>
                  Besides vegetables, the world of vegetarianism is also full of
                  fruits. Our menu includes both conventional & exotic ones…
                </p>
              </div>
              <div className="section me-0 col-lg-4 col-md-4 col-sm-12">
                <h5>Berries & Nuts</h5>
                <p>
                  We’ve always felt that there’s no enough attention paid to how
                  berries & nuts diversify the diet of a vegan person. Now we
                  focus on it!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="our_team text-center">
          <div class="mx-auto d-inline-block m-5">
            <h1 className="mb-4">Behind the Kitchen's Door...</h1>
            <h6 className="mb-4">
              Team is probably the most important part of any successful
              project. Our vegan place’s got a real dream team of the vegan
              cooking world!
            </h6>
            <button>OUR TEAM</button>
          </div>
        </div>
        <div className="Happycustomer container w-75 col-lg-12 col-md-12 col-lg-12 mt-4 mb-4">
          <h1 className="mt-2 mb-4 text-center">Happy Customers</h1>
          <div className="row col-lg-12 col-md-12 col-sm-12">
            <div className="section col-lg-6 col-md-6 col-sm-12">
              <p>
                The prices are as good as the menu! Each time I spend less
                money, than anywhere else and get a fresh, tasty, homemade
                dinner!
              </p>
              <h6>AMANDA LEE POSTED ON TRIPADVISOR</h6>
            </div>
            <div className="section col-lg-6 col-md-6 col-sm-12">
              <p>
                The prices are as good as the menu! Each time I spend less
                money, than anywhere else and get a fresh, tasty, homemade
                dinner!
              </p>
              <h6>SAM POSTED ON FOURSQUARE</h6>
            </div>
          </div>
        </div>
        <div className="career text-center">
          <div class="mx-auto d-inline-block m-5">
            <p className="mb-4">
              We’re hiring new culinary talents all the time! If you want to
              become a part of our culinary family and you have at least 6
              months of prior experience of working at a restaurant, than
              contact us today!
            </p>
            <button>CAREERS</button>
          </div>
        </div>

        <NavLink to={"/contact"}>
          <div className="phone_icon">
            <i class="fa fa-phone" aria-hidden="true" />
          </div>
        </NavLink>

        <NavLink to={"/contact"}>
          <div className="chat_icon">
            <i class="fa fa-commenting-o" aria-hidden="true" />
          </div>
        </NavLink>
      </div>
      <Footer />
    </Fragment>
  );
};

export default About;
