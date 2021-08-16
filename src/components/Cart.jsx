import "../styles/cart.css";
//import { useState } from "react";

function Cart({ cart, updateCart }) {
  //const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  function deletePlant(index){
    const basket = JSON.parse(localStorage.getItem("cart"));
    const plantToDelete = basket[index];
    if(plantToDelete.amount > 1){
      basket[index].amount -= 1;
      localStorage.setItem("cart", JSON.stringify(basket));
    }else{
      basket.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(basket));
    }
  } 

  return (
    <div className="lmj-cart">
      <h2 className="title-cart">Panier</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`} className="ligne-article">
          <div>
            {name} - quantité : {amount} - prix unitaire : {price}€ - total : {amount * price}€ 
          </div>
          <div className="btn-box">
            <button 
              className="btn-cart btn-suppr-article"
              onClick={() => {
                deletePlant(index);
                updateCart(JSON.parse(localStorage.getItem("cart")));
              }}>Supprimer</button>
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
  );

  // return isOpen ? (
  //   <div className="lmj-cart">
  //     <div className="btn-box">
  //       <button className="btn-cart" onClick={() => setIsOpen(false)}>
  //         Fermer
  //       </button>
  //     </div>
  //     <h2>Panier</h2>
  //     {cart.map(({ name, price, amount }, index) => (
  //       <div className="ligne-article">
  //         <div key={`${name}-${index}`}>
  //           {name} {price}€ x {amount}
  //         </div>
  //         <div className="btn-box">
  //           <button className="btn-cart btn-suppr-article">Supprimer</button>
  //         </div>
  //       </div>
  //     ))}
  //     <h3>Total : {total}€</h3>
  //     <div className="btn-box">
  //       <button
  //         className="btn-cart"
  //         onClick={() => {
  //           updateCart([]);
  //           localStorage.clear();
  //         }}
  //       >
  //         Vider le panier
  //       </button>
  //     </div>
  //   </div>
  // ) : (
  //   <div className="lmj-cart">
  //     <div className="btn-box">
  //       <button className="btn-cart" onClick={() => setIsOpen(true)}>
  //         Ouvrir le panier
  //       </button>
  //     </div>
  //   </div>
  // );
  
}

export default Cart;
