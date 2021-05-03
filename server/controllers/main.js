const recipeDb = require('../schemas/recipeSchema')

module.exports = {
    createRecipe: (req, res) => {
        let recipe = new recipeDb
        recipe.title = req.body.title
        recipe.images = req.body.images
        recipe.ingredients = req.body.ingredients
        recipe.preparation = req.body.preparation
        recipe.save().then(() => {
            res.send({error: false, message: "Recipe created successfully"})
        }).catch(e => {
            res.send({error: true, message: "There was an error", mistake: e})
        })
    }
}