const mongoose = require(`mongoose`)

const Schema = mongoose.Schema;
const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    images: {
        type: Array,
        required: true,
    },
    ingredients: {
        type: Array,
        required: true,
    },
    preparation: {
        type:Array,
        required: true
    }
})

const recipe = mongoose.model(`recipeSchema`, recipeSchema)

module.exports = recipe

