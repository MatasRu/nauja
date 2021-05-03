const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const mainRouter = require('./routes/router')
require('dotenv').config()

app.listen(3001)
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log('Connection was successful')
    })
    .catch(() => {
        console.log('Error while connecting to db')
    })


app.use(['/'], mainRouter)


// create page where users can upload food recipes
// each recipe object should have these keys:
// title (string), images(array), ingridients (array) (ingridient should be object, with value and quantity example - butter - 200g)
// preparation (array)
// when recipe uploaded it should be saved to database
// there should also be middlewere to validate lengths of title (min 10 max 100), images, ingridients, preparation (at least one)
// when front end and backend functionality working push everything to git hub