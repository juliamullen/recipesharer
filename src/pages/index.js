import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Recipes from '../components/Recipes'
import fetch from 'isomorphic-fetch'

function Index(props) {
  return (

    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          <Recipes recipes={props.recipes} />
        </Typography>
      </Box>
    </Container>
  )
}

Index.getInitialProps = async ({ req }) => {
  let baseURL = req ? `${req.protocol}://${req.get("Host")}` : ""
  const res = await fetch(`${baseURL}/api/recipes`)
  return {
    recipes: await res.json()
  }
}

export default Index
