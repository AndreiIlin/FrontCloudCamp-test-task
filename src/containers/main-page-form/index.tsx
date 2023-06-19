import React, { type FC, memo } from 'react';
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';

import { formActions } from 'app/store/slices';

import { validationSchema } from 'containers/main-page-form/validationSchema';

import { Form } from 'components/form';
import { Input } from 'components/input';

import { useActionCreators, useAppSelector } from 'shared/hooks';

export const MainPageForm: FC = memo(() => {
  const actions = useActionCreators(formActions);
  const fields = useAppSelector((state) => state.form.formFields);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phone: fields.phone,
      email: fields.email,
    },
    validationSchema,
    onSubmit: (values) => {
      actions.setFormFields({
        phone: values.phone.trim(),
        email: values.email.trim(),
      });
      navigate('/create');
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} actionsMargin={'normal'} nextStepTitle={'Начать'} nextStepId={'start'}>
      <InputMask mask="+7 (999) 999-99-99" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}>
        <Input
          name={'phone'}
          variant={'large'}
          label={'Номер телефона'}
          id={'field-tel'}
          placeholder={'+7 999 999-99-99'}
          isError={!!formik.errors.phone && !!formik.touched.phone}
          error={formik.errors.phone}
        />
      </InputMask>
      <Input
        name={'email'}
        value={formik.values.email}
        onChange={formik.handleChange}
        variant={'large'}
        label={'Email'}
        id={'field-email'}
        placeholder={'tim.jennings@example.com'}
        onBlur={formik.handleBlur}
        isError={!!formik.errors.email && !!formik.touched.email}
        error={formik.errors.email}
      />
    </Form>
  );
});
