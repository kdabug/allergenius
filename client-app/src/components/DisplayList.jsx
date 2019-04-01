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
                <p>{post.name}</p>
                <p>{post.created_at}</p>
                <p>{post.cityId}</p>
              </div>
            </div>
          ))}
    </div>
  );
};
export default withRouter(DisplayList);
