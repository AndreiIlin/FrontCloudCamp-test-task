import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  about: Yup.string().max(200, 'Максимально допустимое количество символов - 200'),
});
