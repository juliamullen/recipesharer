import Recipe from './Recipe'

export default function Recipes(props) {
  return (
    <div>
      {props.recipes && props.recipes.map(recipe => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
      {!props.recipes && <p>Loading..?</p>}
    </div>
  )
}
