import React from "react";
import DisplayList from "./DisplayList";

export default props => (
  <div className="explore-home-container">
    <h1>Explore Home</h1>
    <div className="preset-cities-container">
      <h2>Places</h2>
      <div>
        icon & <Link to={"/places/" + places_id}>London, England</Link>
      </div>
      <div>
        icon & <Link to={"/places/" + places_id}>Paris, France</Link>
      </div>
      <div>
        icon & <Link to={"/places/" + places_id}>Tokyo, Japan</Link>
      </div>
      <div>
        icon & <Link to={"/places/" + places_id}>Rio De Janiero, Brazil</Link>
      </div>
    </div>
    <div className="preset-allergens-container">
      <h2>Allergens</h2>
      <div>
        icon & <Link to={"/food-allergens/" + allergen_id}>Shellfish</Link>
      </div>
      <div>
        icon & <Link to={"/food-allergens/" + allergen_id}>Peanuts</Link>
      </div>
      <div>
        icon & <Link to={"/food-allergens/" + allergen_id}>Eggs</Link>
      </div>
      <div>
        icon & <Link to={"/food-allergens/" + allergen_id}>Tree Nut</Link>
      </div>
    </div>
  </div>
);
