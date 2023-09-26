import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function LogoutButton({ onLogOut, children }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    onLogOut();
    navigate("/");
  };
  return (
    <StyledLogoutButton onClick={handleLogOut}>{children}</StyledLogoutButton>
  );
}

const StyledLogoutButton = styled.button`
  padding: 8px 12px;
  background-color: #4f4f4f;
  border-radius: 4px;
  border: 0;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #333333;
  }
`;
