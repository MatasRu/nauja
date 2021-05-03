const mongoose = require(`mongoose`)

const Schema = mongoose.Schema;
const carSchema = new Schema({
    wheels: {
        type: Number,
        required: true,
    },
    passengers: {
        type: Number,
        required: true,
    },
    bodyType: {
        type: String,
        required: true,
    },
    gasolineLeft: {
        type:Number,
        required: true
    },
    musicPlaying: {
        type: String,
        required: false,
    },
    color: {
        type:String,
        required: true
    }
})

const car = mongoose.model(`carModel`, carSchema)

module.exports = car



// create new schema CAR
// car should have:
// wheelsCount - typeL number, required: true
// passengers - type number, required true
// body type - type string, required true
// gasoline left - type number, required true
// music playing - type string, required false
// color - type string, required true

// create at least 5 different cars to database
// create function to find cards, by sending car color argument to function
