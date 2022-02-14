import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import 'antd/dist/antd.css';

/* assets */
import styled from "styled-components";

/* components */
import LoginPage from "./pages/LoginPage"
import PanelLayout from "./pages/PanelLayout";
import { useEffect } from "react";

const AppWrapper = styled.div`
  display: block;
  min-width: 100vw;
  min-height: 100vh;
`
const CssVariables = styled.div`
  /* app */
  --white: #F2F2F2;
  --mainBg: #171717;
  --secondaryBg: #2F2F2F;
  --accentColor: #5076D6;
  --errorColor: #E55D5D;
  
  
  /* input */
  --inputColor: rgba(242, 242, 242, 0.6);
  
  /* modal */
  --modalBg: #282828;
  --modalBorderRadius: 15px;
  
  /* button */
  --buttonAccentColor: #89A9F8;
  --buttonBg: var(--modalBg);
  --buttonBorderRadius: 14px;
  
  /* checkbox */
  --checkboxBorder: #7E7E7E;
  --checkboxBg: var(--modalBg);

  --mainTextColor: #F2F2F2;
  --headerPadding: 8px 24px;
  --buttonBorderColor: #F2F2F2;
  --buttonHoverBGColor: #393939;
  --buttonBorderRadius: 10px;
`

function App() {
  return (
    <CssVariables>
      <AppWrapper>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/panel">
            <PanelLayout />
          </Route>
          <Redirect from='/' to='/login' />
        </Switch>
      </AppWrapper>
    </CssVariables>
  )
}

export default App
