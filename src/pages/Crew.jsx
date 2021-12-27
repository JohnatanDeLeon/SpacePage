import React from "react";
import styled from "styled-components";
import MainContainer from "../components/MainConteiner";
import Title from "../components/PageTitle";
import mobile from "../../public/crew/background-crew-mobile.jpg";
import tablet from "../../public/crew/background-crew-tablet.jpg";
import desktop from "../../public/crew/background-crew-desktop.jpg";
import Person from "../components/Person"
import image from "../../public/crew/image-douglas-hurley.png"
import data from "../../public/crew/data.json"


const OptionsContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 145px;
  display: flex;
  position: relative;
  top: 395px;
  justify-content: space-between;
  @media (min-width: 768px) {
      top: 440px;
  }
`;

const CircleOption = styled.div`
  height: 10px;
  width: 10px;
  background-color: #979797;
  border-radius: 50%;
  &:hover, &.active {
    background-color: #fff;
  }
`;

export default function Crew() {
    const douglasData = data[0];

    return (
    <MainContainer mobile={mobile} tablet={tablet} desktop={desktop}>
      <Title number={"02"} title={"meet your crew"} />
      <Person image={image} job={douglasData.job} name={douglasData.name}/>
      <OptionsContainer>
        <CircleOption />
        <CircleOption />
        <CircleOption />
        <CircleOption />
      </OptionsContainer>
    </MainContainer>
  );
}
