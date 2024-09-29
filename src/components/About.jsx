import React from "react";

function About() {
  return (
    <div className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <div className="text ">
        <h1 className="font-montreal text-[4vw] leading-[4vw] p-16 font-medium ">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
      </div>
      <div className="borders ">
        <div className="border-t-[1px] -my-[1vw] border-zinc-500"></div>
      </div>
      <div className="-mt-[5vw] p-20 w-full flex justify-between text-[17px] leading-6  ">
        <div className="text">
          <h1>What you can expect:</h1>
        </div>
        <div className="second-text w-[20vw] flex flex-wrap gap-5 ml-[20vw] ">
          {[
            "We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.",
            "We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.",
          ].map((item, index) => (
            <p
              className="text-[1.1vw] font-regular"
            >
              {item}
            </p>
          ))}
        </div>
        <div className="another text mt-20 mr-32 ">
            <h1 className="pb-6">S:</h1>
          {["Instagram", "Behance", "Facebook", "LinkedIn"].map((item , index ) => ( 
            <a href="" className="flex ">{item}</a>
          ))}
        </div>
      </div>
      <div className="borders h-screen ">
        <div className="border-t-[1px] px-20 pt-8 -my-[1vw] border-zinc-500 flex gap-5">
            <div className="w-1/2">
                <h1 className="text-6xl mb-4 tracking-tighter font-normal">Our approach :</h1>
                <button className="px-7 py-4 bg-zinc-900 rounded-full flex gap-7 items-center justify-center uppercase text-white">Read More
                  <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                </button>
            </div>
            <div className="w-1/2 h-[70vh] rounded-3xl bg-[#383b2a80] " ></div>
        </div>
      </div>
    </div>
  );
}
export default About;

