import React from "react";
import styled from "styled-components";


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
margin-bottom: 20px
`;

const ModalBlock = styled.div`
padding: 0 53px 43px 37px;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`;
const ModalText = styled.p`
font-family: Pacifico;
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 53px;
`;
const ModalButton = styled.button`
background: #299B01;
color: white;
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 21px;
line-height: 25px;
min-width: 250px;
height:65px;
border: none;
margin: 200px auto 0 auto;


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
    <ModalBlock>
     <ModalText>{openItem.name}</ModalText>
     <ModalText>{openItem.price.toLocaleString('ru-RU',{style:'currency', currency:'RUB'})}</ModalText>
     <ModalButton>Добавить</ModalButton>
    </ModalBlock>
    
  </Modal>
</Overlay>)
  
};