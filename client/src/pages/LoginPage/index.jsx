import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { toast, ToastContainer } from 'react-toastify';
import { LoginForm } from './Components/LoginForm';
import { Context } from '../../index';
import { MARKET_ROUTE } from '../../utils/consts';
import styles from './index.module.scss'
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = observer(() => {
  const navigate = useNavigate();

  const { userStore } = useContext(Context);

  const handlerLogin = async (loginData) => {
    try {
      await userStore.login(loginData);

      navigate(MARKET_ROUTE);
    } catch (e) {
      return toast(e.error);
    }
  };

  return (
    <Box className={styles.container}>
      <LoginForm handlerLogin={handlerLogin} />
      <ToastContainer />
    </Box>
  );
})

export {
  LoginPage,
};
