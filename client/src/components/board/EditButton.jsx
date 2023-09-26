import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function EditButton({ to, children }) {
  return <StyledEditButton to={to}>{children}</StyledEditButton>;
}

const StyledEditButton = styled(Link)`
  display: inline-block;
  flex-shrink: 0;
  padding: 0 6px;
  height: 1.4375rem;
  line-height: 1.4375rem;
  font-size: 0.75rem;
  color: #ffffff;
  background-color: #4f4f4f;
  text-decoration: none;
  border: 0;
  &:hover {
    background-color: #333333;
  }
`;
