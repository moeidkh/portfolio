import React, { useEffect, useState } from 'react';
import MainComponent from './MainComponent';
import AboutMe from './AboutMe';

import { useSelector, useDispatch } from 'react-redux';

const Main = () => {


    const color = useSelector(({ Creducer }) => Creducer.color);
    const border = useSelector(({ Creducer }) => Creducer.border);
    const bgColor = useSelector(({ Creducer }) => Creducer.bgColor);
    const showMenu = useSelector(({ Mreducer }) => Mreducer);

    const dispatch = useDispatch();

    const [colorS, setColorS] = useState(color)
    const [bgColorS, setBgColorS] = useState(bgColor);
    const [activeSection, setActiveSection] = useState('intro');
    useEffect(() => {
        setColorS(color);
        setBgColorS(bgColor);
    }, [color, border, bgColor])
    
    return (
        <section className='w-full h-screen text-white flex items-center gap-[9rem] p-6 pr-0 relative'>
            <AboutMe color={colorS} bg={bgColorS} />
            <MainComponent color={colorS} bg={bgColorS} />
            {
                showMenu.settingMenu &&
                <section className='w-full h-screen absolute z-30 bg-slate-700/60 left-0 rtl-direction'
                    onClick={(e) => {
                        dispatch({ type: "SHOWSETTINGMENU", settingMenu: false })
                    }
                    }
                >
                    <section className='absolute top-4 right-4 cursor-pointer'>
                        <i class="fi fi-rr-exit"></i>
                    </section>
                    <section className='w-2/4 h-full bg-gray-900 ltr-direction flex flex-col gap-12 justify-center p-24' onClick={e => e.stopPropagation()}>
                        <h1 className='text-4xl' id='title'>Configuration</h1>
                        <section className='flex gap-4'>
                            <section className={`p-1 rounded-full border-2  hover:border-gray-300 border-transparent transition-all duration-75 `.concat(color === "text-red-500" ? "border-gray-300" : "")}
                                onClick={() => dispatch({ type: "CHANGEALL", color: "text-red-500", border: "border-red-500", bgColor: "bg-red-500" })}
                            >
                                <section className="w-8 h-8 rounded-full cursor-pointer bg-red-500" ></section>
                            </section>
                            <section className={`p-1 rounded-full border-2  hover:border-gray-300 border-transparent transition-all duration-75 `.concat(color === "text-orange-500" ? "border-gray-300" : "")}
                                onClick={() => dispatch({ type: "CHANGEALL", color: "text-orange-500", border: "border-orange-500", bgColor: "bg-orange-500" })}
                            >
                                <section className="w-8 h-8 rounded-full cursor-pointer bg-orange-500" ></section>
                            </section>
                            <section className={`p-1 rounded-full border-2  hover:border-gray-300 border-transparent transition-all duration-75 `.concat(color === "text-yellow-500" ? "border-gray-300" : "")}
                                onClick={() => dispatch({ type: "CHANGEALL", color: "text-yellow-500", border: "border-yellow-500", bgColor: "bg-yellow-500" })}
                            >
                                <section className="w-8 h-8 rounded-full cursor-pointer bg-yellow-500" ></section>
                            </section>
                            <section className={`p-1 rounded-full border-2  hover:border-gray-300 border-transparent transition-all duration-75 `.concat(color === "text-green-500" ? console.log(color) : console.log("no no no"))}
                                onClick={() => dispatch({ type: "CHANGEALL", color: "text-green-500", border: "border-green-500", bgColor: "bg-green-500" })}
                            >
                                <section className="w-8 h-8 rounded-full cursor-pointer bg-green-500" ></section>
                            </section>
                            <section className={`p-1 rounded-full border-2  hover:border-gray-300 border-transparent transition-all duration-75 `.concat(color === "text-cyan-500" ? "border-gray-300" : "")}
                                onClick={() => dispatch({ type: "CHANGEALL", color: "text-cyan-500", border: "border-cyan-500", bgColor: "bg-cyan-500" })}
                            >
                                <section className="w-8 h-8 rounded-full cursor-pointer bg-cyan-500" ></section>
                            </section>
                            <section className={`p-1 rounded-full border-2  hover:border-gray-300 border-transparent transition-all duration-75 `.concat(color === "text-blue-500" ? "border-gray-300" : "")}
                                onClick={() => dispatch({ type: "CHANGEALL", color: "text-blue-500", border: "border-blue-500", bgColor: "bg-blue-500" })}
                            >
                                <section className="w-8 h-8 rounded-full cursor-pointer bg-blue-500" ></section>
                            </section>
                            <section className={`p-1 rounded-full border-2  hover:border-gray-300 border-transparent transition-all duration-75 `.concat(color === "text-fuchsia-500" ? "border-gray-300" : "")}
                                onClick={() => dispatch({ type: "CHANGEALL", color: "text-fuchsia-500", border: "border-fuchsia-500", bgColor: "bg-fuchsia-500" })}
                            >
                                <section className="w-8 h-8 rounded-full cursor-pointer bg-fuchsia-500" ></section>
                            </section>
                            <section className={`p-1 rounded-full border-2  hover:border-gray-300 border-transparent transition-all duration-75 `.concat(color === "text-zinc-400" ? "border-gray-300" : "")}
                                onClick={() => dispatch({ type: "CHANGEALL", color: "text-zinc-400", border: "border-zinc-400", bgColor: "bg-zinc-400" })}
                            >
                                <section className="w-8 h-8 rounded-full cursor-pointer bg-zinc-400" ></section>
                            </section>
                        </section>
                        <section className='flex flex-col gap-8'>
                            <p className='text-lg'>Three Dimensional Shapes</p>
                            <section className='flex  gap-8 text-sm'>
                                <p className='cursor-pointer hover:opacity-70 transition-all duration-100' onClick={() => dispatch({ type: "SETBACKGROUND", bg: "./src/assets/video/video1.mp4" })}>Earth Lines Sphere</p>

                                <p className='cursor-pointer hover:opacity-70 transition-all duration-100' onClick={() => dispatch({ type: "SETBACKGROUND", bg: "./src/assets/video/video2.mp4" })}>3D Abstract Ball</p>

                                <p className='cursor-pointer hover:opacity-70 transition-all duration-100' onClick={() => dispatch({ type: "SETBACKGROUND", bg: "./src/assets/video/video3.mp4" })}>Water Waves</p>

                                <p className='cursor-pointer hover:opacity-70 transition-all duration-100' onClick={() => dispatch({ type: "SETBACKGROUND", bg: "./src/assets/video/video4.mp4" })}>Liquids Wavy</p>
                            </section>
                        </section>
                    </section>
                </section>
            }
            {
                showMenu.leftMenu &&
                <section className='w-full h-screen absolute z-30 bg-slate-700/60 left-0 rtl-direction'
                    onClick={(e) => {
                        dispatch({ type: "SHOWLEFTMENU", settingMenu: false })
                    }
                    }
                >
                    <section className='absolute top-4 right-4 cursor-pointer'>
                        <i class="fi fi-rr-exit"></i>
                    </section>
                    <section className='w-1/5 h-full bg-gray-900 ltr-direction flex flex-col gap-12 justify-center items-center p-24 text-md' onClick={e => e.stopPropagation()}>
                        <ul className='flex flex-col items-center justify-center gap-5'>
                            <a href="#introduce">
                                <li className={`list-none flex justify-center items-center transition-all gap-4 `.concat((activeSection === "intro" ? ` ${color}` : ""))}>
                                    <i className="fi fi-rr-house-chimney cursor-pointer"></i>
                                    Introduce
                                </li>
                            </a>
                            <a href="#aboutTitle">
                                <li className={'w-full list-none flex justify-between items-center transition-all gap-4 '.concat((activeSection === "about" ? ` ${color}` : ""))}>
                                    <i className="fi fi-rr-user cursor-pointer"></i>
                                    About
                                </li>
                            </a>
                            <a href="#resume">
                                <li className={'list-none flex justify-center items-center transition-all gap-4 '.concat((activeSection === "timeline" ? ` ${color}` : ""))}>
                                    <i className="fi fi-rr-briefcase cursor-pointer"></i>
                                    Resume
                                </li>
                            </a>
                            <a href="#myskill">
                                <li className={'list-none flex justify-center items-center transition-all gap-4 '.concat((activeSection === "skills" ? ` ${color}` : ""))}>
                                    <i className="fi fi-rr-resources cursor-pointer"></i>
                                    My Skills
                                </li>
                            </a>
                            <a href="#projects">
                                <li className={'list-none flex justify-center items-center transition-all gap-4 '.concat((activeSection === "proj" ? ` ${color}` : ""))}>
                                    <i className="fi fi-rr-grid cursor-pointer"></i>
                                    Projects
                                </li>
                            </a>
                            <a href="#contact">
                                <li className={'list-none flex justify-center items-center transition-all gap-4 '.concat((activeSection === "request" ? ` ${color}` : ""))}>
                                    <i className="fi fi-rr-comment-alt cursor-pointer"></i>
                                    Contact
                                </li>
                            </a>
                        </ul>
                    </section>
                </section>
            }
        </section>
    );
};

export default Main;