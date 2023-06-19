import React, { type FC, useCallback } from 'react';

import { useFormik } from 'formik';

import { formActions, modalsActions, sendFormThunk } from 'app/store/slices';

import { validationSchema } from 'containers/third-step-form/validationSchema';

import { Form } from 'components/form';
import { Textarea } from 'components/textarea';

import { useActionCreators, useAppDispatch, useAppSelector } from 'shared/hooks';

const PREV_STEP = 2;
const FIRST_STEP = 1;
export const ThirdStepForm: FC = () => {
  const fields = useAppSelector((state) => state.form.formFields);
  const actionsForm = useActionCreators(formActions);
  const actionsModal = useActionCreators(modalsActions);
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      about: fields.about,
    },
    validationSchema,
    onSubmit: async (values) => {
      actionsForm.setFormFields(values);
      actionsModal.openModal();
      await dispatch(sendFormThunk());
      actionsForm.setStep(FIRST_STEP);
    },
  });

  const callbacks = {
    backFn: useCallback(() => {
      actionsForm.setStep(PREV_STEP);
    }, [actionsForm]),
  };

  return (
    <Form nextStepId={'send'} onSubmit={formik.handleSubmit} nextStepTitle={'Отправить'} backFn={callbacks.backFn}>
      <Textarea
        id={'field-about'}
        isError={!!formik.errors.about && !!formik.touched.about}
        error={formik.errors.about}
        name={'about'}
        label={'About'}
        tip
        placeholder={'Placeholder'}
        rows={6}
        value={formik.values.about}
        onChange={formik.handleChange}
      />
    </Form>
  );
};
