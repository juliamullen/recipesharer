import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Box from "@material-ui/core/Box"

import { makeStyles } from "@material-ui/core/styles"

import RecipeForm from '../components/RecipeForm'

const useStyles = makeStyles((theme) => ({
  container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',

  },
}))
export default function ShareRecipe() {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="sm">
      <Box my="0">
      <Paper elevation={3} className={classes.paper}>
        <RecipeForm/>
      </Paper>
    </Box>
    </Container>
  );
}
