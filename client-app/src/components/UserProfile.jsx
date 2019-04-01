import React, { Component } from "react";
import decode from "jwt-decode";
import DisplayList from "./DisplayList";
import { getUsersBlogposts } from "../services/blogpostsApi";
import { Link, Route, withRouter } from "react-router-dom";
import { verifyToken } from "../services/apiHelper";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const posts = await getUsersBlogposts(this.props.match.params.id);
    this.setState({
      posts
    });
  }

  render() {
    console.log("USERPROFILE : userData:", this.props.userData);
    console.log("USERPROFILE : props.match.params:", this.props.match.params);
    return (
      <div className="user-profile">
        <div className="user-container">
          <div className="avatar-username">
            <h2> {this.props.userData.username} </h2>{" "}
          </div>{" "}
          <p> Email: {this.props.userData.email} </p>{" "}
          <div className="button-container">
            <button
              className="station-button"
              onClick={() =>
                this.props.history.push(
                  `/user/${this.props.match.params.id}/edit/`
                )
              }
            >
              Edit User{" "}
            </button>{" "}
            <button
              className="station-button"
              onClick={() =>
                this.props.history.push(
                  `/user/${this.props.match.params.id}/post/`
                )
              }
            >
              Add Blog Post{" "}
            </button>{" "}
          </div>{" "}
          <h1> User Posts: </h1>
          <DisplayList listData={this.state.posts} />
        </div>{" "}
      </div>
    );
  }
}

export default withRouter(UserProfile);
