import React from "react";
import Nav from "../components/Nav";

const layout = ({ children }) => {
  return (
    <>
      <h1 className="text-3xl text-white">About </h1>
      {children}
    </>
  );
};

export default layout;
