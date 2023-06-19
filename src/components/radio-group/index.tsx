import React, { type FC, memo } from 'react';

import styles from './styles.module.scss';

export interface Radio {
  id: string;
  value: number;
  title: string;
}

interface RadioGroupProps {
  id: string;
  label: string;
  radios: Radio[];
  name: string;
  onChangeFn: (value: number) => void;
  error?: string;
  checked: number | null;
}

export const RadioGroup: FC<RadioGroupProps> = memo(({ radios, name, onChangeFn, label, id, error, checked }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeFn(Number(event.target.value));
  };

  return (
    <div className={styles.RadioGroup}>
      <label className={styles['RadioGroup-label']} htmlFor={id}>
        {label}
      </label>
      {radios.map((radio) => (
        <label className={styles['RadioGroup-radio-label']} key={radio.id} htmlFor={radio.id}>
          <input
            className={styles['RadioGroup-radio-input']}
            type="radio"
            name={name}
            id={radio.id}
            value={radio.value}
            onChange={handleChange}
            checked={radio.value === checked}
          />
          {radio.title}
        </label>
      ))}
      {!!error && <p className={styles['RadioGroup-error']}>{error}</p>}
    </div>
  );
});
