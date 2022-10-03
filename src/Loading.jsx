import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Loading = () => {
  return (
    <Centered>
      <Blob1></Blob1>
    </Centered>
  );
};

export default Loading;

const Centered = styled.div`
  margin: auto;
  width: 100vw;
  height: 100vh;
  background: var(--main-color);
`;

const clockwise = keyframes`
to{
		transform: rotate(1turn)}
`;
const counterClockwise = keyframes`
		to{
		transform: rotate(-1turn)}
`;

const Blob1 = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  margin: auto;

  &::before,
  &::after {
    content: "";
    position: absolute;
  }
  &-list {
    display: grid;
    grid-template: repeat(3, 120px) / repeat(3, 120px);
    grid-gap: 30px;
  }
  &-item {
    display: flex;
    background: rgba(0, 0, 0, 0.05);
  }
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  animation: ${counterClockwise} 4s linear infinite;
  &::before,
  &::after {
    border-radius: 50%;
  }
  &::before {
    width: 8px;
    height: 8px;
    background: #fff;
    animation: ${clockwise} 4s linear infinite;
  }
  &::after {
    width: 4px;
    height: 4px;
    top: 8px;
    left: 8px;
    background: #fff;
    transform-origin: -4px -4px;
    animation: ${counterClockwise} 1s linear infinite;
  }
`;
