import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as EditSvg } from "../../assets/icon/icon-edit.svg";

export default function EditButton({ to }) {
  return (
    <StyledEditButton to={to}>
      <EditSvg fill="#999999" />
    </StyledEditButton>
  );
}

const StyledEditButton = styled(Link)`
  display: inline-block;
  flex-shrink: 0;
  font-size: 0.75rem;
  color: #ffffff;
  text-decoration: none;
  border: 0;
  &:hover svg {
    fill: #333333;
  }
`;
