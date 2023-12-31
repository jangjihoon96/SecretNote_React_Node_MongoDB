import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/img/logo.png";
import LogoutButton from "./LogoutButton";
import styled from "styled-components";

export default function Header({ onLogOut }) {
  return (
    <StyledHeader>
      <h1>
        <Link to="/board">
          <img src={HeaderLogo} alt="Secret Note" />
        </Link>
      </h1>
      <LogoutButton onLogOut={onLogOut}>로그아웃</LogoutButton>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.125rem;
  @media screen and (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;
