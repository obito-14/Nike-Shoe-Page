import React from "react";
import Shoe from "./images/Shoe.png";
import Flipkart from "./images/Flipkart.png";
import Amazon from "./images/Amazon.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="mainBox">
      <div className="container">
        <div className="Img1">
          <img src={Shoe} alt="Shoe" className="Shoe" />
        </div>
        <h1 className="Head">Your Foot Deserve The Best</h1>
        <div>
          <p className="Description">
            Your Foot Deserve The Best And We're Here To Help With Our Shoes.
            Your Fashion Is Our Attitude You Look Like Fashionable Is Ours
            Fashion
          </p>
          <div className="BtnS">
            <p className="Btn1">Shop Now</p>
            <p className="Btn2">Category</p>
          </div>
          <div>
            <p className="Random">Also Available On</p>
            <div className="Img2">
              <img src={Flipkart} alt="Flipkart" className="Flipkart" />
              <img src={Amazon} alt="Amazon" className="Amazon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
