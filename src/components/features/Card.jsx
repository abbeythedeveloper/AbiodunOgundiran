import React from "react";
import Tilt from "react-parallax-tilt";
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <Tilt
      gyroscope
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.02}
      transitionSpeed={2000}
    >
      <div className=" w-full px-12 md:h-80 h-50 lg:h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#303437] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-150 group">
        <div className="h-70 overflow-y-hidden">
          <div className="flex flex-col gap-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500 cursor-default">
            <div>
              <span className="text-4xl text-designColor">{icon}</span>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-titleFont font-bold text-gray-300">
                {title}
              </h2>
              <p className="base">{des}</p>
              <span className="text-2xl text-designColor">
                <HiArrowRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
