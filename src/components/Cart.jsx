import "../styles/cart.css";
import { useState } from "react";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  return isOpen ? (
    <div className="lmj-cart">
      <button className="btn-cart" onClick={() => setIsOpen(false)}>
        Fermer
      </button>
      <h2>Panier</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div className="ligne-article">
          <div key={`${name}-${index}`}>
            {name} {price}€ x {amount}
          </div>
          <button className="btn-cart btn-suppr-article">Supprimer</button>
        </div>
      ))}
      <h3>Total : {total}€</h3>
      <button
        className="btn-cart"
        onClick={() => {
          updateCart([]);
          localStorage.clear();
        }}
      >
        Vider le panier
      </button>
    </div>
  ) : (
    <div className="lmj-cart">
      <button className="btn-cart" onClick={() => setIsOpen(true)}>
        Ouvrir le panier
      </button>
    </div>
  );
}

export default Cart;
