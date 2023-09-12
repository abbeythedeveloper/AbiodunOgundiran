import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "20%" }}
      animate={{ opacity: 1, transition: { duration: 0.8 }, translateY: "0" }}
      className="w-full flex flex-col md:flex-row lg:flex-row gap-20"
    >
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-full md:w-1/2 lg:w-1/2"
      >
        <div className="py-4 md:py-8 lg:py-6 font-titleFont">
          <p className="text-sm py-2 text-designColor tracking-[4px]">
            Technologies
          </p>
          <h2 className="text-4xl font-bold">Design Skills</h2>
        </div>
        <div className="mt-4 md:mt-8 lg:mt-6 w-full flex flex-col gap-4">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="overflow-x-hidden"
          >
            <p className="text-sm uppercase font-medium flex flex-row">
              Adobe Illustrator{" "}
              <span className="hidden md:flex flex-row lg:flex">
                (Company BRanding items)
              </span>
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-400 to-red-500 rounded-lg relative"
              >
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -top-8 right-0"
                >
                  80%
                </motion.span>
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="overflow-x-hidden"
          >
            <p className="text-sm uppercase font-medium flex flex-row">
              Figma.
              <span className="hidden md:flex flex-row lg:flex">
                {" "}
                (ui/ux designs,app and web concepts)
              </span>
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-400 to-red-500 rounded-lg relative"
              >
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1.2 }}
                  className="absolute -top-8 right-0"
                >
                  80%
                </motion.span>
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="overflow-x-hidden"
          >
            <p className="text-sm uppercase font-medium flex flex-row">
              adobe premier-pro
              <span className="hidden md:flex flex-row lg:flex">
                {" "}
                (video editing)
              </span>
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 1.2, duration: 1.2 }}
                className="w-[78%] h-full bg-gradient-to-r from-blue-600 via-pink-400 to-red-500 rounded-lg relative"
              >
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 1.4 }}
                  className="absolute -top-8 right-0"
                >
                  78%
                </motion.span>
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1.4 }}
            className="overflow-x-hidden"
          >
            <p className="text-sm uppercase font-medium flex flex-row">
              adobe after effects{" "}
              <span className="hidden md:flex flex-row lg:flex">
                (motion graphics)
              </span>
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 1.4 }}
                className="w-[65%] h-full bg-gradient-to-r from-blue-600 via-pink-400 to-red-500 rounded-lg relative"
              >
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 1.6 }}
                  className="absolute -top-8 right-0"
                >
                  65%
                </motion.span>
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 1.6 }}
            className="overflow-x-hidden"
          >
            <p className="text-sm uppercase font-medium flex flex-row">
              tailwind,bootstrap & css
              <span className="hidden md:flex flex-row lg:flex">
                (web styling)
              </span>
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 1.6 }}
                className="w-[86%] h-full bg-gradient-to-r from-blue-600 via-pink-400 to-red-500 rounded-lg relative"
              >
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 1.8 }}
                  className="absolute -top-8 right-0"
                >
                  86%
                </motion.span>
              </motion.span>
            </span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.8 }}
        className="w-full md:w-1/2 lg:w-1/2"
      >
        <div className="py-4 md:py-8 lg:py-6 font-titleFont">
          <p className="text-sm py-2 text-designColor tracking-[4px]">
            Technologies
          </p>
          <h2 className="text-4xl font-bold">Dev Skills</h2>
        </div>
        <div className="mt-4 md:mt-8 lg:mt-6 w-full flex flex-col gap-4 ">
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3.4, duration: 1 }}
            className="overflow-x-hidden"
          >
            <p className="text-sm uppercase font-medium flex flex-row">
              Html. <span className="hidden md:flex flex-row lg:flex"></span>
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 3.8, duration: 0.8 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-400 to-red-500 rounded-lg relative"
              >
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 3, duration: 3 }}
                  className="absolute -top-8 right-0"
                >
                  100%
                </motion.span>
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3.6, duration: 1 }}
            className="overflow-x-hidden"
          >
            <p className="text-sm uppercase font-medium flex flex-row">
              react.
              <span className="hidden md:flex flex-row lg:flex"></span>
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 4, duration: 1 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-400 to-red-500 rounded-lg relative"
              >
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 3.2, duration: 3.2 }}
                  className="absolute -top-8 right-0"
                >
                  80%
                </motion.span>
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 3.8, duration: 1.2 }}
            className="overflow-x-hidden"
          >
            <p className="text-sm uppercase font-medium flex flex-row">
              javascript
              <span className="hidden md:flex flex-row lg:flex"> </span>
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "0", opacity: 1 }}
                transition={{ delay: 4.2, duration: 1.2 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-400 to-red-500 rounded-lg relative"
              >
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 3.4, duration: 3.4 }}
                  className="absolute -top-8 right-0"
                >
                  75%
                </motion.span>
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 4, duration: 1.4 }}
            className="overflow-x-hidden"
          >
            <p className="text-sm uppercase font-medium flex flex-row">
              framer-motion
              <span className="hidden md:flex flex-row lg:flex"></span>
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 4.4, duration: 1.4 }}
                className="w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-400 to-red-500 rounded-lg relative"
              >
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 3.6, duration: 3.6 }}
                  className="absolute -top-8 right-0"
                >
                  85%
                </motion.span>
              </motion.span>
            </span>
          </motion.div>
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 4.2, duration: 1.6 }}
            className="overflow-x-hidden"
          >
            <p className="text-sm uppercase font-medium flex flex-row">
              tailwind,bootstrap & css
              <span className="hidden md:flex flex-row lg:flex">
                (web styling)
              </span>
            </p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-lg mt-2">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 4.6, duration: 1.6 }}
                className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-400 to-red-500 rounded-lg relative"
              >
                <motion.span
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 3.8, duration: 3.8 }}
                  className="absolute -top-8 right-0"
                >
                  100%
                </motion.span>
              </motion.span>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
