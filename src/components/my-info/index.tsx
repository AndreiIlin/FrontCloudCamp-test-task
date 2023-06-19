import React, { type FC } from 'react';

import { Social } from 'components/social';

import { socials } from 'shared/socials';

import styles from './styles.module.scss';

export const MyInfo: FC = () => {
  return (
    <div className={styles.MyInfo}>
      <div className={styles['MyInfo-avatar']}>АИ</div>
      <div className={styles['MyInfo-description']}>
        <h2 className={styles['MyInfo-name']}>Ильин Андрей</h2>
        <div className={styles['MyInfo-socials']}>
          {socials.map((social) => (
            <Social link={social.link} name={social.name} key={social.name} />
          ))}
        </div>
      </div>
    </div>
  );
};
