import React from "react";
import styled from "styled-components";

export default function MainTitle({ children }) {
  return <StyledMainTitle>{children}</StyledMainTitle>;
}

const StyledMainTitle = styled.h2`
  margin-bottom: 2.5rem;
  font-size: 40px;
  text-align: center;
  color: #191919;
`;
