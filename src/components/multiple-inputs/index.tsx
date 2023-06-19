import React, { type FC, memo } from 'react';

import { Button } from 'components/button';
import { InputWithAction } from 'components/input-with-action';

import styles from './styles.module.scss';

interface MultipleInputsProps {
  removeFn: (index: number) => void;
  addFn: () => void;
  onChangeFn: (e: React.ChangeEvent<any>) => void;
  inputs: string[];
  label: string;
  id: string;
  errors: string | string[] | undefined;
}

export const MultipleInputs: FC<MultipleInputsProps> = memo(({ inputs, addFn, onChangeFn, removeFn, label, id, errors }) => {
  return (
    <div className={styles.MultipleInputs}>
      <label className={styles['MultipleInputs-label']} htmlFor={id}>
        {label}
      </label>
      {inputs.map((input, index) => (
        <InputWithAction
          key={index}
          index={index}
          id={`${id}-${index + 1}`}
          name={`advantages[${index}]`}
          isError={errors ? !!errors[index] : false}
          error={errors ? errors[index] : undefined}
          actionFn={removeFn}
          buttonId={`button-remove-${index + 1}`}
          placeholder={'Placeholder'}
          value={inputs[index]}
          onChange={onChangeFn}
        />
      ))}
      <div>
        <Button variant={'add'} id={'button add'} onClick={addFn} />
      </div>
    </div>
  );
});
