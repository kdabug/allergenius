import React from "react";

export default props => {
  console.log("Props in Icon: ", props);
  const { url, id } = props;
  return (
    <>
      {url ? (
        <div
          className="icon-container"
          style={{ backgroundImage: `url(${url})` }}
        />
      ) : (
        <div className={`icon-container, ${id}`} />
      )}
    </>
  );
};
