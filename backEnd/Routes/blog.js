
const express = require("express")
const router = express.Router()
const { blog, userSignup } = require("../controllers/usercontrollers")



router.get("/", blog)
router.post("/userSignup", userSignup)



module.exports = router
