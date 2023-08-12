import React from 'react';

export const TargetSalad = ({ totalCost, totalWeight }) => {
  return (
    <div className='target-total-data'>
      <div>
        <span className='target-title'>target cost:</span>
        <span className='target-value'>{totalCost.toFixed(2)}€</span>
      </div>
      <div>
        <span className='target-title'>target weight:</span>
        <span className='target-value'>{totalWeight}g</span>
      </div>
    </div>
  );
};
