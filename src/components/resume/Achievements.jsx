import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: "20%" }}
      animate={{ opacity: 1, transition: { duration: 0.8 }, translateY: "0" }}
      className="w-full gap-20 flex flex-col md:flex-row lg:flex-row justify-between"
    >
      <div>
        <div className="md:py-12 py-4 font-titleFont">
          <p className="text-base text-designColor tracking-[4px]">My</p>
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold">
            Achievements
          </h2>
        </div>
        <div className="mt-4 md:mt-14 lg:mt-14 w-full  h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secondary School Education"
            subTitle="Babcock University High School (2019 - 2021)"
            result="4.5/5"
            des="Secondary education or post-primary education covers two phases on the international standard classification of the Educational scale."
          />
          <ResumeCard
            title="Tech skills aquisition"
            subTitle="EkoBits I.C.T Academy (2022 - 2023)"
            result="4.5/5"
            des="Secondary education or post-primary education covers two phases on the international standard classification of the Educational scale."
          />
        </div>
      </div>
      {/* <div>
        <div className="md:py-12 py-4 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - (....)
          </p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-4 md:mt-14 lg:mt-14 w-full  h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Freelance project"
            subTitle="Bigwavemediaconcept's web page"
            result="4.5/5"
            des="Built "
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Babcock University High School (2019 - 2021)"
            result="4.5/5"
            des="Secondary education or post-primary education covers two phases on the international standard classification of the Educational scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievements;
