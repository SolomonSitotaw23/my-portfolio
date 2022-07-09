import React from "react";
import styled from "styled-components";
import skill from "../assets/skill.svg";
import Skills from "./Skills";
const AboutMe = () => {
  return (
    <AboutMeSec>
      <Interest>
        <img src={skill} alt="" />
      </Interest>
      <Plans>
        <h1>Skills</h1>
        <Skills />
      </Plans>
    </AboutMeSec>
  );
};

export default AboutMe;

const AboutMeSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 0 8rem;

  h1 {
    font-size: 70px;
    color: var(--main-color);
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0 1rem;
    align-items: center;
    justify-content: center;
    padding: 0 3rem;
    h1 {
      font-size: 36px;
    }
  }
`;
const Interest = styled.div`
  width: 40%;
  @media (max-width: 900px) {
    width: 80%;
    img {
      display: none;
    }
  }
`;
const Plans = styled.div`
  width: 50%;

  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
    img {
      display: none;
    }
    h1 {
      font-size: 36px;
    }
  }
`;
