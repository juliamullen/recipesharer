import Router from "next/router";

import Typography     from "@material-ui/core/Typography"
import TextField      from "@material-ui/core/TextField"
import Button         from "@material-ui/core/Button"
import Grid           from "@material-ui/core/Grid"
import { makeStyles } from '@material-ui/core/styles'

import CancelIcon from '@material-ui/icons/Cancel';

const { useState } = require("react");

const useStyles = makeStyles({
  listItem: {
    listStyleType: 'none',
  },
  addButton: {
    marginBottom:'2em'
  },
  quantity: {
    marginRight:'1em',
    width:'60px'
  },
  step: {
    width:'80%',
    marginBottom:'10px'
  },
  disabled: {
    marginTop:'.1em',
    paddingTop:'.2em',
    color:'rgba(0, 0, 0, 0.38)',
    cursor:'not-allowed'
  },
  cancel: {
    marginTop:'.1em',
    paddingTop:'.2em',
    color:'#e57373',
    cursor:'pointer',
  }
})

let idIngredient = 0

export default function RecipeForm() {
  const classes = useStyles()

  // Keeping track of the ingredients
  const [ingredients, setIngredients] = useState([{ quantity: "", name: "", note: "", noteStyle: "", id: idIngredient++}])

  const appendIngredient = () => {
    const newIngredient = { quantity: "", name: "", note: "", noteStyle: "", id: idIngredient++}
    setIngredients(i => ([...i, newIngredient]))
  }

  const removeIngredient = index => e => {
    setIngredients([...ingredients.slice(0, index), ...ingredients.slice(index + 1)]);
  }

  const updateIngredients = (index, field) => e => {
    let newIngredients = [...ingredients]
    newIngredients[index][e.target.name] = e.target.value
    setIngredients(newIngredients)
  }

  // Keeping track of the steps
  const [steps, setSteps] = useState([{ step: "", style: "standard", id: idIngredient++ }])

  const appendStep = () => {
    const newStep = { step: "", style: "standard" }
    setSteps(s => ([...s, newStep]))
  }

  const removeStep = index => e => {
    setSteps([...steps.slice(0, index), ...steps.slice(index + 1)]);
  }

  const updateSteps = (index, field) => e => {
    let newSteps = [...steps]
    newSteps[index][e.target.name] = e.target.value
    setSteps(newSteps)
  }

  const [title, setTitle]             = useState("")
  const [description, setDescription] = useState("")
  const [anecdote, setAnecdote]       = useState("")
 
  async function submit(event) {
    event.preventDefault();
    let res = await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description,
        anecdote,
        ingredients,
        steps
      })
    });
    let data = await res.json()
    Router.push(`/recipes/${data.id}`);
  }

  return (
    <React.Fragment>
    <Typography variant="h4">Create a new recipe</Typography>
    <form onSubmit={submit}>
    <Typography variant="h6" className="listStartHeader">Title</Typography>
      <TextField fullWidth placeholder="Incredible Minced Carrot Recipe" onChange={e => setTitle(e.target.value)} name="title" value={title}/>
    <Typography variant="h6" className="listStartHeader">Description</Typography>
      <TextField fullWidth placeholder="Describe your recipe here" multiline onChange={e => setDescription(e.target.value)} name="description" value={description}/>
    <Typography variant="h6" className="listStartHeader">Anecdote</Typography>
      <TextField fullWidth placeholder="Tell a story about a time you made your recipe" multiline onChange={e => setAnecdote(e.target.value)} name="anecdote" value={anecdote}/>
    <Typography variant="h6" className="listStartHeader">List your ingredients</Typography>
      <ul>
        {ingredients.map((item, index) => {
          const isMultiple = ingredients.length > 1
          return (
          <li key={item.id} className={ classes.listItem }>
            <TextField size="small" placeholder="1 cup" onChange={updateIngredients(index)} name="quantity" value={item.quantity} className={ classes.quantity } />
            <TextField size="small" placeholder="carrots" onChange={updateIngredients(index)} name="name" value={item.name} />
            { isMultiple ? <CancelIcon className={ classes.cancel } onClick={removeIngredient(index)}/> : <CancelIcon className={ classes.disabled } />}
          </li>
        )})}
      </ul>
      <Grid container spacing={3}>
        <Grid item xs={8}></Grid>
        <Grid item xs={4}>
          <Button variant="contained" color="secondary" onClick={appendIngredient} className={ classes.addButton }>+ Ingredient</Button>
        </Grid>
      </Grid>
      <Typography variant="h6" className="listStartHeader">Give step-by-step instructions on how to make your dish</Typography>
      <ul>
        {steps.map((item, index) => {
          const isMultiple = steps.length > 1
          return (
            <li key={item.id} className={ classes.listItem }>
              <TextField multiline variant="outlined" placeholder="Chop the onion thoroughly" onChange={updateSteps(index)} name="step" value={item.step} className={ classes.step }/>
              { isMultiple ? <CancelIcon className={ classes.cancel } onClick={removeStep(index)}/> : <CancelIcon className={ classes.disabled } />}
            </li>
          )})}
        </ul>
        <Grid container spacing={3}>
          <Grid item xs={8}></Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="secondary" onClick={appendStep}>+ Step</Button></Grid>
          <Grid item xs={9}><Typography variant="subtitle1" className="listStartHeader">Now click "Share" to share your culinary talent!</Typography></Grid>
          <Grid item xs={3}>
        <Button variant="contained" color="primary" type="submit" className={ classes.addButton }>
          Share
        </Button>
      </Grid>
    </Grid>
      </form>
    </React.Fragment>
  )
}
