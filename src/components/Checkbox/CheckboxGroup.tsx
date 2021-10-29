import React, { FC } from 'react';
import { Checkbox as AntCheckbox } from 'antd';
import { CheckboxGroupProps } from 'antd/lib/checkbox/Group';
import styled from "styled-components";

interface GroupProps extends CheckboxGroupProps  {};

const GroupWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  
  .ant-checkbox-wrapper {
    align-items: center;
    
    &:hover {
      .ant-checkbox-checked {
        border: 0!important;
      }
    }
    
    span:last-of-type {
      padding-top: 10px;
      font-size: 22px;
      line-height: normal;
      color: var(--white);
    }
    
    .ant-checkbox-inner {
      height: 30px;
      width: 30px;
      border: 2px solid var(--checkboxBorder);
      border-radius: 10px;
      background-color: var(--checkboxBg);
      
      &::after {
        left: 14px!important;
        border: 1px solid var(--checkboxBorder);
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(1.5) translate(-70%, -10%);
      }
    }
  }
`

const CheckboxGroup: FC<GroupProps> = (props) => {
    return (
        <GroupWrapper>
            <AntCheckbox.Group {...props} />
        </GroupWrapper>
    );
};

export default CheckboxGroup;