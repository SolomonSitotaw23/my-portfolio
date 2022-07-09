import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <CenterDiv>
      <SkillBox>
        <p>JAVASCRIPT</p>
        <p>81%</p>
        <Skill>
          <SkillLevel width="81%"></SkillLevel>
        </Skill>
      </SkillBox>

      <SkillBox>
        <p>PHP</p>
        <p>82%</p>
        <Skill>
          <SkillLevel></SkillLevel>
        </Skill>
      </SkillBox>

      <SkillBox>
        <p>Java</p>
        <p>77%</p>
        <Skill>
          <SkillLevel></SkillLevel>
        </Skill>
      </SkillBox>

      <SkillBox>
        <p>SQL</p>
        <p>56%</p>
        <Skill>
          <SkillLevel></SkillLevel>
        </Skill>
      </SkillBox>
    </CenterDiv>
  );
};

export default Skills;
const CenterDiv = styled.div`
  width: 100%;
  padding: 20px;
  background: var(--main-color);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  h1 {
    color: var(--Secondary-color);
  }
`;
const SkillBox = styled.div`
  width: 100%;
  margin: 20px 0;
  p {
    color: var(--Secondary-color);
    text-transform: uppercase;
    margin: 0 0 10px;
    padding: 0;
    font-weight: bold;
    letter-spacing: 1px;
    :nth-child(2) {
      float: right;
      position: relative;
      top: -25px;
    }
  }
`;

const Skill = styled.div`
  background: var(--main-color);
  padding: 4px;
  border: 1px solid var(--Secondary-color);
  border-radius: 2px;
`;

const SkillLevel = styled.div`
  background: var(--Secondary-color);
  width: ${(props) => (props.width ? props.width : "90%")};
  height: 10px;
`;
