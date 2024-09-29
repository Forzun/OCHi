import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import image1 from "../images/content-image1.jpg"

function Landing() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.6" className="w-full h-screen bg-zinc-900 pt-1 ">
      <div className="tesxtstructure mt-40 px-20 ">
        {["We  create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{width: 0}}
                    animate={{width: "8vw"}}
                    transition={{ease: [0.76, 0, 0.24, 1] , duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.5vw] relative -top-[0.2vw] flex items-center "
                  >
                    <img className="object-cover bg-cover rounded-lg " src={image1} alt="" />
                  </motion.div>
                )}
                <h1
                  key={index}
                  className="uppercase text-[8.5vw] font-grotes leading-[6.5vw]"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20  flex justify-between px-16 py-5 ">
        {["For Public and pivate companies", "From the first pitch to IPO"].map(
          (item, index) => (
            <p className="text-md leading-none font-light tracking-tight">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-3">
          <div className="px-5 py-2 rounded-full border-[1px] border-zinc-500 text-sm upper font-light ">
            start the projects
          </div>
          <div className="w-7 h-7 border-[1px] border-zinc-500  rounded-full flex items-center justify-center ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
