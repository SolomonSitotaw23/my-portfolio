import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Centered>
      <Blob1></Blob1>
      <Blob2></Blob2>
    </Centered>
  );
};

export default Loading;

const Centered = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--body-bg);
  div {
    width: 70px;
    height: 70px;
    position: absolute;
    background: #fff;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const oscl = keyframes`
	0%{left:20%;}
	50%{left:50%;}
	100%{left:20%;}
`;
const oscr = keyframes`
	0%{left:80%;}
	50%{left:50%;}
	100%{left:80%;}
`;

const Blob1 = styled.div`
  left: 20%;
  animation: ${oscl} 2.5s ease infinite;
  background: var(--Secondary-color);
`;
const Blob2 = styled.div`
  left: 80%;
  animation: ${oscr} 2.5s ease infinite;
  background: var(--main-color);
`;
