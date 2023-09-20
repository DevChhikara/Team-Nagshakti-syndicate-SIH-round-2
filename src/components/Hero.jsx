import styles from "../style";
import { openimage } from "../assets";
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from "react";
const Hero = () => {

  const inputRef=useRef(null);
  const [image,setImage]=useState("");
  const history = useNavigate();
    const handleImageSelection = () =>{
        inputRef.current.click();
    }
    const handleImageChange = (e) => {
    const file = e.target.files[0];
    if(file){
        setImage(file);
    }    
    }
    const handleImageClick = async () => {

        await setTimeout(
            function() 
            {
                history(`/result`);
            }, 3000);
    }
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex 1 flex-col ${styles.flexStart} xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-white">
            Terrain <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Recogniation</span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] text-white">
          System
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Vision based methods using deep learning to perform terrain recognition (sandy/rocky/grass/marshy) enhanced with implicit quantities information such as the roughness, slipperiness, an important aspect for high-level environment perception.
        </p>
        <div className="flex">
        <button onClick={handleImageClick} type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary hover:bg-sky-700 rounded-[10px] outline-none mt-10 ${styles}`}>submit</button>
        <div onClick={handleImageSelection} className="mx-12">
        <input type='file' ref={inputRef} onChange={handleImageChange} className="hidden"></input>
          <button onClick={handleImageChange} type="button" className={`py-4 px-6 bg-white font-poppins font-medium text-[18px] text-primary hover:bg-sky-700 rounded-[10px] outline-none mt-10 ${styles}`}>Upload</button>
        </div>
        
        </div>
      </div>
      
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative mx-12 `}
      >
        {image ? (
        <img src={URL.createObjectURL(image)} alt="billing"
        className="w-[100%] h-[100%] relative z-[5] "></img>
    ) : <img src={openimage} alt="billing"
    className="w-[100%] h-[100%] relative z-[5]"></img> }
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient "></div>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient "></div>
        <div className="absolute z-[0] w-[50%] h-[50%] bottom-20 right-20 blue__gradient "></div>
      </div>
    </section>
  );
};

export default Hero;
