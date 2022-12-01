import React from "react";

const PrimaryBtn = ({ children, classes }) => {
  return (
    <button className={`border-0 text-white delay-100 ${classes}`}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
