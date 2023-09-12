import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Achievements from "./Achievements";
import { motion, spring } from "framer-motion";

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <motion.section
      initial={{ opacity: 0, x: "100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 2,
        type: "spring",
        stiffness: 100,
        x: { duration: 1 },
      }}
      id="resume"
      className="w-full py-14 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="3+ Years of Experience" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <li
            onClick={() =>
              setEducationData(true) &
              setAchievementData(false) &
              setExperienceData(false) &
              setSkillData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-tl-xl md:rounded-l-xl lg:rounded-l-xl"
                : "border-transparent"
            } resumeLi `}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setAchievementData(false) &
              setExperienceData(false) &
              setSkillData(true)
            }
            className={`${
              skillData
                ? "border-designColor rounded-tr-xl md:rounded-none lg:rounded-none"
                : "border-transparent"
            } resumeLi `}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setAchievementData(false) &
              setExperienceData(true) &
              setSkillData(false)
            }
            className={`${
              experienceData
                ? "border-designColor rounded-bl-xl md:rounded-none lg:rounded-none"
                : "border-transparent"
            } resumeLi `}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setAchievementData(true) &
              setExperienceData(false) &
              setSkillData(false)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-br-xl md:rounded-r-xl lg:rounded-r-xl"
                : "border-transparent"
            } resumeLi `}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementData && <Achievements />}
      {/* <Education /> */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Achievements /> */}
    </motion.section>
  );
};

export default Resume;
