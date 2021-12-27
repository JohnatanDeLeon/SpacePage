import styled from "styled-components";
import React from "react";


export default styled.div`
  background-image: url(${(props) => props.mobile});
  background-position: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  @media (min-width: 768px) {
    background-image: url(${(props) => props.tablet});
  }
  @media (min-width: 1300px) {
    background-image: url(${(props) => props.desktop});
  }
`;