import { useState } from 'react';
import { useAppContext } from './AppContext';

const SearchForm = () => {
  const { setSearchTerm } = useAppContext();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) return;

    setSearchTerm(inputValue);
  }

  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>

      <form className='search-form' onSubmit={handleSubmit}>
        <input className='form-input search-input' placeholder='cat' type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        
        <button className='btn'>Search</button>
      </form>
    </section>
  );
}

export default SearchForm;