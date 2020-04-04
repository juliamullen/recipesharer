import RecipeCard from './RecipeCard'
import Grid from "@material-ui/core/Grid"

export default function RecipesCards(props) {
  return (
    <Grid container spacing={3}>
      {props.recipes && props.recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
      {!props.recipes && <p>Loading..?</p>}
    </Grid>
  )
}
