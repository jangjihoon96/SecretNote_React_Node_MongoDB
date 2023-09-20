import React from "react";
import styled from "styled-components";

export default function DeleteButton({ children }) {
  return <StyledDeleteButton>{children}</StyledDeleteButton>;
}

const StyledDeleteButton = styled.button`
  flex-shrink: 0;
  margin-left: 4px;
  padding: 4px 6px;
  font-size: 0.75rem;
  color: #ffffff;
  background-color: #ff0000;
  border: 0;
  &:hover {
    background-color: #c50000;
  }
`;
