import React, { type FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';

import { formActions } from 'app/store/slices';

import { validationSchema } from 'containers/first-step-form/validationSchema';

import { Form } from 'components/form';
import { Input } from 'components/input';
import { Select } from 'components/select';

import { useActionCreators, useAppSelector } from 'shared/hooks';
import { selectOptions } from 'shared/select-options';

const NEXT_STEP = 2;

export const FirstStepForm: FC = () => {
  const navigate = useNavigate();
  const fields = useAppSelector((state) => state.form.formFields);
  const actions = useActionCreators(formActions);

  const formik = useFormik({
    initialValues: {
      nickname: fields.nickname,
      name: fields.name,
      sername: fields.sername,
      sex: fields.sex,
    },
    validationSchema,
    onSubmit: (values) => {
      actions.setFormFields({
        name: values.name.trim(),
        sername: values.sername.trim(),
        nickname: values.nickname.trim(),
        sex: values.sex,
      });

      actions.setStep(NEXT_STEP);
    },
  });

  const callbacks = {
    handleNavigate: useCallback(() => {
      navigate('/');
    }, [navigate]),
    handleSelect: useCallback(
      async (value: string) => {
        await formik.setFieldValue('sex', value, true);
      },
      [formik],
    ),
  };

  return (
    <Form nextStepId={'next'} nextStepTitle={'Далее'} onSubmit={formik.handleSubmit} backFn={callbacks.handleNavigate}>
      <Input
        label={'Nickname'}
        id={'field-nickname'}
        name={'nickname'}
        isError={!!formik.errors.nickname && !!formik.touched.nickname}
        error={formik.errors.nickname}
        placeholder={'Placeholder'}
        value={formik.values.nickname}
        onChange={formik.handleChange}
        tip
      />
      <Input
        label={'Name'}
        id={'field-name'}
        name={'name'}
        isError={!!formik.errors.name && !!formik.touched.name}
        error={formik.errors.name}
        placeholder={'Placeholder'}
        value={formik.values.name}
        onChange={formik.handleChange}
        tip
      />
      <Input
        label={'Sername'}
        id={'field-sername'}
        name={'sername'}
        isError={!!formik.errors.sername && !!formik.touched.sername}
        error={formik.errors.sername}
        placeholder={'Placeholder'}
        value={formik.values.sername}
        onChange={formik.handleChange}
        tip
      />
      <Select
        options={selectOptions}
        label={'Sex'}
        name={'sex'}
        id={'field-sex'}
        isError={!!formik.errors.sex && !!formik.touched.sex}
        error={formik.errors.sex}
        value={formik.values.sex}
        onChange={callbacks.handleSelect}
      />
    </Form>
  );
};
