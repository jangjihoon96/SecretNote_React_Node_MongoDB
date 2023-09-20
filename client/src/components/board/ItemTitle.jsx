import React from "react";
import styled from "styled-components";

export default function ItemTitle({ children }) {
  return <StyledItemTitle>{children}</StyledItemTitle>;
}

const StyledItemTitle = styled.h3`
  flex-grow: 1;
  font-size: 1.125rem;
`;
