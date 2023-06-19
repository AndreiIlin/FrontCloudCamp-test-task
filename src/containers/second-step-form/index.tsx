import React, { type FC, useCallback } from 'react';

import { useFormik } from 'formik';

import { formActions } from 'app/store/slices';

import { validationSchema } from 'containers/second-step-form/validationSchema';

import { CheckboxGroup } from 'components/checkbox-group';
import { Form } from 'components/form';
import { MultipleInputs } from 'components/multiple-inputs';
import { RadioGroup } from 'components/radio-group';

import { checkboxes } from 'shared/checkboxes';
import { useActionCreators, useAppSelector } from 'shared/hooks';
import { radios } from 'shared/radios';

const PREV_STEP = 1;
const NEXT_STEP = 3;

export const SecondStepForm: FC = () => {
  const fields = useAppSelector((state) => state.form.formFields);
  const actions = useActionCreators(formActions);

  const formik = useFormik({
    initialValues: {
      advantages: fields.advantages,
      checkbox: fields.checkbox,
      radio: fields.radio,
    },
    validationSchema,
    onSubmit: (values) => {
      actions.setFormFields(values);
      actions.setStep(NEXT_STEP);
    },
  });

  const callbacks = {
    removeFn: useCallback(
      async (index: number) => {
        await formik.setFieldValue(
          'advantages',
          formik.values.advantages.filter((_, idx) => index !== idx),
          true,
        );
      },
      [formik],
    ),
    addFn: useCallback(async () => {
      await formik.setFieldValue('advantages', [...formik.values.advantages, ''], true);
    }, [formik]),
    backFn: useCallback(() => {
      actions.setStep(PREV_STEP);
    }, [actions]),
    checkboxHandle: useCallback(
      async (value: number) => {
        if (!formik.values.checkbox.includes(value)) {
          await formik.setFieldValue('checkbox', [...formik.values.checkbox, value], true);

          return;
        }
        await formik.setFieldValue(
          'checkbox',
          formik.values.checkbox.filter((val) => val !== value),
          true,
        );
      },
      [formik],
    ),
    radioHandle: useCallback(
      async (value: number) => {
        if (formik.values.radio === value) {
          return;
        }
        await formik.setFieldValue('radio', value, true);
      },
      [formik],
    ),
  };

  return (
    <Form onSubmit={formik.handleSubmit} nextStepId={'next'} nextStepTitle={'Далее'} backFn={callbacks.backFn}>
      <MultipleInputs
        id={'field-advantages'}
        label={'Advantages'}
        inputs={formik.values.advantages}
        removeFn={callbacks.removeFn}
        addFn={callbacks.addFn}
        onChangeFn={formik.handleChange}
        errors={formik.errors.advantages}
      />
      <CheckboxGroup
        id={'field-checkbox-group'}
        label={'Checkbox group'}
        name={'checkbox'}
        checkboxes={checkboxes}
        onChangeFn={callbacks.checkboxHandle}
        error={formik.errors.checkbox}
        checked={formik.values.checkbox}
      />
      <RadioGroup
        id={'field-radio-group'}
        label={'Radio group'}
        name={'radio'}
        radios={radios}
        onChangeFn={callbacks.radioHandle}
        error={formik.errors.radio}
        checked={formik.values.radio}
      />
    </Form>
  );
};
