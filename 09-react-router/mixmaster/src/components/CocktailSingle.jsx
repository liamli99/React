import { Link } from 'react-router-dom';

const CocktailSingle = ({ id, name, image, info, glass }) => {
  return (
    <article className='cocktail-container'>
      <div className='img-container'>
        <img className='img' src={image} alt={name} />
      </div>

      <div className='footer'>
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>

        <Link className='btn' to={`/cocktail/${id}`}>Details</Link>
      </div>
    </article>
  );
}

export default CocktailSingle;