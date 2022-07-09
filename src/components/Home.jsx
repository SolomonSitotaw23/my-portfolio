import React from "react";
import styled from "styled-components";
import myPhoto from "../assets/my_photo1.png";

const Home = () => {
  return (
    <HomeSec id="hero">
      <HeroTxt className="hero-txt">
        <h1>
          Hello! I'm <br /> Solomon Sitotaw
        </h1>
        <p>
          A Student at Bahirdar university ,I was born in gondar on the 19th of
          July 1999 G.C. .I am interested in front-end web development.
        </p>
        <a href="../assets/my_resume/mycv.pdf" download>
          Download Resume
        </a>
      </HeroTxt>
      <PhotoContainer>
        <MyPhoto className="my-photo">
          <img src={myPhoto} alt="" />
        </MyPhoto>
      </PhotoContainer>
    </HomeSec>
  );
};

export default Home;

const HomeSec = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    to right,
    var(--main-color) 60%,
    var(--Secondary-color) 40%
  );

  @media (max-width: 1200px) {
    padding: 0 5rem;
  }

  @media (min-width: 1200px) {
    padding: 0 8rem;
  }
  @media (max-width: 1050px) {
    background: var(--main-color);
    padding: 1rem 3rem;
    flex-direction: column-reverse;
    padding: 0 2rem;
  }
`;

const HeroTxt = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  align-items: flex-start;
  h1 {
    font-size: 70px;
    color: var(--Secondary-color);
    width: 100%;
  }
  p {
    color: var(--body-bg);
    width: 60%;
  }
  h1,
  p {
    margin-bottom: 4vh;
  }

  @media (max-width: 1440px) {
    h1 {
      font-size: 56px;
    }
    a {
      border: 1px solid var(--body-bg);
      text-decoration: none;
      padding: 1.5rem 6rem;
      margin-top: 5vh;
      align-items: center;
      text-transform: uppercase;
      text-align: center;
      background-color: var(--main-color);
      color: var(--body-bg);
      cursor: pointer;

      box-shadow: inset 0px 0px 0px var(--Secondary-color);
      transition: all 0.5s !important;
      :hover {
        box-shadow: inset 350px 0px 0px var(--Secondary-color);
        color: var(--main-color);
      }
    }
  }

  @media (max-width: 411px) {
    justify-content: center;
    align-items: center;
    text-align: justify;
    h1 {
      font-size: 36px;
      width: 100%;
      text-align: center;
    }
    p {
      width: 100%;
      padding: 0 1rem;
    }
  }

  @media (max-width: 1050px) {
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 100%;
    h1 {
      width: 100%;
      text-align: center;
    }
    p {
      width: 100%;
      padding: 0 1rem;
    }
  }
`;

const PhotoContainer = styled.div`
  width: 45vw;
  @media (max-width: 1050px) {
    display: none;
  }
`;

const MyPhoto = styled.div`
  width: 250px;
  height: 338px;
  border: 3px solid var(--Secondary-color);
  box-shadow: 15px 18px 0px 2px rgb(255, 255, 255);
  -webkit-box-shadow: 15px 18px 0px 2px rgb(255, 255, 255);
  -moz-box-shadow: 15px 18px 0px 2px rgb(255, 255, 255);
  img {
    background-position: center;
    background-size: cover;
    transition: all 0.7s ease-in-out;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
