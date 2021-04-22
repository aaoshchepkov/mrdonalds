import React from 'react';
import styled from 'styled-components';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, OrderTotal, TotalPrice } from './Order';
import { ButtonAdd } from "../Styled/ButtonAdd";
import { projection } from "../Functions/secondaryFunction";
import { totalPriceItems } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";


const Modal = styled.div `
background-color: white;
widht : 600px;
padding: 30px;
`;
const Text = styled.h3 `
text-align: center;
margin-bottom: 30px;
`;


const rulesData = {
  name: ["name"],
  price: ["price"],
  count: ["count"],
  topping: [
    "topping",
    (arr) => arr.filter((obj) => obj.checked).map((obj) => obj.name),
  ],
  choice: [
    "choice",
    (item) => (item ? item : "no choices"),
    (arr) => (arr.length ? arr : "no toppings"),
  ],
};
const sendOrder = (dataBase, orders, authentication) => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
      nameClient: authentication.displayName,
      email: authentication.email,
      order : newOrder
    });
  };

export const OrderConfirm = ({
  orders,
  setOrders,
  authentication,
  setOpenOrderConfirm,
  firebaseDatabase

}) => {
  const dataBase = firebaseDatabase();
  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
    0
  );

  return (
    <Overlay> 
     <Modal> 
       <OrderTitle>{authentication.displayName}</OrderTitle>
       <Text>Осталось только подтвердить ваш заказ</Text>
       <OrderTotal>
         <span>Итого:</span>
         <TotalPrice>{formatCurrency(total)}</TotalPrice>
       </OrderTotal>
       <ButtonAdd onClick={ () => {
         sendOrder(dataBase, orders, authentication);
         setOrders([]);
         setOpenOrderConfirm(false);

       }}>
       Подтвердить
       </ButtonAdd>

     </Modal>
    </Overlay>

  )

}