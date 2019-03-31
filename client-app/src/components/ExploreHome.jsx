import React from "react";
import DisplayList from "./DisplayList";
import { Link, Route, withRouter } from "react-router-dom";
import { getMedia } from "../services/mediaHelper";
import Icon from "./Icon";

export default props => (
  <div className="explore-home-container">
    <h1>Explore Home</h1>
    <div className="preset-cities-container">
      <h2>Places</h2>
      <div>
        <Link to={"/places-cities/London/"}>London, England</Link>
      </div>
      <div>
        <div /> <Link to={"/places-cities/Paris/2974"}>Paris, France</Link>
      </div>
      <div>
        <div>icon</div> &{" "}
        <Link to={"/places-cities/Tokyo/1532"}>Tokyo, Japan</Link>
      </div>
      <div>
        <div>icon</div> &{" "}
        <Link to={"/places-cities/Rio De Janiero/"}>
          Rio De Janiero, Brazil
        </Link>
      </div>
    </div>
    <div className="preset-allergens-container">
      <h2>Allergens</h2>
      <div>
        icon & <Link to={"/food-allergens/"}>Shellfish</Link>
      </div>
      <div>
        icon & <Link to={"/food-allergens/"}>Peanuts</Link>
      </div>
      <div>
        icon & <Link to={"/food-allergens/"}>Eggs</Link>
      </div>
      <div>
        icon & <Link to={"/food-allergens/"}>Tree Nut</Link>
      </div>
    </div>
  </div>
);
