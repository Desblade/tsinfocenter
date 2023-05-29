import * as yup from 'yup';

const validationSchemaRegister = yup.object().shape({
  name: yup
    .string()
    .required('Имя обязательно')
    .max(20, 'Имя не может быть таким длинным'),
  surname: yup
    .string()
    .required('Фамилия обязательна')
    .max(25, 'Фамилия не может быть такой длинной'),
  registerEmail: yup
    .string()
    .email('Введите корректную почту')
    .required('email обязателен')
    .max(30, 'email не может быть таким длинным'),
  registerPassword: yup
    .string()
    .required('пароль обязателен')
    .max(30, 'Пароль не может быть таким длинным')
    .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские символы'),
});

export {
  validationSchemaRegister,
};
