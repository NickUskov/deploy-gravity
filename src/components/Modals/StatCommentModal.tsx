import { FC, useRef } from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';
import styled from "styled-components";
import { TextArea } from '../TextArea';

interface StatCommentModalProps extends AntModalProps {
  comment: string;
  onCommentChange: (value: any) => void;
};

const StatCommentModalWrapper = styled.div`
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

const StatCommentModal: FC<StatCommentModalProps> = (props) => {
  const wrapperRef = useRef<any>(null)

  const handleInput = (e: any) => {
    console.log(e.target.value)
    props.onCommentChange(e.target.value);
  }

  return (
    <StatCommentModalWrapper ref={wrapperRef}>
      <AntModal
        {...props}
        wrapClassName="stat-edit-modal"
        maskClosable={false}
        getContainer={wrapperRef?.current}
        centered
      >
        <p>Добавить комментарий к записи</p>
        <TextArea
          style={{ height: 132 }}
          defaultValue="Комментарий"
          onInput={handleInput}
          value={props.comment}
        />
      </AntModal>
    </StatCommentModalWrapper>
  );
};

export default StatCommentModal;