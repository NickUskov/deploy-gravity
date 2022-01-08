import { FC } from 'react';
import { Button as AntdButton, ButtonProps as AntdButtonProps } from 'antd'
import styled from "styled-components";

interface MainButtonProps extends AntdButtonProps { }

const BtnWrapper = styled.div`
    .ant-btn {
      border: 1px solid var(--white);
      border-radius: var(--buttonBorderRadius);
      font-size: 22px;
      color: var(--white);
      background: var(--buttonBg);
      
      &:hover {
        border: 1px solid var(--accentColor);
        background: var(--accentColor)!important;
      }
    }

  .ant-btn-primary {
    border: 1px solid var(--buttonAccentColor);
    letter-spacing: 1px;
    color: var(--buttonAccentColor);
    background: var(--buttonBg);
    
    &:hover {
      color: white;
      background: var(--accentColor);
    }
  }

  .ant-btn-ghost {
    display: flex;
    align-items: center;
    border-radius: 14px;
    border: 1px solid #5076D6;
    background: transparent;

    &:hover {
      background: rgba(80, 118, 214, 0.15)!important;
    }
  }
`

const MainButton: FC<MainButtonProps> = (props: MainButtonProps) => {
  return (
    <BtnWrapper>
      <AntdButton {...props} />
    </BtnWrapper>
  );
};

export default MainButton;