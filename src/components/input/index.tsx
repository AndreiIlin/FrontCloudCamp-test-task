import React, { type FC, type InputHTMLAttributes, memo } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id: string;
  variant?: 'large' | 'normal';
  tip?: boolean;
  name: string;
  isError: boolean;
  error: string | undefined;
}

export const Input: FC<InputProps> = memo(({ label, id, variant = 'normal', tip = false, name, isError, error, ...props }) => {
  const filedClass = cn({
    [styles['Input-field']]: true,
    [styles[`Input-field-${variant}`]]: true,
  });

  return (
    <div className={styles.Input}>
      {label && (
        <label className={styles['Input-label']} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={filedClass} type="text" id={id} name={name} {...props} />
      {tip && <p className={styles['Input-tip']}>Tip</p>}
      {isError && <p className={styles['Input-error']}>{error}</p>}
    </div>
  );
});
