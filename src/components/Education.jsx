import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <EducationSec>
      <EduText>
        <h1>
          {" "}
          Education <hr />
        </h1>
        <p>
          Collecting inspirations, learning new things and building projects are
          what filling my daily life. I tried to understand my learning process
          and want that there is something to learn from the start to the
          beginning. I’ve shared it further to my friends.
        </p>
      </EduText>
      <TimeLine>
        <TimeLineItem>
          <Date> 2017</Date>
          <h4>
            Fundamentals of programming
            <span>Vertual ICT training center</span>
          </h4>
        </TimeLineItem>
        <TimeLineItem>
          <Date> 2021</Date>
          <h4>
            Internship
            <p>@ University of Gondar ICT department</p>
          </h4>
        </TimeLineItem>
        <TimeLineItem>
          <Date> 2018-2022</Date>
          <h4>
            bachelor of software engineering-
            <span>Bahirdar University institute of technology</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit rerum
            dignissimos veritatis soluta officiis! Velit.
          </p>
        </TimeLineItem>
        <TimeLineItem>
          <Date> 2022</Date>
          <h4>
            Full Stack Training-
            <span>Bahir dar University With Minab IT solutions</span>
          </h4>
          <p></p>
        </TimeLineItem>
      </TimeLine>
    </EducationSec>
  );
};

export default Education;

const EducationSec = styled.section`
  height: 100vh;
  padding: 0 8rem;
  display: flex;
  align-items: center;
  background-color: var(--main-color);
  @media (max-width: 1350px) {
    padding: 0 3rem;
    flex-direction: column;
    justify-content: center;
  }
`;

const EduText = styled.div`
  width: 40%;
  color: #fff;
  padding: 0 3rem;
  h1 {
    color: var(--Secondary-color);
    font-size: 70px;
    hr {
      color: var(--Secondary-color);
    }
  }
  p {
    line-height: 2rem;
  }
  @media (max-width: 1350px) {
    width: 100%;
    margin-bottom: 3rem;
    p {
      display: none;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }
  }
`;

const TimeLine = styled.div`
  position: relative;
  ::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    top: 0;
    left: 5px;
    background-color: var(--Secondary-color);
  }
`;

const TimeLineItem = styled.div`
  margin-bottom: 30px;
  position: relative;
  padding: 10px 0 0 40px;
  p {
    color: rgb(219, 212, 212);
  }
  h4 {
    font-size: 18px;
    text-transform: capitalize;
    margin: 0 0 10px;
    color: var(--Secondary-color);
  }
  h4,
  span {
    font-weight: 400;
  }
  :last-child {
    margin-bottom: 0;
  }
  ::before {
    content: "";
    position: absolute;
    height: 11px;
    width: 11px;
    background-color: var(--Secondary-color);
    left: 0;
    top: 16px;
    border-radius: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    p {
      display: none;
    }
  }
`;

const Date = styled.span`
  display: block;
  color: var(--Secondary-color);
  font-weight: 400;
  margin: 0 0 10px;
`;
