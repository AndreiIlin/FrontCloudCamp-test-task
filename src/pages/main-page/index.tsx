import React, { type FC } from 'react';

import { MainPageForm } from 'containers/main-page-form';

import { Divider } from 'components/divider';
import { MainLayout } from 'components/main-layout';
import { MyInfo } from 'components/my-info';
import { Wrapper } from 'components/wrapper';

export const MainPage: FC = () => {
  return (
    <Wrapper>
      <MainLayout>
        <MyInfo />
        <Divider />
        <MainPageForm />
      </MainLayout>
    </Wrapper>
  );
};
