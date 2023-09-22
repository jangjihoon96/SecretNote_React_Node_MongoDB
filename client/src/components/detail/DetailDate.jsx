import React from "react";
import styled from "styled-components";

export default function DetailDate({ children }) {
  return <StyledDetailDate>{children}</StyledDetailDate>;
}

const StyledDetailDate = styled.span`
  margin: 1rem 0;
  display: block;
  text-align: right;
  font-size: 1rem;
  color: #999999;
`;
