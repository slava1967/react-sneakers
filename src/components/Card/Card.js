import styles from './Card.module.scss';
import { useState } from 'react';
import ContentLoader from 'react-content-loader';
import { AppContext } from '../../context';
import { useContext } from 'react';

export const Card = ({
  id,
  title,
  price,
  image,
  onPlus,
  onFavorite,
  favorited = false,
  loading = false,
}) => {
  const { isItemAdded } = useContext(AppContext);
  const [isFavorite, setFavorite] = useState(favorited);
  const itemObj = { id, title, price, image };

  const onClickPlus = () => {
    onPlus({ id, title, price, image });
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, price, image });
    setFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favorite} onClick={onFavorite}>
            {onFavorite && (
              <img
                onClick={onClickFavorite}
                src={isFavorite ? '/img/liked.svg' : '/img/unliked.svg'}
                alt="Unliked"
              />
            )}
          </div>
          <img width={133} height={112} src={image} alt="Sneakers" />
          <h5>{title}</h5>
          <div className="d-flex justify-between">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price} USD</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
