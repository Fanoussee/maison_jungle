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
      <div className="btn-box">
        <button className="btn-cart" onClick={() => setIsOpen(false)}>
          Fermer
        </button>
      </div>
      <h2>Panier</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div className="ligne-article">
          <div key={`${name}-${index}`}>
            {name} {price}€ x {amount}
          </div>
          <div className="btn-box">
            <button className="btn-cart btn-suppr-article">Supprimer</button>
          </div>
        </div>
      ))}
      <h3>Total : {total}€</h3>
      <div className="btn-box">
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
    </div>
  ) : (
    <div className="lmj-cart btn-box">
      <button className="btn-cart" onClick={() => setIsOpen(true)}>
        Ouvrir le panier
      </button>
    </div>
  );
}

export default Cart;
