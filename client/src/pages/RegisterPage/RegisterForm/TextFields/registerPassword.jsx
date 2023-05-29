import React from 'react';
import { TextField } from '@mui/material';

const RegisterPassword = ({ formik2 }) => (
  <TextField
    fullWidth
    placeholder={'Введите Ваш пароль'}
    id={'registerPassword'}
    name={'registerPassword'}
    type={'password'}
    value={formik2.values.registerPassword}
    onChange={formik2.handleChange}
    error={formik2.touched.registerPassword && Boolean(formik2.errors.registerPassword)}
    helperText={formik2.touched.registerPassword && formik2.errors.registerPassword}
    label={'Пароль'}

  />
);

export {
  RegisterPassword,
};
