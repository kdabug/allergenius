import React from "react";
import DisplayList from "./DisplayList";

export default props => (
  <div className="contact-container">
    <h1>TravelTips</h1>
    <DisplayList listData={props.postList} />
  </div>
);
