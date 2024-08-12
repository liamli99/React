import CocktailSingle from "./CocktailSingle";

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No Matching Cocktails</h4>
    );
  }

  return (
    <div className='cocktail-list-container'>
      {drinks.map((drink) => {
        return <CocktailSingle key={drink.idDrink} id={drink.idDrink} name={drink.strDrink} image={drink.strDrinkThumb} info={drink.strAlcoholic} glass={drink.strGlass} />
      })}
    </div>
  );
}

export default CocktailList;