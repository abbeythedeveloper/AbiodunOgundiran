import React from "react";
import { bannerImg } from "../../assets/drive-download-20230816T084448Z-001";
import { motion } from "framer-motion";
const RightBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "120%" }}
      animate={{ opacity: 1, x: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="hidden md:flex lg:flex lg:w-[40%] md:w-[100%] md:pt-32 lg:pt-1 sm:flex justify-center items-center "
    >
      <img
        className=" md:pt-0 w-[350px] h-[350px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute -z-[1] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </motion.div>
  );
};

export default RightBanner;
