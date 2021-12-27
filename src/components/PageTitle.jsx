import styled from "styled-components";
import React from "react";

export const TitleContent = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: absolute;
  top: 88px;
  margin-bottom: 50px;
  justify-content: center;
  gap: 20px;
  @media (min-width: 768px) {
    justify-content: flex-start;
    top: 136px;
    padding: 0 40px;
    gap: 35px;
  }

  @media (min-width: 1300px) {
    top: 180px;
    padding: 0 150px;
  }
`;

export const TitleNumber = styled.span`
  font-family: "BarlowCondensed-Regular";
  color: #c4c4c4;
  font-size: 16px;
  weight: 800;
  letter-spacing: 2.7px;
  @media (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.38px;
  }

  @media (min-width: 1300px) {
    font-size: 28px;
    letter-spacing: 4.72px;
  }
`;

export const TitleText = styled.h1`
  font-family: "BarlowCondensed-Regular";
  color: #fff;
  font-size: 16px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
  font-weight: 100;
  @media (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.38px;
  }

  @media (min-width: 1300px) {
    font-size: 28px;
    letter-spacing: 4.72px;
  }
`;

export default function Title(props) {
  return (
    <TitleContent>
      <TitleNumber>{props.number}</TitleNumber>
      <TitleText>{props.title}</TitleText>
    </TitleContent>
  );
}
