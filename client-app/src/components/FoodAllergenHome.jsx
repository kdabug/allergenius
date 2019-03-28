import React from "react";
import { Link, Route, withRouter } from "react-router-dom";

export default props => (
  <div className="contact-container">
    <h1>Food Allergen</h1>
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
