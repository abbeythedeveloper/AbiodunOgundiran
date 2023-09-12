/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Title from "../layous/Title";
import ProjectCard from "./ProjectCard";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  projectThree,
  projectTwo,
} from "../../assets/drive-download-20230816T084448Z-001";
import ProjectCard1 from "./ProjectCard1";
import Pr2 from "./Pr2";
import Pr3 from "./Pr3";
import Pr4 from "./Pr4";
import Pr5 from "./Pr5";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex items-center justify-center text-center">
        <Title title="VISIT MY PORTFOLIO" des="My Projects" />
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-14">
        <ProjectCard1
          title="E-commerce Store"
          des="An E-commerce store i worked on during my learning period at the EkoBits academy"
          src={img5}
        />
        <Pr2
          title="Online shoe store"
          des="A display of my front end skills showing a responsive shoe store built with html css and javascript"
          src={img2}
        />
        <Pr3
          title="Piggyvest landing page Remake"
          des="A responsive remake of the piggyvest fin-tech componay landing page,a project done to boost front-end skills"
          src={img3}
        />
        <ProjectCard
          title="Software testing landing-page"
          des="A project at EkoBits where i was given a website Layout and told to code (the project was built using bootstrap as the style technology)"
          src={img4}
        />
        <Pr4
          title="Bike app UI"
          des="A personnal self project on a UI/UX Design to boost my design skills"
          src={img6}
        />
        <Pr5
          title="Bigwavemediaconcept website"
          des="A landing page for an events planning business in nigeria"
          src={img7}
        />
      </div>
    </section>
  );
};

export default Projects;
