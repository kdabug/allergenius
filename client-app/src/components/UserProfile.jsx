import React from "react";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  async componentDidMount() {
    const checkUser = await localStorage.getItem("jwt");
    if (checkUser) {
      const user = decode(checkUser);
      console.log(
        "this is user ComponentDidMount on UserProfile Component",
        user
      );
      await this.setState((prevState, newState) => ({
        currentUser: user,
        token: checkUser,
        userData: {
          user
        }
      }));
      const posts = await getUsersBlogposts(this.props.match.params.id);
      this.setState({
        posts
      });
    }
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
