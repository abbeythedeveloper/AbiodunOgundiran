/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaGlobe } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";
const Pr2 = ({ title, des, src }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="w-full px-12 h-auto py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000"
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover  group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-designColor font-normal ">
            {title}
          </h3>
          <div className="flex gap-1">
            <a
              href="https://github.com/abbeythedeveloper/shoes.git"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <BsGithub />
              </span>
            </a>
            <a
              href="https://shoesio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                <FaGlobe />
              </span>
            </a>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300 ">
          {des}
        </p>
      </div>
    </motion.div>
  );
};

export default Pr2;
