import React, { forwardRef } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ children }, ref) => {
  return <div ref={ref} className={styles.card}>{children}</div>;
});

export default Card;
