import React from "react";
import styled from "styled-components";

export default function ItemDate({ children }) {
  return <StyledItemDate>{children}</StyledItemDate>;
}

const StyledItemDate = styled.span`
  flex-shrink: 0;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
  }
`;
