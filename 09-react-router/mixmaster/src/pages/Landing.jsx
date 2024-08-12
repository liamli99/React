import { useLoaderData } from "react-router-dom";
import axios from 'axios';
import CocktailList from "../components/CocktailList";

// This component can access whatever this loader function returns by using useLoaderData! This loader function will be used in main.jsx, but we include it here to ensure consistency! 
export const landingLoader = async () => {
  const searchTerm = 'margarita';
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
  
  return { drinks: response.data.drinks, searchTerm };
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData();
  // console.log(drinks);
  
  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;