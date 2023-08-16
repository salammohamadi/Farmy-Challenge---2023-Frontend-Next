import TargetSalad from '../targetSalad';
import { IngredientsContainer } from './IngredientsContainer';
import { IngredientsList } from './IngredientsList';
import Ingredient from './ingredient';

export const Ingredients = ({
  maxed,
  dispatch,
  totalCost,
  totalWeight,
  ingredients,
}) => {
  return (
    <IngredientsContainer>
      <TargetSalad
        totalCost={totalCost}
        totalWeight={totalWeight}
        maxed={maxed}
      />

      <IngredientsList>
        {ingredients.map(ing => (
          <Ingredient
            key={ing.id}
            disabled={maxed}
            name={ing.name}
            costPerServing={ing.costPerServing}
            weightPerServing={ing.weightPerServing}
            onRemove={servings =>
              dispatch({
                type: 'decrease',
                payload: {
                  servings,
                  ingredientId: ing.id,
                  costPerServing: ing.costPerServing,
                  weightPerServing: ing.weightPerServing,
                },
              })
            }
            onAdd={servings =>
              dispatch({
                type: 'increase',
                payload: {
                  servings,
                  ingredientId: ing.id,
                  costPerServing: ing.costPerServing,
                  weightPerServing: ing.weightPerServing,
                },
              })
            }
          />
        ))}
      </IngredientsList>
    </IngredientsContainer>
  );
};
