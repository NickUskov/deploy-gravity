import React, { FC, useState } from 'react';
import { Select } from "../Select";
import { IconSearch } from "../Icons";
import { Table } from '../Table';
import { StatCommentModal, StatEditModal } from "../Modals";
import { MainButton } from "../MainButton";
import { Input } from '../Input';
import styled from "styled-components";


interface StatsProps { }

const StatsWrapper = styled.div`
  flex: 1;
  height: 100%;
  padding: 20px 20px 20px 0;
  color: white;
  
  .stats-content {
    height: inherit;
    padding: 20px 30px;
    margin-left: 200px;
    border-radius: 14px;
    background: #2F2F2F;
    
    &-header {
      margin: 0;
      margin-bottom: 42px;
      text-align: center;
      font-size: 28px;
      line-height: normal;
    }
    
    &-filter {
      display: flex;
      margin-bottom: 26px;
    }
    
    &-filter-item {
      margin-right: 20px;
    }

    &-filter-table {
      max-height: 600px;
    }
  }
  
  @media (max-width: 1200px) {
    .stats-content {
      padding: 20px!important;
    }
    
    .stats-content-header {
      margin-bottom: 32px;
      font-size: 22px;
    }
  }
`

const dataSource = [
    {
        key: '1',
        ID: '12345',
        'Гос. номер': 'А102ВВ102',
        'Перевозчик': 'ООО”Альянс”',
        'Брутто': '12345',
        'Тара': '--',
        'Нетто': '--',
        'Категория': 'ТКО-4',
        'Вид груза': 'Картон',
        'Дата въезда': '24.03.2021 / 10:25',
        'Дата выезда': '24.03.2021 / 10:25',
        'Комментарии': 'Отсев',
    },
    {
        key: '2',
        ID: '12345',
        'Гос. номер': 'А102ВВ102',
        'Перевозчик': 'ООО”Альянс”',
        'Брутто': '12345',
        'Тара': '12345',
        'Нетто': '12345',
        'Категория': 'ТКО-4',
        'Вид груза': 'Картон',
        'Дата въезда': '24.03.2021 / 10:25',
        'Дата выезда': '24.03.2021 / 10:25',
        'Комментарии': 'Отсев',
    },
    {
        key: '3',
        ID: '12345',
        'Гос. номер': 'А102ВВ102',
        'Перевозчик': 'ООО”Альянс”',
        'Брутто': '12345',
        'Тара': '12345',
        'Нетто': '12345',
        'Категория': 'ТКО-4',
        'Вид груза': 'Картон',
        'Дата въезда': '24.03.2021 / 10:25',
        'Дата выезда': '24.03.2021 / 10:25',
        'Комментарии': 'Отсев',
    },

];

const columns = [
    {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
    },
    {
        title: 'Гос. номер',
        dataIndex: 'Гос. номер',
        key: 'Гос. номер',
    },
    {
        title: 'Перевозчик',
        dataIndex: 'Перевозчик',
        key: 'Перевозчик',
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
        title: 'Вид груза',
        dataIndex: 'Вид груза',
        key: 'Вид груза',
    },
    {
        title: 'Дата въезда',
        dataIndex: 'Дата въезда',
        key: 'Дата въезда',
    },
    {
        title: 'Дата выезда',
        dataIndex: 'Дата выезда',
        key: 'Дата выезда',
    },
    {
        title: 'Комментарии',
        dataIndex: 'Комментарии',
        key: 'Комментарии',
    },
];

