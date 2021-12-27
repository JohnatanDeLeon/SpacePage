import React from "react";
import styled from "styled-components";
import backgroundMobile from "../../public/destination/background-destination-mobile.jpg";
import backgroundTablet from "../../public/destination/background-destination-tablet.jpg";
import backgroundDesktop from "../../public/destination/background-destination-desktop.jpg";
import image from "../../public/destination/image-moon.png";
import { NavLink } from "react-router-dom";
import Destination from "../components/Destination";
import destinationData from "../../public/destination/data.json";
import MainContainer from "../components/MainConteiner.jsx";
import Title from "../components/PageTitle.jsx"

const DestinationsContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 70px;
  position: absolute;
  top: 335px;
  @media (min-width: 768px) {
    top: 575px;
    padding: 0 240px;
  }
  @media (min-width: 1300px) {
    top: 220px;
    padding: 0;
    width: 255px;
    height: 25px;
    left: 750px;
  }
`;
const DestinationOption = styled(NavLink)`
  font-family: "BarlowCondensed-Regular";
  color: #d0d6f9;
  font-size: 14px;
  letter-spacing: 2.36px;
  text-transform: uppercase;
  font-weight: 100;
  text-decoration: none;
  &:hover:after {
    content: "";
    position: relative;
    height: 3px;
    width: auto;
    background-color: #979797;
    display: block;
    top: 10px;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    letter-spacing: 2.7px;
  }
`;

export default function PickDestination() {
  const moon = destinationData[0];
  return (
    <MainContainer mobile={backgroundMobile} tablet={backgroundTablet} desktop={backgroundDesktop}>
      <Title number={"01"} title={"pick your destination"}/>
      <Destination
        image={image}
        description={moon.description}
        distance={moon.distance}
        days={moon.days}
      />
      <DestinationsContent>
        <DestinationOption to="">moon</DestinationOption>
        <DestinationOption to="">mars</DestinationOption>
        <DestinationOption to="">europa</DestinationOption>
        <DestinationOption to="">titan</DestinationOption>
      </DestinationsContent>
    </MainContainer>
  );
}
