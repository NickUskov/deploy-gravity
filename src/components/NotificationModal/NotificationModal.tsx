import React, { FC, useRef } from 'react';
import { Modal as AntdModal, ModalProps as AntdModalProps } from 'antd'
import { IconBellNoFill, IconClose } from "../Icons";

import styled from "styled-components";

interface NotificationModalProps extends AntdModalProps {};


const modalCls = 'ant-modal'
const NotificationModalWrapper = styled.div`
  .${modalCls} {
    position:absolute;
    top: 23px;
    left: 450px;
  }
  
  .${modalCls}-mask {
    backdrop-filter: blur(2px);
  }

  .${modalCls}-content {
    position: relative;
    padding: 14px;
    background: var(--secondaryBg);
    border-radius: var(--modalBorderRadius);
    box-shadow: none;

    .modal-bell-icon {
      position: absolute;
      top: 10px;
      left: 14px;
    }
    
    .ant-modal-body {
      padding: 0;
      padding-top: 50px;
      color: white;
    }
    
    .modal-body-item {
      margin: 0px;
      font-size: 18px;
      font-weight: 300;
      
      &:first-of-type {
        .modal-body-splitter {
          display: none;
        }
      }
      
      .modal-body-splitter {
        margin: 8px 0px;
        height: 1px;
        background: #626262;
      }
      
    }
  }
`

const NotificationModal: FC<NotificationModalProps> = (props) => {
    const wrapperRef = useRef<any>(null)
    return (
        <NotificationModalWrapper ref={wrapperRef}>
            <AntdModal
                {...props}
                getContainer={wrapperRef?.current}
                closeIcon={<IconClose />}
                footer={null}
            >
                <span className='modal-bell-icon'>
                    <IconBellNoFill />
                </span>
                <p className='modal-body-item'>
                    <div className='modal-body-splitter'></div>
                    Утеряна связь с WServer
                </p>

                <p className='modal-body-item'>
                    <div className='modal-body-splitter'></div>
                    Утеряна связь с фотоэлементами
                </p>
            </AntdModal>
        </NotificationModalWrapper>
    );
};

export default NotificationModal;