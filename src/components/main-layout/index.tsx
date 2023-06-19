import React, { type FC } from 'react';

import cn from 'classnames';

import styles from './styles.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
  padding?: 'small' | 'normal';
}

export const MainLayout: FC<MainLayoutProps> = ({ children, padding = 'small' }) => {
  const layoutClass = cn({
    [styles.MainLayout]: true,
    [styles[`MainLayout-padding-${padding}`]]: true,
  });

  return <div className={layoutClass}>{children}</div>;
};
