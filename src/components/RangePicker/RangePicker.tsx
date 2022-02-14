import { FC, useRef } from 'react';
import { DatePicker  } from 'antd'
import styled from "styled-components";

import "moment/dist/locale/ru.js";
import locale from 'antd/es/date-picker/locale/ru_RU';

const { RangePicker: AntdRangePicker } = DatePicker;

const RangePickerWraper = styled.div`
    .ant-picker {
        color: var(--white);
        background: var(--secondaryBg);
        border: 1px solid var(--inputColor);
        border-radius: 5px;

        &:hover {
            border: 1px solid var(--white);
        }

        input {
            font-size: 20px;
            color: var(--inputColor);
        }
    }

    .ant-picker-active-bar {
        background: var(--accentColor)!important;
    }

    .ant-picker-clear, .ant-picker-suffix {
        color: var(--white);
        background: var(--secondaryBg);
    }

    //dropdown
    .ant-picker-range-arrow {
        background: #373737;

        &::after {
            border: 5px solid transparent;
        }
    }
    .ant-picker-panel-container {
        color: white!important;
        background: #373737;

        .ant-picker-panel {
            border: 0;
        }

        .ant-picker-header {
            border: 0;
            color: var(--white);

            & > button > span::before,
            & > button > span::after {
                border: 0 solid var(--accentColor);
                border-width: 1.5px 0 0 1.5px;
            }

            .ant-picker-header-view {
                button:hover {
                    color: var(--accentColor);
                }
            }
        }

        .ant-picker-body {
           thead {
               th{
                    color:rgba(242, 242, 242, 0.5);               
               }
           }
        }

        .ant-picker-cell {
            color:rgba(242, 242, 242, 0.4);

            &-in-view{
                color: var(--white);
            }

            &:hover {
                    div {
                        background: var(--accentColor)!important;
                    }
                }
        }

        .ant-picker-cell-in-view.ant-picker-cell-range-start, 
        .ant-picker-cell-in-view.ant-picker-cell-range-end {
            div {
                border-radius: 100%!important;
                background: var(--accentColor);
            }
        }

        .ant-picker-cell-today > div {
            &::before {
                border: 1px solid var(--accentColor);
            }
        }

        .ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-range-end,
        .ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-range-start,
        .ant-picker-cell.ant-picker-cell-in-range.ant-picker-cell-in-view.ant-picker-cell-range-hover-start,
        .ant-picker-cell.ant-picker-cell-in-range.ant-picker-cell-in-view {
            background: transparent;

            &:hover::before {
                background: rgba(80, 118, 214, 0.25)!important;
            }

            &::before {
                background: rgba(80, 118, 214, 0.25);
            }
        }
    }
`

const RangePicker: FC<any> = (props) => {
    const wrapperRef = useRef(null);
    
    return (
        <RangePickerWraper ref={wrapperRef}>
            <AntdRangePicker 
                {...props}
                locale={locale}
                allowClear
                separator={null}
                getPopupContainer={(node) => document.querySelector('.ant-picker') || document.body}
            />
        </RangePickerWraper>
    );
};

export default RangePicker;