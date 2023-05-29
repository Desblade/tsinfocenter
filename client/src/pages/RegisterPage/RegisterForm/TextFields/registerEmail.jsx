import React from 'react';
import { TextField } from '@mui/material';

const RegisterEmail = ({ formik2 }) => (
  <TextField
    fullWidth
    placeholder={'Введите Вашу почту'}
    id={'registerEmail'}
    name={'registerEmail'}
    value={formik2.values.registerEmail}
    onChange={formik2.handleChange}
    error={formik2.touched.registerEmail && Boolean(formik2.errors.registerEmail)}
    helperText={formik2.touched.registerEmail && formik2.errors.registerEmail}
    label={'email'}
  />
);

export {
  RegisterEmail,
};
