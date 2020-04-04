export default function Recipe({ recipe }) {
  return ( 
    <div>
      <p>{recipe.message}</p>
      <p>{recipe.author}</p>
    </div>
  )
}
