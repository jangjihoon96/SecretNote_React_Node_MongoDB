import React from "react";
import styled from "styled-components";

export default function WriteButton({ type = "button", children }) {
  return <StyledWriteButton type={type}>{children}</StyledWriteButton>;
}

const StyledWriteButton = styled.button`
  width: 18.75rem;
  height: 3.75rem;
  position: fixed;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, 0);
  font-size: 1.25rem;
  color: #ffffff;
  border-radius: 0.5rem;
  background-color: #768cff;
  border: 0;
  cursor: pointer;
`;
