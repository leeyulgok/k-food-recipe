import React, { FC } from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  text: string;
}

const Badge: FC<BadgeProps> = ({ text }) => {
  return (
    <span className={styles.badge}>{text}</span>
  );
};

export default Badge;
