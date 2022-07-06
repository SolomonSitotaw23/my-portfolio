import React, { useRef } from "react";
import styled from "styled-components";
import homeLogo from "../assets/mylogo.png";

function Header({ secNum }) {
  const bg = useRef(false);
  if (secNum % 2 === 0 || secNum === 1) {
    bg.current = true;
  } else {
    bg.current = false;
  }
  console.log("bg = ", bg);
  return (
    <Navigation>
      <HomeIcon>
        <img src={homeLogo} alt="" />
      </HomeIcon>
      <LinksWrapper bg={bg.current}>
        <Links className="links">
          <Link>
            <LinkItem href="#hero" className="blue-color link-item">
              Home
            </LinkItem>
          </Link>
          <Link>
            <LinkItem href="#about" className="blue-color link-item">
              About Me
            </LinkItem>
          </Link>
          <Link>
            <LinkItem href="#education" className="blue-color link-item">
              Education
            </LinkItem>
          </Link>
          <Link>
            <LinkItem href="#projects" className="blue-color link-item">
              Projects
            </LinkItem>
          </Link>
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
      font-size: 1.2rem;
      font-weight: 700;
      color: ${(props) =>
        props.bg ? "var(--main-color)" : "var(--Secondary-color)"};
    }
  }
  @media (max-width: 1000px) {
    width: 60%;
  }
`;
const Links = styled.ul`
  width: 70%;
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
const Link = styled.li``;
const LinkItem = styled.a`
  text-decoration: none;
`;
