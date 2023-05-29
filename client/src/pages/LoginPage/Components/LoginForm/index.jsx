import React from 'react';
import { useFormik } from 'formik';
import { Button, Card, Link } from '@mui/material';
import { validationSchemaLogin } from './validationSchemaLogin';
import { EmailField } from './TextFields/EmailField';
import { PasswordField } from './TextFields/PasswordField';
import { REGISTER_ROUTE, MARKET_ROUTE } from '../../../../utils/consts';
import styles from './index.module.scss';

const LoginForm = ({ handlerLogin }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchemaLogin,
    onSubmit: async ({ email, password }) => {
      await handlerLogin({
        email,
        password,
      });

      formik.resetForm();
  },
  });

  return (
    <form style={{ width: '50%' }} onSubmit={formik.handleSubmit}>
      <Card className={styles.card}>
        <EmailField formik={formik} />
        <PasswordField formik={formik} />
        <Button sx={{ width: '50%' }} variant={'contained'} type={'submit'}>Войти</Button>
        <Link href={REGISTER_ROUTE} underline={'hover'} >Еще не прошли регистрацию?</Link>
        <Link href={MARKET_ROUTE} underline={'hover'} >Вернуться на главную</Link>
      </Card>
    </form>
  );
}

export {
  LoginForm,
};
