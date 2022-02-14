import React, {FC, useRef, useState} from 'react';
import { Select as AntSelect, SelectProps as AntSelectProps } from 'antd';
import styled from "styled-components";
import { IconSearch } from '../Icons';

const { Option } = AntSelect;

type SelectProps = AntSelectProps<string>;

const SelectWrapper = styled.div`
  .ant-select {
    color: var(--white);
    width: 100%;
    background: transparent;
    
    &.form-select {
      .ant-select-arrow {
        top: 50%;
        transform: translateY(-50%);
      }
    }
    
    .ant-select-dropdown {
      color: white;
      background: #363636;
      box-shadow: none;
      
      .ant-select-item {
        color: var(--white);
        text-align: left;

        &-option-active,
        &-option-selected {
          background: #474746;
          border-radius: 4px;
        }
      }
    }
    
    .ant-select-selector {
      height: 42px;
      border: 1px solid var(--inputColor);
      border-radius: 5px;
      background: transparent;
      
      &:hover {
        border: 1px solid var(--white);
      }

      .ant-select-selection-item,
      .ant-select-selection-placeholder {
        display: flex;
        align-items: center;
      }
      
      .ant-select-selection-placeholder {
        color: var(--inputColor);
      }
    }
  }
  
  .ant-select-focused {
    .ant-select-selector {
      border: 1px solid var(--white)!important;
      outline: none!important;
    }
  }
`

const Select: FC<SelectProps> & {Option: any} = (props) => {
    const wrapperRef = useRef<any>(null)
    const [isOpen, setIsOpen] = useState<boolean | null>(null)
    const suffixIcon = props.showSearch ? <IconSearch/> : isOpen ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M4.6038 0.514682C4.80395 0.254678 5.19605 0.254679 5.3962 0.514683L9.57646 5.945C9.82956 6.27379 9.59518 6.75 9.18026 6.75L0.819738 6.75C0.404818 6.75 0.170437 6.27379 0.423535 5.945L4.6038 0.514682Z" fill="#F2F2F2"/>
        </svg>
    ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
            <path d="M5.3962 6.48532C5.19605 6.74532 4.80395 6.74532 4.6038 6.48532L0.423536 1.055C0.170437 0.726213 0.404819 0.250001 0.819739 0.250001L9.18026 0.250001C9.59518 0.250001 9.82956 0.726214 9.57647 1.055L5.3962 6.48532Z" fill="#F2F2F2"/>
        </svg>
    )


    return (
        <SelectWrapper ref={wrapperRef}>
            <AntSelect
                {...props}
                getPopupContainer={(node) => document.querySelector('.ant-select') || document.body}
                suffixIcon={suffixIcon}
                onDropdownVisibleChange={(value) => {setIsOpen(value)}}
            >
            </AntSelect>
        </SelectWrapper>
    );
};

Select.Option = Option
export default Select;