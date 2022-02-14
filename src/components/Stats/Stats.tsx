import { FC, useEffect, useMemo, useState } from 'react';
import { Select } from "../Select";
import { Table } from '../Table';
import { StatCommentModal, StatEditModal } from "../Modals";
import { MainButton } from "../MainButton";
import styled from "styled-components";
import { useCarriers, useCars, usePolygons, useTrashCategories, useTrashTypes } from '../../hooks';
import axios from 'axios';
import endpoints from '../../api/constants';
import { DatePicker } from 'antd';
import moment from 'moment';
import { RangePicker } from '../RangePicker';


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

    &-table {
        overflow-y: auto;
        height: 645px;
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

const defaultParams = {
    time_start: '2022.01.27',
    time_end: undefined,
    trash_cat: undefined,
    trash_type: undefined,
    carrier: undefined,
    auto_id: undefined,
}

const defaultRecordFields = {
    carNumber: null,
    comment: null,
    selectedTrashCat: null,
    selectedTrashType: null,
    selectedCar: null,
    selectedCarrier: null,
    selectedPolygon: null,
}

const Stats: FC<StatsProps> = () => {
    const [selectedDates, setSelectedDates] = useState<any>([moment(), moment()]);

    const [comment, setComment] = useState<string>('');
    const [selectedTrashCat, setSelectedTrashCat] = useState<any>(null);
    const [selectedTrashType, setSelectedTrashType] = useState<any>(null);
    const [selectedCar, setSelectedCar] = useState<any>(null);
    const [selectedCarrier, setSelectedCarrier] = useState<any>(null);
    const [selectedRecordFields, setSelectedRecordFields] = useState<any>(defaultRecordFields);

    const [isLoading, setIsLoading] = useState(false); 
    const [selectedRow, setSelectedRow] = useState<any>(null);
    const [rows, setRows] = useState([]);

    const trashTypes = useTrashTypes();
    const trashCats = useTrashCategories();
    const carriers = useCarriers();
    const polygons = usePolygons();
    const cars = useCars();

    useEffect(() => {
        setComment(selectedRow?.record['Комментарии'] || '')
    }, [selectedRow]);

    const computedParams = useMemo(() => {
        const params = {
            'time_start': selectedDates?.[0]?.format("YYYY.MM.DD"),
            'time_end': selectedDates?.[1]?.format("YYYY.MM.DD"),
            'trash_cat': selectedTrashCat?.key,
            'trash_type': selectedTrashType?.key,
            'auto_id': selectedCar?.key,
            'carrier': selectedCarrier?.key,
        }

        for (const key in params) {
            if (!params[key]) {
                delete params[key]
            }
        }
        return params;
    }, [selectedTrashCat, selectedTrashType, selectedCar, selectedCarrier, selectedDates]);

    const addRecordComment = () => {
        const params = new URLSearchParams();
        params.append('record_id', selectedRow.record.key);
        params.append('comment', comment);

        axios({
            url: endpoints.addComent,
            method: 'post',
            headers: {
                Authorization: `bearer ${localStorage.getItem('token')}`
            },
            params: params
        })
        .then(response => {
            setSelectedRow(null);
            setComment('');
            fetchTableData();
        })
        .finally(() => {
            setSelectedRow(null);
            setComment('');
        })
    }

    const fetchTableData = () => {
        setIsLoading(true);
        axios.get(endpoints.history, {
            params: computedParams,
            headers: {
                Authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            setIsLoading(false);
            setRows(response.data);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchTableData();
    }, []);

    const ds = useMemo(() => {
        return rows?.map((row: any, index) => (
            {
                key: row?.record_id,
                ID: index + 1,
                'Гос. номер': row.car_number,
                'Перевозчик': carriers.find(item => item.id === row.carrier )?.short_name || '-',
                'Брутто': row.brutto,
                'Тара': row.tara,
                'Нетто': row.cargo,
                'Категория': trashCats.find(item => item.id === row.trash_cat)?.cat_name || '-',
                'Вид груза': trashTypes.find(item => item.id === row.trash_type)?.name || '-',
                'Дата въезда': `${row.time_in?.slice(0,10) ?? '-'} / ${row.time_in?.slice(11,16) ?? '-'}` ,
                'Дата выезда': `${row.time_out?.slice(0,10) ?? '-'} / ${row.time_out?.slice(11,16) ?? '-'}`,
                'Комментарии': row.notes || '-',
            }
        )) || undefined
    }, [trashTypes, trashCats, carriers, polygons, rows]);

    // handlers
    const handleTrashCatChange = (value: any, option: any) => {
        setSelectedTrashCat(option);
    };

    const handleTrashTypeChange = (value: any, option: any) => {
        setSelectedTrashType(option);
    };

    const handleCarChange = (value: any, option: any) => {
        setSelectedCar(option);
    };

    const handleCarrierChange = (value: any, option: any) => {
        setSelectedCarrier(option);
    };

    const handleClearFilters = () => {
        setSelectedTrashCat(null);
        setSelectedTrashType(null);
        setSelectedCar(null);
        setSelectedCarrier(null);
        setSelectedDates([null, null]);
        fetchTableData();
    };

    const handleSendComment = () => {
        addRecordComment();
    }

    const handleCommentChange = (value: string) => {
        setComment(value)
    }

    const handleEditRecord = () => {
        const {
            selectedCarrier,
            selectedTrashCat,
            selectedTrashType,
            selectedPolygon,
            carNumber,
            comment,
        } = selectedRecordFields;
        
        console.log(selectedRow, 'selectedRow')
        const recordId = +selectedRow?.record?.key

        axios({
            method: 'post',
            url: endpoints.editRecord,
            headers: {
                Authorization: `bearer ${localStorage.getItem('token')}`
            },
            params: {
                record_id: recordId,
                carrier: Number(selectedCarrier),
                trash_cat_id: Number(selectedTrashCat),
                trash_type_id: Number(selectedTrashType),
                car_number: Number(carNumber),
                comment: comment ?? '',
                polygon: Number(selectedPolygon),
            },
        })
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.log(e)
        })
        setSelectedRow(null);
    }

    const openEditModal = (record: any) => {
        const rawRecord = rows?.find((row) => row.record_id == record.key);
        console.log(rawRecord, 'raw')
        setSelectedRecordFields({
            comment: rawRecord.notes,
            carNumber: rawRecord.car_number,
            selectedTrashCat: rawRecord.trash_cat,
            selectedTrashType: rawRecord.trash_type,
            selectedCarrier: rawRecord.carrier,
            selectedPolygon: rawRecord.id,
        });
        setSelectedRow({ key: 'edit', record })
    }

    return (
        <StatsWrapper>
            <StatCommentModal
                comment={comment}
                onCommentChange={handleCommentChange}
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
                            onClick={handleSendComment}
                            style={{ width: 280, height: 42 }}
                        >
                            Принять
                        </MainButton>
                    </div>
                }
            />
            <StatEditModal
                fields={selectedRecordFields}
                onFieldChange={setSelectedRecordFields}
                polygons={polygons}
                trashCats={trashCats}
                trashTypes={trashTypes}
                carriers={carriers}
                visible={selectedRow?.key === 'edit'}
                footer={
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <MainButton
                            onClick={() => {
                                setSelectedRecordFields(defaultRecordFields);
                                setSelectedRow(null)
                            }}
                            style={{ marginRight: 60, width: 280, height: 42 }}
                        >
                            Отменить
                        </MainButton>
                        <MainButton
                            onClick={handleEditRecord}
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
                        onSelect={handleTrashCatChange}
                        value={selectedTrashCat?.value}
                    >
                        {trashCats.map((item: any) => (
                          <Select.Option key={item.id} value={item.cat_name}>{item.cat_name}</Select.Option>
                        ))}
                    </Select>
                    <Select
                        className='stats-content-filter-item'
                        style={{ width: 200, height: 40, fontSize: 20, fontWeight: 300 }}
                        placeholder="Вид груза"
                        onSelect={handleTrashTypeChange}
                        value={selectedTrashType?.value}
                    >
                        {trashTypes.map((item: any) => (
                          <Select.Option key={item.id} value={item.name}>{item.name}</Select.Option>
                        ))}
                    </Select>

                    <Select
                        className='stats-content-filter-item'
                        style={{ width: 200, height: 40, fontSize: 20, fontWeight: 300 }}
                        placeholder="Гос. номер"
                        showSearch
                        onSelect={handleCarChange}
                        value={selectedCar?.value}
                    >
                        {cars.map((item: any) => (
                          <Select.Option key={item.id} value={item.car_number}>{item.car_number}</Select.Option>
                        ))}
                    </Select>

                    <Select
                        className='stats-content-filter-item'
                        style={{ width: 400, height: 40, fontSize: 20, fontWeight: 300 }}
                        placeholder="Перевозчик"
                        showSearch
                        onSelect={handleCarrierChange}
                        value={selectedCarrier?.value}
                    >
                        {carriers.map((item: any) => (
                          <Select.Option key={item.id} value={item.short_name}>{item.short_name}</Select.Option>
                        ))}
                    </Select>

                    <RangePicker 
                        style={{width: 400, height: 42, fontSize: 20, fontWeight: 300}}
                        format="YYYY.MM.DD"
                        allowEmpty={[true, true]}
                        value={selectedDates}
                        defaultPickerValue={selectedDates}
                        onCalendarChange={(dates) => { setSelectedDates(dates) }}
                    />

                    <MainButton
                        type="ghost"
                        style={{
                            height: '100%',
                            width: 50,
                            marginLeft: 38,
                            marginRight: 20
                        }}
                        onClick={fetchTableData}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16.6585 1.1364C16.2022 0.832964 15.6025 0.981856 15.3206 1.45631L7.57537 14.4902L2.57811 8.9648C2.19774 8.54422 1.56286 8.52892 1.16456 8.93196C0.757888 9.34348 0.744016 10.022 1.1325 10.4516L7.00779 16.9478C7.22249 17.1852 7.53115 17.3069 7.84484 17.2732C8.15832 17.2396 8.43628 17.0553 8.60062 16.7788L16.9898 2.66125C17.2956 2.14656 17.152 1.46447 16.6585 1.1364Z" fill="#5076D6" />
                        </svg>
                    </MainButton>
                    <MainButton
                        type="ghost"
                        style={{
                            height: '100%',
                            width: 50
                        }}
                        onClick={handleClearFilters}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="20" viewBox="0 0 19 20" fill="none">
                            <path d="M17.2635 19.5771C17.654 19.9677 18.2871 19.9677 18.6777 19.5771C19.0682 19.1866 19.0682 18.5535 18.6777 18.1629L10.8995 10.3848L18.6777 2.60658C19.0682 2.21606 19.0682 1.58289 18.6777 1.19237C18.2871 0.801844 17.654 0.801844 17.2635 1.19237L9.48528 8.97054L1.70711 1.19237C1.31658 0.801845 0.683418 0.801844 0.292893 1.19237C-0.0976313 1.58289 -0.0976309 2.21606 0.292893 2.60658L8.07107 10.3848L0.292894 18.1629C-0.0976305 18.5535 -0.0976313 19.1866 0.292893 19.5771C0.683418 19.9677 1.31658 19.9677 1.70711 19.5771L9.48528 11.799L17.2635 19.5771Z" fill="#5076D6" />
                        </svg>
                    </MainButton>
                </div>

                <div className="stats-content-table">
                    <Table
                        locale={{ emptyText: <b>Записей не найдено</b>}}
                        loading={isLoading}
                        stripped
                        dataSource={ds ?? undefined}
                        columns={columns}
                        pagination={false}
                        onRow={(record) => {
                            return {
                                onClick: () => {
                                    if (!record['Тара'] || !record['Нетто']) {
                                        openEditModal(record)
                                    } else {
                                        setSelectedRow({key: 'comment', record})
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