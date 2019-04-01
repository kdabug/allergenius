import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import Icon from "./Icon";

export default props => (
  <div className="contact-container">
    <h1>Food Allergen</h1>
    <div className="preset-allergens-container">
      <h2>Allergens</h2>
      <div className="preset-container">
        <Icon url="" id="shellfish" />{" "}
        <Link to={"/food-allergens/shellfish/3"}>Shellfish</Link>
      </div>
      <div className="preset-container">
        <Icon url="" id="peanuts" />
        <Link to={"/food-allergens/peanuts/1"}>Peanuts</Link>
      </div>
      <div className="preset-container">
        <Icon url="" id="eggs" />
        <Link to={"/food-allergens/eggs/6"}>Eggs</Link>
      </div>
      <div className="preset-container">
        <Icon url="" id="nuts" />{" "}
        <Link to={"/food-allergens/treenuts/2"}>Tree Nuts</Link>
      </div>
      <div className="preset-container">
        <Icon url="" id="wheat" />{" "}
        <Link to={"/food-allergens/wheat/7"}>Wheat</Link>
      </div>
      <div className="preset-container">
        <Icon url="" id="dairy" />
        <Link to={"/food-allergens/dairy/5"}>Dairy</Link>
      </div>
      <div className="preset-container">
        <Icon url="" id="fish" />
        <Link to={"/food-allergens/fish/4"}>Fish</Link>
      </div>
    </div>
  </div>
);
