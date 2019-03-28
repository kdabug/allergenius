import React from "react";
import DisplayList from "./DisplayList";
import { Link, Route, withRouter } from "react-router-dom";

export default props => (
  <div className="explore-home-container">
    <h1>Explore Home</h1>
    <div className="preset-cities-container">
      <h2>Places</h2>
      <div>
        icon & <Link to={"/places/"}>London, England</Link>
      </div>
      <div>
        icon & <Link to={"/places/"}>Paris, France</Link>
      </div>
      <div>
        icon & <Link to={"/places/"}>Tokyo, Japan</Link>
      </div>
      <div>
        icon & <Link to={"/places/"}>Rio De Janiero, Brazil</Link>
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
