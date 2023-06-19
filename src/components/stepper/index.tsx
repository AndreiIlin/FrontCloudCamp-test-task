import React, { type FC, memo } from 'react';

import cn from 'classnames';

import { StepperPoint } from 'components/stepper-point';

import styles from './styles.module.scss';

interface StepperProps {
  step: number;
}

export const Stepper: FC<StepperProps> = memo(({ step }) => {
  const stepperIndicatorClass = cn({
    [styles['Stepper-indicator']]: true,
    [styles['Stepper-indicator-start']]: step === 1,
    [styles['Stepper-indicator-middle']]: step === 2,
    [styles['Stepper-indicator-end']]: step === 3,
  });

  return (
    <div className={styles.Stepper}>
      <div className={stepperIndicatorClass}></div>
      <StepperPoint step={1} isActive={step === 1} isFinished={step > 1} classname={styles.first} />
      <StepperPoint step={2} isActive={step === 2} isFinished={step > 2} classname={styles.second} />
      <StepperPoint step={3} isActive={step === 3} isFinished={step > 3} classname={styles.third} />
    </div>
  );
});
