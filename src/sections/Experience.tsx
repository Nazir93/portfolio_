import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "2017",
      role: "Full Stack Developer",
      url: "https://www.rapidops.com",
      start: "January 2017",
      end: "Present",
      shortDescription: [
        "I had experience working on a large codebase utilizing Kibana and Elasticsearch.",
        "Throughout my work, I've utilized various MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch, among others.",
        
        
      ],
    },
    {
      name: "2018",
      role: "Content Creator",
      
      start: "April 2018",
      end: "Present",
      shortDescription: [
        
        "Over time, I have developed and shared over 50 projects using React .",
        "I have also had the pleasure of collaborating with various brands throughout my journey.",
      ],
    },
    {
      name: "2019",
      role: "President",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2019",
      end: "November 2020",
      shortDescription: [
        "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
        "Additionally, I secured sponsorships from reputable brands to support our events.",
        "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
      ],
    },
    {
      name: "2020",
      role: "Web Developer",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2020",
      end: "November 2022",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      name: "2023",
      role: "Founder",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2023",
      end: "November 2023",
      shortDescription: [
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
        "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
