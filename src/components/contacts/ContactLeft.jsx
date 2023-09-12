// eslint-disable-next-line no-unused-vars
import React from "react";
import { contactImg } from "../../assets/drive-download-20230816T084448Z-001";
import { FaInstagram, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import {
  threads,
  twitterIcon,
} from "../../assets/drive-download-20230816T084448Z-001";
import { motion } from "framer-motion";

const ContactLeft = () => {
  return (
    <div className="w-full md:w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg p-8 flex flex-col gap-8">
      <img
        src={contactImg}
        className="w-full h-64 object-cover rounded-lg mb-2"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Abiodun Ogundiran</h3>
        <p className="text-lg font-normal text-gray-400">
          M.E.R.N Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I am a passionate web developer and freelancer with [2] Two Years of
          experience and a creative flair for crafting digital experiences. With
          a keen eye for design and a knack for coding.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone :{" "}
          <a href="tel:+2347045300115">
            <span className="text-lightText hover:text-designColor duration-300">
              +234 704-530-0115
            </span>
          </a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          E-mail :{" "}
          <a href="mailto:abiodunogundiran6@gmail.com">
            <span className="text-lightText hover:text-designColor duration-300">
              abiodunogundiran6@gmail.com
            </span>
          </a>
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Social media links
        </h2>
        <div>
          <div className="py-7 md:py-0 lg:py-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
