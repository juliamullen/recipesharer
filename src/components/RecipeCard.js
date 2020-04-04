import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Grid from "@material-ui/core/Grid"
import CardActions from "@material-ui/core/CardActions"
import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"

import { makeStyles } from '@material-ui/core/styles'

import NextLink from 'next/link'

const useStyles = makeStyles((theme) => ({
  cardLink: {
    cursor: 'pointer',
  },

  cardAvatar: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  },

  card: {
    height: theme.spacing(30),
  }
}))

export default function RecipeCard({ recipe }) {
  const classes = useStyles()
  const firstIngredient = recipe.ingredients.length > 0 && recipe.ingredients[0]
  return ( 
    <Grid item md={2} sm={3} xs={6}>
      <Card className={classes.card}>
        <NextLink key={recipe.id} href="/recipes/[id]" as={`/recipes/${recipe.id}`}>
          <CardContent className={ classes.cardLink }>
            <Grid container>
              <Grid item xs={9}>
                <Typography variant="subtitle2">{recipe.author}</Typography>
              </Grid>
              <Grid item xs={3}>
                <Avatar src={recipe.authorPic} alt={recipe.author} className={ classes.cardAvatar }/>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">{recipe.title}</Typography>
              </Grid>

              {firstIngredient && 
                <React.Fragment>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={8}>
                    <p>{firstIngredient.quantity} {firstIngredient.name}</p>
                  </Grid>
                  <Grid item xs={2}></Grid>
                </React.Fragment>
              }
            </Grid>
          </CardContent>
        </NextLink>
      </Card>
    </Grid>
  )
}
