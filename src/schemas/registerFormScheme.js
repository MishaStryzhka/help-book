import * as Yup from 'yup';

export const validationRegisterFormScheme = Yup.object().shape({
  id: Yup.string().required('Required field'),
  name: Yup.string(),
  surname: Yup.string(),
  email: Yup.string()
    .required('Required field')
    .email('Enter a valid email address'),
  password: Yup.string()
    .required('Required field')
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be less than 32 characters')
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{8,16}$/,
      'Password must contain at least 8 Latin characters, one uppercase letter, one digit'
    ),
  phoneNumber: Yup.string()
    .required('Phone number is required')
    .matches(/^(?:\+420)?\d{9}$/, 'Enter a valid Czech phone number'),
});
