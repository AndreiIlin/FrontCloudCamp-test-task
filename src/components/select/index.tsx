import React, { type FC, memo, type MouseEventHandler, useEffect, useRef, useState } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

export interface SelectOption {
  id: string;
  name: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  label: string;
  name: string;
  id: string;
  isError: boolean;
  error: string | undefined;
  value: string;
  onChange: (value: string) => void;
}

export const Select: FC<SelectProps> = memo(({ isError, error, id, label, options, value, onChange }) => {
  const [isOpened, setIsOpened] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpened((prev) => !prev);
  };

  const handleClick =
    (clickedValue: string): MouseEventHandler<HTMLLIElement> =>
    () => {
      onChange(clickedValue);
      setIsOpened(false);
    };

  const selectFieldOptionsClass = cn({
    [styles['Select-field-options']]: true,
    [styles['Select-field-options-opened']]: isOpened,
  });

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const { target } = event;
      if (target instanceof Node && !selectRef.current?.contains(target)) {
        setIsOpened(false);
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className={styles.Select} ref={selectRef}>
      <label className={styles['Select-label']} htmlFor={id}>
        {label}
      </label>
      <div className={styles['Select-field']} placeholder={'Не выбрано'} id={id} onClick={handleToggle}>
        {value === '' ? 'Не выбрано' : value}
      </div>
      <ul className={selectFieldOptionsClass}>
        {options.map((option) => (
          <li
            key={option.name}
            className={styles['Select-field-option']}
            id={option.id}
            value={option.value}
            onClick={handleClick(option.value)}>
            {option.name}
          </li>
        ))}
      </ul>
      <p className={styles['Select-tip']}>Tip</p>
      {isError && <p className={styles['Select-error']}>{error}</p>}
    </div>
  );
});
