const userModel = require("../models/userModel")
const bcrypt = require('bcrypt');

const blog = (req, res) => {
    res.send("hai")
}

const login = async (req, res) => {
    console.log(req.body);//fron end//

    // console.log(user)

    try {
        let user = await userModel.findOne({ email: req.body.email })//data base user te object//

        if (user == null) {
            res.json({ sucess: false, message: "email validation error" })//user illegil null //
        } else {
            let pCorret = await bcrypt.compare(req.body.password, user.password)//encript cheythathum illathathum//
            if (pCorret) {
                res.json({ sucess: true, message: "successfully logedin" })//password  correct avubol succeesful//
            } else {
                res.json({ sucess: false, message: "password validation error" })//passwor thett avubol fales//
            }
        }
    } catch (error) {
        res.json({ sucess: false, message: "database validation error" })
        console.log(error);

    }

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

module.exports = { blog, userSignup, login }