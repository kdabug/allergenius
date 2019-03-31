import React from "react";

export default props => {
  console.log("Props in Icon: ", props);
  const { url } = props;
  return (
    <>
      {url !== "Promise" ? (
        <div
          className="icon-container"
          style={{ backgroundImage: `url(${props.url})` }}
        />
      ) : (
        <div>loading</div>
      )}
    </>
  );
};
