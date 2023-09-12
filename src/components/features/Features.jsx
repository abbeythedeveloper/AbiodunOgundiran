/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaObjectGroup, FaGlobe, FaCode, FaVideo } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Card from "./Card";

const Features = ({ title, des }) => {
  return (
    <section
      id="features"
      className="w-full py-14 border-b-[1px] border-b-black"
    >
      <div className="flex flex-col lg:grid-cols-3 md:grid md:grid-cols-2 gap-20">
        <Card
          title="Website Development"
          des={`"Crafting digital experiences, one line of code at a time, to bring your vision to life online."`}
          icon={<FaCode />}
        />
        <Card
          title="Website Design"
          des={`"Elevating businesses through captivating design, I transform visions into engaging, user-centric websites that leave lasting impressions."`}
          icon={<AiFillAppstore />}
        />
        <Card
          title="Video Editing"
          des={`"Transforming raw footage into captivating stories through precise editing, enhancing visuals, sound, and storytelling flow."`}
          icon={<FaVideo />}
        />
        <Card
          title="Motion Graphics"
          des={`" Transforming ideas into captivating visuals through animated design, enhancing storytelling and user engagement."`}
          icon={<FaObjectGroup />}
        />
        <Card
          title="UI/UX Design"
          des={`"Crafting digital experiences that captivate users through intuitive interfaces and seamless interactions."`}
          icon={<SiAntdesign />}
        />
        <Card
          title="Web Hosting services"
          des={`"Web hosting stores your website files online, while domain names like www.yourname.com serve as web addresses for online presence."`}
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
