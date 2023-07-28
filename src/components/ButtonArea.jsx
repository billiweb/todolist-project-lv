import React from "react";
import { css, styled } from "styled-components";

const ButtonArea = () => {
  return (
    <div>
      <h2>01.Button</h2>
      <ButtonContainer bc="orange" color="blue" size="small" rightIcon=">>">
        테스트
      </ButtonContainer>
      <ButtonContainer bc="aqua" color="red" size="medium">
        테스트
      </ButtonContainer>
    </div>
  );
};

export default ButtonArea;

const ButtonContainer = ({ children, ...rest }) => {
  return (
    <>
      <StButton {...rest}>
        {children}
        {rest.rightIcon}
      </StButton>
    </>
  );
};

const StButton = styled.button`
  border-radius: 5px;
  margin: 5px;

  background-color: ${({ bc }) => bc};
  color: ${({ color }) => color};

  ${({ size }) => {
    switch (size) {
      case "small":
        return css`
          width: 100px;
        `;
      case "medium":
        return css`
          width: 200px;
        `;
    }
  }}
`;
