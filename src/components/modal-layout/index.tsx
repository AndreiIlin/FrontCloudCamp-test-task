import React, { type FC, memo, type ReactNode, useEffect, useRef } from 'react';

import styles from './styles.module.scss';

interface ModalLayoutProps {
  children: ReactNode;
}

export const ModalLayout: FC<ModalLayoutProps> = memo(({ children }) => {
  const layout = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (layout && layout.current && frame && frame.current) {
        layout.current.style.alignItems = layout.current.clientHeight < frame.current.clientHeight ? 'flex-start' : 'center';
        layout.current.style.justifyContent = layout.current.clientWidth < frame.current.clientWidth ? 'flex-start' : 'center';
      }
    });
    if (layout && layout.current) {
      resizeObserver.observe(layout.current);
    }
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className={styles.ModalLayout} ref={layout}>
      <div className={styles['ModalLayout-frame']} ref={frame}>
        {children}
      </div>
    </div>
  );
});
