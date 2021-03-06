import { FC, useState } from "react";
import { Header } from "../components/Header";
import { Content } from "../components/Content";
import { Nav } from "../components/Nav";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import { Stats } from "../components/Stats";
import { NotificationModal } from "../components/NotificationModal";
import { GeneralModal } from "../components/GeneralModal";
import { MainButton } from "../components/MainButton";

import styled from "styled-components";
import { BruttoModal, TaraModal } from "../components/Modals";
import axios from "axios";
import endpoints from "../api/constants";
import { SSEProvider } from "react-hooks-sse";

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

const checkIfLoggedIn = (history: any) => {
  const token = localStorage.getItem('token');
  if (!token) {
    history.push('login')
  }
}

const PanelLayout: FC<PanelLayoutProps> = (props) => {
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const [bruttoOpen, setBruttoOpen] = useState(false)
  const [taraOpen, setTaraOpen] = useState(false)
  const [notificationVisible, setNotificationVisible] = useState<boolean>(false);
  let { path } = useRouteMatch();
  const history = useHistory();

  checkIfLoggedIn(history)


  /* handlers */
  const showNotification = () => {
    setNotificationVisible(true);
  };

  const handleOpenLogoutModal = () => {
    setIsLogoutModalVisible(true)
  }

  const handleLogoutAction = (confirm: boolean) => {
    if (!confirm) {
      setIsLogoutModalVisible(false);
      return;
    }

    axios.get(endpoints.logout, {
      headers: {
        Authorization: 'bearer ' + localStorage.getItem('token')
      }
    })
    .finally(() => {
      localStorage.clear();
      history.push('/login')
    });
  }

  return (
    <PanelWrapper>
      <Header
        notifications={false}
        onBellClick={showNotification}
        onLogOut={handleOpenLogoutModal}
      />

      <Nav />

      <Switch>
        <Route exact path={path}>
          <SSEProvider endpoint={endpoints.events}>
            <Content 
              onBruttoChange={(data) => {
                data === 'right' && setBruttoOpen(true)
                data === 'left' && setTaraOpen(true)
              }}
            />
          </SSEProvider>
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
        visible={isLogoutModalVisible}
        footer={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MainButton
              onClick={() => handleLogoutAction(false)}
              style={{ marginRight: 60, width: 150, height: 42 }}
            >
              ??????
            </MainButton>
            <MainButton
              onClick={() => handleLogoutAction(true)}
              style={{ width: 150, height: 42 }}
            >
              ????
            </MainButton>
          </div>
        }
      >
        ??????????????, ?????? ???????????? ???????????
      </GeneralModal>

      <GeneralModal
        centered
        visible={false}
        footer={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MainButton style={{ marginRight: 60, width: 150, height: 42 }}>
              ??????
            </MainButton>
            <MainButton style={{ width: 150, height: 42 }}>????</MainButton>
          </div>
        }
      >
        ??????????????, ?????? ???????????? ?????????????? ?????????????
      </GeneralModal>

      <BruttoModal
        visible={bruttoOpen}
        footer={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <MainButton onClick={() => setBruttoOpen(false)} style={{ marginRight: 60, width: 280, height: 42 }}>
              ????????????????
            </MainButton>
            <MainButton  onClick={() => setBruttoOpen(false)} style={{ width: 280, height: 42 }}>
                ??????????????
            </MainButton>
          </div>
        }
      />

      <TaraModal
        visible={taraOpen}
        footer={(<div style={{ display: 'flex' }}>
            <MainButton
                onClick={() => setTaraOpen(false)}
                style={{ marginRight: 60, width: 280, height: 42 }}>??????????????????</MainButton>
            <MainButton
                onClick={() => setTaraOpen(false)}
                style={{ width: 280, height: 42 }}>??????????????</MainButton>
        </div>)}
      />
    </PanelWrapper>
  );
};

export default PanelLayout;
