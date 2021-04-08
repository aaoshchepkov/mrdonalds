import React from "react";
import styled from "styled-components";
import {ButtonAdd} from "./ButtonAdd";

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
z-index:20;
background-color: rgba(0,0,0,0.5)

`;

const Modal = styled.div`
background-color:#fff;
width:600px;
height:600px;
`;

const Banner = styled.div`
height:200px;
width: 100%;
background-image: url(${({img}) => img});
background-size: cover;
background-position: center;
`;

const ModalWrapper = styled.div `
display: flex;
flex-direction: column;
justify-content:space-between;
height: calc(100% - 210px);
padding: 20px 53px 20px 37px;
`;
const ModalBlock = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
const ModalText = styled.p`
font-family: Pacifico;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 53px;
`;


export const ModalItem = ({openItem, setOpenItem}) => { 
  function closeModal(e) {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;
  
  return (
  <Overlay id="overlay" onClick={closeModal}>
  <Modal>
    <Banner img={openItem.img}/>
    <ModalWrapper>
    <ModalBlock>
     <ModalText>{openItem.name}</ModalText>
     <ModalText>{openItem.price.toLocaleString('ru-RU',{style:'currency', currency:'RUB'})}</ModalText>
    </ModalBlock>
    <ButtonAdd>Добавить</ButtonAdd>
   </ModalWrapper>
  </Modal>
</Overlay>)
  
};