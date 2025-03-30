import React, { useCallback, useRef, useState } from "react";
import AnimatedTag from "../../../shared/AnimatedTag";
import { InView } from "react-intersection-observer";
import { Sections } from "../LeftMenu/LeftMenu";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./Experience.stylex";
import { globalStyles } from "../../../Stylex/GlobalStyles.stylex";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

type Props = {
  titleVarient: Record<string, Object>;
  boxVarient: Record<string, Object>;
  boxVarientDown: Record<string, Object>;
  boxVarientLeft: Record<string, Object>;
  setActiveSection: (section: Sections) => void;
};

const Experience = ({
  boxVarient,
  boxVarientLeft,
  setActiveSection,
  titleVarient,
}: Props) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  const [swiperIndex, setSwiperIndex] = useState(1);

  const experiences = [
    {
      id: 1,
      companyName: "Bale Messenger",
      role: "Front-End Developer (React-Typescript)",
      experience: `During my time at Bale, I was involved in the messaging department, primarily maintaining the product, and secondarily developing various features such as mentions, unread reactions, sending locations, etc.
I also developed a library to make the Bale web version multilingual as a client. During this time, I have used React, TypeScript, Redux, Redux Toolkit, RXJS, Redux Observable, etc. I have also used vitest and jest for writing tests, and Git for version control, etc., and I have experience writing all kinds of tests such as unit tests, integration tests, and E2E.`,
    },
    {
      id: 2,
      companyName: "Iranian Data Support",
      role: "Front-End Developer (React-Typescript)",
      experience: `During my four-month tenure at Iranian Data Support, I gained valuable experience in implementing Windows11 in web applications and implementing some of its features using React (TypeScript) and Redux for statemanagement. I also provided technical support to customers by handling their inquiries and resolving technical
issues related to React (TypeScript) framework.`,
    },
    {
      id: 3,
      companyName: "Front-End Development Instructor | Web Design Workshop",
      role: "Front-End Developer",
      experience: `Teaching individuals interested in programming
Currently teaching at the Web Design Workshop of the Computer Science Association at QomUniversity`,
    },
  ];

  const nextSlideOnClick = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
    if (swiperIndex < experiences.length) {
      setSwiperIndex((prevState) => prevState + 1);
    }
  }, [swiperIndex, swiperRef]);

  const prevSlideOnClick = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
    if (swiperIndex > 1) {
      setSwiperIndex((prevState) => prevState - 1);
    }
  }, [swiperIndex, swiperRef]);

  return (
    <>
      <AnimatedTag boxVarient={titleVarient}>
        <div {...stylex.props(globalStyles.labelContainer)}>
          <div
            key="title"
            {...stylex.props(globalStyles.label)}
            id="experience"
          >
            <i
              className="fi fi-rr-grid"
              style={{ display: "flex", alignItems: "center" }}
            ></i>
            <p {...stylex.props(globalStyles.labelTitle)}>PROJECTS</p>
          </div>
        </div>
      </AnimatedTag>

      <AnimatedTag boxVarient={boxVarient}>
        <InView
          onChange={(inView) => inView && setActiveSection(Sections.experience)}
        >
          <div
            {...stylex.props(styles.experienceContainer)}
            id={Sections.experience}
          >
            <h1 {...stylex.props(styles.title)}>
              My{" "}
              <span {...stylex.props(globalStyles.dynamicColor)}>
                Experience
              </span>
            </h1>

            <div {...stylex.props(styles.experienceBox)}>
              <AnimatedTag boxVarient={boxVarient}>
                <Swiper
                  modules={[Navigation]}
                  navigation
                  loop={false}
                  ref={swiperRef}
                  {...stylex.props(styles.swiper)}
                >
                  {experiences.map((experience) => (
                    <SwiperSlide
                      key={experience.id}
                      {...stylex.props(styles.swiperSlideContainer)}
                    >
                      <div {...stylex.props(styles.swiperBox)}>
                        <div>
                          <h3 {...stylex.props(styles.swiperTitle)}>
                            {experience.companyName}
                          </h3>
                          <p {...stylex.props(globalStyles.dynamicColor)}>
                            {experience.role}
                          </p>
                        </div>
                      </div>
                      <p {...stylex.props(styles.swiperDescription)}>
                        {experience.experience}
                      </p>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </AnimatedTag>
              <AnimatedTag boxVarient={boxVarientLeft}>
                <div {...stylex.props(styles.arrowContainer)}>
                  <div
                    {...stylex.props(styles.arrow)}
                    onClick={prevSlideOnClick}
                  >
                    <TfiAngleLeft />
                  </div>
                  <div {...stylex.props(styles.swiperCounter)}>
                    <span {...stylex.props(styles.activeIndex)}>
                      {swiperIndex}
                    </span>{" "}
                    /{" "}
                    <span {...stylex.props(styles.completeIndex)}>
                      {experiences.length}
                    </span>
                  </div>
                  <div
                    {...stylex.props(styles.arrow)}
                    onClick={nextSlideOnClick}
                  >
                    <TfiAngleRight />
                  </div>
                </div>
              </AnimatedTag>
            </div>
          </div>
        </InView>
      </AnimatedTag>
    </>
  );
};

export default Experience;
