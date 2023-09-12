import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import FooterComp from "./component/Footer";
const Sendme = () => {
  const SendMessage = (e: React.SyntheticEvent) => {
    e.preventDefault();
    alert("Wait for Response");
    emailjs
      .sendForm(
        "service_ikbyhsd",
        "template_zgmwk1k",
        form.current || "",
        "3C1j0goxlvghwX2g9"
      )
      .then(
        (result) => {
          alert("Message sent!!");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const form = useRef<HTMLFormElement>(null);
  return (
    <div className="h-full bg-[#0b0ed4]" id="sendme">
      <div className="min-h-[100svh] bg-white flex flex-col justify-between">
        <div className="min-h-[85svh] flex items-center container mx-auto px-4 justify-center">
          <div className="w-full max-w-[35rem]">
            <header className="font-bold text-[#0b0ed4] text-xl md:text-3xl lg:text-5xl py-5   ">
              <h1 className="text-ellipsis">Lets Talk.</h1>
            </header>
            <div className="block">
              <form ref={form} onSubmit={SendMessage}>
                <label htmlFor="name" className="block font-semibold text-lg">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  className="shadow-lg text-black focus:outline-none w-full h-[2rem] p-4 my-4"
                  placeholder="Your Name"
                />
                <label htmlFor="email" className="block font-semibold text-lg">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  className="shadow-lg text-black focus:outline-none w-full h-[2rem] p-4 my-4"
                  placeholder="Your E-Mail"
                />
                <label htmlFor="email" className="block font-semibold text-lg">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="shadow-lg text-black focus:outline-none w-full min-h[3rem] resize-none h-[5rem] p-4 my-4"
                  placeholder="Message"
                />
                <button
                  type="submit"
                  className="relative text-white font-bold rounded-full hover:pl-2 hover:pr-7 duration-700 px-2 md:px-3 py-1 border text-sm md:text-lg after:content-['\00bb'] after:absolute after:opacity-0 after:duration-200 hover:after:opacity-100 after:right-6 hover:after:right-2 hover:bg-white bg-[#0b0ed4]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <FooterComp />
      </div>
    </div>
  );
};

export default Sendme;
