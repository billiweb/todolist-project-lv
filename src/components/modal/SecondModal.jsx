import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { styled } from "styled-components";

const SecondModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  const openMadal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const clickOutside = (event) => {
    if (modalRef.current === event.target) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <div>
      <button onClick={openMadal}>열기 2</button>
      {isOpen && (
        <StModalBox ref={modalRef}>
          <StModalContents>
            <p>모달창!!</p>
          </StModalContents>
        </StModalBox>
      )}
    </div>
  );
};

export default SecondModal;

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
