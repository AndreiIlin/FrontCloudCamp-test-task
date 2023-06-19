import * as Yup from 'yup';

const DIGITS_REG_EXP = /[0-9]/;
const EMAIL_REG_EXP =
  /^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/; // eslint-disable-line max-len

export const validationSchema = Yup.object().shape({
  email: Yup.string().matches(EMAIL_REG_EXP, 'Не валидный email'),
  phone: Yup.string()
    .matches(DIGITS_REG_EXP, 'Номер должен состоять только из цифр')
    .test('len', 'Номер должен состоять из 10 цифр', (val) => {
      const onlyDigitsValLength = val?.replace(/\D/g, '').length;

      return onlyDigitsValLength === 11;
    }),
});
