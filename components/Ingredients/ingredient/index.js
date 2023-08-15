import Button from '@/components/shared/button';
import React from 'react';
import { IngredientStyled } from './Ingredient.styles';
import Image from 'next/image';

export default function Ingredient({
  name,
  weightPerServing,
  costPerServing,
  onRemove,
  onAdd,
  onDispatch,
  disabled,
}) {
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
            onChange={e => {
              const newServing = +e.target.value;

              setServings(newServing);

              if (newServing > servings) {
                onAdd(newServing);
              } else {
                onRemove(servings);
              }
            }}
            disabled={disabled}
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
}
