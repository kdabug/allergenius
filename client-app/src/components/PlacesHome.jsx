import React from "react";
import QueryBar from "./QueryBar";

export default props => (
  <div className="contact-container">
    <h1>Places Home</h1>
    <QueryBar placeHolder="Search Cities" />
    <QueryBar placeHolder="Search Countries" />
    <div className="preset-cities-container">
      <h2>Example Places</h2>
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
  </div>
);
