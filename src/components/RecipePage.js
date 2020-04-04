import Typography from "@material-ui/core/Typography"
import Avatar from "@material-ui/core/Avatar"
import Paper from "@material-ui/core/Paper"

import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  recipePage: {
    padding: "40px",
    position: 'relative'
  },
  title: {
    marginTop: '-20px',
  },
  anecdote: {
    fontStyle: "italic",
    padding: "40px"
  },

  description: {
    padding: "40px"
  },
  avatar: {
    position: 'absolute',
    top: '10px',
    right: '20px'
  }
})

export default function RecipePage({ recipe }) {
  const classes = useStyles()
  return ( 
    <Paper className={ classes.recipePage }>
      <Avatar src={recipe.authorPic} alt={recipe.author} className={classes.avatar}/>
      <Typography variant="h3" className={classes.title}>{recipe.title}</Typography>
      <Typography variant="subtitle2">By: {recipe.author}</Typography>

      {recipe.description && 
      <Typography variant="body2" className={ classes.description }>{recipe.description}</Typography>
      }
      {recipe.anecdote &&
      <Typography variant="body1" className={ classes.anecdote }>{recipe.anecdote}</Typography>
      }
      <hr/>
      <Typography variant="h4">Ingredients</Typography>
        {recipe.ingredients && recipe.ingredients.map(item => (
          <p key={item.id}>{item.quantity} {item.name}</p>
        ))}
      <Typography variant="h4">Steps</Typography>
        {recipe.steps && recipe.steps.map(item => (
          <p key={item.id}>{item.step}</p>
        ))}
      </Paper>
  )
}
