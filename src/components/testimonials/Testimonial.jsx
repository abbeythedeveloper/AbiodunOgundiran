/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Title from "../layouts/Title";
import { RiStarFill } from "react-icons/ri";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import {
  femi,
  img8,
  quote,
  testimonialTwo,
} from "../../assets/drive-download-20230816T084448Z-001";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hidden hover:bg-black duration-300 rounded-lg text-2xl text-gray-400 md:flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}
function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hidden hover:bg-black duration-300 rounded-lg text-2xl text-gray-400 md:flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                color: "blue",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className="w-full py-14 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Client Reviews" des="Testimonials" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto md:h-[500px] block md:flex md:justify-between">
              <div className="w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg p-8 ">
                <img className=" rounded-lg h-64 object-cover" src={femi} />
                <div>
                  <p className="text-xs mt-2 uppercase text-designColor tracking-wide mb-2">
                    Bigwavemediaconcept{" "}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold">
                    Femi Okuribido
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Chief Executive Officer (C.E.O)
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[60%] h-full rounded-lg flex flex-col justify-between ">
                <img className="w-0 md:w-[10%] lg:w-[20%]" src={quote} />
                <div className="w-full p-8 md:p-4 h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne flex flex-col justify-center gap-8">
                  <div className="flex justify-between items-center py-6 md:py-2 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium tracking-wide">
                        Online presence (Landing page)
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        Via Social-Media - Mar 4 2023 - Aug 18 2023
                        <span className="hidden md:flex">
                          {" "}
                          (Project Run time)
                        </span>
                      </p>
                    </div>
                    <div className="text-yellow-500 flex">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 pt-3">
                    I really do appreciate how well your work has helped my
                    business in terms of educating potential customers but also
                    in adding to my social media visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-auto md:h-[400px] block md:flex md:justify-between">
              <div className="w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg p-8 ">
                <img
                  className=" rounded-lg h-64 object-cover"
                  src={testimonialTwo}
                />
                <div>
                  <p className="text-xs mt-2 uppercase text-designColor tracking-wide mb-2">
                    DANE bikes{" "}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold">
                    George gilbert
                  </h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Operations Officer
                  </p>
                </div>
              </div>
              <div className="w-full md:w-[60%] h-full rounded-lg flex flex-col justify-between ">
                <img className="w-0 md:w-[10%] lg:w-[20%]" src={quote} />
                <div className="w-full p-8 md:p-4 h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne flex flex-col justify-center gap-8">
                  <div className="flex justify-between items-center py-6 md:py-2 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium tracking-wide">
                        Cycling Mobile App Design
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        Via referral - jan 13 2023 - june 18 2023
                        <span className="hidden md:flex">
                          {" "}
                          (Project Run time)
                        </span>
                      </p>
                    </div>
                    <div className="text-yellow-500 flex">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill className="text-gray-600" />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 pt-3">
                    A truly wonderful and simplistic design glad to have been
                    able to work with you beautiful user interface and
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full h-auto md:h-[400px] block md:flex md:justify-between">
              <div className="w-full md:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne rounded-lg p-8 ">
                <img className=" rounded-lg h-64 object-cover" src={img8} />
                <div>
                  <p className="text-xs mt-2 uppercase text-designColor tracking-wide mb-2">
                    stickdrip.ng{" "}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold">R.T.B.A</h3>
                  <p className="text-base tracking-wide text-gray-500">C.E.O</p>
                </div>
              </div>
              <div className="w-full md:w-[60%] h-full rounded-lg flex flex-col justify-between ">
                <img className="w-0 md:w-[15%]" src={quote} />
                <div className="w-full p-8 md:p-4 h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne flex flex-col justify-center gap-8">
                  <div className="flex justify-between items-center py-6 md:py-2 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl md:text-2xl font-medium tracking-wide">
                        Clothing Brand Branding items
                      </h3>
                      <p className="text-base text-gray-400 mt-3">
                        Via referrals - june 10 2023 - july 28 2023
                        <span className="hidden md:flex">
                          {" "}
                          (Project Run time)
                        </span>
                      </p>
                    </div>
                    <div className="text-yellow-500 flex">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill className="text-gray-600" />
                    </div>
                  </div>
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6 pt-3">
                    the designs were really nice, The logo variants go on all
                    our clothing types and the mockups depict the brand exactly
                    how the brand is.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
