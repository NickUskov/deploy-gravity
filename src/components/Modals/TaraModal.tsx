import React, { FC, useRef } from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';
import { Select } from "../Select";
import { MainButton } from "../MainButton";
import { CheckboxGroup } from "../Checkbox";
import styled from "styled-components";
import { IconPlus } from "../Icons";


interface TaraModalProps extends AntModalProps { };

const TaraModalPropsWrapper = styled.div`
  * {
    letter-spacing: 1px;
    font-size: 20px!important;
  }
  
  .ant-modal-mask {
    backdrop-filter: blur(2px);
  }


  .ant-modal {
    width: fit-content !important;
  }

  .tara-modal {

    .ant-modal-content {
      width: 690px;
      border-radius: var(--modalBorderRadius);
      background: var(--modalBg)!important;
      box-shadow: none;

      .ant-modal-body {
        padding: 30px 40px 40px 40px;
        font-size: 28px;
        text-align: center;
        color: var(--white);
        
        p {
          letter-spacing: 1px;
          font-size: 28px!important;
          margin-bottom: 26px;
          line-height: normal;
        }
      }

      .ant-modal-footer {
        padding: 0 40px 40px 40px;
        border: 0;
      }
    }

    .ant-modal-close-x {
      display: none;
    }
  }
`

const TaraModal: FC<TaraModalProps> = (props) => {
  const wrapperRef = useRef<any>(null)
  const options = [
    { label: 'Поломка', value: '1' },
    { label: 'Длинномер', value: '2' },
  ];

  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  return (
    <TaraModalPropsWrapper ref={wrapperRef}>
      <AntModal
        {...props}
        wrapClassName="tara-modal"
        maskClosable={false}
        getContainer={wrapperRef?.current}
        centered
      >
        <p>Взвешивание тары</p>
        <div style={{ display: 'flex', marginBottom: 10 }}>
          <div style={{ width: '50%', marginRight: '10px' }}>
            <Select
              className="form-select"
              style={{ marginBottom: 6, marginRight: 10 }}
              placeholder="Гос. номер"
            >
              <Select.Option value="А999АА702">А999АА702</Select.Option>
              <Select.Option value="А222АА702">А222АА702</Select.Option>
            </Select>
          </div>
          <div style={{ width: '50%' }}>
            <MainButton
              type="primary"
              style={{ width: '100%', height: 42 }}
            >
              Добавить авто
            </MainButton>
          </div>
        </div>
        <Select
          className="form-select"
          style={{ marginBottom: 10 }}
          placeholder="Комментарий" />
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <CheckboxGroup options={options} defaultValue={['Pear']} onChange={onChange} />
        </div>
      </AntModal>
    </TaraModalPropsWrapper>
  );
};

export default TaraModal;