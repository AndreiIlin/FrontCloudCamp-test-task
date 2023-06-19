import React, { type FC, memo } from 'react';

import styles from './styles.module.scss';

export interface Checkbox {
  id: string;
  value: number;
  title: string;
}

interface CheckboxGroupProps {
  id: string;
  label: string;
  checkboxes: Checkbox[];
  name: string;
  onChangeFn: (value: number) => void;
  error?: string | string[];
  checked: number[];
}

export const CheckboxGroup: FC<CheckboxGroupProps> = memo(({ label, id, checkboxes, name, onChangeFn, error, checked }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFn(Number(event.target.value));
  };

  return (
    <div className={styles.CheckboxGroup}>
      <label className={styles['CheckboxGroup-label']} htmlFor={id}>
        {label}
      </label>
      {checkboxes.map((checkbox) => (
        <label className={styles['CheckboxGroup-checkbox-label']} key={checkbox.id} htmlFor={checkbox.id}>
          <input
            className={styles['CheckboxGroup-checkbox-input']}
            type="checkbox"
            name={name}
            id={checkbox.id}
            value={checkbox.value}
            onChange={handleChange}
            checked={checked.includes(checkbox.value)}
          />
          {checkbox.title}
        </label>
      ))}
      {!!error && <p className={styles['CheckboxGroup-error']}>{error}</p>}
    </div>
  );
});