const Stats: FC<StatsProps> = () => {
    const [selectedRow, setSelectedRow] = useState<any>(null)

    return (
        <StatsWrapper>
            <StatCommentModal
                visible={selectedRow?.key === 'comment'}
                footer={
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <MainButton
                            onClick={() => setSelectedRow(null)}
                            style={{ marginRight: 60, width: 280, height: 42 }}
                        >
                            Отменить
                        </MainButton>
                        <MainButton
                            onClick={() => setSelectedRow(null)}
                            style={{ width: 280, height: 42 }}
                        >
                            Принять
                        </MainButton>
                    </div>
                }
            />
            <StatEditModal
                visible={selectedRow?.key === 'edit'}
                footer={
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <MainButton
                            onClick={() => setSelectedRow(null)}
                            style={{ marginRight: 60, width: 280, height: 42 }}
                        >
                            Отменить
                        </MainButton>
                        <MainButton
                            onClick={() => setSelectedRow(null)}
                            style={{ width: 280, height: 42 }}
                        >
                            Принять
                        </MainButton>
                    </div>
                }
            />
            <div className="stats-content">
                <p className="stats-content-header">Статистика</p>
                <div className="stats-content-filter">
                    <Select
                        className='stats-content-filter-item'
                        style={{ width: 200, height: 40, fontSize: 20, fontWeight: 300 }}
                        placeholder="Категория"
                    />
                    <Select
                        className='stats-content-filter-item'
                        style={{ width: 200, height: 40, fontSize: 20, fontWeight: 300 }}
                        placeholder="Вид груза"
                    />
                    <Input
                        className="stats-content-filter-item"
                        suffix={<IconSearch />}
                        placeholder="Гос. номер"
                        style={{ width: 200, height: 42, fontSize: 20, fontWeight: 300 }}
                    />
                    <Input
                        className="stats-content-filter-item"
                        suffix={<IconSearch />}
                        placeholder="Перевозчик"
                        style={{ width: 400, height: 42, fontSize: 20, fontWeight: 300 }}
                    />
                    <Input
                        suffix={<IconSearch />}
                        placeholder="Заглушка под календарь"
                        style={{ width: 400, height: 42, fontSize: 20, fontWeight: 300 }}
                    />
                    <MainButton
                        type="ghost"
                        style={{
                            height: '100%',
                            width: 50,
                            marginLeft: 38,
                            marginRight: 20
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6585 1.1364C16.2022 0.832964 15.6025 0.981856 15.3206 1.45631L7.57537 14.4902L2.57811 8.9648C2.19774 8.54422 1.56286 8.52892 1.16456 8.93196C0.757888 9.34348 0.744016 10.022 1.1325 10.4516L7.00779 16.9478C7.22249 17.1852 7.53115 17.3069 7.84484 17.2732C8.15832 17.2396 8.43628 17.0553 8.60062 16.7788L16.9898 2.66125C17.2956 2.14656 17.152 1.46447 16.6585 1.1364Z" fill="#5076D6" />
                        </svg>
                    </MainButton>
                    <MainButton
                        type="ghost"
                        style={{
                            height: '100%',
                            width: 50
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                            <path d="M17.2635 19.5771C17.654 19.9677 18.2871 19.9677 18.6777 19.5771C19.0682 19.1866 19.0682 18.5535 18.6777 18.1629L10.8995 10.3848L18.6777 2.60658C19.0682 2.21606 19.0682 1.58289 18.6777 1.19237C18.2871 0.801844 17.654 0.801844 17.2635 1.19237L9.48528 8.97054L1.70711 1.19237C1.31658 0.801845 0.683418 0.801844 0.292893 1.19237C-0.0976313 1.58289 -0.0976309 2.21606 0.292893 2.60658L8.07107 10.3848L0.292894 18.1629C-0.0976305 18.5535 -0.0976313 19.1866 0.292893 19.5771C0.683418 19.9677 1.31658 19.9677 1.70711 19.5771L9.48528 11.799L17.2635 19.5771Z" fill="#5076D6" />
                        </svg>
                    </MainButton>
                </div>

                <div className="stats-content-table">
                    <Table
                        stripped
                        dataSource={dataSource}
                        columns={columns}
                        pagination={false}
                        onRow={(record) => {
                            return {
                                onClick: () => {
                                    if (record['Тара'] === '--' && record['Нетто'] === '--') {
                                        setSelectedRow({ key: 'edit', record })
                                    } else {
                                        setSelectedRow({ key: 'comment', record })
                                    }
                                },
                            };
                        }}
                    />
                </div>
            </div>
        </StatsWrapper>
    );
};

export default Stats;