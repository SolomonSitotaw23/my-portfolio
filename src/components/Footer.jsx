import React from "react";
import styled from "styled-components";
import { StackOverflow } from "@styled-icons/boxicons-logos/StackOverflow";
import { Github } from "@styled-icons/boxicons-logos/Github";
import { Phone } from "@styled-icons/boxicons-solid/Phone";
import { Linkedin } from "@styled-icons/boxicons-logos/Linkedin";

const Footer = () => {
  var date = new Date();
  var year = date.getUTCFullYear();
  return (
    <FooterSec className="footer ">
      <h1>Say Hello</h1>
      <Social>
        {" "}
        <GithubIcon
          size={50}
          onClick={() => {
            window.location.href = "https://github.com/SolomonSitotaw23";
          }}
        />
        <LinkedinIcon
          size={50}
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/solomon-sitotaw-306b12155/";
          }}
        />{" "}
        <StackOverflowIcon
          onClick={() => {
            window.location.href =
              "https://stackoverflow.com/users/17508957/solomon-sitotaw";
          }}
          size={50}
        />
        <PhoneIcon
          onClick={() => {
            navigator.clipboard.writeText("+251975623076");
          }}
          size={50}
        />
      </Social>
      <CopyRight>
        <hr />
        <p> Solo Copy Right &copy; {year}</p>
      </CopyRight>
    </FooterSec>
  );
};

export default Footer;

const StackOverflowIcon = styled(StackOverflow)`
  color: var(--main-color);
  cursor: pointer;
  :hover {
    color: #f48024;
    transform: scale(1.2);
    transition: transform 0.8s;
  }
`;
const GithubIcon = styled(Github)`
  color: var(--main-color);
  cursor: pointer;
  :hover {
    color: #000;
    transform: scale(1.2);
    transition: transform 0.8s;
    box-shadow: 100px 100px 272px rgba(0, 0, 0, 0.37);
  }
`;
const LinkedinIcon = styled(Linkedin)`
  color: var(--main-color);
  cursor: pointer;
  :hover {
    color: #0072b1;
    transform: scale(1.2);
    transition: transform 0.8s, color 0.8s;
  }
`;
const PhoneIcon = styled(Phone)`
  color: var(--main-color);
  cursor: pointer;
  :hover {
    color: #24b9f4;

    transform: scale(1.2);
    transition: transform 0.8s;
  }
`;
const FooterSec = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding: 8rem 5rem;
  text-align: left;
  color: var(--secondary-text-color);
  h1 {
    color: var(--main-color);
    text-align: center;
    font-size: 70px;
  }
  hr {
    width: 100%;
    color: var(--main-color);
  }
  p {
    color: var(--main-color);
    text-align: center;
    margin: 2rem;
    font-size: 0.8rem;
  }
`;

const Social = styled.div`
  display: flex;
  width: 50%;
  font-size: 53px;
  align-self: center;
  justify-self: center;
  justify-content: space-between;
  a {
    color: var(--main-color);
    transition: opacity 0.6s ease;
    :hover {
      cursor: pointer;
      opacity: 40%;
    }
  }
`;

const CopyRight = styled.div`
  height: 2%;
`;
