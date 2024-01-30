"use client"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Landing = () => {
  

  

  return (
    <div className='w-full h-[80vh] bg-gradient-to-b from-sky-400 to-sky-200 rounded-lg mt-12 flex  flex-col xl:flex-row'>
      


      <div className='flex items-center justify-center flex-1 w-full '>
        
        <div className='w-[240px] sm:w-[320px] xl:w-[400px] 2xl:w-[500px]'>
          <Image
            src='/klipartz.com_vxxufp.png'
            alt="colored grafitti airmax"
            width={570}
            height={570}
            priority={true}
         
            className='scale-75'
            // sizes="(min-width: 620px) 570px, calc(90vw + 30px)"
           // className='m-auto'
           />
        </div>
           </div>

        <div className='flex flex-col items-center justify-center flex-1 gap-12 text-4xl font-Lemon text-skin-inverted first-letter:text-5xl sm:text-6xl sm:first-letter:text-7xl 2xl:text-8xl 2xl:first-letter:text-9xl'>
        <div>Your Ultimate</div>
        <div>Tech Experience</div>
        </div>
      </div>
  )
}

export default Landing