/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Heading = ({ title, des }) => {
  return (
    <div className=" font-titleFont flex flex-col gap-4 mb-14">
      <h3 className="text-md uppercase font-medium text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl text-gray-300 font-bold capitalize">{des}</h1>
    </div>
  );
};

export default Heading;
