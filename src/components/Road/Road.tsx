import {FC, useState} from 'react';
import {MainButton} from "../MainButton";
import {Car} from "../Car";
import classNames from 'classnames'
import styled from "styled-components";
import {SvgRoad} from "./index";
import {ModeType} from "../Content/Content";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleMode } from '../../redux/slices/modeSlice';
import { closeLeftGate, closeRightGate, openLeftGate, openRightGate } from '../../redux/slices/roadSlice';

interface RoadProps {
    onModeChange: (mode: ModeType) => void;
    carDirection?: 'toLeft' | 'toRight';
    carPosition?: 'center' | 'left' | 'right';
    openRight?: boolean;
    openLeft?: boolean;
    onOpen?: (val: string) => void;
    onClose?: () => void;
}

const RoadWrapper = styled.div`
  .road-body {
    position: relative;
    top: 10px;
    svg {
      height: fit-content;
    }
    .left-barrier {
      width: 1%;
      height: 100%;
      background: #797979;
      border-radius: 10px 10px 0 0;
      position: absolute;
      bottom: 20%;
      left: 34.5%;
      .left-barrier-relative {
        width: 100%;
        height: 100%;
        position: relative;
        .left-barrier-active-block {
          position: absolute;
          top: 5%;
          left: 20%;
          width: 300%;
          height: 20%;
          background: var(--white);
          border-radius: 10px;
          transition: 0.5s;
        }
        .opened-left {
          transform: rotate(-90deg);
          left: -99%;
          top: -25%;
        }
      }
    }
    .right-barrier {
      width: 1%;
      height: 100%;
      background: #797979;
      border-radius: 10px 10px 0 0;
      position: absolute;
      bottom: 20%;
      right: 33.5%;
      .right-barrier-relative {
        width: 100%;
        height: 100%;
        position: relative;
        .right-barrier-active-block {
          position: absolute;
          top: 5%;
          right: 20%;
          width: 300%;
          height: 20%;
          background: var(--white);
          border-radius: 10px;
          transition: 0.5s;
        }
        .opened-right {
          transform: rotate(90deg);
          right: -99%;
          top: -25%;
        }
      }
    }
    .car-center {
      position: absolute;
      bottom: 99%;
      left: 44%;
    }
    .car-left {
      position: absolute;
      bottom: 20%;
      left: 15%;
    }
    .car-right {
      position: absolute;
      bottom: 20%;
      right: 15%;
    }
  }
  .road-footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    padding: 0px 55px;
    .road-footer-left {
      width: 34%;
      display: flex;
      justify-content: space-between;
    }
    .road-footer-right {
      width: 58%;
      display: flex;
      justify-content: center;
    }
  }
`;

const Road: FC<RoadProps> = (
    {
        onModeChange,
        onOpen,
        openLeft,
        openRight,
        onClose,
        carPosition = 'right',
        carDirection= 'toLeft',
    }) => {
    const mode = useSelector((state: RootState) => state.mode.value)
    const gatesState = useSelector((state: RootState) => state.road.value)
    const dispatch = useDispatch()
    
    const [open, setOpen] = useState<'left' | 'right' | 'allClosed' | 'allOpened'>('allClosed')

    /* handler */
    const handleModeChange = (): void => {
        onModeChange(mode === 'auto' ? 'manual' : 'auto')
        dispatch(toggleMode(mode === 'auto' ? 'manual' : 'auto'))
    }

    const leftClasses = classNames( 'left-barrier-active-block', {
        'opened-left': gatesState.leftGate
    })
    const rightClasses = classNames('right-barrier-active-block',{
        'opened-right': gatesState.rightGate
    })

    const handleChangeRightGate = () => {
        if (mode === 'manual') {
            if (gatesState.rightGate) {
                dispatch(closeRightGate())
            }
            if (!gatesState.rightGate) {
                dispatch(openRightGate())
            }
        }
    }

    const handleChangeLeftGate = () => {
        if (mode === 'manual') {
            if (gatesState.leftGate) {
                dispatch(closeLeftGate())
            }
            if (!gatesState.leftGate) {
                dispatch(openLeftGate())
            }
        }
    }

    const buttonStyles = {
        padding: "8px 28px",
        background: "none",
        height: "unset",
        borderRadius: 14
    }

    return (
        <RoadWrapper className="road">
            <div className="road-body">
                <SvgRoad />
                <div className="left-barrier">
                    <div className="left-barrier-relative">
                        <div className={leftClasses} />
                    </div>
                </div>
                <div className="right-barrier">
                    <div className="right-barrier-relative">
                        <div className={rightClasses} />
                    </div>
                </div>


                {carPosition === 'center' && <Car carDirection={carDirection} className="car-center" />}
                {carPosition === 'left' && <Car carDirection={carDirection} className="car-left" />}
                {carPosition === 'right' && <Car carDirection={carDirection} className="car-right" />}
            </div>
            <div className="road-footer">
                <div className="road-footer-left">
                    <MainButton
                        onClick={handleModeChange}
                        style={buttonStyles}
                    >
                        { mode === 'auto' ? 'Ручное управление' : 'Автоматика' }
                    </MainButton>
                    <MainButton
                        onClick={handleChangeLeftGate}
                        style={buttonStyles}
                    >
                        { gatesState.leftGate? 'Закрыть' : 'Открыть' }
                    </MainButton>
                </div>
                <div className="road-footer-right">
                    <MainButton
                        onClick={handleChangeRightGate}
                        style={buttonStyles}
                    >
                        { gatesState.rightGate ? 'Закрыть' : 'Открыть' }
                    </MainButton>
                </div>
            </div>
        </RoadWrapper>
    );
};

export default Road;