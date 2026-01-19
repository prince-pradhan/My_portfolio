import React from "react";
import HeaderText from "../../components/HeaderText/HeaderText";
import Html from "../../assets/Work/Html.png";
import Js from "../../assets/Work/JS.png";
import Css from "../../assets/Work/CSS.png";
import ReactJs from "../../assets/Work/ReactJs.png";
import Figma from "../../assets/Work/Figma.png";
import GitLab from "../../assets/Work/GitLab.png";
import GitLogo from "../../assets/Work/GitLogo.png";
import flutter_logo from"../../assets/Work/flutter_logo.png";

const Skill = [
  {
    img: flutter_logo,
    title: "Flutter"
  },
  {
    img: Html,
    title: "Html",
  },
  {
    img: Css,
    title: "Css",
  },
  {
    img: Js,
    title: "Javascript",
  },
  {
    img: ReactJs,
    title: "ReactJs",
  },
  {
    img: Figma,
    title: "Figma",
  },
  {
    img: GitLogo,
    title: "Git",
  },
];

const AboutMe = () => {
  return (
    <div>
      <HeaderText headerTitle="About Me" />
      <div style={{ padding: "12px" }}>
        <div>
          <b>Hello! I'm Prince Raj Pradhan.</b>
        </div>
        <p>
          I am Frontend Developer. I have been creating user-friendly
          applications, and I hold a bachelor's
          degree in Information Management (BIM) equips myself with a solid
          understanding of information systems, data management, and technology
          integration within organizations.
        </p>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
            <p>Phone ............ 9808706524</p>
            <div>Email ............ pradhanprince000@gmail.com</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p>Address ............ Satungal, Chandragiri-11, Kathmandu</p>
            <div>Age ............ 22</div>
          </div>
        </div>
      </div>
      <HeaderText headerTitle="Skills/ Tools" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "4rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop:"2rem"
        }}
      >
        {Skill.map((data, index) => {
          return (
            <div
              key={index}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems:"center",
                justifyContent:"center"
              }}
            >
              <img src={data?.img} style={{ width: "100%", height: "100%" }} />
              <div><b>{data?.title}</b></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutMe;
