import React from "react";
import styled from "styled-components";

const ChoiceWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-count: 1;
`;

const ChoiceRadio = styled.input`
  cursor: pointer;
  margin-right: 10px;
`;

const ChoiceLabel = styled.label`
  cursor: pointer;
  display: block;
`;

export function Choices({ openItem, choice, changeChoices }) {
  return (
    <>
      <h3>Выбирайте:</h3>
      <ChoiceWrap>
        {openItem.choices.map((item, i) => (
          <ChoiceLabel key={i}>
            <ChoiceRadio
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoices}
              />
            {item}
          </ChoiceLabel>
        ))}
      </ChoiceWrap>
    </>
  );
}
