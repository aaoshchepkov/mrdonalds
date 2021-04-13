import React from "react";
import styled from "styled-components";
import trachImage from "../../image/trash.svg";
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';



const OrderItemStyled = styled.li`
display: flex;
margin: 15px 0;
`;

const TrashButton = styled.button `
width:24px;
height:24px;
border-color: transparent;
background-color: transparent;
background-image: url(${trachImage});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;
const ItemName = styled.span`
flex-grow: 1;
display: flex;
flex-direction: column;
`;
const ItemPrice = styled.span`
margin: 0 10px 0 30px;
min-widht:80px;
text-align: right;
`;

export function OrderListItem({order}) {
  return (
  <>
  <OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <span>{order.count} </span>
    
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
    <TrashButton/>
  </OrderItemStyled>
  </>
) 
}