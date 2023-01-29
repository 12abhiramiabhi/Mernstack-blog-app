
const express = require("express")
const router = express.Router()
const { blog, userSignup, login ,blogAdding} = require("../controllers/usercontrollers")


router.get("/", blog)
router.post("/userSignup", userSignup)
router.post("/loginPage", login)
router.post("/blogAdding", blogAdding)

module.exports = router
