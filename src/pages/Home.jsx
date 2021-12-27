import React from "react";
import MobileBackground from "../../public/home/background-home-mobile.jpg";
import TabletBackground from "../../public/home/background-home-tablet.jpg";
import DesktopnBackground from "../../public/home/background-home-desktop.jpg";
import styled, { css, keyframes } from "styled-components";

const MainConteiner = styled.div`
  background-image: url(${MobileBackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  @media (min-width: 768px) {
    background-image: url(${TabletBackground});
  }
  @media (min-width: 1300px) {
    background-image: url(${DesktopnBackground});
  }
`;

const Content = styled.div`
  height: auto;
  width: 100%;
  padding: 0 24px;
  //margin-top: 48px;
  position: relative;
  top: 112px;
  @media (min-width: 768px) {
    position: absolute;
    top: 202px;
    padding: 0 160px;
    margin: 0;
  }

  @media (min-width: 1300px) {
    top: 280px;
    left: 150px;
    width: 400px;
    height: 280px;
    padding: 0;
  }
`;

const H5 = styled.h5`
  font-family: "BarlowCondensed-Regular";
  font-size: 16px;
  text-transform: uppercase;
  color: #d0d6f9;
  text-align: center;
  letter-spacing: 2.7px;
  @media (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 3.38px;
  }
`;

const H1 = styled.h1`
  font-family: "Bellefair";
  font-size: 80px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  margin-top: 35px;
  @media (min-width: 768px) {
    font-size: 150px;
    margin-top: 24;
  }
  @media (min-width: 1300px) {
    font-size: 110px;
    margin-top: 20px;
  }
`;

const P = styled.p`
  font-family: "Barlow";
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #d0d6f9;
  margin-top: 5px;
  @media (min-width: 768px) {
    margin-top: 24px;
    font-size: 16px;
    line-height: 28px;
  }
`;

const onda = keyframes`
25%{
  background-color: rgba(165, 165, 165, 0.4);
  transform: scale(1.12);
}
50%{
  background-color: rgba(165, 165, 165, 0.3);
  transform: scale(1.24);
}
75%{
  background-color: rgba(165, 165, 165, 0.2);
  transform: scale(1.36);
}
100%{
  background-color: rgba(165, 165, 165, 0.1);
  transform: scale(1.5);
}
/* from{
  transform: scale(1);
}
to{
  transform: scale(1.5);
} */
`;

const Circle = styled.div`
  position: relative;
  z-index: 10;
  height: 150px;
  width: 150px;
  border-radius: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    height: 150px;
    width: 150px;
    background-color: #fff;
    border-radius: 100%;
    animation-play-state: paused;
    //animation: infinite ${onda} 1s;
    position: absolute;
    z-index: -10;
  }
  @media (min-width: 768px) {
    height: 242px;
    width: 242px;
    &:before {
      content: "";
      height: 242px;
      width: 242px;
      background-color: #fff;
      border-radius: 100%;
      animation-play-state: paused;
      //animation: infinite ${onda} 1s;
      position: absolute;
      z-index: -10;
    }
  }
`;

const CircleContent = styled.p`
  color: #0b0d17;
  letter-spacing: 1.25px;
  font-size: 20px;
  font-family: "Bellefair";
  @media (min-width: 768px) {
    letter-spacing: 2px;
    font-size: 32px;
  }
`;

const CircleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  //margin-top: 75px;
  position: absolute;
  top: 468px;
  @media (min-width: 768px) {
    position: absolute;
    top: 692px;
    left: 263px;
    width: 250px;
  }
  @media (min-width: 1300px) {
    margin: 0;
    position: absolute;
    left: 900px;
    top: 350px;
    width: 250px;
  }
`;

export default function Home() {
  return (
    <MainConteiner>
      <Content>
        <H5>So, you want to travel to</H5>
        <H1>Space</H1>
        <P>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </P>
      </Content>
      <CircleWrap>
        <Circle>
          <CircleContent>Explore</CircleContent>
        </Circle>
      </CircleWrap>
    </MainConteiner>
  );
}
