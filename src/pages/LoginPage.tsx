import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import 'antd/dist/antd.css';
import $api from '../api';

/* assets */
import backgroundImage from '../assets/images/background.png';
import logo from '../assets/images/logo.png';

/* components */
import Button from "../components/Button";
import { Select } from "../components/Select";
import {InputPassword} from "../components/InputPassword";

interface LoginPageProps {}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url(${backgroundImage});
`
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 420px;
  
  input {
    width: 100%;
    margin-top: 25px;
  }
  
  button {
    margin-top: 50px
  }
`

const LoginPage: FC<LoginPageProps> = ({}) => {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    $api.get('http://80.87.199.109:8080/get_users')
      .then((serverResponse) => {
        setUsers(serverResponse)
        console.log(serverResponse)
      })
  }, []);

  console.log('login page rendered');
    
    return (
        <PageWrapper>
            <img src={logo} alt="logo.png"/>
            <FormWrapper>
                <Select style={{ fontSize: 22 }} placeholder="Выберите пользователя">
                    <Select.Option value="jack">Антон</Select.Option>
                    <Select.Option value="lucy">Степан</Select.Option>
                </Select>
                <InputPassword
                    style={{ marginTop: 25 }}
                    placeholder="Пароль"
                />

                <Link to="/panel">
                    <Button>
                        Войти
                    </Button>
                </Link>
            </FormWrapper>
        </PageWrapper>
    )
}

export default LoginPage;