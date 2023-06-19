import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  advantages: Yup.array().of(Yup.string()),
  checkbox: Yup.array().of(Yup.number()),
  radio: Yup.number().required('Обязательное поле'),
});
