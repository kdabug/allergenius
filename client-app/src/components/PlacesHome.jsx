import React from "react";
import QueryBar from "./QueryBar";
import { Link, Route, withRouter } from "react-router-dom";
import Icon from "./Icon";
class PlacesHome extends React.Component {
  constructor() {
    super();
    this.state = {
      fetchingMedia: true,
      mediaArray: []
    };
    this.handleMediaFetch = this.handleMediaFetch.bind(this);
  }

  async handleMediaFetch() {
    const london = await this.props.getMedia("London");
    const rio = await this.props.getMedia("Rio De Janiero");
    const paris = await this.props.getMedia("Paris");
    const tokyo = await this.props.getMedia("Tokyo");
    const berlin = await this.props.getMedia("Berlin");
    const mexico = await this.props.getMedia("Mexico");
    const montreal = await this.props.getMedia("montreal");
    const china = await this.props.getMedia("china");
    const india = await this.props.getMedia("india");
    const egypt = await this.props.getMedia("Egypt");
    const mediaArray = [
      london,
      paris,
      tokyo,
      rio,
      berlin,
      mexico,
      montreal,
      china,
      india,
      egypt
    ];
    console.log("mediaArray", mediaArray);
    this.setState((prevState, newState) => ({
      fetchingMedia: false,
      mediaArray: mediaArray
    }));
  }
  componentDidMount() {
    this.handleMediaFetch();
  }

  render() {
    const {
      onFormChange,
      onClick,
      onKeyDown,
      activeOption,
      filteredOptions,
      showOptions,
      userInput,
      onSubmit
    } = this.props;
    return (
      <>
        <div className="contact-container">
          <h1>Places Home</h1>
          <QueryBar
            {...this.props}
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
        </div>
        {!this.state.fetchingMedia && (
          <div className="explore-home-container">
            <h1>Explore Allergenius</h1>
            <div className="preset-container-list">
              <div className="circle" />
              <h2>Places</h2>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[0]} id="places-icon" />
                <Link to={"/places-city/London/456"}>London, England</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[1]} id="places-icon" />
                <Link to={"/places-city/Paris/2974"}>Paris, France</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[2]} id="places-icon" />
                <Link to={"/places-city/Tokyo/1532"}>Tokyo, Japan</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[3]} id="places-icon" />
                <Link to={"/places-city/RioDeJaniero/207"}>
                  Rio De Janiero, Brazil
                </Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[4]} id="places-icon" />
                <Link to={"/places-city/Berlin/"}>Berlin, Germany</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[5]} id="places-icon" />
                <Link to={"/places-country/Mexico/"}>Mexico</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[6]} id="places-icon" />
                <Link to={"/places-city/Montreal/"}>Montreal, Canada</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[7]} id="places-icon" />
                <Link to={"/places-country/China/"}>China</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[8]} id="places-icon" />
                <Link to={"/places-country/India/"}>India</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[9]} id="places-icon" />
                <Link to={"/places-country/Egypt/"}>Egypt</Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default PlacesHome;
