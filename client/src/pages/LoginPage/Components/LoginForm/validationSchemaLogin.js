import * as yup from 'yup';

const validationSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('email обязателен')
    .max(30, 'email не может быть таким длинным'),
  password: yup
    .string()
    .required('пароль обязателен')
    .max(30, 'Пароль не может быть таким длинным')
    .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские символы'),
});

export {
  validationSchemaLogin,
};
