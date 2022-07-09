import React from "react";
import styled from "styled-components";
import Button from "./button/Button";

const ContactMe = () => {
  return (
    <ContactMeSec className="contact-me sec" id="contact-me">
      <ContactWrapper>
        <div className="title">
          <h1>Send me a message!</h1>
          <h2>
            Got a question or proposal, or just want to say hello? Go ahead.
          </h2>
        </div>
        <form
          action="https://formsubmit.co/solomonsitotaw9@gmail.com"
          method="POST"
          className="input-wrapper"
        >
          <InputInfo>
            <label htmlFor="name">
              Your Name
              <input type="text" className="name" name="name" required />
            </label>
            <label htmlFor="email">
              Your Email
              <input type="email" className="email" required />
            </label>
          </InputInfo>
          <MessageTxt>
            <label htmlFor="message">
              Your Message
              <textarea
                name="message"
                id=""
                rows="5"
                placeholder="Hi Solomon ...."
                required
              ></textarea>
            </label>
            <Button>Send</Button>
          </MessageTxt>
        </form>
      </ContactWrapper>
    </ContactMeSec>
  );
};

export default ContactMe;

const ContactMeSec = styled.section`
  height: 100vh;
  background-color: var(--main-color);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--Secondary-color);
  h1 {
    color: var(--Secondary-color);
    font-size: 55px;
    line-height: 4rem;
    padding: 5rem 0 0 0;
  }
  h2 {
    color: #fff;
    padding: 1rem;
    font-weight: 300;
    font-size: 16px;
    width: 100%;
  }
  input {
    padding: 1rem 0;
  }
  input,
  textarea {
    border-top: none;
    border-left: none;
    border-right: none;
    background: var(--main-color);
    border-bottom: 1px solid var(--Secondary-color);
  }
`;

const ContactWrapper = styled.div`
  width: 60vw;
  overflow: hidden;
  label {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-top: 3rem;
    font-weight: 200;
    input {
      width: 27rem;
      height: 2rem;
      padding-top: 2rem;
      color: var(--Secondary-color);
    }
    textarea {
      color: var(--Secondary-color);
      font-family: "Lexend Deca", sans-serif;
      font-weight: 200;
      padding-top: 2rem;
    }
  }
  textarea:focus,
  input:focus {
    outline: none;
  }
`;

const InputInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const MessageTxt = styled.div`
  button {
    margin-top: 3rem;
  }
`;
