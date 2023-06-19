import React, { type FC } from 'react';

import { FirstStepForm } from 'containers/first-step-form';
import { SecondStepForm } from 'containers/second-step-form';
import { ThirdStepForm } from 'containers/third-step-form';

import { useAppSelector } from 'shared/hooks';

export const FormPicker: FC = () => {
  const step = useAppSelector((state) => state.form.step);

  switch (step) {
    case 1:
      return <FirstStepForm />;
    case 2:
      return <SecondStepForm />;
    case 3:
      return <ThirdStepForm />;
    default:
      return null;
  }
};
