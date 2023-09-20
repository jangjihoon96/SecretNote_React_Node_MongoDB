import React from "react";
import styled from "styled-components";

export default function EditButton({ children }) {
  return <StyledEditButton>{children}</StyledEditButton>;
}

const StyledEditButton = styled.button`
  flex-shrink: 0;
  padding: 4px 6px;
  font-size: 0.75rem;
  color: #ffffff;
  background-color: #4f4f4f;
  border: 0;
  &:hover {
    background-color: #333333;
  }
`;
