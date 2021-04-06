import React from "react";
import styled from "styled-components";
import LogoImage from "../image/logo.svg";
import UserImage from "../image/user.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299b01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;
const ImgLogo = styled.img`
  width: 50px;
`;

const Login = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const LoginImage = styled.img`
  width: 32px;
  margin-bottom: 3px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={LogoImage} alt="Logo" />
      <H1>MrDonald's</H1>
    </Logo>
    <Login>
      <LoginImage src={UserImage} alt="Icon:User" />
      войти
    </Login>
  </NavBarStyled>
);
