import React from "react";
import styled from "styled-components";

export default function SubTitle({ children }) {
  return <StyledSubTitle>{children}</StyledSubTitle>;
}

const StyledSubTitle = styled.p`
  font-size: 2rem;
  color: #333333;
  text-align: center;
  margin-bottom: 80px;
`;
