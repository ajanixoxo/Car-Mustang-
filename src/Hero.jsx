import React from 'react'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Car from '/images/Car.png'
import earth from '/images/earth.png'
import horse from '/images/horse.png'
import bg from '/images/bg.png'
import ade from '/images/ade4.png'
import dollar from '/images/dollar.png'
import f1 from '/images/f1.png'
import f2 from '/images/f2.png'
import f3 from '/images/f3.png'
import f4 from '/images/f4.png'
import v from '/images/v.png'
import f from '/images/f.png'
import i from '/images/i.png'

import './App.css'
function Hero() {
  useEffect( () => {
    AOS.init({
        duration: 1000, // Animation duration (in milliseconds)
        easing: 'ease-in-out', // Easing function
      });
    }, []);
  return (
    <div className="p-4 " data-aos="zoom-in"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000">
<nav className="flex justify-between items-center flex-col md:flex-row w-full gap-2 md:gap-0">
  <div className="flex gap-4 justify-center items-center w-auto">
    <img src={horse} alt="" />
    <h2 className="font-bold text-[20px]">FORDEST</h2>
  </div>
  <div className="w-auto">
    <ul className="flex justify-between items-center gap-4">
      <li className="text-blue-400 underline active">Models</li>
      <li>Technology</li>
      <li>History</li>
      <li>Shop</li>
      <li>Owner</li>
    </ul>
  </div>
  <div className="flex justify-center items-center gap-4 w-auto">
    <img src={ade} className="w-10" alt=" " />
    <img src={earth }alt=""  className="w-8 h-8" />
    <span className="text-sm text-gray-300">English </span>

  </div>
</nav>
    <div className="hero flex flex-col md:flex-row justify-center items-center w-full mt-10 md:mt-20">
      <div className="hero-left w-full md:w-1/2 md:pl-20 flex flex-col gap-10 relative "
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="300"
      data-aos-duration="2000">
      <div>
        <h1 className="text-[55px] font-semibold md:w-8/12 text-center md:text-left"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="400"
        data-aos-duration="2000">Ford Mustang
             Shelby GT350R
        </h1>
        <p className="text-[#7588B0] text-[13.7px] md:w-[50%] text-center md:text-left"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="400"
         data-aos-duration="2000">
                As a track-ready version of the Ford Mustang.the Shelby
               GT350 has even more muscular styling
               and next-level performance
         </p></div>
        <div className="details pt-2 flex gap-20 items-center justify-center"
         data-aos="fade-up"
         data-aos-offset="200"
         data-aos-delay="400"
         data-aos-duration="2000">
            <div className="flex gap-2">
           <img src={dollar} className="w-6 h-10" alt="" />
            <div >
              <h6 className="text-[11px] text-[#7385AC] font-semibold">Starting At</h6>
              <h2 className="text-[33.7px] text-[#7385AC] font-semibold">68,230</h2>
            </div>

          </div>
          <button className="bg-[#60C2ED] p-2 h-10 w-36 rounded-3xl">Configure</button>

        </div>
      </div>
      <div className="absolute bottom-[-20px] md:bottom-10 flex gap-10 left-[100px]"
      >
     <img src={v} alt=""/>
     <img src={i} alt=""/>
     <img src={f} alt=""/>
    </div>
      <div className="hero-right  w-full md:w-1/2 flex flex-col justify-center">
        <div>
          <img src={Car} className="w-full mt-10" data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="500"
          data-aos-duration="2000" />
        </div>
        <div className="list-container flex flex-row justify-center items-center gap-20 text-center" 
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="600"
        data-aos-duration="2000">
<div className="items flex flex-row flex-col justify-center items-center ">
  {/* svg */}
  <img src={f1} alt="" className="mb-4" />

  <div>
    <h6 className="text-[10px] text-[#627FAA] font-semibold">Max.speed</h6>
    <h2 className="text-[#366AA1] text-[16px] font-semibold">224MPH</h2>
  </div>
</div>
<div className="items flex flex-row flex-col justify-center items-center">
<img src={f2} alt="" className="mb-4"  />
  <div>
    <h6 className="text-[10px] text-[#627FAA] font-semibold">0-100 mph</h6>
    <h2 className="text-[#366AA1] text-[16px] font-semibold">3.5 SEC</h2>
  </div>
</div>
<div className="items flex flex-row flex-col justify-center items-center">
  {/* svg */}
  <img src={f3} alt="" className="mb-4" />
  <div>
    <h6 className="text-[10px] text-[#627FAA] font-semibold">Power</h6>
    <h2 className="text-[#366AA1] text-[16px] font-semibold">526HP</h2>
  </div>
</div>
<div className="items flex flex-row flex-col justify-center items-center">
  {/* svg */}
  <img src={f4} alt="" className="mb-4" />
  <div>
    <h6 className="text-[10px] text-[#627FAA] font-semibold">Production</h6>
    <h2 className="text-[#366AA1] text-[16px] font-semibold">2019-present</h2>
  </div>
</div>
        </div>
      </div>
    </div>

    </div>
  
  )
}

export default Hero