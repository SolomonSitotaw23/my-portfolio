import React, { useRef } from "react";
import styled from "styled-components";
import homeLogo from "../assets/mylogo.png";

import { Link } from "react-scroll";

function Header({ secNum }) {
  const bg = useRef(false);
  if (secNum % 2 === 0 || secNum === 1) {
    bg.current = true;
  } else {
    bg.current = false;
  }
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <Navigation>
      <HomeIcon>
        <img src={homeLogo} alt="" />
      </HomeIcon>
      <LinksWrapper bg={bg.current}>
        <Links className="links">
          <Linkli>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Home
            </Link>
          </Linkli>
          <Linkli>
            <Link
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Skills
            </Link>
          </Linkli>
          <Linkli>
            <Link
              activeClass="active"
              to="education"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Education
            </Link>
          </Linkli>
          <Linkli>
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
            >
              Projects
            </Link>
          </Linkli>
        </Links>
      </LinksWrapper>
    </Navigation>
  );
}

export default Header;

const Navigation = styled.nav`
  display: flex;
  width: 100vw;
  justify-content: space-between;
  height: 20vh;
  align-items: center;
  position: fixed;
`;
const HomeIcon = styled.div`
  height: 75px;
  width: 75px;
  width: 10%;
  padding-left: 10vw;
  img {
    width: 75px;
    cursor: pointer;
  }
`;

const LinksWrapper = styled.div`
  width: 40%;
  li {
    a {
      letter-spacing: 0.15em;
      display: inline-block;
      padding: 15px 20px;
      position: relative;
      font-size: 1.2rem;
      font: bold 14px/1.4 "Open Sans", arial, sans-serif;
      text-transform: uppercase;
      color: ${(props) =>
        props.bg ? "var(--main-color)" : "var(--Secondary-color)"};
    }
    a:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 2px;
      left: 50%;
      position: absolute;
      background: ${(props) =>
        props.bg ? "var(--main-color)" : "var(--Secondary-color)"};
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0;
    }
    a:hover:after {
      width: 100%;
      left: 0;
    }
  }
  @media (max-width: 1000px) {
    width: 60%;
  }
`;
const Links = styled.ul`
  width: 85%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1050px) {
    width: 90%;
    a {
      color: var(--Secondary-color);
    }
  }
`;
const Linkli = styled.li`
  Link {
    cursor: pointer;
  }
`;
