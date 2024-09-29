import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-secton data-scroll-speed="-.1" className='w-full mt-20 py-20 bg-[#004D43] rounded-3xl'>
        <div className='text border-t-2 border-b-2 border-zinc-400  flex whitespace-nowrap overflow-hidden '>
            <motion.h1 initial={{x: 0}} animate={{x: " -100%"}} transition={{ repeat: Infinity , duration: 10 , ease: "linear"}} className='text-[25vw] leading-none font-grotes uppercase -mb-[1vw] -mt-[1vw]'>We are ochi</motion.h1>
            <motion.h1 initial={{x: 0}} animate={{x: " -100%"}} transition={{ repeat: Infinity , duration: 10 , ease: "linear"}} className='text-[25vw] leading-none font-grotes uppercase -mb-[1vw] -mt-[1vw]'>We are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee