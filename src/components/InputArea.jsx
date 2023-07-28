import React, { useState } from "react";
import { styled } from "styled-components";

const InputArea = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const changeEnterValue = (e) => {
    const value = e.target.value;
    const removedCommaValue = Number(value.replaceAll(",", ""));
    setPrice(removedCommaValue.toLocaleString());
  };

  return (
    <div>
      <h2>02.Input</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const plainPrice = price.replaceAll(",", "");
          alert(`${name}, ${price}`);
        }}
      >
        <div>
          <label>이름</label>
          <StInput
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label>가격</label>
          <StInput
            type="text"
            value={price}
            onChange={(e) => {
              changeEnterValue(e);
            }}
          />
        </div>
        <button>저장</button>
      </form>
    </div>
  );
};

export default InputArea;

const StInput = styled.input`
  border: 1px solid black;
  height: 20px;
  width: 200px;
  margin: 5px;
`;
