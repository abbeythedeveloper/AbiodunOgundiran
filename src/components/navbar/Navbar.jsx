/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import {
  logo,
  close,
  menu,
} from "../../assets/drive-download-20230816T084448Z-001";
import { navLinksdata } from "../../constants";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const Navbar = () => {
  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth", // This enables smooth scrolling
      });
    }
  };

  // Function to handle smooth scrolling when a link is clicked
  const handleLinkClick = (targetId) => {
    smoothScrollTo(targetId);
  };

  // Add an event listener to handle scrolling when the component mounts
  useEffect(() => {
    const handleHashChange = () => {
      const targetId = window.location.hash.replace("#", "");
      if (targetId) {
        smoothScrollTo(targetId);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 px-5 md:px-14 fixed top-0 justify-between items-center navbar bg-bodyColor  backdrop-filter backdrop-blur-md bg-opacity-50 z-20 ">
      <img src={logo} alt="Logo image" srcSet="" className="w-[124px] h-auto" />
      <ul className="list-none lg:flex sm:flex md:flex hidden justify-end items-center flex-1">
        {navLinksdata.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-sans font-normal cursor-pointer hover:text-designColor duration-300 text-[16px] ${
              active === nav.title ? "text-designColor" : "text-gray-400"
            } ${index === navLinksdata.length - 1 ? "mr-0" : "mr-10"}
          `}
            onClick={() => setActive(nav.title)}
          >
            <a
              href={`#${nav.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(nav.id);
              }}
            >
              {nav.title}
            </a>
            {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
          </li>
        ))}
      </ul>
      <div className="sm:hidden md:flex lg:hidden flex flex-1 justify-end items-center cursor-pointer">
        <img
          src={toggle ? close : menu}
          alt=""
          className="w-[28px] h-[28px] object-contain "
          onClick={() => setToggle(!toggle)}
        />
        <AnimatePresence>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, translateY: "40%" }}
              animate={{ opacity: 1, translateY: "0", transition: 0.6 }}
              exit={{ translateY: "40%", transition: 0.8, transitionDelay: 0 }}
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-black-gradient border-2 border-gray-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-gradient-to-r from-[#1e2024] to-[#202327] z-100 `}
            >
              <ul className="list-none flex-col justify-end items-center flex-1">
                {navLinksdata.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-sans font-normal cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-gray-400"
                    } ${index === navLinksdata.length - 1 ? "mr-0" : "mr-10"}
          `}
                    onClick={() => setActive(nav.title)}
                  >
                    <a
                      href={`#${nav.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleLinkClick(nav.id);
                      }}
                    >
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
