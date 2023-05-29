import React from 'react';
import { TextField } from '@mui/material';

const SurnameField = ({ formik2 }) => (
  <TextField
    fullWidth
    placeholder={'Введите Вашу фамилию'}
    id={'surname'}
    name={'surname'}
    value={formik2.values.surname}
    onChange={formik2.handleChange}
    error={formik2.touched.surname && Boolean(formik2.errors.surname)}
    helperText={formik2.touched.surname && formik2.errors.surname}
    label={'Фамилия'}
  />
);

export {
  SurnameField,
};
