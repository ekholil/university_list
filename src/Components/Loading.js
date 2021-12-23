import React from "react";
import loadingImg from "./giphy.gif";
const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img style={{ width: "100px" }} src={loadingImg} alt="" />
    </div>
  );
};

export default Loading;
