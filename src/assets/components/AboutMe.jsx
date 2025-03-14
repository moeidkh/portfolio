import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {hoverGenerator } from "../functions/hoverGenerator";
// picture
import prof from "./../images/prof.jpg";


const AboutMe = ({color, bg}) => {

    const dispatch = useDispatch()

    return (
        <section className='w-[22.5rem] h-full rounded-[2rem] border-[1px] border-solid border-gray-600 flex flex-col items-center gap-5 relative ml-3'>
            <section key="settings" className='absolute top-8 left-[-20px] text-md bg-gray-800 p-[0.65rem] rounded-md cursor-pointer' onClick={() => dispatch({type: "SHOWSETTINGMENU" , settingMenu: true})}>
                <i className="fi fi-rr-settings flex items-center animate-spin"></i>
            </section>
            <section key="info" className='w-full p-6 flex justify-between items-center darlin'>
                <h1 className='text-2xl'>Moeid Khoshbaten</h1>
                <p className='w-32 text-sm'>Web Developer<br /> Front-End<span className='text-gray-400 text-[0.75rem]'> (React)</span></p>
            </section>
            <section className='w-64 h-60 rounded-2xl overflow-hidden'>
                <img src={prof} alt="" className='w-full' />
            </section>
            <section key="contact" className='font-thin text-2xl flex flex-col justify-center items-center'>
                <p>moeid.kh1381@gmail.com</p>
                <p>Based in Qom, IR</p>
            </section>
            <section key="copyright" className='font-thin text-gray-400'>
                &copy; Moeid. All Rights Reserved.
            </section>
            <section key="social" className='flex gap-3'>
                <a href="https://t.me/Moeid_Khoshbaten" target='_blank'><i className={'fab fa-telegram-plane text-gray-500 border-[2px] border-gray-500 p-4 rounded-full cursor-pointer transition-all duration-150 ease-linear '.concat(hoverGenerator(color))}></i></a>
                <a href='https://www.linkedin.com/in/moeid-khoshbaten-7aa27523a/' target='_blank'>
                    <i className={`fab fa-linkedin-in text-gray-500 border-[2px] border-gray-500 p-4 rounded-full cursor-pointer transition-all duration-150 ease-linear`.concat(hoverGenerator(color))}></i>
                </a>
                <a href='https://github.com/moeidkh' target='_blank'>
                    <i className={`fab fa-github text-gray-500 border-[2px] border-gray-500 p-4 rounded-full cursor-pointer transition-all duration-150 ease-linear `.concat(hoverGenerator(color))}></i>
                </a>
                <a href='tel:+989210228136' target='_blank' className={`text-gray-500 border-[2px] border-gray-500 p-4 rounded-full cursor-pointer flex transition-all duration-150 ease-linear `.concat(hoverGenerator(color))}>
                    <i className="fi fi-rr-phone-flip flex"></i>
                </a>
            </section>
            <a href='mailto:moeid.kh1381@gamil.com' className={`text-black flex items-center justify-center gap-1 border-2 border-solid border-transparent ${bg} w-[80%] h-12 rounded-full cursor-pointer transition-all duration-150 ease-out hover:bg-transparent `.concat(hoverGenerator(color))}>
                <section key="hereme" className='flex gap-2 items-center justify-center'>
                    <i className="fi fi-rr-envelope flex items-center"></i>
                    <button>HIRE ME !</button>
                </section>
            </a>
        </section>
    );
};

export default AboutMe;