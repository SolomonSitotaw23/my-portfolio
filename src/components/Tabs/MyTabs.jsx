import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";
import sunnySide from "../../assets/sunny-side.jpg";
import Tesla from "../../assets/TeslaClone.jpg";
import Fylo from "../../assets/Fylo.jpg";
import Crwn from "../../assets/crwnClothing.jpg";
import Todo from "../../assets/TodoList.jpg";
import ControlledPopup from "../PopUp/PopUp";
import BeatsPreview from "../../assets/MyProjects/beatsPreview.png";

import beatsLanding from "../../assets/beats landing.jpg";
import Discord from "../../assets/DiscordLandingPage.jpg";

const MyTabs = () => (
  <STabs
    selectedTabClassName="is-selected"
    selectedTabPanelClassName="is-selected"
  >
    <STabList>
      <STab>All</STab>
      <STab>Landing Pages</STab>
      <STab>Full web apps </STab>
    </STabList>
    <STabPanel>
      <ProjectContainer>
        <img src={Discord} alt="" />
        <ControlledPopup
          about="Clone of Landing Page of Discord  "
          img={Discord}
        />
      </ProjectContainer>

      <ProjectContainer>
        <img src={beatsLanding} alt="" />
        <ControlledPopup
          about=" Fully responsive Beats Production Page"
          img={BeatsPreview}
        />
      </ProjectContainer>

      <ProjectContainer>
        <img src={Tesla} alt="" />
        <ControlledPopup about="Clone of Landing Page of Tesla  " img={Tesla} />
      </ProjectContainer>

      <ProjectContainer>
        <img src={Fylo} alt="" />
        <ControlledPopup
          about="Clone of Landing Page of Discord  "
          img={Discord}
        />
      </ProjectContainer>
      <ProjectContainer>
        <img src={Crwn} alt="" />
        <ControlledPopup
          about="Clone of Landing Page of Discord  "
          img={Discord}
        />
      </ProjectContainer>
      <ProjectContainer>
        <img src={Todo} alt="" />
        <ControlledPopup
          about="Clone of Landing Page of Discord  "
          img={Discord}
        />
      </ProjectContainer>
      <ProjectContainer>
        <img src={sunnySide} alt="" />
        <ControlledPopup
          about="Clone of Landing Page of Discord  "
          img={Discord}
        />
      </ProjectContainer>
    </STabPanel>

    <STabPanel>
      <ProjectContainer>
        <img src={Discord} alt="" />
      </ProjectContainer>

      <ProjectContainer>
        <img src={beatsLanding} alt="" />
      </ProjectContainer>

      <ProjectContainer>
        <img src={Tesla} alt="" />
      </ProjectContainer>

      <ProjectContainer>
        <img src={Fylo} alt="" />
      </ProjectContainer>
      <ProjectContainer>
        <img src={sunnySide} alt="" />
      </ProjectContainer>
    </STabPanel>

    <STabPanel>
      <ProjectContainer>
        <img src={Crwn} alt="" />
      </ProjectContainer>
      <ProjectContainer>
        <img src={Todo} alt="" />
      </ProjectContainer>
    </STabPanel>
  </STabs>
);

export default MyTabs;

const STabs = styled(Tabs)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px 0px;
`;
const STabList = styled(TabList)`
  border: 1px solid var(--main-color);
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
STabList.tabsRole = "TabList";

const STab = styled(Tab)`
  margin: 10px;
  padding: 5px 20px;
  font-size: 1rem;
  letter-spacing: 0.5px;
  font-weight: 400;

  user-select: none;
  cursor: pointer;

  &.is-selected {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
  }
`;
STab.tabsRole = "Tab";

const STabPanel = styled(TabPanel)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
`;
STabPanel.tabsRole = "TabPanel";

const ProjectContainer = styled.a`
  align-self: flex-start;
  width: 330px;
  padding: 15px;
  margin: 20px;
  border-radius: 1rem;
  box-shadow: 0px 0px 23.5px -46px rgba(72, 49, 212, 0.23),
    0px 0px 188px -46px rgba(72, 49, 212, 0.46);

  :hover {
    box-shadow: 3px 6px 16px -8px rgba(0, 0, 0, 0.63);
    -webkit-box-shadow: 3px 6px 16px -8px rgba(0, 0, 0, 0.63);
    -moz-box-shadow: 3px 6px 16px -8px rgba(0, 0, 0, 0.63);
  }
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
