import React, { FC, useState } from "react";
import { Modal } from "antd";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Nav } from "../components/Nav";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Stats } from "../components/Stats";
import { NotificationModal } from "../components/NotificationModal";
import { GeneralModal } from "../components/GeneralModal";
import { MainButton } from "../components/MainButton";

import styled from "styled-components";
import { BruttoModal, TaraModal } from "../components/Modals";

interface PanelLayoutProps {}

const PanelWrapper = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-width: 100vw;
  background: var(--mainBg);

  header {
    width: 100%;
    padding: 24px 31px 0 200px;

    span {
      margin-right: 30px;
    }
  }

  .footer {
    min-height: 400px;
    background: palegreen;
  }
`;

const PanelLayout: FC<PanelLayoutProps> = (props) => {
  const [logoutVisible, setLogoutVisible] = useState(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [bruttoOpen, setBruttoOpen] = useState(false)
  const [taraOpen, setTaraOpen] = useState(false)
  const [notificationVisible, setNotificationVisible] = useState<boolean>(false);
  let { path, url } = useRouteMatch();

  /* handlers */
  const showNotification = () => {
    setNotificationVisible(true);
  };

  const handleLogOut = (visible: boolean) => {
      setLogoutVisible(visible)
  }

  return (
    <PanelWrapper>
      <Header
          notifications={false}
          onBellClick={showNotification}
          onLogOut={() => handleLogOut(true)}
      />

      <Nav />

      <Switch>
        <Route exact path={path}>
          <Content  onBruttoChange={(data) => {
              data === 'right' && setBruttoOpen(true)
              data === 'left' && setTaraOpen(true)
          }}
          />
        </Route>
        <Route path={`${path}/stats`}>
          <Stats />
        </Route>
      </Switch>

      <NotificationModal
        visible={notificationVisible}
        onCancel={(e) => setNotificationVisible(false)}
      />

      <GeneralModal
        centered
        visible={logoutVisible}
        footer={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MainButton
                onClick={() => handleLogOut(false)}
                style={{ marginRight: 60, width: 150, height: 42 }}>
              Нет
            </MainButton>
            <MainButton
                onClick={(e) => { window.location.href = '/login' } }
                style={{ width: 150, height: 42 }}
            >
                Да
            </MainButton>
          </div>
        }
      >
        Уверены, что хотите выйти?
      </GeneralModal>

      <GeneralModal
        centered
        visible={false}
        footer={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MainButton style={{ marginRight: 60, width: 150, height: 42 }}>
              Нет
            </MainButton>
            <MainButton style={{ width: 150, height: 42 }}>Да</MainButton>
          </div>
        }
      >
        Уверены, что хотите закрыть запись?
      </GeneralModal>

      <BruttoModal
        visible={bruttoOpen}
        footer={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MainButton onClick={() => setBruttoOpen(false)} style={{ marginRight: 60, width: 280, height: 42 }}>
              Отменить
            </MainButton>
            <MainButton  onClick={() => setBruttoOpen(false)} style={{ width: 280, height: 42 }}>
                Принять
            </MainButton>
          </div>
        }
      />

      <TaraModal
        visible={taraOpen}
        footer={(<div style={{ display: 'flex' }}>
            <MainButton
                onClick={() => setTaraOpen(false)}
                style={{ marginRight: 60, width: 280, height: 42 }}>Отклонить</MainButton>
            <MainButton
                onClick={() => setTaraOpen(false)}
                style={{ width: 280, height: 42 }}>Принять</MainButton>
        </div>)}
      />
    </PanelWrapper>
  );
};

export default PanelLayout;
