import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <ContactMeCTA className=" fill-left">{props.children}</ContactMeCTA>;
};

export default Button;

const ContactMeCTA = styled.button`
  border: 1px solid var(--body-bg);
  padding: 1.5rem 5rem;
  margin-top: 5vh;
  text-transform: uppercase;
  background-color: var(--main-color);
  color: var(--body-bg);
  cursor: pointer;
  box-shadow: inset 0px 0px 0px var(--Secondary-color);
  transition: all 0.5s !important;
  :hover {
    box-shadow: inset 350px 0px 0px var(--Secondary-color);
    color: var(--main-color);
  }
`;
