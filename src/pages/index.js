import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import RecipeCards from '../components/RecipeCards'
import fetch from 'isomorphic-fetch'

function Index(props) {
  return (
    <Container>
      <Box my={4}>
          <RecipeCards recipes={props.recipes} />
      </Box>
    </Container>
  )
}

Index.getInitialProps = async ({ req }) => {
  let baseURL = req ? `${req.protocol}://${req.get("Host")}` : ""
  const res = await fetch(`${baseURL}/api/recipes`)
  const response = await res.json()
  return {
    recipes: response,
  }
}

export default Index
