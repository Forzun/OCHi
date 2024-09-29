import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState } from "react"; 

function Feature() {
  const [isHovering, setHovering] = useState(false);

  return (
    <div className="w-full py-20 font-montreal ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl tracking-tight">Featured projects</h1>
      </div>
      <div className=" firstCard px-20 h-screen">
        <div className="cards w-full flex gap-5 mt-10">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="cardcontainer relative w-1/2 h-[90vh] rounded-xl "
          >
            <div className="flex items-center gap-4 py-5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h1 className="font-light text-sm">FYDE</h1>
            </div>
            <h1 className="absolute text-8xl text-[#CDEA68] flex overflow-hidden left-full -translate-x-[50%] top-1/2 font-grotes uppercase z-[9] ">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isHovering ? { y: "0" } : { y: "100%" }}
                  transition={{ease:[0.25, 1, 0.5, 1] , delay: index*.07}}
                  className=" inline-block "
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <motion.img
              whileHover={{
                scale: 0.95, 
                transition: { duration: 0.95 , ease:[0.25, 1, 0.5, 1]}
              }}
              transition={{duration: 0.95, ease:[0.25, 1, 0.5, 1]}}

                className="w-full h-full object-cover rounded-xl bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className=" buttons py-5 flex gap-3 ">
              {["audio", "copywriting", "sales deck", "slides design"].map(
                (item, index) => (
                  <button className="px-4 py-[4px] uppercase text-sm font-light text-white border-[1px] rounded-full ">
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[90vh] rounded-xl ">
            <div className="flex items-center gap-4 py-5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h1 className="font-light text-sm">VISE</h1>
            </div>
            <h1 className="absolute text-8xl text-[#CDEA68] right-full translate-x-[50%] top-1/2 font-grotes uppercase z-[9] ">
              {"VISE".split(" ").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <motion.img
                className="w-full h-full  object-cover bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className=" buttons py-5 px-10 flex gap-3 ">
              {["agency", "company presentation"].map((item, index) => (
                <button className="px-4 py-[4px] uppercase text-sm font-light text-white border-[1px] rounded-full ">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" secondCard p-12 px-20">
        <div className="cards w-full flex gap-5 mt-10">
          <div className="cardcontainer relative w-1/2 h-[90vh] rounded-xl ">
            <div className="flex items-center gap-4 py-5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h1 className="font-light text-sm">TRAWA</h1>
            </div>
            <h1 className="absolute text-8xl text-[#CDEA68] left-full -translate-x-[50%] top-1/2 font-grotes uppercase z-[9] ">
              {"TRAWA".split(" ").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className=" buttons py-5 flex gap-3 ">
              {["brand identity", "design research", "investor deck"].map(
                (item, index) => (
                  <button className="px-4 py-[4px] uppercase text-sm font-light text-white border-[1px] rounded-full ">
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="cardcontainer relative w-1/2 h-[90vh] rounded-xl ">
            <div className="flex items-center gap-4 py-5">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <h1 className="font-light text-sm">PREMIUM BLEND</h1>
            </div>
            <h1 className="absolute text-8xl text-[#CDEA68] right-full translate-x-[50%] top-1/2 font-grotes uppercase z-[9] ">
              {"PREMIUMBLEND".split(" ").map((item, index) => (
                <span className="">{item}</span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full  object-cover bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className=" buttons py-5 px-10 flex gap-3 ">
              {["branded template"].map((item, index) => (
                <button className="px-4 py-[4px] uppercase text-sm font-light text-white border-[1px] rounded-full ">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="view mt-36 flex items-center justify-center gap-5">
        <div className="uppercase text-zinc-900 rounded-full flex items-center justify-center gap-8 bg-white px-5 py-4 ">
          view all case studies
          <div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
