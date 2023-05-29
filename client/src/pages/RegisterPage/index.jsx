import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { MARKET_ROUTE } from '../../utils/consts';
import { RegisterForm } from './RegisterForm';
import 'react-toastify/dist/ReactToastify.css';
import styles from './index.module.scss';

const RegisterPage = observer(() => {
  const navigate = useNavigate();

  const { userStore } = useContext(Context);

  const handlerRegistered = async (registerData) => {
    try {
      await userStore.registered(registerData);

      navigate(MARKET_ROUTE);
    } catch (e) {
      return toast(e.error);
    }
  };

  return (
    <Box className={styles.container}>
      <RegisterForm handlerRegistered={handlerRegistered} />
      <ToastContainer />
    </Box>
  );
})

export {
  RegisterPage,
};