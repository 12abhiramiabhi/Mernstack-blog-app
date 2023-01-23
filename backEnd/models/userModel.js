const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
        maxLength: 200
    },
    email: {
        type: String,
        maxLength: 200,
        required: [true, "you must enter email"],
        unique: true

    },
    password: {
        type: String,
        maxLength: 200,
        required: true
    },
    phonenumber: {
        required: true,
        type: String,
    }
})
module.exports = mongoose.model('user', userSchema);

