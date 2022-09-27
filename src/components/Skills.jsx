import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <CenterDiv>
      <SkillBox>
        <p>Frontend</p>
        <p>81%</p>
        <Skill>
          <SkillLevel width="81%"></SkillLevel>
        </Skill>
        <Detail>
          React js, Redux , Vue, pinia, Apollo Graphql ,Tailwind css, styled
          components, scss, Material ui
        </Detail>
      </SkillBox>

      <SkillBox>
        <p>Backend</p>
        <p>82%</p>
        <Skill>
          <SkillLevel width="73"></SkillLevel>
        </Skill>
        <Detail>Hasura, Postgressql , MsSql, Nodejs , Express , php</Detail>
      </SkillBox>

      <SkillBox>
        <p>Dev ops</p>
        <p>77%</p>
        <Skill>
          <SkillLevel></SkillLevel>
        </Skill>
        <Detail>Docker , git </Detail>
      </SkillBox>
      <SkillBox>
        <p>API</p>
        <p></p>
        <Detail>Graphql ,Rest </Detail>
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
const Detail = styled.p`
  margin-top: 1rem;
  padding: 1rem;
  font-size: 0.7rem;
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
  margin-bottom: 1rem;
`;

const SkillLevel = styled.div`
  background: var(--Secondary-color);
  width: ${(props) => (props.width ? props.width : "90%")};
  height: 10px;
`;
