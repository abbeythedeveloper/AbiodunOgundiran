/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [allFilled, setAllFilled] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Please enter your name");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required");
    } else if (email === "") {
      setErrMsg("Please enter your E-mail");
    } else if (!emailValidation(email)) {
      setErrMsg("Please give a 'valid' E-mail");
    } else if (subject === "") {
      setErrMsg("Please give a subject!");
    } else if (message === "") {
      setErrMsg("Message is required");
    } else {
      setSuccessMsg(`Thank you ${username}, Your Message sent Successfully!`);
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };
  return (
    <section
      id="contacts"
      className="w-full py-14 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Leave a message" des="Contact" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto block md:block lg:flex md:justify-between">
          <ContactLeft />
          <div className="w-full md:w-full lg:w-[60%] h-full rounded-lg flex flex-col gap-8 mt-8 py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 shadow-shadowOne">
            <form className="w-full flex flex-col gap-6 py-2">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-400  text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className=" w-full block md:flex flex-row gap-6">
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your Name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Please enter your name" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone number is required" &&
                      "outline-designColor"
                    } contactInput`}
                    type="number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  E-mail address
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Please enter your E-mail" &&
                    "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Please give a subject!" && "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  cols="30"
                  rows="8"
                  className={`${
                    errMsg === "Message is required" && "outline-designColor"
                  } contactTextArea`}
                  type="text"
                />
              </div>
              <div>
                <button
                  onClick={handleSend}
                  className="w-full h-14 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  send message
                </button>
                {errMsg && (
                  <p className="py-3  mt-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                    {errMsg}
                  </p>
                )}
                {successMsg && (
                  <p className="py-3 mt-8 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-400  text-base tracking-wide animate-bounce">
                    {successMsg}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
