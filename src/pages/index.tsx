import React, { type FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Modal } from 'containers/modal';
import { FormsPage } from 'pages/forms-page';
import { MainPage } from 'pages/main-page';

import { useAppSelector } from 'shared/hooks';

export const Routing: FC = () => {
  const isOpenedModal = useAppSelector((state) => state.modals.isOpened);

  return (
    <>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/create'} element={<FormsPage />} />
      </Routes>
      {isOpenedModal && <Modal />}
    </>
  );
};
