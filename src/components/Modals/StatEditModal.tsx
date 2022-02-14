import {FC, useMemo, useRef} from 'react';
import { Modal as AntModal, ModalProps as AntModalProps } from 'antd';
import styled from "styled-components";
import {Select} from "../Select";
import {Input} from "../Input";

interface StatEditModal extends AntModalProps {
  trashCats: Array<any>;
  trashTypes: Array<any>;
  carriers: Array<any>;
  polygons: Array<any>;
  fields: Record<any, any>;
  onFieldChange: any;
};

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

const StatEditModal: FC<StatEditModal> = (
  {
    trashCats,
    trashTypes,
    carriers,
    polygons,
    fields,
    onFieldChange,
    ...props
  }) => {
    const wrapperRef = useRef<any>(null)
    const options = [
        { label: 'Поломка', value: '1' },
        { label: 'Длинномер', value: '2' },
    ]

    //default values 
    const defaultPolygon = useMemo(() => {
      return polygons.find((poly) => poly.id == fields.selectedPolygon)?.name
    }, [fields.selectedPolygon, polygons])

    const defaultCarrierValue = useMemo(() => {
      return carriers.find((cirrier) => cirrier.id == fields.selectedCarrier)?.short_name
    }, [fields.selectedCarrier, carriers])

    const defaultTrashCatValue = useMemo(() => {
      return trashCats.find((cat) => cat.id == fields.selectedTrashCat)?.cat_name
    }, [fields.selectedTrashCat, trashCats])

    const defaultTrashTypeValue = useMemo(() => {
      return trashTypes.find((type) => type.id == fields.selectedTrashType)?.name
    }, [fields.selectedTrashType, trashTypes])

    //handlers
    const handleFieldChange = (key: string, value: any) => {
      onFieldChange({...fields, [key]: value});
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
              <Input 
                disabled
                style={{ marginBottom: 6, fontSize: 20 }} 
                value={fields.carNumber}
              />
              <Select
                style={{ marginBottom: 6, fontSize: 20 }}
                placeholder="Контрагент"
                value={defaultCarrierValue}
                onChange={(value, {key}) => {handleFieldChange('selectedCarrier', key)}}
              >
                {carriers.map((item: any) => (
                  <Select.Option key={item.id} value={item.short_name}>{item.short_name}</Select.Option>
                ))}
              </Select>
              <Select 
                style={{ marginBottom: 6, fontSize: 20 }}
                placeholder="Площадка"
                value={defaultPolygon}
                onChange={(value, {key}) => {handleFieldChange('selectedPolygon', key)}}
              >
                {polygons.map((item: any) => (
                  <Select.Option key={item.id} value={item.name}>{item.name}</Select.Option>
                ))}
              </Select>
              <Select 
                style={{ marginBottom: 6, fontSize: 20 }}
                placeholder="Категория"
                value={defaultTrashCatValue}
                onChange={(value, option) => {handleFieldChange('selectedTrashCat', option.key)}}
              >
                {trashCats.map((item: any) => (
                  <Select.Option key={item.id} value={item.cat_name}>{item.cat_name}</Select.Option>
                ))}
              </Select>
              <Select 
                style={{ marginBottom: 6, fontSize: 20 }}
                placeholder="Вид груза"
                value={defaultTrashTypeValue}
                onChange={(value, option) => {handleFieldChange('selectedTrashType', option.key)}}
              >
                {trashTypes.map((item: any) => (
                  <Select.Option key={item.id} value={item.name}>{item.name}</Select.Option>
                ))}
              </Select>
              <Input
                style={{ marginBottom: 6, fontSize: 20 }}
                placeholder="Комментарий" 
                value={fields.comment}
                onChange={(e) => {handleFieldChange('comment', e.target.value)}} 
                  
              />
            </AntModal>
        </StatEditModalWrapper>
    );
};

export default StatEditModal;