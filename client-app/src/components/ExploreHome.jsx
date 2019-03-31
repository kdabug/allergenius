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
            <h1>Explore Home</h1>
            <div className="preset-cities-container">
              <h2>Places</h2>
              <div>
                <Icon url={this.state.mediaArray[0]} />
                <Link to={"/places-cities/London/"}>London, England</Link>
              </div>
              <div>
                <Icon url={this.state.mediaArray[1]} />
                <Link to={"/places-cities/Paris/2974"}>Paris, France</Link>
              </div>
              <div>
                <Icon url={this.state.mediaArray[2]} />
                <Link to={"/places-cities/Tokyo/1532"}>Tokyo, Japan</Link>
              </div>
              <div>
                <Icon url={this.state.mediaArray[3]} />
                <Link to={"/places-cities/Rio De Janiero/"}>
                  Rio De Janiero, Brazil
                </Link>
              </div>
            </div>
            <div className="preset-allergens-container">
              <h2>Allergens</h2>
              <div>
                <Icon url={"../media/noun_shellfish_2210090.png"} />{" "}
                <Link to={"/food-allergens/"}>Shellfish</Link>
              </div>
              <div>
                <Icon url={"../media/noun_peanuts_1044368.png"} />
                <Link to={"/food-allergens/"}>Peanuts</Link>
              </div>
              <div>
                <Icon url={"../media/noun_Egg_2348384.png"} />
                <Link to={"/food-allergens/"}>Eggs</Link>
              </div>
              <div>
                <Icon url={"../media/noun_nuts_1108775.png"} />{" "}
                <Link to={"/food-allergens/"}>Tree Nut</Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
export default ExploreHome;
