import React from "react";
import styled from "styled-components";
import LogoSvg from "../../public/shared/logo.svg";
import HamburgerSvg from "../../public/shared/icon-hamburger.svg";
import IconClose from "../../public/shared/icon-close.svg";
import { NavLink } from "react-router-dom";

const Logo = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${LogoSvg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-width: 768px) {
    height: 48px;
    width: 48px;
    margin-left: 39px;
    margin-top: 24px;
  }
  @media (min-width: 1300px) {
    height: 48px;
    width: 48px;
    margin-left: 55px;
    margin-top: 64px;
  }
`;

const HamburgerButton = styled.div`
  height: 21px;
  width: 24px;
  background-image: url(${HamburgerSvg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: block;
  &.open {
    display: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const CloseIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${IconClose});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 35px;
  right: 35px;
  display: none;
  &.active{
    display: block;
  }
`;

const Nav = styled.nav`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 0 24px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  @media (min-width: 768px) {
    padding: 0;
  }
`;

const NavMenu = styled.div`
  width: 450px;
  height: 96px;
  justify-content: space-around;
  align-items: center;
  padding: 0 15px;
  display: none;
  background-color: rgba(165, 165, 165, 0.1);
  backdrop-filter: blur(10px);
  &.active {
    display: flex;
    right: 0;
    top: 0;
    position: absolute;
    width: 254px;
    height: 667px;
    z-index: 500;
    flex-direction: column;
    padding-top: 90px;
    padding-bottom: 340px;
  }

  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1300px) {
    width: 750px;
    margin-top: 40px;
    background-color: rgba(165, 165, 165, 0.1);
    backdrop-filter: blur(5px);
  }
`;

const NavItem = styled(NavLink)`
  font-size: 19px;
  font-family: "BarlowCondensed-Regular";
  letter-spacing: 2.36px;
  color: #fff;
  text-decoration: none;
  @media (min-width: 768px) {
    font-size: 14px;
    &:hover:after {
      content: "";
      position: relative;
      width: auto;
      height: 3px;
      background-color: #d0d6f9;
      color: #fff;
      display: block;
      position: relative;
      top: 35px;
    }
    &.active:after {
      background-color: #f00;
      content: "";
      position: relative;
      width: auto;
      height: 3px;
      color: #fff;
      display: block;
      position: relative;
      top: 35px;
    }
  }
`;

export default function Navbar() {
  
  function openMenu(event) {
    document.getElementById("navMenu").classList.toggle("active");
    event.target.classList.toggle("open");
    document.getElementById("closeButton").classList.toggle("active");
  }

  function closeMenu(event){
    document.getElementById("navMenu").classList.toggle("active");
    document.getElementById("HamburgerButton").classList.toggle("open");
    event.target.classList.toggle("active");
  }

  return (
    <Nav>
      <Logo />
      <HamburgerButton id="HamburgerButton" onClick={openMenu} />
      <NavMenu id="navMenu">
        <CloseIcon id="closeButton" onClick={closeMenu} />
        <NavItem to="/">00 Home</NavItem>
        <NavItem to={"/destination"}>01 Destination</NavItem>
        <NavItem to={"/crew"}>02 Crew</NavItem>
        <NavItem to={"/a"}>03 Technology</NavItem>
      </NavMenu>
    </Nav>
  );
}
