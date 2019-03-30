import React from "react";
import QueryBar from "./QueryBar";
import { Link, Route, withRouter } from "react-router-dom";

export default props => (
  <div className="contact-container">
    <h1>Places Home</h1>
    <QueryBar placeHolder="Search Cities" />
    <QueryBar placeHolder="Search Countries" />
    <div className="preset-cities-container">
      <h2>Example Places</h2>
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
  </div>
);
