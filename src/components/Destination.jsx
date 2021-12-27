import React from "react";
import styled from "styled-components";

const Planet = styled.div`
  height: 170px;
  width: 170px;
  position: absolute;
  left: calc(50% - 85px);
  top: 140px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: contain;
  @media (min-width: 768px) {
    height: 300px;
    width: 300px;
    left: calc(50% - 150px);
    top: 220px;
  }

  @media (min-width: 1300px) {
    height: 350px;
    width: 350px;
    left: 210px;
    top: 250px;
  }
`;

const DestinationContent = styled.div`
  height: auto;
  width: 100%;
  position: absolute;
  top: 383px;
  @media (min-width: 768px) {
    top: 640px;
  }

  @media (min-width: 1300px) {
    width: 395px;
    height: auto;
    position: absolute;
    top: 270px;
    left: 750px;
  }
`;
const PlanetName = styled.h2`
  font-size: 56px;
  color: #fff;
  font-weight: 100;
  font-family: "Bellefair";
  text-align: center;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 80px;
  }
  @media (min-width: 1300px){
    text-align: left;
  }
`;

const PlanetDescription = styled.p`
  font-size: 15px;
  font-family: "Barlow";
  text-align: center;
  color: #d0d6f9;
  font-weight: 100;
  line-height: 25px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
    padding: 0 100px;
  }

  @media (min-width: 1300px){
    text-align: justify;
    padding: 0;
  }

`;

const LineConteiner = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 25px;
  justify-content: center;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    padding: 0 75px;
  }

  @media (min-width: 1300px){
    padding: 0;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  color: #383b4b;
  background-color: #383b4b;
`;

const TravelInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 0 100px;
  }

  @media (min-width: 1300px) {
    justify-content: start;
    padding: 0;
    gap: 70px;
  }
`;

const TitleDescription = styled.p`
  font-family: "BarlowCondensed-Regular";
  font-size: 14px;
  color: #d0d6f9;
  letter-spacing: 2.36px;
  text-align: center;
  margin-bottom: 5px;
  font-weight: 100;
`;

const TravelData = styled.p`
  color: #fff;
  font-family: "Bellefair";
  font-size: 28px;
  text-align: center;
  font-weight: 100;
  text-transform: uppercase;
`;

const InformationConteiner = styled.div`
  margin-bottom: 30px;
`;

export default function Destination(props) {
  const imagePath = "../../public/destination/";
  return (
    <>
      <Planet image={props.image} />
      <DestinationContent>
        <PlanetName>moon</PlanetName>
        <PlanetDescription>{props.description}</PlanetDescription>
        <LineConteiner>
          <Line />
        </LineConteiner>
        <TravelInformation>
          <InformationConteiner>
            <TitleDescription>AVG. DISTANCE</TitleDescription>
            <TravelData>{props.distance}</TravelData>
          </InformationConteiner>
          <InformationConteiner>
            <TitleDescription>Est. travel time</TitleDescription>
            <TravelData>{props.days}</TravelData>
          </InformationConteiner>
        </TravelInformation>
      </DestinationContent>
    </>
  );
}
