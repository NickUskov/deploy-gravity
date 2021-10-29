import React, { FC, useRef } from 'react';
import { Modal as AntdModal, ModalProps as AntdModalProps } from 'antd';
import styled from "styled-components";

interface GeneralModalProps extends AntdModalProps {}

const GeneralModalWrapper = styled.div`
    .ant-modal-mask {
      backdrop-filter: blur(2px);
    }
  
    .general-modal {
      
      .ant-modal-content {
        width: 490px;
        border-radius: var(--modalBorderRadius);
        background: var(--modalBg)!important;
        box-shadow: none;
        
        .ant-modal-body {
          padding: 50px;
          font-size: 28px;
          text-align: center;
          color: var(--white);
        }
        
        .ant-modal-footer {
          padding: 0 50px 40px 50px;
          border: 0;
        }
      }
    
      .ant-modal-close-x {
        display: none;
      }
    }
`

const GeneralModal: FC<GeneralModalProps> = (props) => {
    const wrapperRef = useRef<any>(null)
    return (
        <GeneralModalWrapper ref={wrapperRef}>
            <AntdModal
                {...props}
                wrapClassName="general-modal"
                closeIcon={<></>}
                maskClosable={false}
                getContainer={wrapperRef?.current}
            />
        </GeneralModalWrapper>
    );
};

export default GeneralModal;