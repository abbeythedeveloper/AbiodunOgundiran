import Banner from "./components/banner/Banner";
import Contact from "./components/contacts/Contact";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";
// import NavTest from "./components/navbar/NavTest";
import Navbar from "./components/navbar/Navbar";

import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Testimonial from "./components/testimonials/Testimonial";
import "./index.css";
// eslint-disable-next-line no-unused-vars
import React from "react";

function App() {
  return (
    <div className="w-full h-auto overflow-x-hidden bg-bodyColor text-lightText ">
      <Navbar />
      {/* <NavTest /> */}
      <div className="max-w-screen-2xl mx-auto md:px-16 px-5 lg:px-16">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}

export default App;
