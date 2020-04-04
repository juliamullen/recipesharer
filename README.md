## Recipe Sharer

A recipe sharing website created by Julia Mullen.

## Running the Development Server

Clone the repository with

    git clone https://github.com/mullen-programs/recipesharer.git

Change into the directory

    cd recipesharer

Install the dependencies

    npm i

Run the tests

    npm test

Run the dev server

    npm run dev

## Source Code Organization
The recipe sharer source code is organized into the following folders:

    components/       React components for display logic and forms.
    server/           Express server code and Sequelize model definitions.
    pages/            Next.js turns these files into endpoints in the application.

## Todo:
## Features

#### SMALL
- Users should be able to edit their Recipes. Should be able to populate the RecipeForm component with information from the Recipe model & change the submit function to a PUT request containing the form contents and the models id.

- Users should be able to delete their Recipes. A button on the Recipe's detail page with a modal confirmation should be enough for now.

- Steps should have three different styling options: "standard" (for a step, like "preheat the oven"), "info" (for high-level concept building, like "carmelizing an onion releases its flavor"), and "alert" (for preventing common mistakes, like "if you want to avoid squishing your tomatoes, try to sharpen your knife first"). 

- Recipes should have prep & cook times to allow for creators to provide time estimations.

#### MEDIUM
- Subscriber/feed featureset. Allow users to "Follow" each other and, on the main page, only display recipes by users that the current user is "following". This will require (at least) a new model, some changes to the way the API/server code, and a few UI widgets. Twitter uses popovers when you hover over a user with the "Follow" prompt.

- Generated form placeholders. With a grammar and a corpus, the samey text "Chop the onion thoroughly" could be more playful and engaging if we generated a new one for each step added to the recipe. Recipe names, ingredient quantities and names, and steps could all have generated placeholder making the form itself more fun to use. This could also be useful for generating fake data for tests and mockups.

#### LARGE/RESEARCH NEEDED
- Images. Why even talk about food if you can't see it? At least one image per recipe (as a cover image for the card), but an optional add-gallery per-step would allow for better education building. This would require a static hosting option like S3, some additional steps in the form, an update to the models (to store the URLs), and a change to the presentation.

- Discovery features. If a user by default only sees the recipemakers they follow, how will they find new people to follow? "Public" and "private" recipes, a default list of people to follow.

- Social features. It's very common to suggest substitute ingredients or different amounts of an ingredient in recipe comments, maybe there are ways to make this remixing a frictionless process for both contributors and consumers?

## Technical Debt

#### MEDIUM
- Testing right now is limited to snapshot tests against pre-rendered components. Additional tests could include: unit testing specific React components for rendering specific information (like make sure a RecipeCard renders the recipe's title) and end-to-end tests that confirm specific features work (like check that submitting the recipe form creates a new recipe).
