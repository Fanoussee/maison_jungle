import { plantList } from "../datas/plantList";
import "../styles/shoppingList.css";
import Categories from "./Categories";
import PlantItem from "./PlantItem";

function ShoppingList({ cart, updateCart, activeCategory, setActiveCategory }) {
  const categoriesAvecDoublons = [];
  plantList.forEach((element) => {
    categoriesAvecDoublons.push(element.category);
  });
  const categories = Array.from(new Set(categoriesAvecDoublons));

  return (
    <div className="shopping-list">
        <Categories setActiveCategory={setActiveCategory} categories={categories} activeCategory={activeCategory} />
      <ul className="lmj-plant-list">
        {plantList.map((plante) => (
          <li key={`${plante.id}`}>
            {(plante.category === activeCategory || !activeCategory || activeCategory ==="toutes") && (
              <PlantItem plante={plante} cart={cart} updateCart={updateCart} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
