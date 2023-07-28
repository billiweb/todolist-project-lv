import React, { useState } from "react";
import { styled } from "styled-components";

const FirstModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMadal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openMadal}>열기 1</button>
      {isOpen && (
        <StModalBox>
          <StModalContents>
            <p>모달창!!</p>
            <button onClick={closeModal}>x</button>
          </StModalContents>
        </StModalBox>
      )}
    </div>
  );
};

export default FirstModal;

const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalContents = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 70%;
  height: 50%;
  border-radius: 12px;
`;
