import React from "react";
import styled from "styled-components";
import MyTabs from "./Tabs/MyTabs";

const Projects = () => {
  return (
    <ProjectsSec>
      <ProjectHeading>
        <h3>My Projects</h3>
      </ProjectHeading>

      <MyTabs />
    </ProjectsSec>
  );
};

export default Projects;

const ProjectsSec = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  margin: 20px 0px;
  padding-top: 15vh;
  margin-bottom: 5rem;
`;
const ProjectHeading = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 2.7rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--main-color);
  }
`;
