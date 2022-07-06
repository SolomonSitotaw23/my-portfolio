import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import styled from "styled-components";
import sunnySide from "../../assets/sunny-side.jpg";
import fylo from "../../assets/fylo.jpg";

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
        <img src={sunnySide} alt="" />
      </ProjectContainer>

      <ProjectContainer>
        <img src={fylo} alt="" />
      </ProjectContainer>

      <ProjectContainer>
        <img src={sunnySide} alt="" />
      </ProjectContainer>

      <ProjectContainer>
        <img src={sunnySide} alt="" />
      </ProjectContainer>
    </STabPanel>

    <STabPanel>
      <ProjectContainer>
        <img src={sunnySide} alt="" />
      </ProjectContainer>
    </STabPanel>

    <STabPanel>
      <ProjectContainer>
        <img src={sunnySide} alt="" />
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
  border: 1px solid var(--main-color);
  margin: 20px;
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
