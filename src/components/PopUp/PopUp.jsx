import React, { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
const ControlledPopup = ({ about, img }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <PopUP>
      {" "}
      <button
        type="button"
        className="button"
        onClick={() => setOpen((o) => !o)}
      >
        Overview
      </button>{" "}
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        {" "}
        <div className="modal">
          <a href className="close" onClick={closeModal}>
            &times;{" "}
          </a>
          <MyContents>
            <img src={img} alt="" />
            <p>{about}</p>
          </MyContents>
        </div>
      </Popup>
    </PopUP>
  );
};

export default ControlledPopup;

const MyContents = styled.div`
  background-color: var(--main-color);
  height: 80vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    color: var(--Secondary-color);
    font-size: 2rem;
  }
  img {
    object-fit: contain;
    width: 20vw;
  }
`;

const PopUP = styled.div`
  button {
    border: 1px solid var(--body-bg);
    padding: 0.8rem 6rem;
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
`;
