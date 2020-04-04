require('dotenv').config()

const { RecipeModel, IngredientModel, StepModel } = require('./models')

const { Sequelize } = require('sequelize')

let sequelize
if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize('recipes', { options: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS, 
    host:     process.env.DB_HOST,
    dialect: 'postgres'
  }})
} else {
  sequelize = new Sequelize({ dialect:  'sqlite', storage:  'devdb.sqlite'})
}

//const sequelize = new Sequelize('recipes', { options })

const Recipe     = RecipeModel(sequelize, Sequelize)
const Ingredient = IngredientModel(sequelize, Sequelize)
const Step       = StepModel(sequelize, Sequelize)

Recipe.hasMany(Ingredient)
Recipe.hasMany(Step)

/*
sequelize.authenticate()
.then(() => {
console.log('Database authenticated')
})
.catch(err => {
console.error('Error authenticating with database', err)
})

sequelize.sync({ force: true })
.then(() => {
console.log(`Database & tables created!`)
})
*/

module.exports = {
  Recipe,
  Ingredient,
  Step
}
