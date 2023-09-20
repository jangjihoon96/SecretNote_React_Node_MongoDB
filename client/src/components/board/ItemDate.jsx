import React from "react";
import styled from "styled-components";

export default function ItemDate({ children }) {
  return <StyledItemDate>{children}</StyledItemDate>;
}

const StyledItemDate = styled.span`
  flex-shrink: 0;
  font-size: 1rem;
`;
