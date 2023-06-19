import React, { type FC } from 'react';

import { FormPicker } from 'containers/form-picker';

import { FormsPageLayout } from 'components/forms-page-layout';
import { MainLayout } from 'components/main-layout';
import { Stepper } from 'components/stepper';
import { Wrapper } from 'components/wrapper';

import { useAppSelector } from 'shared/hooks';

export const FormsPage: FC = () => {
  const step = useAppSelector((state) => state.form.step);

  return (
    <Wrapper>
      <MainLayout padding={'normal'}>
        <FormsPageLayout>
          <Stepper step={step} />
          <FormPicker />
        </FormsPageLayout>
      </MainLayout>
    </Wrapper>
  );
};
