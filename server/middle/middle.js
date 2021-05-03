async function middleware (req, res, next){

    function errorMessage(message) {
        return res.send({error: true, message})
    }

    if (req.body.title.length < 10) {
        return errorMessage("Recipe Title is too short, it should be more then 10 characters")
    }
    if (req.body.title.length > 100) {
        return errorMessage("Recipe Title is too long, it should be less then 100 characters")
    }
    if (req.body.images.length < 1) {
        return errorMessage("Recipe should contain at least one photo")
    }
    if (req.body.ingredients.length < 1) {
        return errorMessage("Recipe should contain at least one ingredient")
    }
    if (req.body.preparation.length < 1) {
        return errorMessage("Recipe should contain at least one preparation method")
    }

    return next()
}

module.exports = middleware