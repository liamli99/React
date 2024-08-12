import { useLoaderData, Link } from "react-router-dom";
import axios from 'axios';

// This loader function has argument `{ params }` because the route path has dynamic segment!
// Since the dynamic segment is ':id', we can use params.id to access the exact value!
export const cocktailLoader = async ({ params }) => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`);
  
  return { id: params.id, drink: response.data.drinks[0] };
}

const Cocktail = () => {
  const { id, drink } = useLoaderData();
  // console.log(drink);

  const ingredients = Object.keys(drink)
    .filter((key) => key.startsWith('strIngredient') && drink[key] !== null)
    .map((key) => drink[key]);
  
  return (
    <div className='cocktail'>
      <header>
        <Link className='btn' to='/'>Back Home</Link>
        <h3>{drink.strDrink}</h3>
      </header>

      <div className='drink'>
        <img className='img' src={drink.strDrinkThumb} alt={drink.strDrink} />

        <div className='drink-info'>
          <p>
            <span className='drink-data'>Name: </span>
            {drink.strDrink}
          </p>

          <p>
            <span className='drink-data'>Category: </span>
            {drink.strCategory}
          </p>

          <p>
            <span className='drink-data'>Info: </span>
            {drink.strAlcoholic}
          </p>

          <p>
            <span className='drink-data'>Glass: </span>
            {drink.strGlass}
          </p>

          <p>
            <span className='drink-data'>Ingredients: </span>
            {ingredients.map((item, index) => {
              return (
                <span className='ing' key={index}>
                  {item}
                  { index < ingredients.length - 1 ? ', ' : '' }
                </span>
              );
            })}
          </p>

          <p>
            <span className='drink-data'>Instructions: </span>
            {drink.strInstructions}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cocktail;