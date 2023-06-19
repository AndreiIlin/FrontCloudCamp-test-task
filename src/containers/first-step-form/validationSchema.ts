import * as Yup from 'yup';

const WORDS_AND_DIGITS_REG_EXP = /^[A-Za-zА-Яа-яЁё0-9]*$/gm;
const WORDS_REG_EXP = /^[A-Za-zА-Яа-яЁё]*$/gm;
export const validationSchema = Yup.object().shape({
  nickname: Yup.string()
    .max(30, 'Максимальная длина 30 символов')
    .matches(WORDS_AND_DIGITS_REG_EXP, 'Возможны только буквы и цифры')
    .required('Обязательное поле'),
  name: Yup.string().max(50, 'Максимальная длина 50 букв').matches(WORDS_REG_EXP, 'Возможны только буквы').required('Обязательное поле'),
  sername: Yup.string().max(50, 'Максимальная длина 50 букв').matches(WORDS_REG_EXP, 'Возможны только буквы').required('Обязательное поле'),
  sex: Yup.string().required('Обязательное поле'),
});
