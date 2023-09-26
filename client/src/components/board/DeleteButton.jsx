import React from "react";
import styled from "styled-components";
import { ReactComponent as DeleteSvg } from "../../assets/icon/icon-delete.svg";

export default function DeleteButton({ handleDelete, post }) {
  return (
    <StyledDeleteButton onClick={() => handleDelete(post._id)}>
      <DeleteSvg fill="#999999" />
    </StyledDeleteButton>
  );
}

const StyledDeleteButton = styled.button`
  flex-shrink: 0;
  margin-left: 4px;
  padding: 0;
  background-color: transparent;
  font-size: 0.75rem;
  color: #ffffff;
  border: 0;
  cursor: pointer;
  &:hover svg {
    fill: #333333;
  }
`;
