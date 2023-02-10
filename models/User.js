const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 255
    },
    apaterno:{
        type: String,
        required: true,
        max: 255
    },
    amaterno:{
        type: String,
        required: true,
        max: 255
    },
    email:{
        type: String,
        required: true,
        max: 255
    },
    password:{
        type: String,
        required: true,
        minlenght: 6,
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('User', userSchema)