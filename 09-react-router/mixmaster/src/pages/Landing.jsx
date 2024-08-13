import { useLoaderData } from "react-router-dom";
import axios from 'axios';
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
import { useQuery } from "@tanstack/react-query";

// We can directly use axios in loader, but in order to cache data, we can also include useQuery!
const searchQueryOption = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm],
    queryFn: () => axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
  }
}

// Note that in main.jsx, the loader function is landingLoader(queryClient) which is the returned async function!!!!!
// This loader function has argument { request } because <SearchForm> component has a get Form which can append sth to the current url!
export const landingLoader = (queryClient) => {
  return async ({ request }) => {
    const url = new URL(request.url);
    // searchTerm is actually the input value in SearchForm, its initial value is ''!
    const searchTerm = url.searchParams.get('search') || '';

    // If the data is already cached, it will return the cached data. If not, it will trigger the query function to fetch the data and then store it in the cache.
    await queryClient.ensureQueryData(searchQueryOption(searchTerm));
  
    return searchTerm;
  }
}


// This component can access whatever this loader function returns by using useLoaderData!
const Landing = () => {
  const searchTerm = useLoaderData();

  const { data } = useQuery(searchQueryOption(searchTerm));
  const drinks = data.data.drinks
  
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;