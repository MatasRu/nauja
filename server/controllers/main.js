
module.exports = {
    createUser: (req, res) => {
        let user = new userDb
        user.name = req.body.name
        user.age = req.body.age
        user.city = req.body.city
        user.gender = req.body.gender
        user.skin = req.body.skin
        user.save().then(() => {
            res.send({error: false, message: "User created successfully"})
            console.log(user)
        }).catch(e => {
            res.send({error: true, message: "There was an error", mistake: e})
        })
    },
    findUser: async (req, res) => {
        let user = await userDb.find({name: req.params.username})
        res.send({user})
        console.log(user)
    },
    updateUser: async (req) => {
        userDb.findOneAndUpdate(
            {_id: req.body.id},
            {name: req.body.userName},
            {returnOriginal: false})
            .then(user => {
                console.log(user)
            }).catch(e => {
            console.log(e)
        })

    }
}