import React, { type FC, memo } from 'react';

import cn from 'classnames';

import { Button } from 'components/button';

import styles from './styles.module.scss';

interface FormProps {
  onSubmit: () => void;
  children: React.ReactNode;
  backFn?: () => void;
  actionsMargin?: 'small' | 'normal' | 'large';
  nextStepTitle: string;
  nextStepId: 'start' | 'next' | 'send';
}

export const Form: FC<FormProps> = memo(({ onSubmit, children, backFn, actionsMargin = 'large', nextStepTitle, nextStepId }) => {
  const actionsClass = cn({
    [styles['Form-actions']]: true,
    [styles[`Form-actions-mt-${actionsMargin}`]]: true,
  });

  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <div className={styles['Form-controls']}>{children}</div>
      <div className={actionsClass}>
        {backFn && <Button title={'Назад'} variant={'outline'} onClick={backFn} id={'button-back'} />}
        <Button title={nextStepTitle} type={'submit'} id={`button-${nextStepId}`} />
      </div>
    </form>
  );
});
