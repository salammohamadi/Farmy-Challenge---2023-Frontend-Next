'use client';

import React from 'react';
import { Container } from '../shared/container';
import { Ingredients } from '../Ingredients';
import Link from 'next/link';
import Button from '../shared/button';
import { useRouter } from 'next/navigation';

const initialState = {
  totalCost: 0,
  totalWeight: 0,
  saladTitle: '',
  saladType: 'small',
  saladIngredients: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setTitle':
      return {
        ...state,
        saladTitle: action.payload,
      };

    case 'setType':
      return {
        ...state,
        saladType: action.payload,
      };

    case 'increase':
    case 'decrease':
      const factor = action.type === 'increase' ? 1 : -1;

      const filteredIngredients = state.saladIngredients.filter(
        ing => ing.id !== action.payload.ingredientId
      );

      const changedIngredient = state.saladIngredients.find(
        ing => ing.id === action.payload.ingredientId
      );

      const newServings = changedIngredient?.servings
        ? changedIngredient?.servings + action.payload.servings * factor
        : action.payload.servings;

      return {
        ...state,
        saladIngredients: newServings
          ? [
              ...filteredIngredients,
              {
                id: action.payload.ingredientId,
                servings: newServings,
              },
            ]
          : filteredIngredients,
        totalCost:
          state.totalCost +
          action.payload.costPerServing * action.payload.servings * factor,
        totalWeight:
          state.totalWeight +
          action.payload.weightPerServing * action.payload.servings * factor,
      };

    default:
      throw Error('unknown action');
  }
};

export default function SaladMaker({ saladTypes, ingredients }) {
  const router = useRouter();

  const [
    { saladTitle, saladType, totalCost, totalWeight, saladIngredients },
    dispatch,
  ] = React.useReducer(reducer, initialState);

  const { targetCost, targetWeight } = saladTypes[saladType];

  const maxed = targetCost <= totalCost || targetWeight <= totalWeight;

  const submitHandler = async () => {
    const requestBody = {
      totalCost,
      totalWeight,
      saladTitle,
      saladType: 'small',
      ingredients: saladIngredients,
    };

    try {
      const response = await fetch(`${BASE_URL}/salads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log({ response });
    } catch (error) {
    } finally {
      router.push('/salads');
    }
  };

  return (
    <Container>
      <div className='form-header'>
        <input
          type='text'
          placeholder='salad name'
          value={saladTitle}
          onChange={e =>
            dispatch({ type: 'setTitle', payload: e.target.value })
          }
          className='title'
        />
        <select
          value={saladType}
          onChange={e => dispatch({ type: 'setType', payload: e.target.value })}
          className='salad-type'
        >
          <option value='large'>large</option>
          <option value='medium'>medium</option>
          <option value='small'>small</option>
        </select>
      </div>
      <hr />
      <div>
        <span>target cost / weight:</span>
        <span>
          {targetCost.toFixed(2)}€ / {targetWeight}g
        </span>
      </div>
      <Ingredients
        maxed={maxed}
        dispatch={dispatch}
        totalCost={totalCost}
        totalWeight={totalWeight}
        ingredients={ingredients}
      />
      <Button width='25%' onClick={() => router.push('/')}>
        cancel
      </Button>
      <Button
        type='primary'
        width='25%'
        disabled={maxed || totalWeight === 0}
        onClick={submitHandler}
      >
        save
      </Button>
    </Container>
  );
}
