import React from "react";
import styled from "styled-components";
import { ButtonAdd } from "../Styled/ButtonAdd";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/useCount";
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from "../Hooks/useTopping";
import { useChoices } from "../Hooks/useChoices";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
  background-color: #fff;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  height: 200px;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const TotalPriceItem = styled.div`
display: flex;
justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {
  const counter = useCount();
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;


  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);

  }

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalWrapper>
          <ModalBlock>
            <ModalText>{openItem.name}</ModalText>
            <ModalText>{formatCurrency(openItem.price)}
            </ModalText>
          </ModalBlock>
          <CountItem {...counter}/>
          {openItem.toppings && <Toppings {...toppings}/>}
          {openItem.choices && <Choices {...choices} openItem={openItem}/>}
          <TotalPriceItem>
          <span>Цена:</span>
          <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <ButtonAdd 
          onClick={ isEdit ? editOrder : addToOrder}
          disabled={order.choices && !order.choice}
          >Добавить</ButtonAdd>
        </ModalWrapper>
      </Modal>
    </Overlay>
  );
};
