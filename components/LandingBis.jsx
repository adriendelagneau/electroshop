"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { convertStringToSpans } from './splitDidToSpans'
import gsap from 'gsap'

const LandingBis = () => {

    useEffect(() => {

        let Tl = gsap.timeline()
            
        Tl
            .to("#your span", { opacity: 1, stagger: 0.05 }, "init")
            .to("#ultimate span", {opacity: 1, stagger: 0.05, delay: 0.25}, "init")
            .to("#tech span", {opacity: 1, stagger: 0.05, delay: 0.5}, "init")
            .to("#experience span", {opacity: 1, stagger: 0.05, delay: 0.75}, "init")
        
        
    }, []);

    
  return (
    <div className='w-full h-[80vh] bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 rounded-lg mt-12 flex  flex-col xl:flex-row'>
      


      <div className='flex items-center justify-center flex-1 w-full '>
        
        <div className='w-[240px] sm:w-[320px] xl:w-[400px] 2xl:w-[500px]'>
          <Image
            src='/klipartz.com_vxxufp.png'
            alt="colored grafitti airmax"
            width={570}
            height={570}
            priority={true}
            // sizes="(min-width: 620px) 570px, calc(90vw + 30px)"
           // className='m-auto'
           />
        </div>
           </div>

        <div className='flex flex-col justify-center flex-1 gap-12 text-4xl font-Lemon text-skin-inverted first-letter:text-5xl sm:text-6xl sm:first-letter:text-7xl 2xl:text-8xl 2xl:first-letter:text-9xl'>
        <div id='your'>{convertStringToSpans("Your")}</div>
        <div id='ultimate'>{convertStringToSpans("Ultimate")}</div>
        <div id='tech'>{convertStringToSpans("Tech")}</div>
        <div id='experience'>{convertStringToSpans("Experience")}</div>
        </div>
      </div>
  )
}

export default LandingBis