import React, {FC, useRef} from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';
import styled from "styled-components";
import {Select} from "../Select";
import {Input} from "../Input";
import {CheckboxGroup} from "../Checkbox";

interface StatEditModal extends AntModalProps {};

const StatEditModalWrapper = styled.div`
  .ant-modal-mask {
    backdrop-filter: blur(2px);
  }

  .stat-edit-modal {

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

const StatEditModal: FC<StatEditModal> = (props) => {
    const wrapperRef = useRef<any>(null)
    const options = [
        { label: 'Поломка', value: '1' },
        { label: 'Длинномер', value: '2' },
    ]

    function onChange(checkedValues: any) {
        console.log('checked = ', checkedValues);
    }

    return (
        <StatEditModalWrapper ref={wrapperRef}>
            <AntModal
                {...props}
                wrapClassName="stat-edit-modal"
                maskClosable={false}
                getContainer={wrapperRef?.current}
                centered
            >
                <p>Редактирование записи</p>
                <Input style={{ marginBottom: 6, fontSize: 20 }} placeholder="Комментарий" />
                <Select style={{ marginBottom: 6, fontSize: 20 }} placeholder="Контрагент" />
                <Select style={{ marginBottom: 6, fontSize: 20 }} placeholder="Площадка" />
                <Select style={{ marginBottom: 6, fontSize: 20 }} placeholder="Категория" />
                <Select style={{ marginBottom: 6, fontSize: 20 }} placeholder="Вид груза" />
                <Input style={{ marginBottom: 6, fontSize: 20 }} placeholder="Комментарий" />
            </AntModal>
        </StatEditModalWrapper>
    );
};

export default StatEditModal;