import React, { FC } from 'react'
import { Input, InputProps } from 'antd';
import { TextAreaProps } from 'antd/lib/input/index'
import styled from 'styled-components';

interface TextareaProps extends InputProps { }

const TextAreaWrapper = styled.div`
    textarea {
        font-family: 'Moul Pali', sans-serif;
        border: 1px solid rgba(242, 242, 242, 0.4);
        border-radius: 5px;
        letter-spacing: 2px;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.5);
        background: transparent;

        &:hover,
        &:focus {
            border: 1px solid rgba(242, 242, 242, 0.4);
            outline: none;
            box-shadow: none;
        }
    }

`

const TextArea: FC<TextareaProps> = (props) => {
    return (
        <TextAreaWrapper>
            <Input.TextArea {...props as any} />
        </TextAreaWrapper>
    )
}

export default TextArea
