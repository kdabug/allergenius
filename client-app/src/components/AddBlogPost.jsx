import React, { Component } from "react";
import { createNewComment } from "../services/users-helpers";
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
      commentData: {
        ...prevState.postData,
        [name]: value
      }
    }));
  }
  async handleSubmit(e) {
    e.preventDefault();
    const resp = await createNewComment(
      this.props.match.params.id,
      this.state.postData
    );
    console.log(resp);
    this.setState(prevState => ({
      commentData: {
        ...prevState.commentData,
        opt_comment: ""
      }
    }));
  }

  async componentDidMount() {
    this.setState(prevState => ({
      commentData: {
        ...prevState.commentData,
        stationId: this.props.match.params.id
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
            value={this.state.city}
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
        <label htmlFor="title">Date</label>
        <div className="title-container">
          <input
            type="text"
            name="title"
            value={this.state.date}
            id="title"
            onChange={this.handleCommentFormChange}
          />
        </div>
        <label htmlFor="text">Date</label>
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
