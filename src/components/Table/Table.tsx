import React, { FC } from 'react';
import { Table as AntdTable, TableProps as AntdTableProps } from 'antd'
import styled from "styled-components";

interface TableProps extends AntdTableProps<any> {
  tableHeader?: string;
  stripped?: boolean;
}

interface WrapperProps {
  stripped?: boolean;
}

const TableWrapper = styled.div<WrapperProps>`
    overflow: auto;
    height: 100%;
    max-height: 100%;

    * {
      letter-spacing: 1px;
    }
  
    .table-header {
      margin-bottom: 16px;
      font-size: 28px;
      text-align: center;
      color: var(--white);
    }
  
    table {
      font-family: 'Moulpali', sans-serif;
      letter-spacing: 1px!important;
      font-size: 16px;
      border-radius: 0;
      border-spacing:0 8px;
      background-color: #2F2F2F;
    }
    
    thead {
      tr th {
        padding:10px 20px;
        border-top: 1px solid rgba(242, 242, 242, .3);
        border-bottom: 1px solid rgba(242, 242, 242, .3);
        text-align: center;
        color: white;
        background: #2F2F2F;
    
        &::before {
          display: none;
        }
    
        &:first-of-type {
          border-left: 1px solid rgba(242, 242, 242, .3);
          border-top-left-radius:12px!important;
          border-bottom-left-radius:12px;
        }
    
        &:last-of-type {
          border-right: 1px solid rgba(242, 242, 242, .3);
          border-top-right-radius:12px!important;
          border-bottom-right-radius:12px;
        }
      }
    }
    
    tbody {
      color: white;
      background: rgba(47, 47, 47, 1);
      cursor: pointer;
    
      tr {
        &:hover td {
          background: ${props => props.stripped ? '#454545' : '#4F4F4F'}!important;
        }

        &:nth-of-type(even) {
          &:hover td
          {
            background: ${props => props.stripped ? '#373737' : '#4F4F4F'}!important;
          }
          
          td {
            background-color: #373737!important;
          }
        }

        td {
          height: 36px!important;
          max-height: 36px!important;
          padding:4px 20px;
          text-align: center;
          border: none;
          background: ${props => !props.stripped ? '#373737' : '#454545'}!important;

          &:hover td {
            background: ${props => props.stripped ? '#454545' : '#373737'}!important;
          }
         
          &:first-of-type {
            border-top-left-radius:12px;
            border-bottom-left-radius:12px;
          }
          &:last-of-type {
            border-top-right-radius:12px;
            border-bottom-right-radius:12px;
          }
        }
      }
    }

  @media (max-width: 1200px) {
    .table-header {
      margin-bottom: 8px;
      font-size: 22px;
    }
    
    table {
      font-size: 14px;
      
      th,
      td {
        font-size:12px;
        padding:10px!important;
      }
    }
  }
`

const Table: FC<TableProps> = ({ tableHeader, stripped, ...props }) => {
  return (
    <TableWrapper stripped={stripped}>
      {tableHeader && <p className='table-header'>{tableHeader}</p>}
      <AntdTable {...props} />
    </TableWrapper>
  );
};

export default Table;