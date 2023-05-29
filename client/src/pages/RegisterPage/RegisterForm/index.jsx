import React from 'react';
import { useFormik } from 'formik';
import { Button, Card, Link } from '@mui/material';
import { validationSchemaRegister } from './validationSchemaRegister';
import { RegisterEmail } from './TextFields/registerEmail';
import { RegisterPassword } from './TextFields/registerPassword';
import { LOGIN_ROUTE, MARKET_ROUTE } from '../../../utils/consts';
import { NameField } from './TextFields/NameField';
import { SurnameField } from './TextFields/SurnameField';
import styles from './index.module.scss';

const RegisterForm = ({ handlerRegistered }) => {
  const formik2 = useFormik({
    initialValues: {
      name: '',
      surname: '',
      registerEmail: '',
      registerPassword: '',
    },
    validationSchema: validationSchemaRegister,
    onSubmit: async ({ name, surname, registerEmail, registerPassword }) => {
      await handlerRegistered({
        name,
        surname,
        email: registerEmail,
        password: registerPassword,
      });

      formik2.resetForm();
    },
  });

  return (
    <form onSubmit={formik2.handleSubmit} className={styles.form} >
      <Card className={styles.card}>
        <NameField formik2={formik2} />
        <SurnameField formik2={formik2} />
        <RegisterEmail formik2={formik2} />
        <RegisterPassword formik2={formik2} />
        <Button type={'submit'} sx={{ width: '50%' }} variant={'contained'}>Создать</Button>
        <Link href={LOGIN_ROUTE} underline={'hover'} >Уже есть аккаунт?</Link>
        <Link href={MARKET_ROUTE} underline={'hover'} >Вернуться на главную</Link>
      </Card>
    </form>
  );
};

export {
  RegisterForm,
};
