import React from "react";
import styled from "styled-components";
import {ButtonAdd} from "../Styled/ButtonAdd";
import {OrderListItem} from "./OrderListItem";
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';


const OrderStyled = styled.section`
display: flex;
flex-direction: column;
position:fixed;
top: 80px;
left: 0;
background-color:#fff;
min-width: 380px;
height: calc(100% - 80px);
box-shadow : 3px 4px 5px rgba(0,0,0,0.35);
padding: 20px;
`;

const OrderTitel = styled.h2`
font-size: 39px;
line-height: 68px;
color: #000000;
text-align: center;
margin-bottom: 30px;
`;
const OrderContent = styled.div`
flex-grow: 1;
`;
const OrderList = styled.ul`

`;
const OrderTotal = styled.div`
display: flex;
margin: 0 35px 30px 35px;
& span:first-child{
  flex-grow:1;
}
`;

const TotalPrice = styled.span`
margin: 0 10px 0 30px;
min-widht:80px;
text-align: right;
`;

const EmptyList = styled.p`
text-align:center;
`;


export const Order = ({ orders }) => { 
   const total = orders.reduce((result, order)=> totalPriceItems(order) + result, 0);
   
    return (<OrderStyled>
    <OrderTitel>ВАШ ЗАКАЗ</OrderTitel>
    <OrderContent>
      {orders.length ? <OrderList>
        {orders.map(order => <OrderListItem key={order.id} order={order}/>)}
      </OrderList> : 
      <EmptyList>Список заказов пуст</EmptyList>}
    </OrderContent>
    <OrderTotal>
    <span>Итого</span>
      <span>5</span>
      <TotalPrice>{formatCurrency(total)}</TotalPrice></OrderTotal>
    <ButtonAdd>Оформить</ButtonAdd>
    </OrderStyled>)
}


