export default function IngredientForm() {
  const [ingredient, setIngredient] = React.useState('');

  return (
    <form>
      <input
        type='text'
        placeholder='choose next ingredient'
        value={ingredient}
        onChange={e => setIngredient(e.target.value)}
      />
    </form>
  );
}
