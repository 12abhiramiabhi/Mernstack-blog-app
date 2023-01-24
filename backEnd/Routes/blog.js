
const express = require("express")
const router = express.Router()
const { blog, userSignup, login } = require("../controllers/usercontrollers")


router.get("/", blog)
router.post("/userSignup", userSignup)
router.post("/loginPage", login)


module.exports = router
