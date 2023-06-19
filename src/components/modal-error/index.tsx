import React, { type FC, memo } from 'react';

import { Button } from 'components/button';

import { ReactComponent as ErrorIcon } from 'shared/assets/send-error.svg';

import styles from './styles.module.scss';

interface ModalErrorProps {
  closeFn: () => void;
}

export const ModalError: FC<ModalErrorProps> = memo(({ closeFn }) => {
  return (
    <div className={styles.ModalSuccess}>
      <div className={styles['ModalError-header']}>
        <p className={styles['ModalError-title']}>Ошибка</p>
        <Button variant={'close-modal'} onClick={closeFn} />
      </div>
      <div className={styles['ModalError-icon']}>
        <ErrorIcon />
      </div>
      <div className={styles['ModalError-button']}>
        <Button title={'Закрыть'} onClick={closeFn} />
      </div>
    </div>
  );
});
