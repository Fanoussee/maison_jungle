import '../styles/categories.css';

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="lmj-categories">
      <h2>Choisissez une catégorie de plantes</h2>  
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className='lmj-categories-select'
      >
        <option value="toutes">toutes</option>
        {categories.map((categorie) => (
          <option key={`${categorie}`} value={categorie}>
            {categorie}
          </option>
        ))}
      </select>
      <button className="btn-categories-reinit" onClick={() => setActiveCategory('')}>Réinitialiser</button>
    </div>
  );
}

export default Categories;
