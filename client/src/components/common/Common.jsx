import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Form({ children }) {
  return <StyledForm>{children}</StyledForm>;
}
const StyledForm = styled.form`
  max-width: 33.375rem;
  width: 100%;
  margin: 0 auto;
`;

export function Inputs({ children }) {
  return <StyledInputs>{children}</StyledInputs>;
}
const StyledInputs = styled.div`
  margin-bottom: 3.75rem;
`;

export function Input({
  type = "text",
  name,
  id,
  placeholder = "",
  value = "",
  onChange,
}) {
  return (
    <StyledInput
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
const StyledInput = styled.input`
  border: 0;
  border-bottom: 1px solid #aaaaaa;
  width: 100%;
  height: 5.25rem;
  padding: 0 1.875rem;
  box-sizing: border-box;
  font-size: 1.5rem;
  &::placeholder {
    color: #9a9a9a;
  }
  & + input {
    margin-top: 1.875rem;
  }
`;

export function Button({ color, children }) {
  if (color === "blue") {
    return <StyledButtonBlue>{children}</StyledButtonBlue>;
  }
  return <StyledButton>{children}</StyledButton>;
}
const StyledButton = styled.button`
  width: 100%;
  height: 5.25rem;
  box-sizing: border-box;
  font-size: 1.5rem;
  text-align: center;
  background-color: transparent;
  border: 0;
  border-radius: 1rem;
  color: #191919;
  cursor: pointer;
  & + button {
    margin-top: 1.875rem;
  }
  &:hover {
    background-color: #f9f9f9;
  }
`;
const StyledButtonBlue = styled.button`
  width: 100%;
  height: 5.25rem;
  box-sizing: border-box;
  font-size: 1.5rem;
  text-align: center;
  background-color: #768cff;
  color: #ffffff;
  border: 0;
  border-radius: 1rem;
  cursor: pointer;
`;

export function LinkButton({ to, children }) {
  return <StyledLinkButton to={to}>{children}</StyledLinkButton>;
}
const StyledLinkButton = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 5.25rem;
  line-height: 5.25rem;
  margin-top: 1.875rem;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 1.5rem;
  text-align: center;
  background-color: transparent;
  border: 0;
  border-radius: 1rem;
  color: #191919;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
  }
`;
