'use client';
import React from 'react';
import { Container } from './Container';
import { Ingredients } from '../Ingredients/Ingredients';
import { Button } from '../button';
import Link from 'next/link';

const initialState = {
  totalCost: 0,
  totalWeight: 0,
  saladTitle: '',
  saladType: 'small',
};

const reducer = (state, action) => {
  const servingsCost = action.payload.costPerServing;
  const servingWeight = action.payload.weightPerServing;

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
      return {
        ...state,
        totalCost: state.totalCost + servingsCost,
        totalWeight: state.totalWeight + servingWeight,
      };

    case 'decrease':
      return {
        ...state,
        totalCost: state.totalCost - servingsCost,
        totalWeight: state.totalWeight - servingWeight,
      };

    default:
      throw Error('unknown action');
  }
};

export const SaladMaker = ({ saladTypes, ingredients }) => {
  const [{ saladTitle, saladType, totalCost, totalWeight }, dispatch] =
    React.useReducer(reducer, initialState);

  const { targetCost, targetWeight } = saladTypes[saladType];

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
        maxedOut={targetCost <= totalCost || targetWeight <= totalWeight}
        dispatch={dispatch}
        totalCost={totalCost}
        totalWeight={totalWeight}
        ingredients={ingredients}
      />
      <Link href='/'>
        <Button width='25%'>cancel</Button>
      </Link>
      <Button type='primary' width='25%'>
        save
      </Button>
    </Container>
  );
};
