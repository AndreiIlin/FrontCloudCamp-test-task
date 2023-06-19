import React, { type FC, type HTMLAttributes, memo } from 'react';

import cn from 'classnames';

import { ReactComponent as AddIcon } from 'shared/assets/add-icon.svg';
import { ReactComponent as CloseModal } from 'shared/assets/close-modal.svg';
import { ReactComponent as DeleteIcon } from 'shared/assets/delete-icon.svg';

import styles from './styles.module.scss';

type Variant = 'contained' | 'outline' | 'add' | 'delete' | 'close-modal';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  title?: string;
  variant?: Variant;
  type?: 'submit';
}

export const Button: FC<ButtonProps> = memo(({ title, variant = 'contained', type, ...props }) => {
  const buttonClass = cn({
    [styles.Button]: true,
    [styles[`Button-variant-${variant}`]]: true,
  });

  const isAddVariant = variant === 'add';
  const isDeleteVariant = variant === 'delete';
  const isCloseModalVariant = variant === 'close-modal';

  return (
    <button className={buttonClass} type={type ?? 'button'} {...props}>
      {title && title}
      {isAddVariant && <AddIcon />}
      {isDeleteVariant && <DeleteIcon />}
      {isCloseModalVariant && <CloseModal />}
    </button>
  );
});
