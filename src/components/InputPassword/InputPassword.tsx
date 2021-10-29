import React, { FC } from 'react';
import { Input, InputProps } from 'antd';
import styled from "styled-components";

interface InputPasswordProps extends InputProps{}

const PasswordWrapper = styled.div`
  .ant-input-affix-wrapper-focused {
    border: 1px solid var(--white);
    box-shadow: none;
  }
  
  .ant-input-password {
    height: 42px;
    border: 1px solid var(--inputColor);
    border-radius: 5px;
    background: transparent;
    
    &:hover {
      border: 1px solid var(--white);
    }

    input {
      font-size: 22px;
      background: inherit;
      margin-top: 0px!important;
      color: var(--white);
    }
    
    svg {
      color: var(--white);
    }
  }
`

const InputPassword: FC<InputPasswordProps> = (props) => {
    return (
        <PasswordWrapper>
            <Input.Password {...props} />
        </PasswordWrapper>
    );
};

export default InputPassword;