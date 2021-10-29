import React, { FC } from 'react';
import styled from "styled-components";

export interface ButtonProps {
    onClick?: () => void
}

const StyledButtonWrapper = styled.div`
  button {
    width: 100%;
    min-height: 50px;
    font-size: 22px;
    color: var(--mainTextColor);
    border: 1px solid var(--buttonBorderColor);
    border-radius: var(--buttonBorderRadius);
    background: transparent;
    transition: all 0.25s;
    cursor: pointer;
  }
  
  button:hover {
    background: var(--accentColor);
    border: 1px solid transparent;
  }
`

const Button: FC<ButtonProps> = ({ children , ...props }) => {
    return (
        <StyledButtonWrapper>
            <button
                {...props}
            >
                {children}
            </button>
        </StyledButtonWrapper>
    );
};

export default Button;