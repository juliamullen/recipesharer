import Router from "next/router";

import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const { useState } = require("react");

export default function RecipeForm() {
  const [message, setMessage] = useState("");
  async function submit(event) {
    event.preventDefault();
    await fetch("/api/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    });
    Router.push("/");
  }

  return (
    <React.Fragment>
    <Typography variant="h4">Create a new recipe</Typography>
    <form onSubmit={submit}>
      <TextField placeholder="What's your recipe?" onChange={e => setMessage(e.target.value)} value={message} />
      <Button variant="outlined" type="submit">
        Share
      </Button>
    </form>
  </React.Fragment>
  )
}
