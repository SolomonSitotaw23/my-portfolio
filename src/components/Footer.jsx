import React from "react";
import styled from "styled-components";

const Footer = () => {
  var date = new Date();
  var year = date.getUTCFullYear();
  return (
    <FooterSec className="footer ">
      <h1>Say Hello</h1>
      <Social>
        <a href="mailto: solomonsitotaw9@gmail.com?subject=contact">
          <ion-icon name="mail"></ion-icon>
        </a>
        <a href="https://codepen.io/s-l-d">
          <ion-icon name="logo-codepen"></ion-icon>
        </a>

        <a href="https://github.com/SolomonSitotaw23">
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href="https://www.linkedin.com/solomonsitotaw23">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href="tel : 0975623076" alt="0975623076 | 0940361102">
          <ion-icon name="Call" alt="0975623076 | 0940361102"></ion-icon>
        </a>
      </Social>
      <CopyRight>
        <hr />
        <p> Solo Copy Right &copy; {year}</p>
      </CopyRight>
    </FooterSec>
  );
};

export default Footer;

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
