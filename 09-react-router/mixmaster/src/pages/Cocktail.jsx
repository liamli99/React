import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useQuery } from "@tanstack/react-query";

// We can directly use axios in loader, but in order to cache data, we can also include useQuery!
const queryOption = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: () => axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  }
}

// Note that in main.jsx, the loader function is cocktailLoader(queryClient) which is the returned async function!!!!!
// This loader function has argument `{ params }` because the route path has dynamic segment!
// Since the dynamic segment is ':id', we can use params.id to access the exact value!
export const cocktailLoader = (queryClient) => {
  return async ({ params }) => {
    const id = params.id;

    await queryClient.ensureQueryData(queryOption(id));

    return id;
  }
}

const Cocktail = () => {
  const id = useLoaderData();
  
  const { data } = useQuery(queryOption(id));
  const drink = data.data.drinks[0];

  const ingredients = Object.keys(drink)
    .filter((key) => key.startsWith('strIngredient') && drink[key] !== null)
    .map((key) => drink[key]);
  
  const navigate = useNavigate();
  
  return (
    <div className='cocktail'>
      <header>
        {/* Go to previous page */}
        <button className='btn' onClick={() => navigate(-1)}>Back Home</button>
        
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