/* eslint-disable no-unused-vars */
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaInstagram,
  FaWhatsapp,
  FaCss3,
  FaHtml5,
  FaLinkedinIn,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { BsWordpress } from "react-icons/bs";
import {
  SiFramer,
  SiTailwindcss,
  SiFigma,
  SiJavascript,
  SiAdobeillustrator,
} from "react-icons/si";
import {
  threads,
  twitterIcon,
} from "../../assets/drive-download-20230816T084448Z-001";
import { motion } from "framer-motion";

const handleDownloadClick = () => {
  // Replace 'your-cv-file.pdf' with the actual file path and name
  const fileUrl =
    "src/assets/drive-download-20230816T084448Z-001/images/Abiodun Ogundiran CV.png";

  // Create a temporary anchor element
  const anchor = document.createElement("a");
  anchor.href = fileUrl;
  anchor.download = "Abiodun Ogundiran CV"; // Set the desired download file name

  // Trigger a click event on the anchor to initiate the download
  anchor.click();

  // Clean up the temporary anchor element
  anchor.remove();
};

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Video Editor.",
      "Full-stack developer.",
      "UI/UX Designer.",
      "Freelancer.",
      "Graphics Designer.",
    ],
    loop: true,
    typeSpeed: 25,
    deleteSpeed: 15,
    delaySpeed: 3500,
  });
  return (
    <div className=" relative w-full lg:w-[60%] md:w-[100%] flex flex-col gap-20">
      <div className="flex flex-col gap-4 w-full">
        <h4 className="text-lg font-normal">Welcome to my world</h4>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          Hi, I am
          <span className="text-designColor capitalize">
            {" "}
            Abiodun Ogundiran
          </span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-gray-300 font-bodyFont leading-6 tracking-wide z-10">
          I am a passionate web developer and freelancer with [2] Two Years of
          experience and a creative flair for crafting digital experiences. With
          a keen eye for design and a knack for coding, I bring websites to
          life, combining aesthetics with functionality. I am dedicated to
          delivering innovative, user-friendly solutions that exceed client
          expectations.
        </p>
        <div className="absolute z-[1] w-[30%] h-[50%] top-40 rounded-full white__main left-[-30%]" />
      </div>
      <div className="flex flex-col items-center md:flex-row md md:items-start lg:flex md:flex justify-between">
        <div className="py-7 md:py-0 lg:py-0">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ duration: 1, delay: 1 }}
            className="text-base uppercase font-titleFont mb-4"
          >
            Social media links
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: "-120%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex gap-4"
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
          <button
            onClick={handleDownloadClick}
            className=" mt-4 left-0 bottom-1 bg-gradient-to-r from-[#1e2024] to-gray-700 hover:text-designColor duration-300 text-base hover:-translate-y-2 shadow-shadowOne p-3 rounded-lg "
          >
            Download Cv
          </button>
        </div>
        <div className="py-7 md:py-0 lg:py-0 z-10">
          <h2 className="text-base uppercase font-titleFont mb-4">Skills</h2>
          <div className="grid grid-cols-5 gap-4">
            <span className="bannerIcon">
              <FaHtml5 />
            </span>
            <span className="bannerIcon">
              <FaCss3 />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaBootstrap />
            </span>
            <span className="bannerIcon">
              <SiFramer />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <BsWordpress />
            </span>
            <span className="bannerIcon">
              <SiAdobeillustrator />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
