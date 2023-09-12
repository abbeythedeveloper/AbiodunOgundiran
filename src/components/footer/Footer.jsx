/* eslint-disable no-unused-vars */
import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import {
  threads,
  twitterIcon,
} from "../../assets/drive-download-20230816T084448Z-001";
import { motion } from "framer-motion";

import { logo } from "../../assets/drive-download-20230816T084448Z-001";
const Footer = () => {
  const handleDownloadClick = () => {
    // Replace 'your-cv-file.pdf' with the actual file path and name
    const fileUrl = "/path/to/your-cv-file.pdf";

    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "your-cv.pdf"; // Set the desired download file name

    // Trigger a click event on the anchor to initiate the download
    anchor.click();

    // Clean up the temporary anchor element
    anchor.remove();
  };

  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-28" src={logo} />
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Social media links
          </h2>
          <div>
            <div className="py-7 md:py-0 lg:py-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="grid grid-cols-3 gap-4"
              >
                <a
                  href="https://www.instagram.com/abiodun0gundiran/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bannerIcon">
                    <FaInstagram />
                  </span>
                </a>
                <a
                  href="https://twitter.com/Abiodun_WebDev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bannerIcon">
                    <img className="hover:text-designColor" src={twitterIcon} />
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abiodun-ogundiran-aa7a13259"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </a>
                <a
                  href="https://www.threads.net/@itz_abbeys"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bannerIcon">
                    <img src={threads} />
                  </span>
                </a>
                <a
                  href="https://wa.me/07045300115"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="bannerIcon">
                    <FaWhatsapp />
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-lg md:text-xl uppercase text-designColor tracking-wide">
          Quick links
        </h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li>
            <span className="w-full text-base md:text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
              About
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
              Projects
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
              Resume
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
              Testimonials
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
          <li>
            <span className="w-full text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
              Contact
              <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </span>
          </li>
        </ul>
      </div>
      <div className="w-full h-full">
        <div className="w-full h-full">
          <h3 className="text-lg md:text-xl uppercase text-designColor tracking-wide">
            Resources
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li>
              <span className="w-full text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
                Pricing
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
                Terms & Conditions
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span
                onClick={handleDownloadClick}
                className="w-full text-lg cursor-pointer group hover:text-designColor relative duration-300 "
              >
                Download CV
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="w-full h-full">
          <h3 className="text-lg md:text-xl uppercase text-designColor tracking-wide">
            developers
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li>
              <span className="w-full text-base md:text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
                Documentation
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
                Courses
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
                Work with me?
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
            <li>
              <span className="w-full text-lg cursor-pointer group hover:text-designColor relative duration-300 ">
                Contact me
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
