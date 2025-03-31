import React, { useCallback } from "react";
import AnimatedTag from "../../../shared/AnimatedTag";
import { InView } from "react-intersection-observer";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
} from "@mui/lab";
import { Sections } from "../LeftMenu/LeftMenu";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./TimeLine.stylex";

type Props = {
  titleVarient: Record<string, Object>;
  boxVarient: Record<string, Object>;
  boxVarientDown: Record<string, Object>;
  boxVarientLeft: Record<string, Object>;
  setActiveSection: (section: Sections) => void;
};

type TimelineEvent = {
  id: string;
  period: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  variant: "default" | "left" | "down";
};

const TimeLine = (props: Props) => {
  const timelineEvents: TimelineEvent[] = [
    {
      id: "bale",
      period: "June 2023 - April 2025",
      title: "Front-End Developer(React-TypeScript)",
      description: "",
      link: "https://bale.ai",
      linkText: "Bale Messenger",
      variant: "default",
    },
    {
      id: "iranian-data",
      period: "March 2023 - June 2023",
      title: "Front-End Developer(React-TypeScript)",
      description: "",
      link: "https://www.linkedin.com/company/pdei",
      linkText: "Iranian Data Support",
      variant: "left",
    },
    {
      id: "qom-univ-instructor",
      period: "2022 - 2024",
      title: "Front-End Development Instructor | Web Design Workshop",
      description: "",
      link: "https://qom.ac.ir",
      linkText: "Qom University",
      variant: "default",
    },
    {
      id: "qom-univ-degree",
      period: "2020 - 2024",
      title: "Bachelor Degree of Computer Science",
      description: "",
      link: "https://qom.ac.ir",
      linkText: "Qom University",
      variant: "down",
    },
  ];

  const getVariant = useCallback(
    (variant: TimelineEvent["variant"]) => {
      switch (variant) {
        case "left":
          return props.boxVarientLeft;
        case "down":
          return props.boxVarientDown;
        default:
          return props.boxVarient;
      }
    },
    [props.boxVarient, props.boxVarientDown, props.boxVarientLeft]
  );

  return (
    <>
      <AnimatedTag boxVarient={props.titleVarient}>
        <div {...stylex.props(styles.labelContainer)}>
          <div key="title" {...stylex.props(styles.label)} id="resume">
            <i
              className="fi fi-rr-briefcase"
              style={{ display: "flex", alignItems: "center" }}
            ></i>
            <p {...stylex.props(styles.labelTitle)}>RESUME</p>
          </div>
        </div>
      </AnimatedTag>

      <AnimatedTag boxVarient={props.boxVarient}>
        <InView
          onChange={(inView) => {
            if (inView) {
              props.setActiveSection(Sections.timeline);
            }
          }}
        >
          <div {...stylex.props(styles.timeLineWrapper)} id={Sections.timeline}>
            <div {...stylex.props(styles.timelineContainer)}>
              <Timeline
                sx={{
                  [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                  },
                }}
              >
                {timelineEvents.map((event) => (
                  <AnimatedTag
                    boxVarient={getVariant(event.variant)}
                    key={event.id}
                  >
                    <TimelineItem>
                      <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                      </TimelineSeparator>
                      <TimelineContent {...stylex.props(styles.timeLine)}>
                        {event.period}
                        <div {...stylex.props(styles.timelineContent)}>
                          <h1 {...stylex.props(styles.title)}>{event.title}</h1>
                          <p {...stylex.props(styles.companyName)}>
                            <a href={event.link} target="_blank">
                              {event.linkText}
                            </a>
                          </p>
                        </div>
                      </TimelineContent>
                    </TimelineItem>
                  </AnimatedTag>
                ))}
              </Timeline>
            </div>
          </div>
        </InView>
      </AnimatedTag>
    </>
  );
};

export default TimeLine;
