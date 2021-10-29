import React, { FC, useState } from "react";
import styled from "styled-components";
import { GeneralModal } from "../GeneralModal";
import { MainButton } from "../MainButton";
import { Road } from "../Road";
import { Table } from "../Table";

interface ContentProps {
  onBruttoChange?: (open: any) => void;
}
export type ModeType = 'auto' | 'manual'


const ContentWrapper = styled.div`
  .mechanic-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 190px;
    padding-left: 200px;
    padding-right: 90px;
    .mechanic-block {
      display: flex;
      flex-direction: column;
      padding: 40px 80px;
      border-radius: 10px;
      background: #365DBE;
      span {
        text-align: left;
        line-height: 120%;
        color: #fff;
        letter-spacing: 1px;
        &:first-child {
          font-size: 36px;
          font-weight: 600;
        }
        &:last-child {
          margin-top: 30px;
          font-size: 30px;
          font-weight: 300;
        }
      }
    }
  }
  .content {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 100px;
  }
  .table-container {
    width: 100%;
    height: 400px;
    padding-right: 30px;
    padding-left: 200px;
    margin-top: 30px;
    .table {
      width: 100%;
      height: 100%;
      padding: 20px 30px;
      background: #2f2f2f;
      border-radius: 15px;
    }
  }
  .progress-container {
    width: 100%;
    height: 45px;
    padding-right: 30px;
    padding-left: 200px;
    margin-top: 30px;
    .progress-bar {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: space-between;
      letter-spacing: 1px;
      span {
        font-size: 28px;
        color: #fff;
        margin-right: 30px;
      }
      .bar-field {
        width: fit-content;
        height: 100%;
        background: #373737;
        display: flex;
        align-items: center;
        border-radius: 10px;
        color: #f2f2f2;
        font-size: 20px;
        font-weight: 300;
        padding: 0 20px;
        margin-right: 30px;
        &:last-child {
          margin-right: 0;
        }
        p {
          margin-left: 10px;
          margin-bottom: 0;
          color: #fff;
          font-weight: 500;
        }
      }
      .num {
        p {
          text-transform: uppercase;
        }
      }
      .photoelements {
        flex-grow: 1;
        //width: 59%;
      }
    }
  }
  
  @media (max-width: 1550px) {        
    .progress-container {
      margin-top: 15px;
    }
    
    .progress-bar {
      & > span {
        display: flex;
        align-items: center;
        white-space: nowrap;
        text-align: center;
        font-size: 20px!important;
      }
      
      .bar-field {
        display: flex;
        width: fit-content!important;
        height: fit-content!important;
        white-space: nowrap;
        justify-content: flex-start;
        margin-top: 8px;
        padding: 8px!important;
        font-size: 16px!important;
        
        p{
          font-size: 16px!important;
        }

        .timer {
          width: fit-content!important;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    .mechanic-container {
      .mechanic-block {
        display: flex;
        flex-direction: column;
        padding: 40px;
        border-radius: 10px;
        background: #365DBE;
        span {
          text-align: left;
          line-height: 120%;
          color: #fff;
          letter-spacing: 1px;
          &:first-child {
            text-align: center;
            font-size: 30px;
            font-weight: 600;
          }
          &:last-child {
            text-align: center;
            margin-top: 20px;
            font-size: 20px;
            font-weight: 300;
          }
        }
      }
    }
    
    .table {
      padding: 20px!important;
    }
    
    .progress-container {
      margin-top: 15px;
    }
    
    .progress-bar {
      & > span {
        display: flex;
        align-items: center;
        white-space: nowrap;
        text-align: center;
        font-size: 14px!important;
      }
      
      .bar-field {
        display: flex;
        width: fit-content!important;
        height: fit-content!important;
        white-space: nowrap;
        justify-content: flex-start;
        margin-top: 8px;
        padding: 8px!important;
        font-size: 12px!important;
        
        p{
          font-size: 12px!important;
        }

        .timer {
          width: fit-content!important;
        }
      }
    }
  }
`;

