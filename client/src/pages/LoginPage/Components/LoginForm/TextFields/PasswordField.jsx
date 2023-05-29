import React from 'react';
import { TextField } from '@mui/material';

const PasswordField = ({ formik }) => (
  <TextField
    fullWidth
    placeholder={'Введите Ваш пароль'}
    id={'password'}
    name={'password'}
    type={'password'}
    value={formik.values.password}
    onChange={formik.handleChange}
    error={formik.touched.password && Boolean(formik.errors.password)}
    helperText={formik.touched.password && formik.errors.password}
    label={'Пароль'}

  />
);

export {
  PasswordField,
};
