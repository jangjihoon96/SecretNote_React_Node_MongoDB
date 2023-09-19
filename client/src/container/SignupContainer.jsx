import React from "react";
import styled from "styled-components";

export default function SignupContainer({ children }) {
  return <StyledSignupContainer>{children}</StyledSignupContainer>;
}

const StyledSignupContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 3.125rem;
  box-sizing: border-box;
`;