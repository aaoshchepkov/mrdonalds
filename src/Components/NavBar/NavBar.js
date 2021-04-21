import React from "react";
import styled from "styled-components";
import LogoImage from "../../image/logo.svg";
import UserImage from "../../image/user.svg";

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
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
const LogOut = styled.span`
  font-size: 20px
  font-weight: 700px;
  cursor: pointer;
  margin-right: 20px;
  align-self: start;

`;
const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
const Figure = styled.figure `
margin: 0;
`; 

export const NavBar = ({ authentication, login, logOut }) => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={LogoImage} alt="Logo" />
      <H1>MrDonalds</H1>
    </Logo>
    {authentication ? (
      <User>
        <Figure>
          <img src={UserImage} alt={authentication.displayName} />
          <figcaption>{authentication.displayName}</figcaption>
        </Figure>
        <LogOut title="Выйти" onClick={logOut}>X</LogOut>
      </User>
    ) : (
      <Login onClick={login}>
       <Figure>
          <LoginImage src={UserImage} alt='войти' />
          <figcaption>Войти</figcaption>
        </Figure>
      </Login>
    )}
  </NavBarStyled>
);

 
        