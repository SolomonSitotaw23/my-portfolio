import React from "react";
import styled from "styled-components";
import whiteDots from "../assets/white-dots.svg";
import skills from "../assets/skill.svg";
const AboutMe = () => {
  return (
    <AboutMeSec>
      <Interest>
        <img src={skills} alt="" />
      </Interest>
      <Plans>
        <img src={whiteDots} alt="" />
        <h1>Skills</h1>
        <p>
          Being a Software Engineer is more than just programming. It’s a chance
          to help other people through the power of technology. Having this as a
          job gives me the power to influence other peoples life through
          programs that could help them with day to day tasks. so as a software
          engineer my plan is to build beautiful and problem solving
          applications for my society.
        </p>
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
  }
`;
const Plans = styled.div`
  width: 40%;

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
