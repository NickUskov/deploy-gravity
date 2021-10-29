import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { IconHome, IconStat } from "../Icons";

interface NavProps { }

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 54px;
  top: 50%;
  transform: translate(0, -50%);
  
  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 81px;
    height: 81px;
    border: 2px solid transparent;
    border-radius: 22px;
    transition: all .5s;
    
    &:first-of-type {
      margin-bottom: 40px;
    }
  }

  .nav-link-active {
    border: 2px solid #5076D6;
    border-radius: 22px,
  }
`

const Nav: FC<NavProps> = () => {
    return (
        <NavWrapper>
            <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                exact
                to="/panel"
                style={{ marginBottom: 40 }}
            >
                <IconHome />
            </NavLink>
            <NavLink
                className="nav-link"
                activeClassName="nav-link-active"
                to="/panel/stats"
            >
                <IconStat />
            </NavLink>
        </NavWrapper>
    );
};

export default Nav;