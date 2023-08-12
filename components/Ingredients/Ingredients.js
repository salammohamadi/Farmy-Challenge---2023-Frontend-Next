import React from 'react';
import { Button } from '../button/Button';
import { Ingredient } from './Ingredient';
import { IngredientsContainer } from './IngredientsContainer';
import { IngredientForm } from '../ingridientForm';
import { TargetSalad } from '../targetSalad';
import { IngredientsList } from './IngredientsList';

export const Ingredients = ({
  maxedOut,
  dispatch,
  totalCost,
  totalWeight,
  ingredients,
}) => {
  return (
    <IngredientsContainer>
      <TargetSalad totalCost={totalCost} totalWeight={totalWeight} />

      <IngredientsList>
        {ingredients.map(ing => (
          <Ingredient
            key={ing.id}
            disabled={maxedOut}
            name={ing.name}
            costPerServing={ing.costPerServing}
            weightPerServing={ing.weightPerServing}
            onDispatch={type =>
              dispatch({
                type,
                payload: {
                  costPerServing: ing.costPerServing,
                  weightPerServing: ing.weightPerServing,
                },
              })
            }
            onRemove={servings =>
              dispatch({
                type: 'decrease',
                payload: {
                  costPerServing: ing.costPerServing * servings,
                  weightPerServing: ing.weightPerServing * servings,
                },
              })
            }
          />
        ))}
      </IngredientsList>

      {/* <Button
        width='100%'
        disabled={maxedOut}
        onClick={() => setShowForm(show => !show)}
      >
        +
      </Button> */}

      <div>
        <Button width='25%'>cancel</Button>
        <Button type='primary' width='25%'>
          save
        </Button>
      </div>
    </IngredientsContainer>
  );
};