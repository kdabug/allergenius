import React from "react";
import { withRouter } from "react-router-dom";

const DisplayList = props => {
  const { listData } = props;
  console.log("displayList: props.listData", listData);
  const createDate = time => {
    const date = new Date(time);
    return date.toLocaleString("en-US");
  };
  return (
    <div className="stock-list">
      {listData &&
        listData
          .slice(0)
          .reverse()
          .map((post, index) => (
            <div className="post-container">
              <div className="post-information">
                <div className="circle"></div>
                <h1>Title: {post.title}</h1>
                <h2>Date: {createDate(post.created_at)}</h2>
                <h2>{post.text}</h2>
              </div>
            </div>
          ))}
    </div>
  );
};
export default withRouter(DisplayList);
