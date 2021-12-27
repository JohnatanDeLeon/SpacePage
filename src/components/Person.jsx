import React from "react";
import styled from "styled-components";

const PersonPicture = styled.div`
  height: 225px;
  width: 100%;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 140px;
`;

const LineConteiner = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 25px;
  justify-content: center;
  margin-bottom: 30px;
  position: absolute;
  top: 365px;
  @media (min-width: 768px) {
      display: none;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  color: #383b4b;
  background-color: #383b4b;
`;

const InformationConteiner = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 435px;
  @media (min-width: 768px) {
      top: 220;
  }
`;

const Job = styled.h2`
  font-size: 16px;
  font-weight: 100;
  font-family: "Bellefair";
  color: #d0d6f9;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const Name = styled.h1`
  font-size: 24px;
  font-weight: 100;
  font-family: "Bellefair";
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`;

const Description = styled.p`
font-size: 15px;
font-weight: 100;
font-family: "Barlow";
color: #d0d6f9;
text-align: center;
line-height: 25px;
padding: 0 35px;
margin-top: 15px;
`;

export default function Person(props) {
  return (
    <>
      <PersonPicture image={props.image} />
      <LineConteiner>
        <Line />
      </LineConteiner>
      <InformationConteiner>
        <Job>{props.job}</Job>
        <Name>{props.name}</Name>
        <Description>
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </Description>
      </InformationConteiner>
    </>
  );
}
