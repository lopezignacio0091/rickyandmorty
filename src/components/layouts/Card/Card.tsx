import React, { useCallback } from "react";
import { CardElementProps } from "./types";
import styles from "./styles.module.scss";

const CardElement: React.FC<CardElementProps> = ({
  title,
  status,
  onClick,
  image,
  labelButton,
  id,
  species,
  disabled = false,
}) => {
  const handleClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);
  return (
    <article className={styles.cardContainer}>
      <img src={image} alt="prod" className={styles.cardImage} />
      <div className={styles.cardData}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{`${status}-${species}`}</p>
        {!disabled && (
          <button className={styles.button} onClick={handleClick}>
            {labelButton}
          </button>
        )}
      </div>
    </article>
  );
};
export default CardElement;
