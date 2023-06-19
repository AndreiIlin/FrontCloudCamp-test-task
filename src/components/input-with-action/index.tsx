import React, { type FC, type InputHTMLAttributes, memo, useCallback } from 'react';

import { Button } from 'components/button';
import { Input } from 'components/input';

import styles from './styles.module.scss';

interface InputWithActionProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  variant?: 'large' | 'normal';
  tip?: boolean;
  name: string;
  isError: boolean;
  error: string | undefined;
  actionFn: (index: number) => void;
  buttonId: string;
  index: number;
}

export const InputWithAction: FC<InputWithActionProps> = memo(
  ({ id, label, tip, isError, error, name, variant, actionFn, buttonId, index, ...props }) => {
    const callbacks = {
      handleButtonAction: useCallback(() => {
        actionFn(index);
      }, [actionFn, index]),
    };

    return (
      <div className={styles.InputWithAction}>
        <Input id={id} name={name} isError={isError} error={error} variant={variant} label={label} tip={tip} {...props} />
        <Button id={buttonId} variant={'delete'} onClick={callbacks.handleButtonAction} />
      </div>
    );
  },
);
