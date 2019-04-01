import React, { Component } from "react";
import { createBlogpost } from "../services/blogpostsApi";
import { withRouter, Link } from "react-router-dom";

class AddBlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: {
        cityName: "",
        date: "",
        title: "",
        text: ""
      }
    };
    this.handleCommentFormChange = this.handleCommentFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCommentFormChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      postData: {
        ...prevState.postData,
        [name]: value
      }
    }));
  }
  async handleSubmit(e) {
    e.preventDefault();
    const { cityList } = this.props;
    console.log(this.state.cityName, cityList.cities);
    const cityId = cityList.cities
      .filter(city => city.name === this.state.cityName)
      .map(city => city.id);
    console.log("this is cityId", this.state.cityName + cityId);
    const resp = await createBlogpost(
      this.props.match.params.id,
      cityId[0],
      this.state.postData.text,
      this.state.postData.title
    );
    console.log(resp);
    this.setState(prevState => ({
      postData: {
        ...prevState.postData
      }
    }));
    this.props.history.push(
      `/user/${this.props.userData.id}/username/${this.props.userData.username}`
    );
  }

  async componentDidMount() {
    this.setState(prevState => ({
      postData: {
        ...prevState.postData
      }
    }));
  }
  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <h2>Blog Post</h2>
        <label htmlFor="cityName">City</label>
        <div className="city-name-container">
          <input
            type="text"
            name="cityName"
            value={this.state.cityName}
            id="cityName"
            onChange={this.handleCommentFormChange}
          />
        </div>
        <label htmlFor="date">Date</label>
        <div className="date-container">
          <input
            type="text"
            name="date"
            value={this.state.date}
            id="date"
            onChange={this.handleCommentFormChange}
          />
        </div>
        <label htmlFor="title">Title</label>
        <div className="title-container">
          <input
            type="text"
            name="title"
            value={this.state.title}
            id="title"
            onChange={this.handleCommentFormChange}
          />
        </div>
        <label htmlFor="text">Text</label>
        <div className="text-container">
          <input
            type="textarea"
            name="text"
            value={this.state.text}
            id="text"
            onChange={this.handleCommentFormChange}
          />
        </div>
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default withRouter(AddBlogPost);
