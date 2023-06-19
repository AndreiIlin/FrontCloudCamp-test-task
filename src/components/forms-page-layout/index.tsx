import React, { type FC } from 'react';

import styles from './styles.module.scss';

interface FormsPageLayoutProps {
  children: React.ReactNode;
}

export const FormsPageLayout: FC<FormsPageLayoutProps> = ({ children }) => {
  return <div className={styles.FormPageLayout}>{children}</div>;
};
