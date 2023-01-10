import React from "react";

const ColofulMessage = (props) => {
  const { color } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{}</p>;
};
export default ColofulMessage;
