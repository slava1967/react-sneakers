import { Card } from './components/Card/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://6447fcef7bb84f5a3e4f402d.mockapi.io/products')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  console.log(cartItems);

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              onFavorite={() => console.log('Added to bookmarks')}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
