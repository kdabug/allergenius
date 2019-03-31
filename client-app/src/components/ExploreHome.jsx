import React from "react";
import DisplayList from "./DisplayList";
import { Link, Route, withRouter } from "react-router-dom";
import Icon from "./Icon";

class ExploreHome extends React.Component {
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
    const mediaArray = [london, paris, tokyo, rio];
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
    return (
      <>
        {!this.state.fetchingMedia && (
          <div className="explore-home-container">
            <h1>Explore Allergenius</h1>
            <div className="preset-container-list">
            <div className="circle"></div>
              <h2>Places</h2>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[0]} id="places-icon" />
                <Link to={"/places-cities/London/"}>London, England</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[1]} id="places-icon" />
                <Link to={"/places-cities/Paris/2974"}>Paris, France</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[2]} id="places-icon" />
                <Link to={"/places-cities/Tokyo/1532"}>Tokyo, Japan</Link>
              </div>
              <div className="preset-container">
                <Icon url={this.state.mediaArray[3]} id="places-icon" />
                <Link to={"/places-cities/Rio De Janiero/"}>
                  Rio De Janiero, Brazil
                </Link>
              </div>
            </div>
            <>
              <div className="preset-container-list">
                <div className="circle"></div>
                <h2>Allergens</h2>
                <div className="preset-container">
                  <Icon url="" id="shellfish" />{" "}
                  <Link to={"/food-allergens/shellfish"}>Shellfish</Link>
                </div>
                <div className="preset-container">
                  <Icon url="" id="peanuts" />
                  <Link to={"/food-allergens/peanuts"}>Peanuts</Link>
                </div>
                <div className="preset-container">
                  <Icon url="" id="eggs" />
                  <Link to={"/food-allergens/eggs"}>Eggs</Link>
                </div>
                <div className="preset-container">
                  <Icon url="" id="treenuts" />{" "}
                  <Link to={"/food-allergens/treenuts"}>Tree Nuts</Link>
                </div>
              </div>
            </>
          </div>
        )}
      </>
    );
  }
}
export default ExploreHome;
