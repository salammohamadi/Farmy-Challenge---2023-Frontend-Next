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
    <IngredientsContainer maxed={maxed}>
      <TargetSalad totalCost={totalCost} totalWeight={totalWeight} />

      <IngredientsList>
        {ingredients.map(ing => (
          <Ingredient
            key={ing.id}
            disabled={maxed}
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
    </IngredientsContainer>
  );
};
