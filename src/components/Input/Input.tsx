import React, { FC } from 'react';
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd'
import styled from "styled-components";

interface InputProps extends AntdInputProps { }

/* styled components */
const InputWrapper = styled.div`
    .ant-input {
      height: 42px;
      border: 1px solid var(--inputColor);
      border-radius: 5px;
      color: var(--white);
      background: transparent;
      box-shadow: none!important;
      
      &:hover {
        border: 1px solid var(--white);
      }
      
      input {
        background: inherit;
        color: inherit;
        
        &::placeholder {
          color: var(--inputColor);
        }
      }
    }

    .ant-input-affix-wrapper {
      border-radius: 5px;
      border: 1px solid var(--inputColor);
      background: transparent;
      color: rgba(242, 242, 242, 0.6);

      &:focus-within,
      &:focus,
      &:hover {
        border: 1px solid var(--white);
        box-shadow: none;
      }
      
      input {
        height: auto;
        border-radius: 0;
        border: 0;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: var(--white);

        &::placeholder {
          color: rgba(242, 242, 242, 0.6);
        }
        &:hover {
          border: 0;
        }
      }
    }
`

const Input: FC<InputProps> = (props) => {
  return (
    <InputWrapper>
      <AntdInput {...props} />
    </InputWrapper>
  );
};

export default Input;