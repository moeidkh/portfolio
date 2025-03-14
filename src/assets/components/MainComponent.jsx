import React, { useEffect, useRef, useState } from 'react';
import AnimatedTag from '../../shared/AnimatedTag';
import NavBar from './NavBar';
import AnimatedNumber from "animated-number-react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

// icons
import { SiBootstrap, SiPython, SiRedux, SiSass, SiTailwindcss } from "react-icons/si";


// functions
import { calcMonth } from '../functions/calcMonth';

// redux
import { useSelector, useDispatch } from 'react-redux';

// picture
import text from "./../images/round-text.png";
import { InView } from 'react-intersection-observer';
import { borderColor, hoverGenerator, textColor } from '../functions/hoverGenerator';


const MainComponent = ({ color, bg }) => {

    const dispatch = useDispatch();

    const [activeSection, setActiveSection] = useState('intro');
    const form = useRef();
    const [formData, setFormData] = useState({
        fullName: "",
        Email: "",
        phoneNumber: "",
        Subject: "",
        budge: '',
        message: ""
    })

    const boxVarient = {
        visible: { opacity: 1, x: "40px" },
        hidden: { opacity: 0, x: "0", transitionDelay: 0.5 }
    }
    const boxVarientLeft = {
        visible: { opacity: 1, x: "40px" },
        hidden: { opacity: 0, x: "80px", transitionDelay: 0.5 }
    }
    const boxVarientDown = {
        visible: { opacity: 1, x: "40px", y: "0" },
        hidden: { opacity: 0, x: "40px", y: "40px", transitionDelay: 0.5 }
    }
    const titleVarient = {
        visible: { opacity: 1, x: "10px" },
        hidden: { opacity: 0, x: "0", transitionDelay: 0.5 }
    }

    const emailSender = (e) => {
        e.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'your request send.',
        })
        setFormData({
            fullName: "",
            Email: "",
            phoneNumber: "",
            Subject: "",
            budge: '',
            message: ""
        })
    }

    return (
        <section className='w-full h-screen pt-10 flex flex-col gap-2 overflow-y-scroll'>
            <nav className='w-full flex justify-between items-center pr-16'>
                <section key="title" className='flex items-center justify-center gap-2 border px-4 py-2 text-[12px] font-thin rounded-full border-gray-500' id='introduce'>
                    <i className="fi fi-rr-house-chimney flex items-center"></i>
                    <p className='flex items-center'>INTRODUCE</p>
                </section>
                <section key="menuIcon" onClick={() => {
                    dispatch({ type: "SHOWLEFTMENU", leftMenu: true })
                }}>
                    <i className={`fi fi-rr-apps flex items-center p-4 border-2 border-solid rounded-full border-gray-500 cursor-pointer transition-all hover:border-2 `.concat(hoverGenerator(color))}></i>
                </section>
            </nav>
            <section className='w-[80%] flex flex-col gap-12 pb-16 relative'>
                <section className='fixed right-[-18%] 2xl:right-[4.6rem] top-[14rem] flex items-center justify-center'>
                    <NavBar activeSection={activeSection} color={color} />
                </section>
                {/* <section className='w-full relative'>
                </section> */}
                <AnimatedTag boxVarient={boxVarient}>
                    <InView onChange={inView => inView && setActiveSection('intro')}>
                        <section className='flex flex-col gap-8' id='intro'>
                            <section className='flex flex-col gap-8'>
                                <h1 className='text-[78px] font-light'>Say Hi from <span className={color}>Moeid</span>, Front-End Developer</h1>
                                <p className='text-gray-400 text-justify'>I design and code beautifully simple things and i love what i do.<br /> Just simple like that!</p>
                            </section>
                            <section className='w-full flex justify-end pr-16 pt-10'>
                                <a href="#projects">
                                    <div className='w-fit relative flex rounded-full justify-end border border-gray-500 p-4 cursor-pointer'>
                                        <img src={text} alt="text" className='animate-spin2' />
                                        <i className="fi fi-rr-arrow-down flex absolute text-2xl top-[80.6px] right-[74.3px]" ></i>
                                    </div>
                                </a>
                            </section>
                        </section>
                    </InView>
                    <AnimatedTag boxVarient={boxVarient}>
                        <section className='flex items-center gap-20' >
                            <section className='flex flex-col items-center justify-center w-fit'>
                                <section className={`text-[5rem] font-thin ${color}`}>{calcMonth()}</section>
                                <section className='text-gray-500 text-md text-center'>MONTHS OF <br />EXPERIENCE AND LEARNING</section>
                            </section>
                            <section className='flex flex-col items-center justify-center w-fit'>
                                <section className={`text-[5rem] font-thin ${color}`}>+5</section>
                                <section className='text-gray-500 text-md text-center'>NUMBER OF <br />SAMPLE</section>
                            </section>
                        </section>
                    </AnimatedTag>
                </AnimatedTag>

                <AnimatedTag boxVarient={titleVarient}>
                    <section key="title" className='flex items-center justify-center gap-2 border px-4 py-2 mt-28 text-[12px] font-thin rounded-full border-gray-500 w-fit' id='aboutTitle'>
                        <i className="fi fi-rr-user flex items-center"></i>
                        <p className='flex items-center tracking-wide'>ABOUT</p>
                    </section>
                </AnimatedTag>
                <AnimatedTag boxVarient={boxVarient}>
                    <InView onChange={inView => inView && setActiveSection('about')}>
                        <section className='flex flex-col mb-28' id='about'>
                            <section className='text-gray-400 flex flex-col gap-6'>
                                <h1 className='text-4xl text-white'>Every great design begin with an even <span className={color}>better story</span>.</h1>
                                <p className='text-justify'>
                                    Front-End programming is like creating a work of art that brings an attractive design from a blank page and thousands of users daily immerse themselves in this design. It feels great to be the creator of a work that attracts thousands of views daily. So, I'mmore excited than ever to take steps in this path.Since the beginning of my journey in this field about 6 years ago until now, I have always tried to improve my skills and answer other people's questions, and at one point I started teaching in this field. Solving a problem is very interesting. Basically, the feeling after solving a problem is very sweet, so it is worth spending time on it. On the other hand, I am a curious, self-confident person who is very interested in music.
                                </p>
                            </section>
                        </section>
                    </InView>
                </AnimatedTag>

                <AnimatedTag boxVarient={titleVarient}>
                    <section key="title" className='flex items-center justify-center gap-2 border px-4 py-2 text-[12px] font-thin rounded-full border-gray-500 w-fit' id='resume'>
                        <i className="fi fi-rr-briefcase flex items-center"></i>
                        <p className='flex items-center tracking-wide'>RESUME</p>
                    </section>
                </AnimatedTag>

                <AnimatedTag boxVarient={boxVarient}>
                    <InView onChange={inView => inView && setActiveSection('timeline')}>
                        <section className='flex flex-col pb-16 font-thin' id='timeline'>
                            <section className='w-fit'>
                                <Timeline
                                    sx={{
                                        [`& .${timelineItemClasses.root}:before`]: {
                                            flex: 0,
                                            padding: 0,
                                        },
                                    }}
                                >
                                    <AnimatedTag boxVarient={boxVarient}>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent className={`flex flex-col gap-2 transition-all duration-200 `.concat(textColor(color))}>
                                                2022 - Present
                                                <section className='h-20 mt-4 flex flex-col gap-1'>
                                                    <h1 className='text-lg'>Front-End Development Instructor | Web Design Workshop</h1>
                                                    <p className='text-[0.75rem] text-gray-500'>Qom University</p>
                                                </section>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </AnimatedTag>
                                    <AnimatedTag boxVarient={boxVarientDown}>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent className={`flex flex-col gap-2 transition-all duration-200 `.concat(textColor(color))}>
                                                2020 - Present
                                                <section className='h-20 mt-4 flex flex-col gap-1'>
                                                    <h1 className='text-lg'>Bachelor Degree of Computer Science</h1>
                                                    <p className='text-[0.75rem] text-gray-500'>Qom University</p>
                                                </section>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </AnimatedTag>
                                    <AnimatedTag boxVarient={boxVarientLeft}>
                                        <TimelineItem>
                                            <TimelineSeparator>
                                                <TimelineDot />
                                                <TimelineConnector />
                                            </TimelineSeparator>
                                            <TimelineContent className={`flex flex-col gap-2 transition-all duration-200 `.concat(textColor(color))}>
                                                March 2023 - June 2023
                                                <section className='h-16 mt-4 flex flex-col gap-1'>
                                                    <h1 className='text-lg'>Front-End Developer(React-TypeScript) </h1>
                                                    <p className='text-[0.75rem] text-gray-500'><a href="https://www.linkedin.com/company/pdei" target='_blank'>Iranian Data Support</a></p>
                                                </section>
                                            </TimelineContent>
                                        </TimelineItem>
                                    </AnimatedTag>
                                </Timeline>
                            </section>
                        </section>
                    </InView>
                </AnimatedTag>

                <AnimatedTag boxVarient={titleVarient}>
                    <section key="title" className='flex items-center justify-center gap-2 border px-4 py-2 mt-8 text-[12px] font-thin rounded-full border-gray-500 w-fit' id='myskill'>
                        <i className="fi fi-rr-resources flex items-center"></i>
                        <p className='flex items-center tracking-wide'>MY SKILLS</p>
                    </section>
                </AnimatedTag>

                <AnimatedTag boxVarient={boxVarient}>
                    <InView onChange={inView => inView && setActiveSection('skills')}>
                        <section className='w- flex flex-col gap-8' id='skills' >
                            <h1 className='text-4xl'>My <span className={color}>Skills</span></h1>
                            <section className='w-full flex flex-wrap gap-8'>
                                <AnimatedTag boxVarient={boxVarient}>
                                    <section className='flex flex-col items-center justify-center gap-6'>
                                        <section key="icon" className={`w-32 px-8 py-12 transition-all duration-150 border-2 border-gray-500 rounded-full flex flex-col items-center gap-4 justify-center text-[90px] `.concat(borderColor(color))}>
                                            <a href="https://react.dev/" target='_blank'><i className="fab fa-react flex items-center justify-center"></i></a>
                                        </section>
                                        <p>React.js</p>
                                    </section>
                                </AnimatedTag>

                                <AnimatedTag boxVarient={boxVarientDown}>
                                    <section className='flex flex-col items-center justify-center gap-6'>
                                        <section key="icon" className={`w-32 px-8 py-12 transition-all duration-150 border-2 border-gray-500 rounded-full flex flex-col items-center gap-4 justify-center text-[90px] `.concat(borderColor(color))}>
                                            <a href="https://www.typescriptlang.org/" target='_blank'><i className="fi fi-brands-typescript flex items-center justify-center"></i></a>
                                        </section>
                                        <p>TypeScript</p>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarientDown}>
                                    <section className='flex flex-col items-center justify-center gap-6'>
                                        <section key="icon" className={`w-32 px-8 py-12 transition-all duration-150 border-2 border-gray-500 rounded-full flex flex-col items-center gap-4 justify-center text-[90px] `.concat(borderColor(color))}>
                                            <i className="fab fa-js-square flex items-center justify-center"></i>
                                        </section>
                                        <p>JavaScript</p>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarientLeft}>
                                    <section className='flex flex-col items-center justify-center gap-6'>
                                        <section key="icon" className={`w-32 px-8 py-12 transition-all duration-150 border-2 border-gray-500 rounded-full flex flex-col items-center gap-4 justify-center text-[90px] `.concat(borderColor(color))}>
                                            <a href="https://redux.js.org/" target='_blank'><SiRedux /></a>
                                        </section>
                                        <p>Redux</p>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarient}>
                                    <section className='flex flex-col items-center justify-center gap-6'>
                                        <section key="icon" className={`w-32 px-8 py-12 transition-all duration-150 border-2 border-gray-500 rounded-full flex flex-col items-center gap-4 justify-center text-[90px] `.concat(borderColor(color))}>
                                            <i className="fab fa-html5 flex items-center justify-center"></i>
                                        </section>
                                        <p>HTML</p>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarientLeft}>
                                    <section className='flex flex-col items-center justify-center gap-6'>
                                        <section key="icon" className={`w-32 px-8 py-12 transition-all duration-150 border-2 border-gray-500 rounded-full flex flex-col items-center gap-4 justify-center text-[90px] `.concat(borderColor(color))}>
                                            <i className="fab fa-css3-alt flex items-center justify-center"></i>
                                        </section>
                                        <p>CSS</p>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarientDown}>
                                    <section className='flex flex-col items-center justify-center gap-6'>
                                        <section key="icon" className={`w-32 px-8 py-12 transition-all duration-150 border-2 border-gray-500 rounded-full flex flex-col items-center gap-4 justify-center text-[90px] `.concat(borderColor(color))}>
                                            <a href="https://tailwindcss.com/" target='_blank'><SiTailwindcss /></a>
                                        </section>
                                        <p>Tailwind</p>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarientLeft}>
                                    <section className='flex flex-col items-center justify-center gap-6'>
                                        <section key="icon" className={`w-32 px-8 py-12 transition-all duration-150 border-2 border-gray-500 rounded-full flex flex-col items-center gap-4 justify-center text-[90px] `.concat(borderColor(color))}>
                                            <a href="https://getbootstrap.com/" target='_blank'><SiBootstrap /></a>
                                        </section>
                                        <p>BootStrap</p>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarient}>
                                    <section className='flex flex-col items-center justify-center gap-6'>
                                        <section key="icon" className={`w-32 px-8 py-12 transition-all duration-150 border-2 border-gray-500 rounded-full flex flex-col items-center gap-4 justify-center text-[90px] `.concat(borderColor(color))}>
                                            <a href="https://sass-lang.com/" target='_blank'><SiSass /></a>
                                        </section>
                                        <p>Sass</p>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarientDown}>
                                    <section className='flex flex-col items-center justify-center gap-6'>
                                        <section key="icon" className={`w-32 px-8 py-12 transition-all duration-150 border-2 border-gray-500 rounded-full flex flex-col items-center gap-4 justify-center text-[90px] `.concat(borderColor(color))}>
                                            <a href="https://python.org/" target='_blank'><SiPython /></a>
                                        </section>
                                        <p>Python</p>
                                    </section>
                                </AnimatedTag>
                            </section>
                        </section>
                    </InView>
                </AnimatedTag>

                <AnimatedTag boxVarient={titleVarient}>
                    <section key="title" className='flex items-center justify-center gap-2 border px-4 py-2 mt-8 text-[12px] font-thin rounded-full border-gray-500 w-fit' id='projects' >
                        <i className="fi fi-rr-grid flex items-center"></i>
                        <p className='flex items-center tracking-wide'>PROJECTS</p>
                    </section>
                </AnimatedTag>

                <AnimatedTag boxVarient={boxVarient}>
                    <InView onChange={inView => inView && setActiveSection('proj')}>
                        <section className='flex flex-col gap-12 pr-8' id='proj'>
                            <h1 className=' text-4xl'>Featured <span className={color}>Projects</span></h1>
                            <section className='flex flex-col gap-4 w-full'>
                                <AnimatedTag boxVarient={boxVarient}>
                                    <a href="https://musical-moonbeam-9318fd.netlify.app/" target='_blank' className='flex flex-col gap-4'>
                                        <section className='w-full h-96 flex items-end pb-2 pl-2 gap-2 sample1 bgConf bg-cover rounded-xl cursor-pointer'>
                                            <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>React</section>
                                            <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>HTML</section>
                                            <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>CSS</section>
                                        </section>
                                        <p className='text-3xl pb-8'>Shopping-cart</p>
                                    </a>
                                </AnimatedTag>

                                <section className='w-full gap-4 grid grid-cols-2'>
                                    <AnimatedTag boxVarient={boxVarient}>
                                        <a href="https://todo-list-app-two-phi.vercel.app/" target='_blank' className='flex flex-col gap-4'>
                                            <section className='w-full h-96 flex items-end pb-2 pl-2 gap-2 sample2 bgConf bg-cover rounded-xl cursor-pointer'>
                                                <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>JavaScript</section>
                                                <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>HTML</section>
                                                <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>CSS</section>
                                            </section>
                                            <p className='text-3xl pb-8'>TodoList</p>
                                        </a>
                                    </AnimatedTag>
                                    <AnimatedTag boxVarient={boxVarientLeft}>
                                        <a href="https://preeminent-malasada-964f7b.netlify.app/" target='_blank' className='flex flex-col gap-4'>
                                            <section className='h-96 flex items-end pb-2 pl-2 gap-2 sample3 bgConf bg-cover rounded-xl cursor-pointer'>
                                                <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>React</section>
                                                <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>HTML</section>
                                                <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>CSS</section>
                                            </section>
                                            <p className='text-3xl pb-8'>SignUp | Login form</p>
                                        </a>
                                    </AnimatedTag>
                                </section>

                                <AnimatedTag boxVarient={boxVarientDown}>
                                    <a href="https://landing-page-1-one.vercel.app/" target='_blank' className='flex flex-col gap-4'>
                                        <section className='w-full h-96 flex items-end pb-2 pl-2 gap-2 sample4 bgConf bg-cover rounded-xl cursor-pointer'>
                                            <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>JavaScript</section>
                                            <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>HTML</section>
                                            <section className='border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit'>CSS</section>
                                        </section>
                                        <p className='text-3xl pb-8'>Landing Page</p>
                                    </a>
                                </AnimatedTag>
                            </section>
                        </section>
                    </InView>
                </AnimatedTag>

                <AnimatedTag boxVarient={titleVarient}>
                    <section key="title" className='flex items-center justify-center gap-2 border px-4 py-2 mt-8 text-[12px] font-thin rounded-full border-gray-500 w-fit' id='contact' >
                        <i className="fi fi-rr-comment-alt flex items-center"></i>
                        <p className='flex items-center tracking-wide'>CONTACT</p>
                    </section>
                </AnimatedTag>

                <AnimatedTag boxVarient={boxVarient}>
                    <InView onChange={inView => inView && setActiveSection('request')}>
                        <section className='flex flex-col gap-16' id='request'>
                            <AnimatedTag boxVarient={boxVarient}>
                                <section className='flex flex-col gap-4'>
                                    <h1 className='text-4xl'>Let's Work <span className={color}>Together!</span></h1>
                                    <p className='text-2xl text-gray-400 pl-2'>moeid.kh1381@gmail.com</p>
                                </section>
                            </AnimatedTag>
                            <form className='flex flex-col gap-8 text-md' ref={form} onSubmit={(e) => emailSender(e)}>
                                <AnimatedTag boxVarient={boxVarient}>
                                    <section className='w-full grid grid-cols-2'>
                                        <section key="name" className='flex flex-col gap-2'>
                                            <label htmlFor="fullName">Full Name: <span className='text-red-600'>*</span></label>
                                            <input type="text" id='fullName' className='bg-transparent text-md outline-none' placeholder='Your Full Name' value={formData.fullName} onChange={(e) => {
                                                setFormData(pervState => {
                                                    return {
                                                        ...pervState,
                                                        fullName: e.target.value
                                                    }
                                                })
                                            }
                                            } required />
                                        </section>
                                        <section key="email" className='flex flex-col gap-2'>
                                            <label htmlFor="email">Email: <span className='text-red-600'>*</span></label>
                                            <input type="email" id='email' className='bg-transparent text-md outline-none' placeholder='Your Email Address' value={formData.Email} onChange={(e) => {
                                                setFormData(pervState => {
                                                    return {
                                                        ...pervState,
                                                        Email: e.target.value
                                                    }
                                                })
                                            }
                                            } required />
                                        </section>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarientLeft}>
                                    <section className='w-full grid grid-cols-2'>
                                        <section key="name" className='flex flex-col gap-2'>
                                            <label htmlFor="pnumber">Phone Number(optional):</label>
                                            <input type="text" id='pnumber' className='bg-transparent text-md outline-none' placeholder='Your Phone Number' value={formData.phoneNumber} onChange={(e) => {
                                                setFormData(pervState => {
                                                    return {
                                                        ...pervState,
                                                        phoneNumber: e.target.value
                                                    }
                                                })
                                            }
                                            } />
                                        </section>
                                        <section key="email" className='flex flex-col gap-2'>
                                            <label htmlFor="subj">Subject: <span className='text-red-600'>*</span></label>
                                            <input type="text" id='subj' className='bg-transparent text-md outline-none' placeholder='Subject' value={formData.Subject} onChange={(e) => {
                                                setFormData(pervState => {
                                                    return {
                                                        ...pervState,
                                                        Subject: e.target.value
                                                    }
                                                })
                                            }
                                            } required />
                                        </section>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarientDown}>
                                    <section className='flex flex-col gap-2 text-md'>
                                        <label htmlFor="budg">Your Budget (optional):</label>
                                        <input type="number" id="budg" className='bg-transparent text-md outline-none' min="0" placeholder='Your budge ( just number )' value={formData.budge} onChange={(e) => {
                                            setFormData(pervState => {
                                                return {
                                                    ...pervState,
                                                    budge: e.target.value
                                                }
                                            })
                                        }
                                        } />
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarientDown}>
                                    <section className='flex flex-col gap-2 text-md'>
                                        <label htmlFor="message">Message:</label>
                                        <textarea type="text" id="message" className='bg-transparent text-md outline-none h-32 resize-none' min="0" placeholder='Write Your Message Here...' value={formData.message} onChange={(e) => {
                                            setFormData(pervState => {
                                                return {
                                                    ...pervState,
                                                    message: e.target.value
                                                }
                                            })
                                        }
                                        }></textarea>
                                    </section>
                                </AnimatedTag>
                                <AnimatedTag boxVarient={boxVarient}>
                                    <section className={`flex ${bg} text-black px-8 py-4 w-fit border border-transparent rounded-full cursor-pointer overflow-hidden outline-none`}>
                                        <button type='submit' className='w-full h-full bg-transparent tracking-widest outline-none'>Send Message</button>
                                    </section>
                                </AnimatedTag>
                            </form>

                        </section>
                    </InView>
                </AnimatedTag>

            </section>
        </section>
    );
};

export default MainComponent;