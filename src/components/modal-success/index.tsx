import React, { type FC, memo } from 'react';

import { Button } from 'components/button';

import { ReactComponent as SuccessIcon } from 'shared/assets/send-success.svg';

import styles from './styles.module.scss';

interface ModalSuccessProps {
  actionFn: () => void;
}

export const ModalSuccess: FC<ModalSuccessProps> = memo(({ actionFn }) => {
  return (
    <div className={styles.ModalSuccess}>
      <p className={styles['ModalSuccess-title']}>Форма успешно отправлена</p>
      <div className={styles['ModalSuccess-icon']}>
        <SuccessIcon />
      </div>
      <div className={styles['ModalSuccess-button']}>
        <Button title={'На главную'} onClick={actionFn} />
      </div>
    </div>
  );
});
