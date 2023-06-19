import React, { type FC } from 'react';

import styles from './styles.module.scss';

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return <div className={styles.Wrapper}>{children}</div>;
};
