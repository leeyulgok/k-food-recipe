import React, { forwardRef } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
  isModalOpen?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, onClick, isModalOpen }, ref) => {

    const cardClass = isModalOpen ? styles.cardHidden : styles.card;

    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };

    return (
      <div ref={ref} className={cardClass} onClick={handleClick}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
