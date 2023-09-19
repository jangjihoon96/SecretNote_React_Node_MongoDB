import React from "react";
import mainLogo from "../../assets/img/main-logo.png";
import styled from "styled-components";

export default function MainLogo() {
  return (
    <StyledMainLogo>
      <img src={mainLogo} alt="Secret Note" />
    </StyledMainLogo>
  );
}

const StyledMainLogo = styled.h1`
  margin-bottom: 3.75rem;
  text-align: center;
`;