const dataSource = [
  {
    key: '1',
    ID: '12345',
    'Въезд': '24.03.2021 / 10:25',
    'Брутто': "12345",
    'Тара': "12345",
    'Нетто': "12345",
    'Категория': "ТКО-4",
    'Гос. номер': "А102ВВ102",
    'Комментарии': "Отсев",
  },
  {
    key: '2',
    ID: '12345',
    'Въезд': '24.03.2021 / 10:25',
    'Брутто': "12345",
    'Тара': "12345",
    'Нетто': "12345",
    'Категория': "ТКО-4",
    'Гос. номер': "А102ВВ102",
    'Комментарии': "Отсев",
  },
  {
    key: '3',
    ID: '12345',
    'Въезд': '24.03.2021 / 10:25',
    'Брутто': "12345",
    'Тара': "12345",
    'Нетто': "12345",
    'Категория': "ТКО-4",
    'Гос. номер': "А102ВВ102",
    'Комментарии': "Отсев",
  },

];

const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
  },
  {
    title: 'Въезд',
    dataIndex: 'Въезд',
    key: 'Въезд',
  },
  {
    title: 'Брутто',
    dataIndex: 'Брутто',
    key: 'Брутто',
  },
  {
    title: 'Тара',
    dataIndex: 'Тара',
    key: 'Тара',
  },
  {
    title: 'Нетто',
    dataIndex: 'Нетто',
    key: 'Нетто',
  },
  {
    title: 'Категория',
    dataIndex: 'Категория',
    key: 'Категория',
  },
  {
    title: 'Гос. номер',
    dataIndex: 'Гос. номер',
    key: 'Гос. номер',
  },
  {
    title: 'Комментарии',
    dataIndex: 'Комментарии',
    key: 'Комментарии',
  },
];

const Content: FC<ContentProps> = (props) => {
  const [mode, setMode] = useState<ModeType>('auto')
  const [visibleCloseRecord, setVisibleCloseRecord] = useState(false)

  /* handlers */
  const handleModeChange = (modeType: ModeType) => {
    props.onBruttoChange?.(true)
    setMode(modeType)
  }

  const onOpen = (val: string) => {
    props.onBruttoChange?.(val)
  }

  return (
    <ContentWrapper>
      {mode !== 'auto' ? (
        <div className="content">
          <div>
            <div className="mechanic-container">
              <div className="mechanic-block">
                <span>Режим ручного управления шлагбаумами</span>
                <span>
                  Внимание! В этом режиме контроль взвешивания не происходит и не идет
                  к учету! <br /> Здесь Вы можете открывать шлагубаумы вручную. <br /> Для того
                  чтобы перейти в автоматический режим нажмите на кнопку “Автомат”.
                </span>
              </div>
            </div>
          </div>
          <Road
            onModeChange={handleModeChange}
          />
        </div>) : (
        <div className="content">
          <div>
            <div className="table-container">
              <div className="table">
                <Table
                  stripped={false}
                  tableHeader="Текущие события"
                  dataSource={dataSource}
                  columns={columns}
                  pagination={false}
                  onRow={(record) => {
                    return {
                      onClick: event => {
                        setVisibleCloseRecord(true)
                      },
                    };
                  }}
                />
              </div>
            </div>
            <div className="progress-container">
              <div className="progress-bar">
                <span>Процесс заезда</span>
                <div style={{ fontWeight: 300 }} className="bar-field num">
                  Гос. номер: <p>a102bb102</p>
                </div>
                <div className="bar-field photoelements">
                  Прогресс: <p>Ожидание пересечения фотоэлементов</p>
                </div>
                <div className="bar-field timer">
                  Таймер: <p>210 с</p>
                </div>
              </div>
            </div>
          </div>
          <Road
            onModeChange={handleModeChange}
            onOpen={onOpen}
          />
        </div>
      )}

      <GeneralModal
        centered
        visible={visibleCloseRecord}
        footer={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MainButton
              onClick={() => setVisibleCloseRecord(false)}
              style={{ marginRight: 60, width: 150, height: 42 }}>
              Нет
            </MainButton>
            <MainButton
              onClick={(e) => setVisibleCloseRecord(false)}
              style={{ width: 150, height: 42 }}
            >
              Да
            </MainButton>
          </div>
        }
      >
        Уверены, что хотите закрыть запись?
      </GeneralModal>
    </ContentWrapper>
  );
};

export default Content;
