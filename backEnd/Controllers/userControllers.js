const userModel = require("../models/userModel")
const bcrypt = require('bcrypt');

const blog = (req, res) => {
    res.send("hai")
}


const userSignup = async (req, res) => {
    console.log(req.body);

    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)

        await userModel.create(req.body)
        res.json({ sucess: true, message: "sucessfully added signup" })

    } catch (error) {
        res.json({ sucess: false, message: "validation error" })
        console.log(error);

    }
}

module.exports = { blog, userSignup }