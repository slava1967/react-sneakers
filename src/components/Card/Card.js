import styles from './Card.module.scss';
import { useState } from 'react';

export const Card = ({
  id,
  title,
  price,
  image,
  onPlus,
  onFavorite,
  favorited = false,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setFavorite] = useState(favorited);

  const onClickPlus = () => {
    onPlus({ title, price, image });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, image });
    setFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img
          onClick={onClickFavorite}
          src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={image} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} USD</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
};
