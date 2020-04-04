import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import RecipePage from "../../components/RecipePage.js"

import fetch from 'isomorphic-fetch'

function Recipe(props) {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <RecipePage recipe={props.recipe}/>
      </Box>
    </Container>
  )
}

Recipe.getInitialProps = async ({ req, query }) => {
  const { id } = query
  let baseURL = req ? `${req.protocol}://${req.get("Host")}` : ""
  const res = await fetch(`${baseURL}/api/recipes/${id}`)
  const response = await res.json()
  return {
    recipe: response,
  }
}

export default Recipe
