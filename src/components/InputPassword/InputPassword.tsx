import React, { FC } from 'react';
import { Input, InputProps } from 'antd';
import styled from "styled-components";

interface InputPasswordProps extends InputProps{
  errors?: any; 
}

const PasswordWrapper = styled.div<{errors: any}>`
  .error-text {
    margin-top: 5px;
    margin-left: 10px;
    font-size: 16px;
    letter-spacing: 5%;
    line-height: 19px;
    font-weight: 300;
    color: var(--errorColor);
  }

  .ant-input-affix-wrapper-focused {
    border: 1px solid var(--white);
    box-shadow: none;
  }
  
  .ant-input-password {
    height: 42px;
    border: ${props => !props.errors ?  `1px solid var(--inputColor)` : '1px solid var(--errorColor)'};
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

const InputPassword: FC<InputPasswordProps> = ({errors, ...props}) => {
  return (
    <>
      <PasswordWrapper errors={Boolean(errors)}>
        <Input.Password {...props} />
        {errors && <div className='error-text'>{errors}</div>}
      </PasswordWrapper>

    </>
  );
};

export default InputPassword;