import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useAppContext } from './AppContext';

const Gallery = () => {
  const { searchTerm } = useAppContext();

  // Authorization: https://unsplash.com/documentation#public-authentication
  // Search: https://unsplash.com/documentation#search-photos
  const url = `https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=${searchTerm}`;

  const { data, isPending, isError} = useQuery({
    // Note that queryFn has a variable 'searchTerm' in the url, we should also include it in queryKey so that each time searchTerm changes, query will be refetched automatically!!!
    queryKey: ['images', searchTerm],
    queryFn: () => axios.get(url)
  });

  // console.log(data);

  if (isPending) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }

  if (isError) {
    return (
      <section className='image-container'>
        <h4>Error</h4>
      </section>
    );
  }

  if (data.data.results.length < 1) {
    return (
      <section className='image-container'>
        <h4>No results</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {data.data.results.map((item) => {
        return (
          <img className='img' src={item.urls.regular} key={item.id} alt={item.alt_description} />
        );
      })}
    </section>
  );
}

export default Gallery;