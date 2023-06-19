import React, { type FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { formActions, modalsActions } from 'app/store/slices';

import { ModalError } from 'components/modal-error';
import { ModalLayout } from 'components/modal-layout';
import { ModalSuccess } from 'components/modal-success';

import { useActionCreators, useAppSelector } from 'shared/hooks';

export const Modal: FC = () => {
  const actionsForm = useActionCreators(formActions);
  const actionsModal = useActionCreators(modalsActions);
  const sendStatus = useAppSelector((state) => state.form.sendStatus);
  const navigate = useNavigate();

  const isLoading = sendStatus === 'loading';
  const isSuccess = sendStatus === 'success';
  const isError = sendStatus === 'error';

  const callbacks = {
    successFn: useCallback(() => {
      actionsModal.closeModal();
      actionsForm.setSendStatus('idle');
      navigate('/');
    }, [navigate, actionsForm, actionsModal]),
    errorFn: useCallback(() => {
      actionsModal.closeModal();
      actionsForm.setSendStatus('idle');
    }, [actionsForm, actionsModal]),
  };

  return (
    <ModalLayout>
      {isLoading && <p>Handle form data...</p>}
      {isError && <ModalError closeFn={callbacks.errorFn} />}
      {isSuccess && <ModalSuccess actionFn={callbacks.successFn} />}
    </ModalLayout>
  );
};
