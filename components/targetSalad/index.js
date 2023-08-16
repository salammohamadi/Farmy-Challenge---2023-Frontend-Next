import { TargetSaladStyled } from './TargetSalad.styles';

export default function TargetSalad({ totalCost, totalWeight, maxed }) {
  return (
    <TargetSaladStyled maxed={maxed}>
      <div>
        <span className='target-title'>target cost:</span>
        <span className='target-value'>{totalCost.toFixed(2)}€</span>
      </div>
      <div>
        <span className='target-title'>target weight:</span>
        <span className='target-value'>{totalWeight}g</span>
      </div>
    </TargetSaladStyled>
  );
}
