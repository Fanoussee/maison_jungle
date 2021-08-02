import CareScale from "./CareScale";
import "../styles/plantItem.css";

function PlantItem({ plante, cart, updateCart }) {

  function Soldes() {
    if (plante.isSpecialOffer) {
      return <div className="lmj-sales">Soldes</div>;
    }
  }

  function addToCart(name, price){
    // on vérifie si la plante est déjà dans le panier
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      // si la plante a déjà été ajoutée alors on l'enlève du Cart
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      // pour pouvoir la rajouter ensuite et mettre à jour la quantité
      updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount : currentPlantAdded.amount + 1 }
      ]);
    }else{
      updateCart([
        ...cart,
        {
          name,
          price,
          amount: 1
        }
      ]);
    }
  }

  return (
    <ul>
      <li key={plante.id} className="lmj-plant-item">
        <img
          className="lmj-plant-item-cover"
          src={plante.cover}
          alt={`${plante.name} cover`}
        />
        <div className="plant-name">
          {plante.name} {plante.isBestSale && <span>🔥</span>}
        </div>
        <div className="plant-specifications">
          <CareScale careType="water" scaleValue={plante.water} />
          <CareScale careType="light" scaleValue={plante.light} />
        </div>
        {Soldes()}
        <div className="plant-price">{ plante.price }€</div>
        <button className="btn-add-plant" onClick={() => addToCart(plante.name, plante.price)}>Ajouter</button>
      </li>
    </ul>
  );
}

export default PlantItem;
