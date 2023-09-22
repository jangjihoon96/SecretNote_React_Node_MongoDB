import React from "react";
import styled from "styled-components";

export default function DetailContent({ children }) {
  return <StyledDetailContent>{children}</StyledDetailContent>;
}

const StyledDetailContent = styled.p`
  box-sizing: border-box;
  padding-bottom: 12.5rem;
  font-size: 1.25rem;
  color: #191919;
  line-height: 1.5;
`;