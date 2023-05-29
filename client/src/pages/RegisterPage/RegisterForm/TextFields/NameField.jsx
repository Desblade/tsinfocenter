import React from 'react';
import { TextField } from '@mui/material';

const NameField = ({ formik2 }) => (
  <TextField
    fullWidth
    placeholder={'Введите Ваше имя'}
    id={'name'}
    name={'name'}
    value={formik2.values.name}
    onChange={formik2.handleChange}
    error={formik2.touched.name && Boolean(formik2.errors.name)}
    helperText={formik2.touched.name && formik2.errors.name}
    label={'Имя'}
  />
);

export {
  NameField,
};
