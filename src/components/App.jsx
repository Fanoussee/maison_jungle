import Banner from './Banner';
import Footer from './Footer';
import ShoppingList from './ShoppingList';
import Cart from './Cart';
import { useEffect, useState } from 'react';

function App () {
  const savedCart = localStorage.getItem('cart');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [activeCategory, setActiveCategory] = useState("");
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner />
      <div className="container">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      </div>
      <Footer />
    </div>
  );
};

export default App;