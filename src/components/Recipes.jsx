// Importing "react" is still required when using methods from it
import { useState } from 'react';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

// ES7 Object spread example
const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 1,
};

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Recipe:</h3>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
      <div style={{ marginBottom: '75px' }}>
        <button onClick={() => setRecipe(elvenShieldRecipe)}>
          Elven Shield
        </button>
        <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
          Elven Gauntlets
        </button>
      </div>
    </div>
  );
};

export default Recipes;
