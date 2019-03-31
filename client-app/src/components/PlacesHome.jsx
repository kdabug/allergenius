import React from "react";
import QueryBar from "./QueryBar";
import { Link, Route, withRouter } from "react-router-dom";

export default props => {
  const {
    onFormChange,
    onClick,
    onKeyDown,
    activeOption,
    filteredOptions,
    showOptions,
    userInput,
    onSubmit
  } = props;
  return (
    <div className="contact-container">
      <h1>Places Home</h1>
      <QueryBar
        {...props}
        placeHolder="Search Cities and Countries"
        onKeyDown={onKeyDown}
        onFormChange={onFormChange}
        onClick={onClick}
        onSubmit={onSubmit}
        showOptions={showOptions}
        userInput={userInput}
        filteredOptions={filteredOptions}
        activeOptions={activeOption}
      />
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
};
