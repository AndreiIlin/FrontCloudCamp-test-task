import React, { type FC, memo } from 'react';

import cn from 'classnames';

import { ReactComponent as ActiveStep } from 'shared/assets/active-step.svg';
import { ReactComponent as CompletedStep } from 'shared/assets/completed-step.svg';
import { ReactComponent as NextStep } from 'shared/assets/next-step.svg';

import styles from './styles.module.scss';

interface StepperPointProps {
  step: number;
  isActive: boolean;
  isFinished: boolean;
  classname: string;
}

export const StepperPoint: FC<StepperPointProps> = memo(({ isActive, isFinished, step, classname }) => {
  const stepperPointTitleCLass = cn({
    [styles['StepperPoint-title']]: true,
    [styles['StepperPoint-title-active']]: isActive,
    [styles['StepperPoint-title-finished']]: isFinished,
  });

  return (
    <div className={`${styles.StepperPoint} ${classname}`}>
      {isActive && <ActiveStep />}
      {isFinished && <CompletedStep />}
      {!isActive && !isFinished && <NextStep />}
      <p className={stepperPointTitleCLass}>{step}</p>
    </div>
  );
});
