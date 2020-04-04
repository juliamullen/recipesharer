const RecipeModel = (sequelize, type) => {
  return sequelize.define('recipe', {
    id: {
      type:          type.INTEGER,
      primaryKey:    true,
      autoIncrement: true
    },
    title:       type.STRING,
    description: type.TEXT,
    anecdote:    type.TEXT,
    author:      type.STRING,
    authorPic:   type.STRING,
    authorId:    type.STRING
  })
}

const IngredientModel = (sequelize, type) => {
  return sequelize.define('ingredient', {
    id: {
      type:          type.INTEGER,
      primaryKey:    true,
      autoIncrement: true
    },
    quantity: type.STRING,
    name:     type.STRING,
    order:    type.INTEGER
  })
}

const StepModel = (sequelize, type) => {
  return sequelize.define('step', {
    id: {
      type:          type.INTEGER,
      primaryKey:    true,
      autoIncrement: true
    },
    step:  type.TEXT,
    style: type.STRING,
    order: type.INTEGER
  })
}


module.exports = {
  RecipeModel,
  IngredientModel,
  StepModel
}
