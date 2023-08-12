import Image from 'next/image';
import React from 'react';
import { IngredientStyled } from './Ingredient.styles';
import { Button } from '../button';

export const Ingredient = ({
  name,
  weightPerServing,
  costPerServing,
  onRemove,
  onDispatch,
  disabled,
}) => {
  const [servings, setServings] = React.useState(0);

  return (
    <IngredientStyled>
      <p className='ingredient-name'>{name}</p>

      <div className='ingredient-inputs'>
        <label>
          servings:
          <input
            type='text'
            placeholder='number of servings'
            value={servings}
            onChange={e => setServings(+e.target.value)}
          />
        </label>
        <Button
          width='2rem'
          onClick={() => {
            setServings(s => s - 1);
            onDispatch('decrease');
          }}
          disabled={servings < 1}
        >
          -
        </Button>
        <Button
          disabled={disabled}
          width='2rem'
          onClick={() => {
            setServings(s => s + 1);
            onDispatch('increase');
          }}
        >
          +
        </Button>
        <p className='ingredient-data'>{weightPerServing * servings}g</p>
        <p className='ingredient-data'>
          {(costPerServing * servings).toFixed(1)}€
        </p>
        <Image
          className='delete-btn'
          src='/delete.svg'
          alt='delete button'
          width={20}
          height={20}
          onClick={() => {
            if (servings) {
              setServings(0);
              onRemove(servings);
            }
          }}
        />
      </div>
    </IngredientStyled>
  );
};
