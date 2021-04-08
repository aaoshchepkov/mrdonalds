import React from "react";
import styled from "styled-components";
import dbMenu from "./DBMenu";
import {ListItem} from "./ListItem";
import Banner from "../image/banner.png";

const MenuStyled = styled.main`
background-color:#ccc;
margin-top:80px;
margin-left: 380px;
`;

const SectionMenu = styled.section`
padding:30px;
`;
const BannerMenu = styled.div`
background-image: url(${Banner});
background-position: center;
background-size: cover;
width: 100%;
height: 210px;
`;

export const Menu = ({setOpenItem}) => (
  <MenuStyled>
  <BannerMenu/>
  <SectionMenu>
    <h2>Бургеры</h2>
    <ListItem itemList={dbMenu.burger}
               setOpenItem={setOpenItem}
    />
  </SectionMenu>
   <SectionMenu>
    <h2>Закуски и напитки</h2>
    <ListItem itemList={dbMenu.other}
              setOpenItem={setOpenItem}
    />
  </SectionMenu>
  
  </MenuStyled>

)