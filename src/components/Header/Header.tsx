import React, { FC, useEffect, useState } from 'react';
import { IconLock, IconBell, IconLogOut } from "../Icons";
import styled from "styled-components";
import moment from "moment";
import "moment/dist/locale/ru.js";

interface HeaderProps {
    notifications?: boolean;
    onBellClick?: () => void;
    onLogOut?: () => void;
}

/* styled components */
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  color: var(--white);
  font-size: 28px;
  
  .header-info {
    display: flex;
  }
  .icon-bell-wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`

const Header: FC<HeaderProps> = ({ onBellClick, onLogOut, notifications }) => {
    const [time, setTime] = useState<string>(`${new Date().getHours()}:${new Date().getMinutes()}`)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(`${new Date().getHours()}:${new Date().getMinutes()}`)
        }, 1000)

        return () => clearInterval(intervalId);
    })

    /* handlers */
    const handleLogOut = (): void => {
        onLogOut?.()
    }

    return (
        <StyledHeader>
            <span className="header-info">
                <span>{time}</span>
                <span>{moment().locale('ru').format('D MMMM')}</span>
                <span className="icon-bell-wrapper" onClick={(e) => { onBellClick?.() }}>
                    <IconBell filled={notifications} />
                </span>

            </span>
            <span style={{ cursor: 'pointer', margin: 0 }} onClick={handleLogOut}>
                <IconLogOut />
            </span>
        </StyledHeader>
    );
};

export default Header;