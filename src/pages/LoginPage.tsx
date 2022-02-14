import { FC, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import 'antd/dist/antd.css';
import { useFormik } from 'formik'
import * as Yup from 'yup';

/* assets */
import backgroundImage from '../assets/images/background.png';
import logo from '../assets/images/logo.png';

/* components */
import Button from "../components/Button";
import { Select } from "../components/Select";
import {InputPassword} from "../components/InputPassword";
import axios from 'axios';
import endpoints from '../api/constants';

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

const validationSchema = Yup.object().shape({
  login: Yup.string()
    .required('Поле обязательно для заполнения!'),
  password: Yup.string()
    .required('Поле обязательно для заполнения!'),
});

const LoginPage: FC<LoginPageProps> = ({}) => {
  const history = useHistory();
  const [users, setUsers] = useState<any>([]);

  //formik actions
  const {
    handleChange, values, initialValues,
    handleSubmit, setFieldValue, errors,
    setFieldError, touched, resetForm
  } = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => {
      //create params
      const params = new URLSearchParams();
      params.append('username', values.login);
      params.append('password', values.password);

      axios.post(endpoints.login, params)
      .then((response) => {
        const {data: { access_token }} = response;
        localStorage.setItem('token', access_token);
        history.push('/panel');
      })
      .catch((error) => {
        setFieldError('password', 'Неверный пароль');
      })
    },
  });

  useEffect(() => {
    axios.get(endpoints.users)
      .then(({status, data}) => {
        if(status == 200) {
          setUsers(data)
        } else {
          console.error('user list error'); 
        }
      })
  }, []);
    
    return (
      <PageWrapper>
          <img src={logo} alt="logo.png"/>
          <FormWrapper>
            <form onSubmit={handleSubmit}>
              <Select
                id="login"
                style={{ fontSize: 22 }}
                placeholder="Выберите пользователя"
                onSelect={(value) => { setFieldValue('login', value, true) }}
              >
                {users.map(({id, username}) => (
                  <Select.Option key={id} value={username}>{username}</Select.Option>
                ))}
              </Select>
              <InputPassword
                id="password"
                name="password"
                style={{ marginTop: 25 }}
                placeholder="Пароль"
                onChange={handleChange}
                value={values.password}
                errors={touched.password && errors?.password}
              />
              <Button>
                Войти
              </Button>
            </form>
          </FormWrapper>
      </PageWrapper>
    )
}

export default LoginPage;