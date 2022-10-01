import React, { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import { ReadMore } from "@styled-icons/material-sharp/ReadMore";
const ControlledPopup = ({ about, img }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <PopUP>
      {" "}
      <ReadMoreIcon size={48} onClick={() => setOpen((o) => !o)} />
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        {" "}
        <div className="modal">
          <a href className="close" onClick={closeModal}>
            &times;{" "}
          </a>
          <MyContents>
            <div>
              <h1>{about}</h1>
              <img src={img} alt="" />
            </div>
          </MyContents>
        </div>
      </Popup>
    </PopUP>
  );
};

export default ControlledPopup;

const MyContents = styled.div`
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 10px;
  height: 90vh;
  width: 90vw;
  padding: 5rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
  transition: all 1s;
  div {
    width: 100%;
    height: 100%;
    background-color: var(--body-bg);
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem;
    overflow-y: auto;
    ::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar {
      width: 6px;
      background-color: var(--main-color);
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--main-color);
    }

    img {
      width: 100%;
    }

    h1 {
      color: var(--main-color);
      font-size: 2rem;
      text-decoration-line: underline;
      text-decoration-style: "solid";
      text-decoration-color: rgba(203, 243, 129, 1);
      text-decoration-thickness: 6px;
      font-family: "Lexend Deca", sans-serif;
    }
  }

  img {
    object-fit: contain;
    width: 20vw;
  }
`;

const PopUP = styled.div`
  display: flex;
  justify-content: end;
`;
const ReadMoreIcon = styled(ReadMore)`
  color: var(--main-color);
`;
