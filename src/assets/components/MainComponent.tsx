import React, { useRef, useState } from "react";
import AnimatedTag from "../../shared/AnimatedTag";
import NavBar from "./NavBar/NavBar";
import Swal from "sweetalert2";
import * as stylex from "@stylexjs/stylex";

// functions
import { calcMonthAndYear } from "../functions/calcMonth";

// redux
import { useDispatch } from "react-redux";

import { InView } from "react-intersection-observer";
import { styles } from "./Main/Main.stylex";
import { Sections } from "./LeftMenu/LeftMenu";
import Header from "./Header/Header";
import About from "./About/About";
import TimeLine from "./TimeLine/TimeLine";
import Skills from "./Skills/Skills";

const MainComponent = ({ color, bg }) => {
  const dispatch = useDispatch();
  const [month, year] = calcMonthAndYear();

  const [activeSection, setActiveSection] = useState<Sections>(Sections.intro);
  const form = useRef();
  const [formData, setFormData] = useState({
    fullName: "",
    Email: "",
    phoneNumber: "",
    Subject: "",
    budge: "",
    message: "",
  });

  const boxVarient = {
    visible: { opacity: 1, x: "40px" },
    hidden: { opacity: 0, x: "0", transitionDelay: 0.5 },
  };
  const boxVarientLeft = {
    visible: { opacity: 1, x: "40px" },
    hidden: { opacity: 0, x: "80px", transitionDelay: 0.5 },
  };
  const boxVarientDown = {
    visible: { opacity: 1, x: "40px", y: "0" },
    hidden: { opacity: 0, x: "40px", y: "40px", transitionDelay: 0.5 },
  };
  const titleVarient = {
    visible: { opacity: 1, x: "10px" },
    hidden: { opacity: 0, x: "0", transitionDelay: 0.5 },
  };

  const emailSender = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "success",
      text: "your request send.",
    });
    setFormData({
      fullName: "",
      Email: "",
      phoneNumber: "",
      Subject: "",
      budge: "",
      message: "",
    });
  };

  return (
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.labelContainer)}>
        <div key="title" {...stylex.props(styles.label)} id="introduce">
          <i
            className="fi fi-rr-house-chimney"
            style={{ display: "flex", alignItems: "center" }}
          ></i>
          <p {...stylex.props(styles.labelTitle)}>INTRODUCE</p>
        </div>
        <div
          key="menuIcon"
          onClick={() => {
            dispatch({ type: "SHOWLEFTMENU", leftMenu: true });
          }}
          {...stylex.props(styles.menuIcon)}
        >
          <i className="fi fi-rr-apps"></i>
        </div>
      </div>
      <div {...stylex.props(styles.HeaderContainer)}>
        <div {...stylex.props(styles.navbarContainer)}>
          <NavBar
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        <AnimatedTag boxVarient={boxVarient}>
          <InView
            onChange={(inView) => inView && setActiveSection(Sections.intro)}
          >
            <Header />
          </InView>
          <AnimatedTag boxVarient={boxVarient}>
            <div {...stylex.props(styles.experienceContainer)}>
              <div {...stylex.props(styles.monthExperience)}>
                <div {...stylex.props(styles.experienceNumber)}>{month}</div>
                <div {...stylex.props(styles.experienceDescription)}>
                  MONTHS OF <br />
                  EXPERIENCE AND LEARNING
                </div>
              </div>
              <div {...stylex.props(styles.monthExperience)}>
                <div {...stylex.props(styles.experienceNumber)}>+{year}</div>
                <div {...stylex.props(styles.experienceDescription)}>
                  YEARS OF <br />
                  EXPERIENCE AND LEARNING
                </div>
              </div>
            </div>
          </AnimatedTag>
        </AnimatedTag>

        <About
          boxVarient={boxVarient}
          titleVarient={titleVarient}
          setActiveSection={setActiveSection}
        />

        <TimeLine
          boxVarient={boxVarient}
          titleVarient={titleVarient}
          boxVarientDown={boxVarientDown}
          boxVarientLeft={boxVarientLeft}
          setActiveSection={setActiveSection}
        />

        <Skills
          boxVarient={boxVarient}
          titleVarient={titleVarient}
          boxVarientDown={boxVarientDown}
          boxVarientLeft={boxVarientLeft}
          setActiveSection={setActiveSection}
        />

        <AnimatedTag boxVarient={titleVarient}>
          <div
            key="title"
            className="flex items-center justify-center gap-2 border px-4 py-2 mt-8 text-[12px] font-thin rounded-full border-gray-500 w-fit"
            id="projects"
          >
            <i className="fi fi-rr-grid flex items-center"></i>
            <p className="flex items-center tracking-wide">PROJECTS</p>
          </div>
        </AnimatedTag>

        <AnimatedTag boxVarient={boxVarient}>
          <InView
            onChange={(inView) => inView && setActiveSection(Sections.projects)}
          >
            <div className="flex flex-col gap-12 pr-8" id={Sections.projects}>
              <h1 className=" text-4xl">
                Featured <span className={color}>Projects</span>
              </h1>
              <div className="flex flex-col gap-4 w-full">
                <AnimatedTag boxVarient={boxVarient}>
                  <a
                    href="https://musical-moonbeam-9318fd.netlify.app/"
                    target="_blank"
                    className="flex flex-col gap-4"
                  >
                    <div className="w-full h-96 flex items-end pb-2 pl-2 gap-2 sample1 bgConf bg-cover rounded-xl cursor-pointer">
                      <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                        React
                      </div>
                      <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                        HTML
                      </div>
                      <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                        CSS
                      </div>
                    </div>
                    <p className="text-3xl pb-8">Shopping-cart</p>
                  </a>
                </AnimatedTag>

                <div className="w-full gap-4 grid grid-cols-2">
                  <AnimatedTag boxVarient={boxVarient}>
                    <a
                      href="https://todo-list-app-two-phi.vercel.app/"
                      target="_blank"
                      className="flex flex-col gap-4"
                    >
                      <div className="w-full h-96 flex items-end pb-2 pl-2 gap-2 sample2 bgConf bg-cover rounded-xl cursor-pointer">
                        <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                          JavaScript
                        </div>
                        <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                          HTML
                        </div>
                        <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                          CSS
                        </div>
                      </div>
                      <p className="text-3xl pb-8">TodoList</p>
                    </a>
                  </AnimatedTag>
                  <AnimatedTag boxVarient={boxVarientLeft}>
                    <a
                      href="https://preeminent-malasada-964f7b.netlify.app/"
                      target="_blank"
                      className="flex flex-col gap-4"
                    >
                      <div className="h-96 flex items-end pb-2 pl-2 gap-2 sample3 bgConf bg-cover rounded-xl cursor-pointer">
                        <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                          React
                        </div>
                        <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                          HTML
                        </div>
                        <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                          CSS
                        </div>
                      </div>
                      <p className="text-3xl pb-8">SignUp | Login form</p>
                    </a>
                  </AnimatedTag>
                </div>

                <AnimatedTag boxVarient={boxVarientDown}>
                  <a
                    href="https://landing-page-1-one.vercel.app/"
                    target="_blank"
                    className="flex flex-col gap-4"
                  >
                    <div className="w-full h-96 flex items-end pb-2 pl-2 gap-2 sample4 bgConf bg-cover rounded-xl cursor-pointer">
                      <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                        JavaScript
                      </div>
                      <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                        HTML
                      </div>
                      <div className="border border-gray-500 bg-gray-700 w-fit px-4 p-2 flex items-center justify-center rounded-full h-fit">
                        CSS
                      </div>
                    </div>
                    <p className="text-3xl pb-8">Landing Page</p>
                  </a>
                </AnimatedTag>
              </div>
            </div>
          </InView>
        </AnimatedTag>

        <AnimatedTag boxVarient={titleVarient}>
          <div
            key="title"
            className="flex items-center justify-center gap-2 border px-4 py-2 mt-8 text-[12px] font-thin rounded-full border-gray-500 w-fit"
            id="contact"
          >
            <i className="fi fi-rr-comment-alt flex items-center"></i>
            <p className="flex items-center tracking-wide">CONTACT</p>
          </div>
        </AnimatedTag>

        <AnimatedTag boxVarient={boxVarient}>
          <InView
            onChange={(inView) => inView && setActiveSection(Sections.request)}
          >
            <div className="flex flex-col gap-16" id="request">
              <AnimatedTag boxVarient={boxVarient}>
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl">
                    Let's Work <span className={color}>Together!</span>
                  </h1>
                  <p className="text-2xl text-gray-400 pl-2">
                    moeid.kh1381@gmail.com
                  </p>
                </div>
              </AnimatedTag>
              <form
                className="flex flex-col gap-8 text-md"
                ref={form}
                onSubmit={(e) => emailSender(e)}
              >
                <AnimatedTag boxVarient={boxVarient}>
                  <div className="w-full grid grid-cols-2">
                    <div key="name" className="flex flex-col gap-2">
                      <label htmlFor="fullName">
                        Full Name: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        className="bg-transparent text-md outline-none"
                        placeholder="Your Full Name"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData((pervState) => {
                            return {
                              ...pervState,
                              fullName: e.target.value,
                            };
                          });
                        }}
                        required
                      />
                    </div>
                    <div key="email" className="flex flex-col gap-2">
                      <label htmlFor="email">
                        Email: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-transparent text-md outline-none"
                        placeholder="Your Email Address"
                        value={formData.Email}
                        onChange={(e) => {
                          setFormData((pervState) => {
                            return {
                              ...pervState,
                              Email: e.target.value,
                            };
                          });
                        }}
                        required
                      />
                    </div>
                  </div>
                </AnimatedTag>
                <AnimatedTag boxVarient={boxVarientLeft}>
                  <div className="w-full grid grid-cols-2">
                    <div key="name" className="flex flex-col gap-2">
                      <label htmlFor="pnumber">Phone Number(optional):</label>
                      <input
                        type="text"
                        id="pnumber"
                        className="bg-transparent text-md outline-none"
                        placeholder="Your Phone Number"
                        value={formData.phoneNumber}
                        onChange={(e) => {
                          setFormData((pervState) => {
                            return {
                              ...pervState,
                              phoneNumber: e.target.value,
                            };
                          });
                        }}
                      />
                    </div>
                    <div key="email" className="flex flex-col gap-2">
                      <label htmlFor="subj">
                        Subject: <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="subj"
                        className="bg-transparent text-md outline-none"
                        placeholder="Subject"
                        value={formData.Subject}
                        onChange={(e) => {
                          setFormData((pervState) => {
                            return {
                              ...pervState,
                              Subject: e.target.value,
                            };
                          });
                        }}
                        required
                      />
                    </div>
                  </div>
                </AnimatedTag>
                <AnimatedTag boxVarient={boxVarientDown}>
                  <div className="flex flex-col gap-2 text-md">
                    <label htmlFor="budg">Your Budget (optional):</label>
                    <input
                      type="number"
                      id="budg"
                      className="bg-transparent text-md outline-none"
                      min="0"
                      placeholder="Your budge ( just number )"
                      value={formData.budge}
                      onChange={(e) => {
                        setFormData((pervState) => {
                          return {
                            ...pervState,
                            budge: e.target.value,
                          };
                        });
                      }}
                    />
                  </div>
                </AnimatedTag>
                <AnimatedTag boxVarient={boxVarientDown}>
                  <div className="flex flex-col gap-2 text-md">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      type="text"
                      id="message"
                      className="bg-transparent text-md outline-none h-32 resize-none"
                      min="0"
                      placeholder="Write Your Message Here..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData((pervState) => {
                          return {
                            ...pervState,
                            message: e.target.value,
                          };
                        });
                      }}
                    ></textarea>
                  </div>
                </AnimatedTag>
                <AnimatedTag boxVarient={boxVarient}>
                  <div
                    className={`flex ${bg} text-black px-8 py-4 w-fit border border-transparent rounded-full cursor-pointer overflow-hidden outline-none`}
                  >
                    <button
                      type="submit"
                      className="w-full h-full bg-transparent tracking-widest outline-none"
                    >
                      Send Message
                    </button>
                  </div>
                </AnimatedTag>
              </form>
            </div>
          </InView>
        </AnimatedTag>
      </div>
    </div>
  );
};

export default MainComponent;
