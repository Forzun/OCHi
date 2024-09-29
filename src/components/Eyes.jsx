import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate , setRotate] = useState(0)

    useEffect(() => { 
        window.addEventListener("mousemove" , (e) => {  
            let mouseX = e.clientX; 
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2; 
            let deltaY = mouseY - window.innerHeight/2; 

            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            setRotate(angle-180)
        })
    })

  return (
    <div className='eyes w-full h-screen overflow-hidden '>
        <div className='w-full h-full relative bg-red-500 bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-6 flex '>
                <div className=' flex items-center justify-center w-[15vw] h-[15vw] bg-zinc-100 rounded-full'>
                    <div className='w-2/3 h-2/3  bg-black rounded-full relative '>
                    <div style={{transform:`translate(-50% , -50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  '>
                        <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                    </div>
                    </div>
                </div>
                <div className=' flex items-center justify-center w-[15vw] h-[15vw]  bg-zinc-100 rounded-full'>
                    <div className='w-2/3 h-2/3  bg-black rounded-full flex items-center justify-center relative '>
                       <div  style={{transform:`translate(-50% , -50%) rotate(${rotate}deg)` }} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                          <div className='w-5 h-5 bg-zinc-100 rounded-full'></div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes