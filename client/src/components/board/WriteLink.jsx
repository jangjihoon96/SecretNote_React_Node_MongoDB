import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function WriteLink({ to = "/write", children }) {
  return <StyledWriteLink to={to}>{children}</StyledWriteLink>;
}

const StyledWriteLink = styled(Link)`
  display: inline-block;
  width: 18.75rem;
  height: 3.75rem;
  line-height: 3.75rem;
  position: fixed;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, 0);
  text-decoration: none;
  font-size: 1.25rem;
  text-align: center;
  color: #ffffff;
  border-radius: 0.5rem;
  background-color: #768cff;
  border: 0;
  cursor: pointer;
`;
