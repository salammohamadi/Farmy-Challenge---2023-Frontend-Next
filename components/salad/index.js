'use client';
import { SaladStyled } from './Salad.styles';

export const Salad = ({ saladData, ingredients }) => {
  const saladIngredients = ingredients.filter(ing =>
    saladData.ingredients.map(sing => sing.id).includes(ing.id)
  );

  return (
    <SaladStyled>
      <p>{saladData.name}</p>
      <ul className='ingredient-list'>
        {saladIngredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
      <div className='cost'>
        <span>Price:</span>
        <span className='price'>{saladData.price}€</span>
      </div>
    </SaladStyled>
  );
};
