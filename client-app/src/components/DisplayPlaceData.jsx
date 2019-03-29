import React, { Component } from "react";
import DisplayList from "./DisplayList";
import { Link, Route, withRouter } from "react-router-dom";

class DisplayPlaceData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    // const checkUser = await localStorage.getItem("jwt");
    // if (checkUser) {
    //   const user = decode(checkUser);
    //   console.log(
    //     "this is user ComponentDidMount on UserProfile Component",
    //     user
    //   );
    //   await this.setState((prevState, newState) => ({
    //     currentUser: user,
    //     //token: checkUser,
    //     userData: {
    //       user
    //     }
    //   }));
    //   const posts = await getUsersBlogposts(this.props.match.params.id);
    //   this.setState({
    //     posts
    //   });
    // }
  }
  render() {
    return <DisplayList listData={this.state.posts} />;
  }
}

export default withRouter(DisplayPlaceData);
