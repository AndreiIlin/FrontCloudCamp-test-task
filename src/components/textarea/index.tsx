import React, { type FC, memo, type TextareaHTMLAttributes } from 'react';

import styles from './styles.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  id: string;
  tip?: boolean;
  name: string;
  isError: boolean;
  error: string | undefined;
  value: string;
}

export const Textarea: FC<TextareaProps> = memo(({ isError, error, tip, name, id, label, value, ...props }) => {
  return (
    <div className={styles.Textarea}>
      <label className={styles['Textarea-label']} htmlFor={id}>
        {label}
      </label>
      <textarea className={styles['Textarea-field']} name={name} id={id} value={value} {...props} />
      <p className={styles['Textarea-count']}>{value.length}</p>
      {tip && <p className={styles['Textarea-tip']}>Tip</p>}
      {isError && <p className={styles['Textarea-error']}>{error}</p>}
    </div>
  );
});
