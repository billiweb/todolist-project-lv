import React, { useState } from "react";
import { styled } from "styled-components";

const FirstSelect = () => {
  const options = ["자바스크립트", "리엑트", "노드", "스프링"];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectiedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectiedOption(option);
    setIsOpen(false);
  };

  return (
    <div>
      <DropdownWrapper>
        <DropdownHeader
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span>{selectedOption || "선택하세요"}</span>
          <span>⬇</span>
        </DropdownHeader>
        {isOpen && (
          <DropdownList>
            {options.map((option) => (
              <DropdownItem
                key={option}
                onClick={() => {
                  handleOptionClick(option);
                }}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownWrapper>
    </div>
  );
};

export default FirstSelect;

const DropdownWrapper = styled.div`
  width: 200px;
  border: 1px solid black;
`;

const DropdownHeader = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const DropdownList = styled.div`
  border-top: 1px solid #ccc;
  position: absolute;
  width: 200px;
  border: 1px solid #ccc;
  background-color: #ffffff;
`;

const DropdownItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
